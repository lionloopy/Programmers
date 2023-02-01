function solution(n, m) {
    var answer = [];
    let big = 0
let small = 0

let num = n > m ? n: m

for(let i=1; i<=num; i++){ //n약수 구하기
    if(n%i == 0 && m%i ==0 ){
        big = i
    }
}
small = n*m / big
answer = [big,small]
    return answer;
}