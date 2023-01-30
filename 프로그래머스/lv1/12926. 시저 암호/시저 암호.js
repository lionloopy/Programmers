function solution(s, n) {
    var answer = '';
    let big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let small = "abcdefghijklmnopqrstuvwxyz";
    for(let i =0; i<s.length; i++){
      if(s[i] == ' '){
          answer += ' '
          continue;
      }
      let check = big.includes(s[i])? big : small
      let index = check.indexOf(s[i]) + n
      if(index >= check.length) index -= check.length
        answer += check[index]
    }
    return answer;
}

//인덱스를 짜맞추기 문제