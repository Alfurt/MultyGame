var questNum = 1;
var rightAns = 0;

but.onclick = function()
{
  var btn_text = document.getElementById("but").innerHTML;
  if(btn_text == "Проверить »")
  {
    document.getElementById("answer").contentEditable = false;
    document.getElementById("but").innerHTML = "Дальше »";
    var ans = document.getElementById("answer").innerHTML.toLowerCase();

    var compare;
    if(questNum == 1)
    {
      // Правильный ответ на первый вопрос
      document.getElementById("quest").innerHTML  = "Ответ";
      // Соответствующая картинка
      document.getElementById("pic").src  = "https://citaty.info/files/characters/25972.jpg";
      // Правильные слова
      compare = ["asd", "sss", "fff"];
    }
    else if(questNum == 2)
    {
      // 2
    }

    var b = false;
    for(var i in compare)
    {
      if(ans == compare[i]) b = true;
    }

    if(b)
    {
      document.getElementById("title").innerHTML = "Правильно!";
      document.getElementById("answer").classList.add("ansRight");
      document.getElementById("but").classList.add("btnRight");
      rightAns++;
    }
    else
    {
      document.getElementById("title").innerHTML = "Не правильно...";
      document.getElementById("answer").classList.add("ansWrong");
      document.getElementById("but").classList.add("btnWrong");
    }
  }
  else
  {
    questNum++;
    document.getElementById("title").innerHTML = "Вопрос #"+questNum;
    document.getElementById("answer").contentEditable = true;
    document.getElementById("answer").innerHTML = "";
    document.getElementById("answer").classList.remove("ansRight");
    document.getElementById("answer").classList.remove("ansWrong");
    document.getElementById("but").innerHTML = "Проверить »";
    document.getElementById("but").classList.remove("btnRight");
    document.getElementById("but").classList.remove("btnWrong");

    if(questNum = 2)
    {
      document.getElementById("quest").innerHTML  = "Ответ";
      document.getElementById("pic").src  = "https://citaty.info/files/characters/25972.jpg";

    }
  }
}
