function solution(n) {
    var answer = 0;
    let a = n - 1
let arr = []
for(let i=2; i<=a; i++){
    if(a%i == 0){
        arr.push(i)
    }
}
answer = Math.min(...arr)
    return answer;
}