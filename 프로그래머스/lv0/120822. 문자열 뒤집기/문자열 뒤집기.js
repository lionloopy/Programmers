function solution(my_string) {
    var answer = '';
    answer = my_string.split('').reverse().join('')
    //split으로 ''단위로 하나하나 쪼갠다.
    //reverse로 쪼갠 단위들을 뒤집는다.
    //join으로 ''단위로 다시 묶는다.
    return answer;
}