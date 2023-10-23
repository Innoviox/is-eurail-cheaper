export function increaseDate(date: Date, weeks: number, hour: number) {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + weeks * 7);
    newDate.setHours(hour);
    newDate.setMinutes(0);
    newDate.setSeconds(0);
    return newDate.getTime();
}
