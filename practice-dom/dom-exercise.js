//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let p1 = document.querySelector('h2#ex42');

let p2 = document.createElement('p');

p2.textContent = '写真表と都市の緯度軽度のページです';

p2.style.textEmphasis= 'sesame green';

p1.insertAdjacentElement('afterend', p2);
// 練習4-3 写真表作成プログラム

let img = document.createElement('img');

img.setAttribute('src' , 'taro.png');

let photo =document.createElement('photo');

photo.insertAdjacentElement('beforeend', img);

let div = document.querySelector('div#phototable');
div.insertAdjacentElement('beforeend', photo);

let img2 = document.createElement('img');

img2.setAttribute('src' , 'jiro.png');

let photo2 =document.createElement('photo');

photo2.insertAdjacentElement('beforeend', img2);

let div2 = document.querySelector('div#phototable');
div2.insertAdjacentElement('beforeend', photo2);

let img3 = document.createElement('img');

img3.setAttribute('src' , 'taro.png');

let photo3 =document.createElement('photo');

photo.insertAdjacentElement('beforeend', img3);

let div3 = document.querySelector('div#phototable');
div3.insertAdjacentElement('beforeend', photo3);

// 練習4-4 箇条書き削除プログラム


// 練習4-5 箇条書き追加プログラム

