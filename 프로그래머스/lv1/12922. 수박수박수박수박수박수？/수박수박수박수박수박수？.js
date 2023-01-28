function solution(n) {
    var answer = '';
    let a = [];
let b = [];

for (let i = 0; i < n; i++) {
  a.push(i);
}

for (let i = 0; i < a.length; i++) {
  if (a[i] == 0 || a[i] % 2 == 0) {
    b.push("수");
  } else {
    b.push("박");
  }
}
answer = b.join("");
    return answer;
}