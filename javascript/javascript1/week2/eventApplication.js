const weekdays=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
function getEventDay(day) {
    const date=new Date();
    // const today=date.getDate(); removed
    const eventDay = (date.getDate() + day) % 7;
    return weekdays[eventDay];
}
console.log(getEventDay(5));

