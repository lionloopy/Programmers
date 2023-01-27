function solution(price, money, count) {
    var answer = 0;
    let num = []
    for(let i=1; i<=count; i++){
        num.push(price * i)
    }
    let sum = num.reduce((a,b) => a+b,0)
    return (sum>money)? answer = sum - money :answer = 0
    return answer;
}