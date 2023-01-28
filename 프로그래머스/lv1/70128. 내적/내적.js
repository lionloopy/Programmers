function solution(a, b) {
    var answer = [];
    for(let i=0; i<a.length; i++){
        answer.push(a[i] * b[i])
    }
    answer = answer.reduce((a,b) => a+b,0)
    return answer;
}