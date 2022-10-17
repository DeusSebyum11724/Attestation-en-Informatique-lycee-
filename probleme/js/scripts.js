var pos = 0, test, test_status, question;

var questions = [{ 
    //1
    question: 
    "<div class='bg-light rounded mt-3'>\n\
    <p class='lead'><b>1. Scrieti o functie recursiva cu numele cifre care primeste prin parametrul n un numar natural si furnizeaza: </b><br>\n\
    - prin parametrul p numarul format cu cifrele pare ale lui n,<br>\n\
    - prin parametrul i numarul format cu cifrele impare ale lui n.<br>\n\
    <br>\n\
    <b>Exemplu:</b><br>\n\
    In urma apelului cifre(4536597,p,i); variabila p va fi egala cu 46, iar i cu 53597.</p>\n\
    <a class='btn btn-lg btn-success' href='rezolvari/rezolvare_1.txt' role='button' target='blank'>Rezolvare</a>"
  },
    
    {//2
      question: 
      "<div class='bg-light rounded mt-3'>\n\
      <p class='lead'><b>2. Sa se scrie o functie recursiva care calculeaza si returneaza diferenta dintre suma elementelor pare si cea a celor impare dintr-un vector A primit ca parametru impreuna cu n reprezentand numarul lui de elemente. Elementele tabloului sunt indexate de la 1. </b><br>\n\
      <br>\n\
      <b>Exemplu:</b><br>\n\
      Daca functia primeste tabloul A={4,5,6,3,2,9} cu n=6, atunci va returna -5 adica (4+6+2)-(5+3+9).</p>\n\
      <a class='btn btn-lg btn-success' href='rezolvari/rezolvare_2.txt' role='button' target='blank'>Rezolvare</a>"
  },
{//3
      question: 
      "<div class='bg-light rounded mt-3'>\n\
      <p class='lead'><b>3. Scrieti o functie recursiva care primeste ca paramentru un numar natural n si returneaza numarul obtinut din n prin eliminarea cifrelor impare.</b><br>\n\
      <br>\n\
      <b>Exemplu:</b><br>\n\
      Daca n=234435, functia returneaza 244.</p>\n\
      <a class='btn btn-lg btn-success' href='rezolvari/rezolvare_3.txt' role='button' target='blank'>Rezolvare</a>"
  },
  {//4
    question: 
      "<div class='bg-light rounded mt-3'>\n\
      <p class='lead'><b>4. Se citeste un numar natural n cu cel mult 9 cifre. Afisati numarul de cifre distincte ale lui n. Se vor folosi exclusiv subprograme recursive. </b><br>\n\
      <br>\n\
      <b>Exemplu:</b><br>\n\
      Pentru n=38837 se afiseaza 3 (cifrele distincte sunt 3,7 si 8).</p>\n\
      <a class='btn btn-lg btn-success' href='rezolvari/rezolvare_4.txt' role='button' target='blank'>Rezolvare</a>"
  }
];

function get(x) {
  return document.getElementById(x);
}

function renderQuestion() {
  test = get("test");
  if (pos >= questions.length) {
    return false;
  }
  question = questions[pos].question;
  test.innerHTML = "<h6>" + question + "</h6>";
  if (pos+1 < questions.length)
  {
    test.innerHTML += "<a class='btn btn-lg btn-primary'<button onclick='nextquestion()'>Urmatoarea Problema</button></a>";
  }

  
}

function nextquestion() {

  pos++;

  renderQuestion();
}

window.addEventListener("load", renderQuestion);