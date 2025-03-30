const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function get_day_name(date){
    return days[date.getDay()];
}

export function get_month_name(date){
    return months[date.getMonth()];
}