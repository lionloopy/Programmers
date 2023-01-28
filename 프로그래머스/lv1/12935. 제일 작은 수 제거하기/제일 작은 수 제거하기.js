function solution(arr) {

    arr.splice(arr.indexOf(Math.min(...arr)),1)
    arr.length <2 ? answer = [-1] : answer = arr
    return answer
}