function solution(cipher, code) {
    var answer = '';
    let a = cipher.split('')
    answer = a.filter((a,i) => (i+1)%code ==0).join('')
    return answer;
}