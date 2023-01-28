function solution(n) {
    var answer = [];

n = String(n).split("").reverse();
for (let i = 0; i < n.length; i++) {
  answer.push(parseInt(n[i]));
}
    return answer;
}