function solution(hp) {
    var answer = 0;
    let result = (hp%5 ==0)? answer= hp/5
    : (hp%5%3 ==0)? answer = parseInt(hp/5) + (hp%5)/3
    : answer = parseInt(hp/5) + parseInt(hp%5/3) + hp%5%3/1
    return answer;
}