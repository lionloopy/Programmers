function solution(absolutes, signs) {
    var answer = 0;
    for(let i=0; i<absolutes.length;i++){
        if(signs[i] ===true){
            absolutes[i] = absolutes[i]
        }else{
            absolutes[i] = -absolutes[i]
        }
    }
    answer = absolutes.reduce((a,b) => a+b, 0)
    return answer;
}

//1.absolutes의 배열과 sings의 배열이 같은 부분에서 양,음수를 바꿔준다.
//2.바뀐 값으로 누적값을 구한다.