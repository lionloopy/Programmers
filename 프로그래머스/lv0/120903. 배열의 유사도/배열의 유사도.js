function solution(s1, s2) {
    var answer = 0;
    var array = []
    for(let i=0;i<s1.length;i++){
        for(let j=0; j<s2.length; j++){
            if(s1[i]==s2[j]){
                array.push(s1[i])
            }
        }
    }
    return array.length;
}