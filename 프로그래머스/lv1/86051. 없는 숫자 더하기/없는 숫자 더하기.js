function solution(numbers) {
    var answer = -1;
    let all = [0,1,2,3,4,5,6,7,8,9]
    let a = all.filter(x => !numbers.includes(x))
    answer = a.reduce((a,b) => a+b,0)
    return answer;
}