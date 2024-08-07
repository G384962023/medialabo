let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう


/*console.log(data.coord.lon);
console.log(data.coord.lat);
console.log(data.weather[0].description);
console.log(data.main.temp_min);
console.log(data.main.temp_max);
console.log(data.main.humidity);
console.log(data.wind.speed);
console.log(data.wind.deg);
console.log(data.name);
*/

//print(data);



let div = document.querySelector('div#result');
let h1 = document.createElement('h1');
h1.textContent = "世界の天気";
h1.style.fontSize='40px';
h1.style.color = 'blue';
h1.style.backgroundColor = '#99FFFF';
div.insertAdjacentElement('beforeend', h1);
let h2 = document.createElement('h2');
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let li4 = document.createElement('li');
let li5 = document.createElement('li');
let li6 = document.createElement('li');
let li7 = document.createElement('li');
let li8 = document.createElement('li');
let li9 = document.createElement('li');

let b = document.querySelector('button#print');
b.addEventListener('click' , sendRequest);

function sendRequest() {
  let s = document.querySelector('select#tenki');
  let idx = s.selectedIndex;
  let o = s.querySelectorAll('option');
  let R = o.item(idx);
  let a = R.getAttribute('value')
  let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/" + a + ".json"


  axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish);      // 通信の最後の処理
}

function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }

  h2.textContent = "検索結果1件";
  h2.style.fontSize='30px';
  div.insertAdjacentElement('beforeend', h2);
  li1.textContent = "緯度:" + data.coord.lon;
  li1.style.color = '#808080';
  div.insertAdjacentElement('beforeend', li1);
  li2.textContent = "経度:" + data.coord.lat;
  li2.style.color = '#808080';
  div.insertAdjacentElement('beforeend', li2);
  li3.textContent = "天気:" + data.weather[0].description;
  li3.style.color = '#808080';
  div.insertAdjacentElement('beforeend', li3);
  li4.textContent = "最低気温:" + data.main.temp_min;
  li4.style.color = '#808080';
  div.insertAdjacentElement('beforeend', li4);
  li5.textContent = "最高気温:" + data.main.temp_max;
  li5.style.color = '#808080';
  div.insertAdjacentElement('beforeend', li5);
  li6.textContent = "湿度:" + data.main.humidity;
  li6.style.color = '#808080';
  div.insertAdjacentElement('beforeend', li6);
  li7.textContent = "風速:" + data.wind.speed;
  li7.style.color = '#808080';
  div.insertAdjacentElement('beforeend', li7);
  li8.textContent = "風向:" + data.wind.deg;
  li8.s8tyle.color = '#808080';
  div.insertAdjacentElement('beforeend', li8);
  li9.textContent = "都市名:" + data.name;
  li9.style.color = '#808080';
  div.insertAdjacentElement('beforeend', li9);
}

// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}