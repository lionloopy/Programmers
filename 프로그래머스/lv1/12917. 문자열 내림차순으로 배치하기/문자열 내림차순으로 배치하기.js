function solution(s) {
    var answer = '';
    s = s.split('')
    answer = s.sort().reverse().join('')
    
    return answer;
}