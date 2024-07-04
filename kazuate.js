// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);
let result;
// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let a = document.querySelector('button#print');
a.addEventListener('click', hantei);
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  kaisu = kaisu + 1;

  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="shimei"]');
  let shimei = i.value;
  let n  = Number(yoso);
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  console.log(kaisu + '回目の予想: ' + yoso);
  if(kaisu >= 4){
    result = "答えは "+ kotae + "でした．すでにゲームは終わっています";
  } else {
    if(n === kotae){
      result = "正解です. おめでとう!";
    }
    else if (n > kotae){
      result ="まちがい. 答えはもっと小さいですよ";
    }
    else {
      result = "まちがい. 答えはもっと大きいですよ";
    }
  }
  let kaisu1 = document.querySelector('span#kaisu');
  kaisu1.textContent = kaisu;
  let anser = document.querySelector('span#answer');
  anser.textContent = n;
  let result1 = document.querySelector('p#result');
  result1.textContent = result;
}