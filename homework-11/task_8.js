function createCalendar(elem, year, month) {
    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
    let mon = month - 1;
    let date = new Date(year, mon);


    for (let i = 0; i < getDay(date); i++) {//пустные ячейки перед началом месяца
      table += '<td></td>';
    }

}
