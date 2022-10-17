var pos = 0,
  test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;

var questions = [{ 
    //1
    question: "Subprogramele f1 si f2 sunt definite mai jos. Indicati valoarea f2(41382).",
    a: "7",
    b: "8",
    c: "9",
    d: "10",
    answer: "B",
    //Add property to hold image source uri, either local or online
    img: "assets/g1.png"},
    
    {//2
    question: "Se considera subprogramele f si g definite mai jos. <br> \n\
    Indicati o multime de valori posibile pentru variabila intreaga a, <br> \n\
    astfel incat, pentru fiecare dintre acestea, valoarea f(a) sa fie egala cu 2.",
    a: "{4,6}",
    b: "{7,9}",
    c: "{1,3,8}",
    d: "{1,4,7}",
    answer: "D",
    //Add property to hold image source uri, either local or online
    img: "assets/g2.png"
  },
{//3
    question: "Subprogramul f este definit alaturat, iar variabila intreaga r are valoarea 0 inainte de apel. <br>\n\
    Indicati apelul in urma caruia variabila r are valoarea 2.",
    a: "f(21,22,r)",
    b: "f(20,21,r)",
    c: "f(19,20,r)",
    d: "f(18,19,r)",
    answer: "D",
    //Add property to hold image source uri, either local or online
    img: "assets/g3.png"
  },
  {//4
    question: "Subprogramul f este definit alaturat. <br>\n\
    Indicati ce se afiseaza in urma apelului f(4).",
    a: "11111",
    b: "00000",
    c: "01010",
    d: "01101",
    answer: "D",
    //Add property to hold image source uri, either local or online
    img: "assets/g4.png"
  },
  {//5
    question: "Subprogramul f este definit alaturat. <br>\n\
    Indicati ce se afiseaza in urma apelului f(54321).",
    a: "****554354321 ",
    b: "****/5/543/54321/",
    c: "*54321*543*5*////",
    d: "/5/543/54321/",
    answer: "C",
    //Add property to hold image source uri, either local or online
    img: "assets/g5.png"
  },
  {//6
    question: "Subprogramul f este definit alaturat. <br>\n\
    Indicati valoarea f(38627).",
    a: "2",
    b: "3",
    c: "7",
    d: "8",
    answer: "A",
    //Add property to hold image source uri, either local or online
    img: "assets/g6.png"
  },
  {//7
    question: "Subprogramul f este definit alaturat. <br>\n\
    Indicati ce se afiseaza in urma apelului f(7552021,1).",
    a: "7521",
    b: "1257",
    c: "21",
    d: "1",
    answer: "A",
    //Add property to hold image source uri, either local or online
    img: "assets/g7.png"
  },
  {//8
    question: "Subprogramul afis este definit alaturat. <br>\n\
    Indicati ce se afiseaza in urma apelului afis(12345).",
    a: "+12345+123+1+",
    b: "+1+123+12345+",
    c: "++++12+12345+",
    d: "++++112312345",
    answer: "C",
    //Add property to hold image source uri, either local or online
    img: "assets/g8.png"
  },
  {//9
    question: "Subprogramul f este definit alaturat. <br>\n\
    Indicati valoarea f(102030).",
    a: "1010",
    b: "2020",
    c: "2100",
    d: "3200",
    answer: "C",
    //Add property to hold image source uri, either local or online
    img: "assets/g9.png"
  },
  {//10
    question: "Subprogramul f este definit mai jos.<br>\n\
    Valoarea lui f(2020,15) este:",
    a: "14",
    b: "200",
    c: "1990",
    d: "2020",
    answer: "C",
    //Add property to hold image source uri, either local or online
    img: "assets/g10.png"
  },
  {//11
    question: "Subprogramul f este definit alaturat.<br>\n\
    Indicati ce se afiseaza in urma apelului f(3).",
    a: "321021010",
    b: "32100100",
    c: "3210",
    d: "321",
    answer: "B",
    //Add property to hold image source uri, either local or online
    img: "assets/g11.png"
  },
  {//12
    question: "Subprogramul f este definit alaturat. <br>\n\
    Pentru apelul f(20,2020), functia se executa de:",
    a: "5 ori",
    b: "9 ori",
    c: "11 ori",
    d: "20 de ori",
    answer: "B",
    //Add property to hold image source uri, either local or online
    img: "assets/g12.png"
  },
  {//13
    question: "Subprogramul f este definit alaturat. <br>\n\
    Scrieti ce se afiseaza in urma apelului f(3).",
    a: "121321",
    b: "121131211212111",
    c: "322111",
    d: "321112211112111",
    answer: "B",
    //Add property to hold image source uri, either local or online
    img: "assets/g13.png"
  },
  {//14
    question: "Subprogramul f este definit alaturat. <br>\n\
    Indicati ce se afiseaza in urma apelului f(12345).",
    a: "+++++1+123+12345+",
    b: "++++112312345",
    c: "+12345+123+1+++++ ",
    d: "+1+123+12345+",
    answer: "A",
    //Add property to hold image source uri, either local or online
    img: "assets/g14.png"
  },
  {//15
    question: "Subprogramul f este definit alaturat.<br>\n\
    Valoarea lui f(19,20) este:",
    a: "38",
    b: "24",
    c: "-5",
    d: "-7",
    answer: "B",
    //Add property to hold image source uri, either local or online
    img: "assets/g15.png"
  },
  {//16
    question: "Subprogramul f este definit alaturat.<br>\n\
    Indicati valoarea f(200200).",
    a: "160",
    b: "202",
    c: "210",
    d: "320",
    answer: "D",
    //Add property to hold image source uri, either local or online
    img: "assets/g16.png"
  },
  {//17
    question: "Subprogramul f este definit alaturat. <br>\n\
    Valoarea lui f(2020,20) este:",
    a: "0",
    b: "-1",
    c: "-1899",
    d: "-2000",
    answer: "C",
    //Add property to hold image source uri, either local or online
    img: "assets/g17.png"
  },
  {//18
    question: "Subprogramul f este definit alaturat.<br>\n\
    Indicati ce se afiseaza in urma apelului f(2,20).",
    a: "22 22 23 26 ",
    b: "22 22 23 26 33",
    c: "26 23 22 22 ",
    d: "33 26 23 22 22",
    answer: "D",
    //Add property to hold image source uri, either local or online
    img: "assets/g18.png"
  },
  {//19
    question: "Subprogramul f este definit alaturat.<br>\n\
    Indicati de cate ori se executa subprogramul pentru apelul f(10,20).",
    a: "de 2 ori",
    b: "de 5 ori",
    c: "de 10 ori",
    d: "de 20 de ori",
    answer: "B",
    //Add property to hold image source uri, either local or online
    img: "assets/g19.png"
  },
  {//20
    question: "Subprogramul f este definit alaturat. <br>\n\
    Care este valoarea lui f(3)?",
    a: "3",
    b: "6",
    c: "9",
    d: "11",
    answer: "D",
    //Add property to hold image source uri, either local or online
    img: "assets/g20.png"
  },
  {//21
    question: "Subprogramul f este definit alaturat. <br>\n\
    Indicati valorile pe care le pot avea parametrii n și c, <br>\n\
    astfel incat, in urma apelului, f(n,c) sa aiba valoarea 2021.",
    a: "n=2021 si c=0",
    b: "n=200211 si c=2",
    c: "n=312032 si c=3",
    d: "n=720721 si c=7",
    answer: "D",
    //Add property to hold image source uri, either local or online
    img: "assets/g21.png"
  },
  {//22
    question: "Subprogramul f este definit alaturat. <br>\n\
    Indicati valoarea lui f(1234).",
    a: "0",
    b: "4",
    c: "6",
    d: "10",
    answer: "B",
    //Add property to hold image source uri, either local or online
    img: "assets/g22.png"
  },
  {//23
    question: "Subprogramul f este definit alaturat. <br>\n\
    Indicati valoarea f(4770777,7).",
    a: "2",
    b: "3",
    c: "4",
    d: "5",
    answer: "B",
    //Add property to hold image source uri, either local or online
    img: "assets/g23.png"
  },
  {//24
    question: "Subprogramul f este definit alaturat. <br>\n\
    Indicati ce se afiseaza in urma apelului f(4);",
    a: "11111",
    b: "00000",
    c: "01010",
    d: "01101",
    answer: "D",
    //Add property to hold image source uri, either local or online
    img: "assets/g24.png"
  },
  {//25
    question: "Subprogramul f este definit alaturat. <br>\n\
    Indicati ce se afiseaza in urma apelului f(54321).",
    a: "****554354321",
    b: "****/5/543/54321/",
    c: "*54321*543*5*////",
    d: "/5/543/54321/",
    answer: "C",
    //Add property to hold image source uri, either local or online
    img: "assets/g25.png"
  },
  {//26
    question: "Subprogramul f este definit alaturat. <br>\n\
    Indicati valoarea f(38627).",
    a: "2",
    b: "3",
    c: "7",
    d: "8",
    answer: "A",
    //Add property to hold image source uri, either local or online
    img: "assets/g26.png"
  },
  {//27
    question: "Subprogramul f este definit alaturat. <br>\n\
    Indicati ce se afiseaza in urma apelului f(7552021,1).",
    a: "7521",
    b: "1257",
    c: "21",
    d: "1",
    answer: "A",
    //Add property to hold image source uri, either local or online
    img: "assets/g27.png"
  },
  {//28
    question: "Subprogramul f este definit alaturat.<br>\n\
    Indicati valoarea lui f(2121,19).",
    a: "4",
    b: "5",
    c: "14",
    d: "17",
    answer: "A",
    //Add property to hold image source uri, either local or online
    img: "assets/g28.png"
  },
  {//29
    question: "Subprogramele f1 si f2 sunt definite mai jos. <br>\n\
    Indicati valoarea f2(41382).",
    a: "7",
    b: "8",
    c: "9",
    d: "10",
    answer: "B",
    //Add property to hold image source uri, either local or online
    img: "assets/g29.png"
  },
  {//30
    question: "Pentru definitia alaturata a subprogramului f, ce valoare are f(3)?",
    a: "4",
    b: "5",
    c: "6",
    d: "7",
    answer: "C",
    //Add property to hold image source uri, either local or online
    img: "assets/g30.png"
  }
];

function get(x) {
  return document.getElementById(x);
}

function renderQuestion() {
  test = get("test");
  if (pos >= questions.length) {
    test.innerHTML = "<h2>Ai raspuns corect la " + correct + " intrebari din " + questions.length;

    pos = 0;
    correct = 0;

    return false;
  }
  get("test_status").innerHTML = "Intrebarea " + (pos + 1) + " din " + questions.length;

  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  chD = questions[pos].d;
  //Add local var to hold uri
  img = questions[pos].img;

  test.innerHTML = "<h3>" + question + "</h3>";
  
  //Add <img> element to DOM with source
  test.innerHTML += "<img src=\"" + img + "\" width=\"auto\" height=\"auto\"><br>";

  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> " + chA + "</label><be>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> " + chB + "</label><be>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> " + chC + "</label><be>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='D'> " + chD + "</label><br><be>";
  test.innerHTML += "<br><button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer() {
  choices = document.getElementsByName("choices");
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
    }
  }

  if (choice == questions[pos].answer) {
    correct++;
  }

  pos++;

  renderQuestion();
}

window.addEventListener("load", renderQuestion);