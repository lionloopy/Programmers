function solution(n) {
    var answer = 0;
    let a = Math.sqrt(n)
    a%1 == 0? answer = Math.pow(a+1,2): answer = -1
    return answer;
}