function solution(n) {
    var answer = '';
    let a = n.toString(3).split('').reverse().join('') //3진수 -> 3진수 뒤집기
    answer = parseInt(a,3)
    return answer;
}