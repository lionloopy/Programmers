function solution(N, stages) {
    var answer = [];
for(let i =1; i<=N; i++){
    let a = stages.filter((x) => x >= i).length
    let b = stages.filter((x) => x === i).length
    answer.push([i, b/a])
}
answer = answer.sort((a,b) => b[1]- a[1]).map((x) => x[0])

    return answer;
}