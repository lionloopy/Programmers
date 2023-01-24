function solution(array) {
    var answer = 0;
    array = array.sort((a,b) => a-b)
    i = (array.length-1)/2
    answer = array[i]
    return answer;
}