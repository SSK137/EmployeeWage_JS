/*--------Employee Wage-------*/
console.log("---Welcome To Employee Wage Function Using JS---");

/*Check Employe is Present for Part time or Full time and
calculate Daily wage*/

const PART_TIME_HRs=4;
const FULL_TIME_HRs=8;
const WAGE_PER_HRs=20;
const MAX_TOTAL_WORKING_HOURS=160;
const MAX_TOTAL_WORKING_DAYS=20;
let TotalWorkingHours=0;
let TotalWorkWage=0;
let TotalWorkDays=0;
let TotalWorksDays=0;
let DailyWage=0;
let DailyHours=0;
let DailyWageMap=new Map();
let DailyWageArray=new Array();

//Checking employee is present or absent
//Present=1    Absent=0
let Attendance=Math.floor(Math.random()*10)%2;
console.log(Attendance);
if(Attendance==1){
    console.log("Employee is Present !!!");  
    }else{
    console.log("Employee is Absent");
}

//Calculate Working Hours 
function GetWorkignHours(){
    let Attendance_Time=Math.floor(Math.random()*10)%3;
    //Absent=0   Part_Time=1   Full_Time=2
    switch(Attendance_Time){
        case 0:
            return 0;
            break;
        case 1:
            return PART_TIME_HRs;
            break;
        case 2:
            return FULL_TIME_HRs;
            break;
    }
}
function CalculateDailyWage(){
    return WAGE_PER_HRs*GetWorkignHours();
}
//Function Calculate Wage for a month
while(TotalWorkingHours<=MAX_TOTAL_WORKING_HOURS&&TotalWorkDays<MAX_TOTAL_WORKING_DAYS){
    TotalWorkDays++;
    DailyHours=GetWorkignHours();
    TotalWorkingHours=TotalWorkingHours+DailyHours;
    DailyWage=CalculateDailyWage();
    DailyWageArray.push(DailyWage);
    DailyWageMap.set(TotalWorkDays,DailyWage);
}
TotalWorkWage=TotalWorkingHours*WAGE_PER_HRs;
console.log(DailyWageArray);
console.log("Total Wage of Employee is : "+TotalWorkWage);

//---------------UC_7 Using ForEach And Reduce Method----------------
//7A - Calculate total Wage Using ForEach or Reduce
function TotalWorkWages(){
    TotalWage=TotalWorkingHours*WAGE_PER_HRs;
    return TotalWage;
}
function TotalWorkingDays(){
    for(i=0;i<DailyWageArray.length;i++){
        if(DailyWageArray[i]>0){
            TotalWorksDays=TotalWorksDays+1;
        }
    }
    return TotalWorksDays;
}
TotalWorksDays=TotalWorkingDays();
DailyWageArray.forEach(TotalWorkWages)
console.log("Total working days: "+TotalWorksDays+"\nTotal working hrs: "+ TotalWorkingHours+"\nTotal wage: "+TotalWage);

//7B - Show Day And DailyWage Using Array Map Helper
let day=0;
function MapDayWithDailyWage(DailyWage){
    day++;
    return day+"="+DailyWage;
}
MapDayWithWage = DailyWageArray.map(MapDayWithDailyWage);
console.log("\n------------Daily wage Using Map Function----  \n"+MapDayWithWage);

//7C - Show full time worked days of earned 160 wage
let EmpWithFullTime = MapDayWithWage.filter(day => day.includes("160"));
console.log("Emp with full time wage on days: "+EmpWithFullTime);

//7D - Find First Occurance of Full time worked day using finf function
let findfulltimeworkday=MapDayWithWage.find(day => day.includes("160"))
console.log("\nFirst time FullTime wage was earned on: "+findfulltimeworkday);

//7E - Check if there is all element hold full time work hours
console.log("Check if all elements have full time wage: "+MapDayWithWage.every(wage => wage.includes("160")));

//7F - Check if there is any part time Wage
console.log("Check if there is any part time wage: "+MapDayWithWage.some(wage => wage.includes("80")));

//7G - Total Number Days Employee Worked 
function totalDaysWorked(numOfDays,DailyWage){
    if(DailyWage>0){
       return numOfDays+1;
    }
     return numOfDays;
 }
let EmployeeWorkingDays=DailyWageArray.reduce(totalDaysWorked, 0)
console.log("Total Number Working Days : " +EmployeeWorkingDays);

//UC8 - Store Day And DailyWage along with
console.log(DailyWageMap);
console.log("Employee Wage Map totalWage : " + Array.from(DailyWageMap.values()).reduce(TotalWorkWages, 0));