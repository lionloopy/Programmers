function solution(n) {
    var answer = 0;
    n = String(n).split('') // [...(''+n)]
    let sum = 0
    for(let i=0; i<n.length; i++){
        sum += +n[i]
    }
    return sum;
}