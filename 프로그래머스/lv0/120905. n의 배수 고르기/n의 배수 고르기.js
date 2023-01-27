function solution(n, numlist) {
    var answer = [];
    let a = numlist.map(x => (x%n==0)?answer.push(x): console.log(x))
    return answer;
}