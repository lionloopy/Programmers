function solution(arr1, arr2) {
    var answer = [];
    for(let i=0; i<arr1.length;i++){ //첫번째 for문은 겉배열
        let sum = []
        for(let j=0; j<arr1[i].length;j++){ //두번째 for문은 속배열
            sum.push(arr1[i][j] + arr2[i][j])
        }
        answer.push(sum)
        //먼저 []배열에 넣어주고 이 배열을 answer배열에 넣어주면서 이중 배열을 만든다.
    }
    return answer;
}