process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    //a는 별의 갯수, b는 줄 수 
    for(let i = 0; i<b;i++){
    let stars = ''
    for(let j =0; j<a;j++){
        stars +='*'
    }console.log(stars)
}
});