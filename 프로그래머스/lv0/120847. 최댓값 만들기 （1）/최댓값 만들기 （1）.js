function solution(numbers) {
    var answer = 0;
    numbers.sort((a,b) => {
     if (a > b) return 1; // ba 정렬 (양수)
    if (a == b) return 0; //a와 b가 같을 때 (0)
    if (a < b) return -1; // ab정렬 (음수)
    })
    answer = numbers.reverse()
    answer = numbers[0]*numbers[1]
    return answer
}