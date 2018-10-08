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
    // -- Здесь все проверки --
    if(questNum == 1)
    {
      // Правильный ответ на первый вопрос
      document.getElementById("quest").innerHTML = "Губка Боб Квадратные Штаны - главный герой американского одноимённого мультипликационного сериала премьера которого состоялась 1 мая 1999 года на канале Никэлодэон.";
      // Соответствующая картинка
      document.getElementById("pic").src = "https://pp.userapi.com/c850436/v850436663/1c123/wjVxpDCnRqM.jpg";
      // Правильные слова
      compare = ["губка боб", "губка боб квадратные штаны", "спанч боб"];
    }
    else if(questNum == 2)
    {
      // 2
      //document.getElementById("quest").innerHTML = "";
      //document.getElementById("pic").src = "";
      //compare = ["", ""];
    }
    else if(questNum == 3)
    {
      // и так далее...
      //document.getElementById("quest").innerHTML = "Текст ответа";
      //document.getElementById("pic").src = "Ссылка на картинку с ответом";
      //compare = ["слово1", "слово2"]; // В нижнем регистре
    }
    // -- Конец questNum == 8 --

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
      document.getElementById("title").innerHTML = "Неправильно...";
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

    // -- Здесь подготовки всех вопросов
    if(questNum == 2)
    {
      document.getElementById("quest").innerHTML = "Из какого сериала взялся этот паренек?";
      document.getElementById("pic").src = "https://pp.userapi.com/c850436/v850436663/1c0b2/vfBX72RmZlg.jpg";
    }
    //else if(questNum == 3)
    //{
      // 3
      //  document.getElementById("quest").innerHTML = "Текст вопроса";
      // document.getElementById("pic").src = "Картинка для вопроса";
    //}
    //else if(questNum == 4)
    //{
      // до questNum = 8
    //}
    else
    {
      // Финал
      document.getElementById("title").innerHTML = "Результат";
      document.getElementById("quest").innerHTML = "Правильно: " + 100*(rightAns/8) + "%";
      document.getElementById("pic").src = "";
      //document.getElementById("answer").display = "none";
      //document.getElementById("but").display = "none";
    }
  }
}
