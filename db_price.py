from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import time
from datetime import datetime, timedelta

def extract_data(result):
    dauer = result.find_element(By.CLASS_NAME, "dauer-umstieg__dauer")
    preis = result.find_element(By.CLASS_NAME, "reise-preis__preis")

    return {"duration": dauer.text, "price": preis.text}

def wait_for(driver, xpath, max_time=10, by=By.XPATH, criterion=EC.element_to_be_clickable):
    wait = WebDriverWait(driver, max_time)
    element = wait.until(criterion((by, xpath)))
    return element

def slow_type(el, txt, dt=0.1):
    for i in txt:
        el.send_keys(i)
        time.sleep(dt)

VON = "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[1]/div/div/div[1]/span/div[1]/input"
NACH = "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[1]/div/div/div[3]/span/div[1]/input"
HINFAHRT = "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[2]/div[1]/div/div/div/div[1]/div[1]/div/div/div/div/div[1]/h2"
DATUM = "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[2]/div[1]/div/div/div/div[1]/div[1]/div/div[2]/div[3]/div/div/div/div[2]/div/div[2]/div[1]/div[1]/div/label/input"
MINUS = "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[2]/div[1]/div/div/div/div[1]/div[1]/div/div[2]/div[3]/div/div/div/div[2]/div/div[2]/div[2]/div/button[1]/span/span[2]"
PLUS = "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[2]/div[1]/div/div/div/div[1]/div[1]/div/div[2]/div[3]/div/div/div/div[2]/div/div[2]/div[2]/div/button[2]/span/span[2]"
UEBERNEHMEN = "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[2]/div[1]/div/div/div/div[1]/div[1]/div/div[2]/div[3]/div/div/div/div[3]/div/button"
SUCHEN = "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[1]/div/button[2]/span/span"

def get_db_price(from_, to_, date): # todo datetime input
    driver = webdriver.Chrome()
    driver.get("https://www.bahn.de/angebot")

    time.sleep(2)

    driver.execute_script("""
    var e = document.children[0].children[1].children[0];
    if (e !== undefined && e.style['height'] === '100%') {
        e.remove();
    }
    """)

    time.sleep(1)
    
    von = wait_for(driver, VON)
    nach = driver.find_element(By.XPATH, NACH)

    von.click()
    slow_type(von, f"{from_}")
    time.sleep(1)

    nach.click()
    slow_type(nach, f"{to_}")
    time.sleep(1) # give some buffer to load stations

    hinfahrt = driver.find_element(By.XPATH, HINFAHRT)
    hinfahrt.click()

    time.sleep(1)

    # todo click date & type in
    datum = wait_for(driver, DATUM, criterion=EC.presence_of_element_located)
    datum.click()
    time.sleep(0.1)
    slow_type(datum, date.strftime("%d%m%Y\n"))

    minus = driver.find_element(By.XPATH, MINUS)
    plus = driver.find_element(By.XPATH, PLUS)

    # this might be right idrc
    # todo account for date
    current_hour = datetime.now().hour
    if current_hour < 9:
        for i in range(9 - current_hour):
            plus.click()
            time.sleep(0.1)
    else:
        for i in range(current_hour - 9):
            minus.click()
            time.sleep(0.1)

    uebernehmen = driver.find_element(By.XPATH, UEBERNEHMEN)
    uebernehmen.click()

    suchen = wait_for(driver, SUCHEN)
    suchen.click()

    loesungen = wait_for(driver, "reiseloesung-list-page__verbindung-list", by=By.CLASS_NAME, criterion=EC.presence_of_element_located)
    return [extract_data(loesung) for loesung in loesungen.find_elements(By.CLASS_NAME, "verbindung-list__result-item")]

if __name__ == "__main__":
    print(get_db_price("Munich", "Hamburg", datetime.now() + timedelta(weeks=4)))
