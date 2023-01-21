function solution(my_string, n) {
    let makeArray = [...my_string] //문자열을 하나씩 분리하여 배열로 만든다.
    let makeRepeat = makeArray.map(a => a.repeat(n)) // 요소 a를 n번만큼 반복한다.
    return makeRepeat.join('') //다시 모아준다.


}