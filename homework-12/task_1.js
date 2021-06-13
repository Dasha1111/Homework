

function showNotification({top = 0, right = 0, html, className}) {

    let notice = document.createElement('div');
    notice.className = "notice";

    if (className) {
        notice.classList.add(className);
    }
    notice.style.top = top + 'px';
    notice.style.right = right + 'px';
    notice.innerHTML = html;
    document.body.append(notice);
    setTimeout(() => notice.remove(), 1500);
}
  
setInterval(() => {
    showNotification({
        top: 20,
        right: 30,
        html: "Hello!",
        className: "welcome",
    });
}, 3000);