function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getYear();
    var dayOfWeek = date.getDay();
    year = year + 1900;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    day = (day < 10) ? "0" + day : day;
    month = (month < 10) ? "0" + month : month;
    switch (dayOfWeek) {
        case 1: dayOfWeek="Mon"; break;
        case 2: dayOfWeek="Tues"; break;
        case 3: dayOfWeek="Wednes"; break;
        case 4: dayOfWeek="Thurs"; break;
        case 5: dayOfWeek="Fri"; break;
        case 6: dayOfWeek="Satur"; break;
        default: dayOfWeek="Sun"; break;
    }
    dayOfWeek += "day"

    var time = h + ":" + m + ":" + s;
    var thiccDate = dayOfWeek + ", " + month + "." + day + "." + year;
    document.getElementById("tiwime").textContent = time;
    document.getElementById("daway").textContent = thiccDate;

    setTimeout(showTime, 1000);

}

showTime();
