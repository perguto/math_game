let rand=(stop,start=0,step=1)=>{
	return Math.floor((start+ (stop-start)*Math.random())/step)*step;
}
console.log('hi');
let n=9;
let k=8;
let numbers=Array(n).fill(0).map(s=>rand(k));
let ops=['+','-','*','/'];
let operators=Array(n-1).fill(0).map(s=>ops[rand(ops.length)]);
let chain = Array(2*n-1).fill(0).map((v,i)=>i%2==0?numbers[+i/2]:operators[(+i-1)/2]);
let exercise="".concat(...chain);
let result=eval(exercise);
let answer_string=prompt(question="What is " + exercise+"?");
let answer=parseFloat(answer_string);
while(answer_string!="NaN"&&isNaN(answer)){
	answer=prompt("Please enter a number or \"NaN\"! "+question);
}
alert((answer==result)||(isNaN(answer)&&isNaN(result))?
	"You're right!!":
	"You're wrong! " + exercise + " is not " +answer + "! " + exercise + " equals " + result + "!");
