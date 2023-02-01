function solution(s){
    var answer = true;
    s = s.toLowerCase()
    let a = 0
    let b = 0
    for(let i=0; i<s.length; i++){
        if(s[i] == 'p'){
            a++
        }
        if(s[i] == 'y'){
            b++
        }
    }
    a == b ? answer = true : answer = false
    return answer;
}