function solution(n) {
    var answer = [];
    n = String(n)
    for(let i=0; i<n.length; i++){
        answer.push(parseInt(n[i]))
    }
    answer = answer.reverse()
    return answer;
}