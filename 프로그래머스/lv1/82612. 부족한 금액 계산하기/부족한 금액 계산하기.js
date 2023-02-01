function solution(price, money, count) {
    var answer = -1;
    let pay = []
    for(let i=1; i<=count; i++){
        pay.push(price*i) 
    }
    let sum = pay.reduce((a,b) => a+b,0)
    sum > money? answer = sum - money : answer = 0
    return answer;
}