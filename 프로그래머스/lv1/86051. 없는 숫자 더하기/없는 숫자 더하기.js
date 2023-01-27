function solution(numbers) {
    var answer = 0;
    let all = [1,2,3,4,5,6,7,8,9,0]
    let a = all.filter((x) => !numbers.includes(x))
    for(let i =0; i<a.length;i++){
        answer += a[i]
    }
    return answer;
}