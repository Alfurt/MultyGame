but.onclick = function()
{
  var btn_text = document.getElementById("but").innerHTML;
  if(btn_text == "Проверить »")
  {
    document.getElementById("answer").contentEditable = false;
    var ans = document.getElementById("answer").innerHTML;
    if(ans == "asd") document.getElementById("title").innerHTML = "Правильно!";
    else document.getElementById("title").innerHTML = "Не правильно...";

    document.getElementById("quest").innerHTML  = "Ответ";
    document.getElementById("pic").src  = "https://citaty.info/files/characters/25972.jpg";
	document.getElementById("but").innerHTML = "Дальше »";
  }
}
