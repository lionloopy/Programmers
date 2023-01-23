function solution(sides) {
    var answer = 0;
    sides.sort((a,b) =>{
        if(a>b) return 1
        if(a<b) return -1
        if(a==b) return 0
    })
    answer = sides.reverse()
    if(answer[0] < answer[1]+answer[2]) return 1
    if(answer[0] >= answer[1]+answer[2]) return 2
    return answer;
}