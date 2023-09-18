const quizData = [
    {
       question: 'whats is an array?',
        a: 'global object that stores data',
        b: 'another word for class',
        c: 'isnt used for coding',
        d: 'python',
        correct: 'a'
    },
   
    {  question: 'how many elements can an array store?',
       a: '4',
       b: '8',
       c:'9',
       d: 'unlimited',
       correct: 'd'
     
   
    },
    
    { question: 'what does concact do? ',
      a: 'turn multiple arrays into one',
      b: 'delete an array',
      c: 'change your box color',
      d: 'add items to html',
      correct: 'a'
   
   
    },
    
    { question: 'what does pop do in a array?',
    a:'add an element to the start of the list ',
    b: 'removes the last element',
    c: 'list elements in alphabetical order',
    d: 'all of the above',
   correct: 'b' },
   
    { question: 'when do you input what language you want your code to be',
    a: 'at the end',
    b: 'after every command',
    c: 'at the beginning',
    d: 'never',
   correct: 'c'
    }
   
   ];
  
   const quiz = document.getElementById("quiz");

   const answerEls = document.querySelectorAll(".answer");
  
   const questionEl = document.getElementById
   ("question");
   const a_text = document.getElementById("a_text");
   const b_text = document.getElementById("b_text");
   const c_text = document.getElementById("c_text");
   const d_text = document.getElementById("d_text");
   const submitBtn = document.getElementById ("submit");
   
   let currentQuiz = 0;
   let score = 0;
   
   loadQuiz();
   
   function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    

    questionEl.innerText = currentQuizData.question;
    
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    

}
function getSelected() {

    let answer = undefined;
 
    answerEls.forEach((answerEl) => {
     if (answerEl.checked) {
        answer = answerEl.id;
     }
    
    });
   return answer;
}
function deselectAnswers(){
answerEls.forEach((answerEl) => {
  answerEl.checked = false;
})

}


submitBtn.addEventListener("click", () => { 
    
    const answer = getSelected();
         
        console.log(answer);

      if(answer)  {
        if(answer === quizData[currentQuiz].correct) {
          score++;
        }
           currentQuiz++;  
          if(currentQuiz < quizData.length) {
        loadQuiz();
        }
        else{
           quiz.innerHTML = `<h2>you answered correct ${score}/${quizData.length} questions.</h2> 
           <button onclick="location.reload() ">RETAKE QUIZ</button>`
          }
        }
});
    
  
       