function solution(x, n) {
    var answer = [];
    for(let i=0; i<n; i++){
        answer.push(x)
    }
    for(let i=1; i<answer.length; i++){
        answer[i] = answer[i]+x*i
    }
    return answer;
}