function solution(nums) {
    var answer = 0;
    let a = nums.filter((e,i) => {
    return nums.indexOf(e) === i
    })
    let limit = nums.length / 2
    
    return a.length > limit? answer = limit:answer = a.length
}