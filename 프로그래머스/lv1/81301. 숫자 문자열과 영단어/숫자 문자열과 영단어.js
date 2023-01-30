function solution(s) {
    let num = ['zero','one','two','three','four','five','six','seven','eight','nine']

for(let i=0; i<num.length; i++){
    let a = s.split(num[i])
    s = a.join(i)
    
}
    return Number(s);
}