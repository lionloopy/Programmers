function solution(n) {
    var answer = 6;
    //n으로 나누어질 때 까지 6을 더한다.
    while(answer%n !== 0 ){
        answer += 6
    }
    return answer/6
}