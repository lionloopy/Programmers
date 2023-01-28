function solution(a, b) {
    var answer = 0;
    let day = ['THU','FRI','SAT','SUN','MON','TUE','WED']
let date = [31,29,31,30,31,30,31,31,30,31,30,31]

for(let i =1; i<a; i++){
  answer +=date[i-1]
}
return day[(answer+b)%7]
}