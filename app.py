from flask import Flask, render_template ,  jsonify
import requests

from bs4 import BeautifulSoup

app = Flask(__name__)

def scrape_data():
    url = 'https://www.lukoil.ge/'  # Replace with the URL of the webpage you want to scrape
    response = requests.get(url, verify=False)
    soup = BeautifulSoup(response.text, 'html.parser')

    zoro_elements = soup.find_all(class_='mt-4 w-full h-2/5 flex justify-center items-center text-xl text-lk-main flex-col')
    data = []
    for element in zoro_elements:
            children = element.find_all(['p', 'span'])
            # Extract text from paragraph and span tags
            children_text = [child.get_text(strip=True) for child in children]
            data.append(children_text)
    return data
  
    

def scrape_data2():
    url = 'https://www.rompetrol.ge/'  # Replace with the URL of the webpage you want to scrape
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

  
    tr = [tr.get_text() for tr in soup.find_all('tr')]
   
    return tr

def scrape_data3():
    url = 'https://gulf.ge/'  # Replace with the URL of the webpage you want to scrape/აქ ვიღებ მისმართს
    response = requests.get(url, verify=False) # ვერიფი ფალს ჭირდება ზოგ საიტს , ისე არ მოაქ სერტიფიკატს გტხოვს
    soup = BeautifulSoup(response.text, 'html.parser')

    zoro_elements = soup.find_all(class_='price_entry') # ეს არის კლასის მიხედვით ძებნა, მარტო ამ კლასის ქვეშ მყოფებს ამოიღებს
    data = [] # აქ ვყრი ელმენტებს ქვემოთ , სასურველი კალსის(დივის) შვილობილ ელემნტბს ვეძებ, 
    for element in zoro_elements: 
            children = element.find_all(['p', 'span','div'])# აქ თუ გინდა მთლიანი მასივი წაშლე მაინც ეძებს ელემენტბს
            # Extract text from paragraph and span tags
            children_text = [child.get_text(strip=True) for child in children]
            data.append(children_text)
    return data

def scrape_data4():
    url = 'https://www.sgp.ge/ge/'  # Replace with the URL of the webpage you want to scrape
    response = requests.get(url, verify=False)
    soup = BeautifulSoup(response.text, 'html.parser')

    zoro_elements = soup.find_all(class_='col-md-6') # ეს არის კლასის მიხედვით ძებნა, მარტო ამ კლასის ქვეშ მყოფებს ამოიღებს
    data = [] # აქ ვყრი ელმენტებს ქვემოთ , სასურველი კალსის(დივის) შვილობილ ელემნტბს ვეძებ, 
    for element in zoro_elements: 
            children = element.find_all(['span,','div'], class_='progress-percent' )# აქ თუ გინდა მთლიანი მასივი წაშლე მაინც ეძებს ელემენტბს
           
                # Extract text from paragraph and span tags
            children_text = [child.get_text(strip=True) for child in children]
            data.append(children_text)
    return data

def scrape_data5():
    url = 'https://portal.com.ge/georgian/home'  # Replace with the URL of the webpage you want to scrape/აქ ვიღებ მისმართს
    response = requests.get(url, verify=False) # ვერიფი ფალს ჭირდება ზოგ საიტს , ისე არ მოაქ სერტიფიკატს გტხოვს
    soup = BeautifulSoup(response.text, 'html.parser')

    zoro_elements = soup.find_all(class_='fuel_table') # ეს არის კლასის მიხედვით ძებნა, მარტო ამ კლასის ქვეშ მყოფებს ამოიღებს
    
    data = [] # აქ ვყრი ელმენტებს ქვემოთ , სასურველი კალსის(დივის) შვილობილ ელემნტბს ვეძებ, 
    for element in zoro_elements: 
            children = element.find_all(['p', 'span','div'])# აქ თუ გინდა მთლიანი მასივი წაშლე მაინც ეძებს ელემენტბს
            # Extract text from paragraph and span tags
            children_text = [child.get_text(strip=True) for child in children]
            data.append(children_text)
    return data

def scrape_data6():
    url = 'http://optimapetrol.ge/'  # Replace with the URL of the webpage you want to scrape/აქ ვიღებ მისმართს
    response = requests.get(url, verify=False) # ვერიფი ფალს ჭირდება ზოგ საიტს , ისე არ მოაქ სერტიფიკატს გტხოვს
    soup = BeautifulSoup(response.text, 'html.parser')

    zoro_elements = soup.find_all(class_='col-xl-3 col-md-6 col-12') # ეს არის კლასის მიხედვით ძებნა, მარტო ამ კლასის ქვეშ მყოფებს ამოიღებს
    
    data = [] # აქ ვყრი ელმენტებს ქვემოთ , სასურველი კალსის(დივის) შვილობილ ელემნტბს ვეძებ, 
    for element in zoro_elements: 
            children = element.find_all(['p', 'h2' 'span','div'])# აქ თუ გინდა მთლიანი მასივი წაშლე მაინც ეძებს ელემენტბს
            # Extract text from paragraph and span tags
            children_text = [child.get_text(strip=True) for child in children]
            data.append(children_text)
    return data


   



@app.route('/')
def index():
    
    tr =  scrape_data2() # ეს დატა რომპეტროლიდან
    paragraphs = scrape_data() # ეს დატა მოდის  ლუკოლიდან

    gulfdatas =  scrape_data3() # ეს დატა რომპეტროლიდან
    socardatas=scrape_data4()
    portaldatas=scrape_data5()
    optimasdata=scrape_data6()
   
    print(tr[0],'esa')
   
 
    
   
   
    

    return render_template('index.html', tr=tr, paragraphs=paragraphs , gulfdatas=gulfdatas, socardatas=socardatas, portaldatas=portaldatas, optimasdata=optimasdata)

if __name__ == '__main__':
    app.run(debug=True)
