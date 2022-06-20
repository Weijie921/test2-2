const readline = require('readline-sync');

// Enter the number
let num = Number(readline.question());

let number;
let results = [];
for (let i = 0; i < num; ++i) {
  number = [];
  number = readline.question().split(" ").map(a=>Number(a));
  let A = number[0] > number[2] ? number[0]: number[2];
  let B = number[1];
  let C = number[0] < number[2] ? number[0]: number[2];

  let rlt = Number.MAX_VALUE;

  // B, A, C
  if(B > A && A > C) rlt = 0;
  if(B > A && A == C && C != 1) rlt = Math.min(rlt, 1);
  if(B == A && A > 2) rlt = Math.min(rlt,3);

  if(A > B && B > 2){
  	if(C <= B - 2) rlt = Math.min(rlt, A-B+1);
  	else rlt = Math.min(rlt, A+C-B * 2 + 3) // A-B+1 + C-(B-2)
  }
  
  // A, C, B
  if(A > 2){
  	if(C > B && A > C) rlt = 0;
  	if(C > B && A == C && C - 1 == B) rlt = Math.min(rlt, 2);
  	if(C > B && A == C && C - 1 > B) rlt = Math.min(rlt, 1);
  	
  	if(C <= B){
  		if(A == C){
  			if(C > 2) rlt = Math.min(rlt, B-C + 3);
	  	}else{
	  		if(C > 1) rlt = Math.min(rlt, B-C + 1);
	  	}
  	}
  	
  }
  if(rlt == Number.MAX_VALUE) rlt = -1;
  console.log(rlt);
  results.push(rlt);
}
console.log(results);