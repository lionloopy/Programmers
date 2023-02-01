function solution(a, b) {
    var answer = 1234567890;
    let sum = []
    for(let i=0; i<a.length; i++){
        sum.push(a[i]*b[i])
    }
    answer = sum.reduce((a,b) => a+b,0)
    return answer;
}