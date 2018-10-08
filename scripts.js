var qusetNum = 1;

ut.onclick = function()
{
  var btn_text = document.getElementById("but").innerHTML;
  if(btn_text == "Проверить »")
  {
    document.getElementById("answer").contentEditable = false;
    var ans = document.getElementById("answer").innerHTML;
    if(ans == "asd")
    {
      document.getElementById("title").innerHTML = "Правильно!";
      document.getElementById("answer").classList.add("ansRight");
    }
    else
    {
      document.getElementById("title").innerHTML = "Не правильно...";
      document.getElementById("answer").classList.add("ansWrong");
    }

    document.getElementById("quest").innerHTML  = "Ответ";
    document.getElementById("pic").src  = "https://citaty.info/files/characters/25972.jpg";
	  document.getElementById("but").innerHTML = "Дальше »";
  }
  else
  {
    qusetNum++;
    document.getElementById("answer").contentEditable = true;
    document.getElementById("answer").innerHTML = "";


  }
}
