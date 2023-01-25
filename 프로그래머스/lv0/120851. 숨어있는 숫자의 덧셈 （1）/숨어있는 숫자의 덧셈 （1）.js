function solution(my_string) {
    var answer = 0;
    let a = my_string.replace(/[a-z]/gi, "");

    for (let i = 0; i < a.length; i++) {
      answer += parseInt(a[i]);
}
    return answer;
}