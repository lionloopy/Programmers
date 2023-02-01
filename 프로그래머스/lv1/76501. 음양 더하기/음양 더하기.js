function solution(absolutes, signs) {

    let sum = []
for(let i =0; i<signs.length;i++){
    if(signs[i] == true){
        signs[i] = 1
    }else if(signs[i] == false){
        signs[i] = -1
    }
}
for(let i=0; i<absolutes.length; i++){
    sum.push(absolutes[i] * signs[i])
}
let answer = sum.reduce((a,b) => a+b,0)
    return answer;
}