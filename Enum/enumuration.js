var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["SUN"] = 0] = "SUN";
    DaysOfTheWeek[DaysOfTheWeek["MON"] = 1] = "MON";
    DaysOfTheWeek[DaysOfTheWeek["TUE"] = 2] = "TUE";
    DaysOfTheWeek[DaysOfTheWeek["WED"] = 110] = "WED";
    DaysOfTheWeek[DaysOfTheWeek["THU"] = 111] = "THU";
    DaysOfTheWeek[DaysOfTheWeek["FRI"] = 112] = "FRI";
    DaysOfTheWeek[DaysOfTheWeek["SAT"] = 113] = "SAT";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
var day;
day = DaysOfTheWeek.MON;
console.log(day);
