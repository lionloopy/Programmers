function solution(n) {
    // 소수 리스트 담을 배열 생성
    let arr = [];
    
    // 0과 1을 제외한 2부터 n까지 배열에 담아줍니다.
    for(let i=2; i<=n; i++) {
        arr[i] = i;
    }
    
    for(let i=2; i<=n; i++) {
    	// 인덱스 2부터 반복문 돌면서 0이면 다시 다음 반복문을 돕니다.
        if(arr[i]===0) continue;
        
        // 각 인덱스(i)의 배수들을 0으로 지정해줍니다.
        for(let j=i*2; j<=n; j+=i) {
            arr[j] = 0;
        }
    }
    
    // filter를 이용해 0이아닌 수들의 개수를 return합니다.
    return arr.filter(v => v!==0).length;
}