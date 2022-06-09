/*--------Employee Wage-------*/
console.log("---Welcome To Employee Wage Function Using JS---");

/*Check Employe is Present for Part time or Full time and
calculate Daily wage*/

const PART_TIME_HRs=4;
const FULL_TIME_HRs=8;
const WAGE_PER_HRs=20;
let Employee_Hours=0;
let Employee_Total_Working_Hours=0;
const MAX_TOTAL_WORKING_HOURS=160;
const MAX_TOTAL_WORKING_DAYS=20;
let Employee_Work_Time=0;
let Employee_Work_Days=0;
let DailyWage=0;
let sum=0;
let total_work_hr=0;
let Total_Working_Days=0;
let Employee_Work_Day=1;
let DailyWageMap=new Map();
const prompts=require("prompt-sync")();
let DailyWageArray=new Array();
let dailywageArray=new Array();

//Checking employee is present or absent
//Present=1    Absent=0
let Attendance=Math.floor(Math.random()*10)%2;
console.log(Attendance);
if(Attendance==1){
    console.log("Employee is Present !!!");
    console.log("-----Wage for Multiple Days-----");
    GetWageforMultipleDays();
    console.log("\n-----Wage for a Month-----");
    GetWageforMonth();  
    }else{
    console.log("Employee is Absent");
}

//Calculate Working Hours
function GetWorkignHours(){
    let Attendance_Time=Math.floor(Math.random()*10)%3;
    //Part_Time=0 Full_Time=1
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
        default:
            console.log(" ");
            break;
    }
}

//Calculate Wage for Multiple Days
function GetWageforMultipleDays(){
    let Total_Working_Days=prompts("Enter Total Number of Working Days : ");
    for(let i=0;i<Total_Working_Days;i++){
        Employee_Hours=GetWorkignHours();
        Employee_Total_Working_Hours=Employee_Total_Working_Hours+Employee_Hours;
    }
    console.log("Total Working Hours of Employee is : "+Employee_Total_Working_Hours);
    let Employee_Wage=Employee_Total_Working_Hours*WAGE_PER_HRs;
    console.log("Employee Wage is : "+Employee_Wage);
}

//Function Calculate Wage for a month
function GetWageforMonth(){
    while(Employee_Work_Time<=MAX_TOTAL_WORKING_HOURS&&Employee_Work_Days<MAX_TOTAL_WORKING_DAYS){
        Employee_Work_Time=Employee_Work_Time+GetWorkignHours();
        let EmployeeDailyWage=Employee_Work_Time*WAGE_PER_HRs;
        DailyWageArray.push(EmployeeDailyWage);
        Employee_Work_Days++;
    }
    let Employee_Wages=Employee_Work_Time*WAGE_PER_HRs;
    console.log("Employee Wage is : "+Employee_Wages);
    DailyWageArray.push(Employee_Wages);

    for(let i=1;i<DailyWageArray.length;i++){
        console.log(i+" Day Wage is :"+DailyWageArray[i-1]);
    }
    console.log("\nTotal 20 Days Wage is : "+DailyWageArray[DailyWageArray.length-1]);
    console.log("####"+DailyWageMap);
}

//---------------UC_7 Using ForEach And Reduce Method----------------
console.log("------Using ForEach Function------");
for(let i=0;i<MAX_TOTAL_WORKING_DAYS;i++){
    let Work_hr=GetWorkignHours();
    total_work_hr=total_work_hr+Work_hr;
    DailyWage=WAGE_PER_HRs*Work_hr;
    dailywageArray.push(DailyWage);
}

//7A - Calculate total Wage Using ForEach or Reduce
function Addition(DailyWage){
    sum=sum+DailyWage;
    if(DailyWage>0){
        Total_Working_Days=Total_Working_Days+1;
    }
}
dailywageArray.forEach(Addition)
console.log("\nTotal Working Days : "+Total_Working_Days+"\nTotal Working Hours : "+total_work_hr+"\nTotal Wage is : "+sum);
day=0;

//7B - Show Day And DailyWage Using Array Map Helper
function mapDayWithDailyWage(DailyWage){
    day++;
    return day+"="+DailyWage;
}
mapDayWithWage = dailywageArray.map(mapDayWithDailyWage);
console.log("\n------------Daily wage Using Map Function----  \n"+mapDayWithWage);
console.log("Total working days: "+Total_Working_Days+"\nTotal working hrs: "+ total_work_hr+"\nTotal wage: "+sum);

//7C - Show full time worked days of earned 160 wage
let empWithFullTime = mapDayWithWage.filter(day => day.includes("160"));
console.log("Emp with full time wage on days: "+empWithFullTime);

//7D - Find First Occurance of Full time worked day using finf function
let findfulltimeworkday=mapDayWithWage.find(day => day.includes("160"))
console.log("\nFirst time FullTime wage was earned on: "+findfulltimeworkday);

//7E - Check if there is all element hold full time work hours
console.log("Check if all elements have full time wage: "+mapDayWithWage.every(wage => wage.includes("160")));

//7F - Check if there is any part time Wage
console.log("Check if there is any part time wage: "+mapDayWithWage.some(wage => wage.includes("80")));

//7G - Total Number Days Employee Worked 
function TotalWorkingDays(WorkingDays, DailyWage) {
    if (DailyWage > 0) 
        return WorkingDays + 1;
    return WorkingDays;
}
let EmployeeWorkingDays=dailywageArray.reduce(TotalWorkingDays, 0)
console.log("Total Number Working Days : " + EmployeeWorkingDays);

//UC8 - Store Day And DailyWage along with
while(Employee_Work_Time<=MAX_TOTAL_WORKING_HOURS&&Employee_Work_Day<MAX_TOTAL_WORKING_DAYS){
    let EmpWorkHr=GetWorkignHours();
    let dailywage=EmpWorkHr*WAGE_PER_HRs;
    DailyWageMap.set(Employee_Work_Day,dailywage);
    Employee_Work_Day++;
}
function dailywage(Sum,DailyWage){
    return Sum+DailyWage;
}
console.log(DailyWageMap);
let EmployeeDailyWage=Array.from(DailyWageMap.values()).reduce(dailywage, 0);
console.log(EmployeeDailyWage);
