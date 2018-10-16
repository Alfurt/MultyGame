var questNum = 0;
var rightAns = 0;

but.onclick = function()
{
  var btn_text = document.getElementById("but").innerHTML;
  if(btn_text == "Начать")
  {
        document.getElementById("answer").style.visibility = 'visible';
        btn_text = "Дальше »";
  }

  if(btn_text == "Проверить »")
  {
    var ans = document.getElementById("answer").innerHTML.toLowerCase();
    if(ans.trim() == '')
    {
      document.getElementById("answer").focus();
      return;
    }
    document.getElementById("answer").contentEditable = false;
    document.getElementById("but").innerHTML = "Дальше »";

    var compare;
    // -- Здесь ответы --
    if(questNum == 1)
    {
      document.getElementById("quest").innerHTML = "Губка Боб Квадратные Штаны - главный герой американского одноимённого мультипликационного сериала премьера которого состоялась 1 мая 1999 года на канале Никэлодэон.";
      document.getElementById("pic").src = "https://pp.userapi.com/c850436/v850436663/1c123/wjVxpDCnRqM.jpg";
      compare = ["губка боб", "губка боб квадратные штаны", "спанч боб"];
    }
    else if(questNum == 2)
    {
      document.getElementById("quest").innerHTML = "Улитка — пасхальный персонаж, спрятанный в каждом эпизоде сериала 'Время Приключений'. Она появляется улыбающейся и машущей рукой в некоторых сценах, а позже исчезает. Нигде от неё ничего не зависит, кроме эпизода 'Роковая оплошность', где Лич захватывает улитку, чтобы разрушить янтарную тюрьму.";
      document.getElementById("pic").src = "https://i.pinimg.com/736x/42/fd/a4/42fda4156e031f77130d130f6b94a586--finn-the-human-snails.jpg";
      compare = ["время приключений", "адвэнча тайм", "adventure time"];
    }
    else if(questNum == 3)
    {
      document.getElementById("quest").innerHTML = "Мэйсон 'Диппер' Пайнс —  один из главных героев мультсериала 'Гравити Фолз', брат-близнец Мэйбл Пайнс. Прототипом послужил сам Алекс Хирш в детстве и его одноклассник. По словам режиссёра, у того парня были ужасные прыщи, которые напоминали, например, созвездие Орион, а позже — Большой ковш (англ. Big dipper) из созвездия Большой Медведицы. На лбу Диппера Пайнса есть родимое пятно как раз в виде Ковша Большой Медведицы.";
      document.getElementById("pic").src = "https://pp.userapi.com/c850436/v850436663/1c04b/Ss7KVzm6pZQ.jpg";
      compare = ["родинка", "родинку", "родимое пятно", "ковш", "большой ковш", "ковш большой медведицы"];
    }
    else if(questNum == 4)
    {
      document.getElementById("quest").innerHTML = "Сериал начинается с того, что разносчик пиццы из Нью-Йорка Филипп Дж. Фрай случайно (как это произошло на самом деле, раскроется в 10 эпизоде 4-го сезона 'Загадка Фрая') был заморожен в криогенной камере ровно в 00 часов 00 минут 00 секунд 1 января 2000 года и разморожен 999 лет и 364 дня спустя — 31 декабря 2999 года. Фрай оказывается в далёком будущем в городе Новый Нью-Йорк.";
      document.getElementById("pic").src = "https://pp.userapi.com/c850436/v850436663/1c072/cXxte10yMXU.jpg";
      compare = ["2000", "две тысячи", "двухтысячный"];
    }
    else if(questNum == 5)
    {
      document.getElementById("quest").innerHTML = "Это незаменимая вещь в каждом доме. Наличие в производстве флипового сока говорит само за себя. Ни для кого не секрет, что теребление Шлами во время производства это инновационный подход к созданию данного продукта, а технология повторного использования шлиима это рационально и современно, учитывая ситуацию с экологией... О производстве плюмбусов подробно рассказывается в сериале 'Рик и Морти'.";
      document.getElementById("pic").src = "https://pp.userapi.com/c850436/v850436401/1c7af/tahCb34Gfpw.jpg";
      compare = ["плюмбус"];
    }
    else if(questNum == 6)
    {
      document.getElementById("quest").innerHTML = "Лиза очень любит музыку. Часто она играет на саксофоне. Предпочитает джазовые импровизации. Использует трость № 4.5, которая является очень «тяжёлой», то есть для звукоизвлечения нужно прилагать изрядные усилия. Также она немного играет на других инструментах: органе, фортепиано, гитаре, скрипке и бас-гитаре, аккордеоне, различных фольклорных духовых инструментах.";
      document.getElementById("pic").src = "https://pp.userapi.com/c850436/v850436401/1c7a8/a0TjlejdHmg.jpg";
      compare = ["саксофон", "на саксофоне"];
    }
    else if(questNum == 7)
    {
      document.getElementById("quest").innerHTML = "Руперт - небольшой плюшевый медвежонок и любимая игрушка Стьюи, одного из главных персонажей сериала 'Гриффины'. Стьюи всегда советуется с Рупертом, делится планами, жалуется на жизнь и вообще относится к нему как к живому.";
      document.getElementById("pic").src = "http://digitalspyuk.cdnds.net/18/03/768x384/landscape-1516023233-family-guy-season-10-episode-4-8-c042.jpg";
      compare = ["руперт", "руперт гриффин"];
    }
    else if(questNum == 8)
    {
      document.getElementById("quest").innerHTML = "Элфо - один из главных героев сериала 'Разочарование'. Это маленький добрый эльф, который сбегает из своей родной страны эльфов, так как хочет познать «человеческое несчастье». Хороший друг Бин (королевы Дримландии), старается оберегать ее от бед или от вредных советов Люци. Тайно влюблен в нее, но она не отвечает ему взаимностью.";
      document.getElementById("pic").src = "https://i.pinimg.com/236x/2e/f6/34/2ef6344883c963437ac46ef3812a1f11.jpg";
      compare = ["в принцессу", "в бин", "в принцессу бин", "в тиабини", "в принцессу бин", "бин", "тиабини", "в принцессу дримландии"];
    }
    // -- Конец ответов --

    // Проверка ответа
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
    // Конец проверки
  }
  else if(btn_text == "Дальше »")
  {
    // Переход на следующий вопрос
    questNum++;
    document.getElementById("title").innerHTML = "Вопрос #"+questNum;
    document.getElementById("answer").contentEditable = true;
    document.getElementById("answer").innerHTML = "";
    document.getElementById("answer").classList.remove("ansRight");
    document.getElementById("answer").classList.remove("ansWrong");
    document.getElementById("but").innerHTML = "Проверить »";
    document.getElementById("but").classList.remove("btnRight");
    document.getElementById("but").classList.remove("btnWrong");
    document.getElementById("answer").focus();

    // -- Здесь все вопросы
    if(questNum == 1)
    {
      document.getElementById("quest").innerHTML = "Кто проживает на дне океана?"
      document.getElementById("pic").src = "https://pp.userapi.com/c850436/v850436663/1c03d/9WFyuHTMhO0.jpg";
    }
    else if(questNum == 2)
    {
      document.getElementById("quest").innerHTML = "Из какого сериала взялся этот паренек?";
      document.getElementById("pic").src = "https://pp.userapi.com/c850436/v850436663/1c0b2/vfBX72RmZlg.jpg";
    }
    else if(questNum == 3)
      {
        document.getElementById("quest").innerHTML = "Что этот парень скрывает под своей кепкой?";
        document.getElementById("pic").src = "https://pp.userapi.com/c850436/v850436663/1c044/EFE2JNI2O9c.jpg";
      }
      else if(questNum == 4)
        {
          document.getElementById("quest").innerHTML = "Какой по счету год встречает этот персонаж?";
          document.getElementById("pic").src = "https://i.imgur.com/c1pCK2Kh.jpg";
        }
        else if(questNum == 5)
          {
            document.getElementById("quest").innerHTML = "Может вы знаете, как называется это приспособление?";
            document.getElementById("pic").src = "http://pm1.narvii.com/6784/02b59a6d22217e383f9e0e8562013aee0b85a758v2_00.jpg";
          }
          else if(questNum == 6)
            {
              document.getElementById("quest").innerHTML = "Вы наверняка знаете Лизу Симпсон. Но помните ли Вы, на каком инструменте она играет?";
              document.getElementById("pic").src = "https://pp.userapi.com/c850436/v850436401/1c7fd/83S0923ixe4.jpg";
            }
            else if(questNum == 7)
              {
                document.getElementById("quest").innerHTML = "Как зовут этого мишку?";
                document.getElementById("pic").src = "https://pp.userapi.com/c851236/v851236054/26dce/ymHfgdrT414.jpg";
              }
              else if(questNum == 8)
                {
                  document.getElementById("quest").innerHTML = "В кого влюблен этот персонаж?";
                  document.getElementById("pic").src = "http://sci-fi-news.ru/wp-content/uploads/2018/08/Elfo-in-Disenchantment.jpg";
                }
                // Конец вопросов
    else
    {
      // Финал
      document.getElementById("title").innerHTML = "Результат";
      document.getElementById("quest").innerHTML = "Правильно: " + 100*(rightAns/8) + "%";
      document.getElementById("pic").src = "http://www.reactiongifs.com/r/wvy1.gif";

      document.getElementById("answer").style.visibility = 'hidden';
      document.getElementById("but").innerHTML = "Попробовать еще раз";
    }
  }
  else if(btn_text == "Попробовать еще раз")
  {
    // Перезапуск
    location.reload();
  }
}
