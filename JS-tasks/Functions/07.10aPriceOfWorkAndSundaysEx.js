

function calculate() {
var Date = document.getElementById("date").value;
var workcost;
var Workday;

isSunday(Date);
    if (isSunday(Date) != true){
        workcost = 48;
        Workday = " (work day)." + "<br />";
    }else{
        workcost = 72;
        Workday = " (sunday)" + "<br />";
    }

    document.getElementById("answer").innerHTML = "<p>Date " + Date + Workday + "The price of this repair work is " + workcost + " euros per hour.</p>";

}

function isSunday(dateText) {
	var Day = dateText.substr(0, 2);
    var Month = dateText.substr(3, 2);
    var Year = dateText.substr(6, 4);

	var asDate = new Date();
    asDate.setFullYear(Year);
    asDate.setMonth(Month - 1);
    asDate.setDate(Day);
    var DayofTheWeek = asDate.getDay();
    if (DayofTheWeek == 0){
        return true;
    }else{
        return false;
    }
}