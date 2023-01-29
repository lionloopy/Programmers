function solution(numbers) {
    var answer = [];
    for(let i=0; i<numbers.length; i++){
        for(j=i; j<numbers.length; j++){
            answer.push(numbers[i]+numbers[j+1])
        }
    }
    answer = answer.filter((e,i) => {
        return answer.indexOf(e) === i
    })
    answer.sort((a,b) => a-b)
    return answer;
}