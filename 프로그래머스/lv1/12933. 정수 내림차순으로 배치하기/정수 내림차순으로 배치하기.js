function solution(n) {
    var answer = 0;
    answer = String(n).split('').sort((a,b) => b-a).join('')
    answer = parseInt(answer)
    return answer;
}