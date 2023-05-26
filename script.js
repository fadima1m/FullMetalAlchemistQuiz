//Asked Questions
const Questions = [{
  id: 0,
  q: "Where did Alphonse lose his body?",
  a: [{ text: "On a Train", isCorrect: false },
      { text: "At home", isCorrect: true },
      { text: "During Training", isCorrect: false },
      { text: "Underground", isCorrect: false }]
},
{
  id: 1,
  q: "Who raised Alphonse and Edward?",
  a: [{ text: "Granny", isCorrect: false },
      { text: "Roy Mustang", isCorrect: false },
      { text: "Winry Rockbell", isCorrect: false },
      { text: "No One", isCorrect: true }]
},
{
  id: 2,
  q: "Why is Edward known as the FullMetal Alchemist?",
  a: [{ text: "His Metal Arm", isCorrect: true },
      { text: "His State Identification", isCorrect: true },
      { text: "His Brother", isCorrect: false },
      { text: "His Special Technique", isCorrect: true }]
}
]

// Start
var start = true;

// Iteration
function iterate(id) {
  //Result display action
  var result = document.getElementsByClassName("result");
  result[0].innerText = "";

  //Getting question
  const question = document.getElementById("question");

  //Setting question text
  question.innerText = Questions[id].q;

  //Getting options
  const op1 = document.getElementById('op1');
  const op2 = document.getElementById('op2');
  const op3 = document.getElementById('op3');
  const op4 = document.getElementById('op4');

  //option text
  op1.innerText = Questions[id].a[0].text;
  op2.innerText = Questions[id].a[1].text;
  op3.innerText = Questions[id].a[2].text;
  op4.innerText = Questions[id].a[3].text;

  //true or false -boolean- value to options
  op1.value = Questions[id].a[0].isCorrect;
  op2.value = Questions[id].a[1].isCorrect;
  op3.value = Questions[id].a[2].isCorrect;
  op4.value = Questions[id].a[3].isCorrect;
  
  var selected = "";

  //Showing selection for option 1
  op1.addEventListener("click", () => {
    op1.style.backgroundColor = "#bb0a1e";
    op2.style.backgroundColor = "#000000";
    op3.style.backgroundColor = "#000000";
    op4.style.backgroundColor = "#000000";
    selected = op1.value;
  })

  //Showing selection for option 2
  op2.addEventListener("click", () => {
    op1.style.backgroundColor = "#000000";
    op2.style.backgroundColor = "#bb0a1e";
    op3.style.backgroundColor = "#000000";
    op4.style.backgroundColor = "#000000";
    selected = op2.value;
  })

  //Showing selection for option 3
  op3.addEventListener("click", () => {
    op1.style.backgroundColor = "#000000";
    op2.style.backgroundColor = "#000000";
    op3.style.backgroundColor = "#bb0a1e";
    op4.style.backgroundColor = "#000000";
    selected = op3.value;
  })

  //Showing selection for option 4
  op4.addEventListener("click", () => {
    op1.style.backgroundColor = "#000000";
    op2.style.backgroundColor = "#000000";
    op3.style.backgroundColor = "#000000";
    op4.style.backgroundColor = "#bb0a1e";
    selected = op4.value;
  })

  //Grab the evaluate button
  const evaluate = document.getElementsByClassName("evaluate");

  //Evaluate method
  evaluate[0].addEventListener("click", () => {
    if (selected != true) {
      result[0].innerHTML = "TRUE!";
      result[0].style.color = "#ff69b4";
    } else {
      result[0].innerHTML = "False!";
      result[0].style.color = "#000000";
    }

  })
}

if (start) {
  iterate("0");
}

//Next Button and the method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () =>{
  start = false;
  if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
  }

})