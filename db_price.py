from selenium import webdriver
from selenium.webdriver.common.by import By
import time
from datetime import datetime

driver = webdriver.Chrome()
driver.get("https://www.bahn.de/angebot")

# todo cookies popup?

# driver.implicitly_wait(1) # todo wait until element shows up
input()
von = driver.find_element(By.XPATH, "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[1]/div/div/div[1]/span/div[1]/input")
nach = driver.find_element(By.XPATH, "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[1]/div/div/div[3]/span/div[1]/input")

von.click()
von.send_keys("Munich\t")
nach.send_keys("Hamburg\t")

hinfahrt = driver.find_element(By.XPATH, "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[2]/div[1]/div/div/div/div[1]/div[1]/div/div/div/div/div[1]/h2")
hinfahrt.click()

input() # todo wait until popup

# todo click date & type in
monat = driver.find_element(By.XPATH, "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[2]/div[1]/div/div/div/div[1]/div[1]/div/div[2]/div[3]/div/div/div/div[2]/div/div[2]/div[1]/div[1]/button[2]/span/span[1]")
monat.click() # 1 month out

input() # today wait until month?

tag = driver.find_element(By.XPATH, "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[2]/div[1]/div/div/div/div[1]/div[1]/div/div[2]/div[3]/div/div/div/div[2]/div/div[2]/div[1]/div[2]/div/div/div[14]/div/div[17]/span")
tag.click()

input() # todo wait until clicked

minus = driver.find_element(By.XPATH, "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[2]/div[1]/div/div/div/div[1]/div[1]/div/div[2]/div[3]/div/div/div/div[2]/div/div[2]/div[2]/div/button[1]/span/span[2]")
plus = driver.find_element(By.XPATH, "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[2]/div[1]/div/div/div/div[1]/div[1]/div/div[2]/div[3]/div/div/div/div[2]/div/div[2]/div[2]/div/button[2]/span/span[2]")

current_hour = datetime.now().hour
if current_hour < 9:
    for i in range(9 - current_hour):
        plus.click()
        time.sleep(0.1)
else:
    for i in range(current_hour - 9):
        minus.click()
        time.sleep(0.1) # todo implicit wait

uebernehmen = driver.find_element(By.XPATH, "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[2]/div[1]/div/div/div/div[1]/div[1]/div/div[2]/div[3]/div/div/div/div[3]/div/button")
uebernehmen.click()

input() # todo wait until stations are loaded

suchen = driver.find_element(By.XPATH, "/html/body/div[1]/div[2]/div/div/div/div[1]/form/span/div[1]/div/button[2]/span/span")
suchen.click()

input()

def extract_data(result):
    dauer = result.find_element(By.CLASS_NAME, "dauer-umstieg__dauer")
    preis = result.find_element(By.CLASS_NAME, "reise-preis__preis")

    return {"duration": dauer.text, "price": preis.text}

loesungen = driver.find_elements(By.CLASS_NAME, "verbindung-list__result-item")

for loesung in loesungen: #.find_elements(By.TAG_NAME, "li"):
    print(extract_data(loesung))
