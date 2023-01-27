function solution(absolutes, signs) {
    var answer = 0;
    // signs = signs.map(x => (x ==true)? 1:-1)
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
//1.true false를 숫자로 바꿔준다 => map
//2.sigsn배열과 absoulutes배열의 같은 인덱스 값을 곱해준다