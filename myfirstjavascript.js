//Quiz program : question and answer
const quizQuestion = [
    { question: "what is 3 + 4?", answer:"7"},
{ question: "what is a verb?", answer:"is an action word"},
{ question:"what is none?", answer: "not any"} ,
{ question:"what is carbohydrates?", answer: " They provide energy to the body"} ,
{ question:"what is water?", answer: " It regulates body temperature ,aids digestion"} ,
];
let score = 0;
function checkAnswer(userAnswer, correctAnswer) { return userAnswer &&
         userAnswer . trim(). toLowerCase() ===
         correctAnswer. trim(). toLowerCase();
    }
for (let x = 0; x < quizQuestion.length;x++ ) 
    {
        let userAnswer =
    prompt(quizQuestion[x].question);
    
if (checkAnswer(userAnswer, quizQuestion[x].answer)){
    console.log("✅ correct !");
    score++;
}
else {
    console.log("❌ Wrong! The correct answer is:" + quizQuestion[x].answer);
}
    }
//final score 
console.log("Quiz finished! You scored" + score + "out of "+ quizQuestion.length);