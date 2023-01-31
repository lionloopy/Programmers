function solution(lottos, win_nums) {
    let min = []
let max = []
let result = []
for(let i=0; i<lottos.length;i++){
    if(lottos[i] == 0){
        max.push(lottos[i])
    }
    for(let j=0; j<win_nums.length; j++){
        if(lottos[i] == win_nums[j]){
          min.push(lottos[i])
          max.push(lottos[i])
        }
    }
}
min = min.length;
max = max.length
result = [max, min]
    for(let i=0; i<result.length;i++){
        if(result[i] == 0){
        result[i] =6
        continue;
    }
    if(result[i] == 1){
        result[i] =6
        continue;
    }
    if(result[i] == 2) {
        result[i] =5
        continue;
    }
    if(result[i] == 3) {
        result[i] =4
        continue;
    }
    if(result[i] == 4) {
        result[i] =3
        continue;
    }
    if(result[i] == 5) {
        result[i] =2
        continue;
    }
    if(result[i] == 6) {
        result[i] =1
        continue;
    }

}
    
    return result;
}