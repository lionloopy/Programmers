function solution(s){
    let p = []
    let y =[]
    s = s.toLowerCase()
    for(let i=0; i<s.length; i++){
        if(s[i] == 'p'){
            p.push('p')
        }else if(s[i] == 'y')
            y.push('y')
    }
    let answer = (p.length == y.length)? true : false
    return answer;
}