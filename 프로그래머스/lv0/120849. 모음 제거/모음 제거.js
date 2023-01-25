function solution(my_string) {
    var answer = '';
    answer = my_string.replace(/['a','e','i','o','u']/g,'')
    //replace(찾아서 바꿀 것 / 대체할 것): 특정 요소를 찾아 바꿀 수 있다.
    // 앞뒤 /와 g가 붙으면 해당 요소 전체를 제거할 수 있다.
    return answer;
}