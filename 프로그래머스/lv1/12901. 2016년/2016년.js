function solution(a, b) {
    return new Date(2016, a-1, b).toString().slice(0,3).toUpperCase()
//     var answer = 0;
//     let day = ['THU','FRI','SAT','SUN','MON','TUE','WED']
// let date = [31,29,31,30,31,30,31,31,30,31,30,31]

// for(let i =1; i<a; i++){
//   answer +=date[i-1]
// }
// return day[(answer+b)%7]
}