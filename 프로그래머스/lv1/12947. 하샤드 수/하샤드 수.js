function solution(x) {
    var answer = true;
    let a = String(x).split('').reduce((a,b) =>parseInt(a)+parseInt(b),0)
    x%a == 0? answer = true: answer= false
    return answer;
}