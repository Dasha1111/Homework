
document.querySelector('.btn').onclick = function(){
    let min = parseInt(document.querySelector('#min').value);
    let max = parseInt(document.querySelector('#max').value);
    let count = parseInt(document.querySelector('#count').value);
    let result= [];
    for(let i=0;i<count;i++){
        result.push(generateRandomNumber(min, max));
    }
    document.querySelector('#display').innerHTML = result;
    return result;
}

function generateRandomNumber(min, max){
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand;
}