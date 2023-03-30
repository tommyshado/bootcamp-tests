const isWeekday = (weekDays) => {
    return !(weekDays.startsWith('S'));
};

console.log(isWeekday('Monday'))