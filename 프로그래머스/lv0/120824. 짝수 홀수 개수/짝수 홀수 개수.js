function solution(num_list) {
    var answer = [];
    var one = []
    var two = []
    for(let i=0;i<num_list.length;i++){
        if(num_list[i]%2 == 0){
            one.push(num_list[i])
        }else if(num_list[i]%2 != 0){
            two.push(num_list[i])
        }
    } yet = one.length 
    yet2 = two.length
    answer.push(yet,yet2)
    return answer;
}