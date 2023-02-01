function solution(a, b) {
    var answer = 0;
    for(let i=a; i<=b; i++){
        answer += i
    }
    if( a > b) {
        for(let j=b; j<=a; j++){
            answer +=j
        }
    }
    return answer;
}