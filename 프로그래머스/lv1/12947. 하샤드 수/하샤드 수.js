function solution(x) {
    var answer = true;
    x = String(x);
let sum = 0;
for (let i = 0; i < x.length; i++) {
  sum += parseInt(x[i]);
}

x%sum ==0? answer = true:answer=false
    return answer;
}