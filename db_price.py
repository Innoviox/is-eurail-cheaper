from selenium import webdriver
from selenium.webdriver.common.by import By
import time
from datetime import datetime

def extract_data(result):
    dauer = result.find_element(By.CLASS_NAME, "dauer-umstieg__dauer")
    preis = result.find_element(By.CLASS_NAME, "reise-preis__preis")

    return {"duration": dauer.text, "price": preis.text}

def get_db_price(from_, to_, date): # todo datetime input
    driver = webdriver.Chrome()
    driver.get("https://www.bahn.de/angebot")

    # todo cookies popup?

    # driver.implicitly_wait(1) # todo wait until element shows up
    input()
    von = driver.find_element(By.XPATH, "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[1]/div/div/div[1]/span/div[1]/input")
    nach = driver.find_element(By.XPATH, "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[1]/div/div/div[3]/span/div[1]/input")

    von.click()
    von.send_keys(f"{from_}\t")
    nach.send_keys(f"{to_}\t")

    hinfahrt = driver.find_element(By.XPATH, "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[2]/div[1]/div/div/div/div[1]/div[1]/div/div/div/div/div[1]/h2")
    hinfahrt.click()

    input() # todo wait until popup

    # todo click date & type in
    datum = driver.find_element(By.XPATH, "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[2]/div[1]/div/div/div/div[1]/div[1]/div/div[2]/div[3]/div/div/div/div[2]/div/div[2]/div[1]/div[1]/div/label/input")
    datum.click()
    
    input() # todo wait
    
    datum.send_keys(date.strftime("%d.%m.%Y"))

    minus = driver.find_element(By.XPATH, "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[2]/div[1]/div/div/div/div[1]/div[1]/div/div[2]/div[3]/div/div/div/div[2]/div/div[2]/div[2]/div/button[1]/span/span[2]")
    plus = driver.find_element(By.XPATH, "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[2]/div[1]/div/div/div/div[1]/div[1]/div/div[2]/div[3]/div/div/div/div[2]/div/div[2]/div[2]/div/button[2]/span/span[2]")

    current_hour = datetime.now().hour
    if current_hour < 9:
        for i in range(9 - current_hour):
            plus.click()
            driver.implicitly_wait(0.1)
    else:
        for i in range(current_hour - 9):
            minus.click()
            driver.implicitly_wait(0.1)

    uebernehmen = driver.find_element(By.XPATH, "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[2]/div[1]/div/div/div/div[1]/div[1]/div/div[2]/div[3]/div/div/div/div[3]/div/button")
    uebernehmen.click()

    input() # todo wait until stations are loaded

    suchen = driver.find_element(By.XPATH, "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[1]/div/button[2]/span/span")
    suchen.click()

    input() # todo load

    loesungen = driver.find_elements(By.CLASS_NAME, "verbindung-list__result-item")

    return [extract_data(loesung) for loesung in loesungen]
