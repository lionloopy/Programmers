function solution(answers) {
    let first = [1,2,3,4,5] //5
    let second = [2,1,2,3,2,4,2,5] //8 
    let third = [3,3,1,1,2,2,4,4,5,5] //10
    let answer = [0,0,0]

    for(let i=0; i<answers.length; i++){
     if(first[i%5] == answers[i]){
        answer[0]++
    }
     if(second[i%8] == answers[i]){
        answer[1]++
    }
        if(third[i%10] == answers[i]){
        answer[2]++
    }
}
let one = Math.max(...answer)
let result = []
for(let i=0; i<answer.length; i++){
    if(answer[i] === one){
        result.push(i+1)
    }
}

    return result;
}