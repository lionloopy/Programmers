function solution(phone_number) {
    var answer = [];
    let a = [...phone_number].reverse().join('')
    for(let i=0; i<a.length;i++){
        if(i <4){
            answer.push(a[i])
        }else{
            answer.push('*')
        }
    }
    
    return answer.reverse().join('');
    
}