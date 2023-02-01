function solution(arr) {
    var answer = [];
    arr.splice(arr.indexOf(Math.min(...arr)),1)
    arr.length < 2 ? answer.push(-1) : answer = arr
    
    return answer;
}