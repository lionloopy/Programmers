function solution(n)
{
    var answer = 0;
    let a = String(n)
    //숫자가 아닌 문자로 돌려야 돌아가면서 한자리씩 더해줄 수 있다.
    for(let i=0; i<a.length;i++){
        answer += parseInt(a[i])
    }
    //다시 숫자로 바꿔주기
    return answer;
}