let list = document.querySelectorAll('li');

for (let li of list) {
    let count = li.querySelectorAll('li').length;
    if (!count){
        continue;
    }
    li.firstChild.data += '[' + count + ']';
}