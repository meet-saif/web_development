// Random number genrate function

const questionEl = document.getElementById("question");
const questionFormEl = document.getElementById("questionForm");
const scoreEl = document.getElementById("questionForm");

let storedAnswer;
let score =0;

const randomNumber=(min , max)=>{
  return Math.floor(Math.random() *( max - min +1)+min);
};

  //console.log("random Number  ", randomNumber (20 , 25));

const generateQuestion=()=>{

    const randomNumber1 = randomNumber (1 , 10);
    const randomNumber2 = randomNumber (1 , 10);
    const Question =`Q, what is  ${randomNumber1} mutiply By ${randomNumber2}`
    const answer = randomNumber1 * randomNumber2;
    return { Question , answer};

};

console.log(generateQuestion());

const showQuestion = () => {
    const {Question , answer} = generateQuestion();
    questionEl.innerText = Question;
    storedAnswer = answer;
};

showQuestion();

const checkAnswer = (event) => {
    
    event.preventDefault();
    const formData = new FormData(questionFormEl);
    // const userAnswer = formData.get("answer") ;
    // const userAnswer = parseInt(formData.get("answer")) //to convert string into int 
    const userAnswer =  +formData.get("answer");// simple way to change into INT data type 

    if(userAnswer === storedAnswer){
        score += 1;
    }
    else{
        score -= 1;
    }
    scoreEl.innerText = score;
    event.target.reset();
    showQuestion();

    console.log("answer " , userAnswer);

};








