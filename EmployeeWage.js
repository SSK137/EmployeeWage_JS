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
const prompts=require("prompt-sync")();

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
    let Attendance_Time=Math.floor(Math.random()*10)%2;
    //Part_Time=0 Full_Time=1
    switch(Attendance_Time){
        case 0:
            return PART_TIME_HRs;
            break;
        case 1:
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
    while(Employee_Work_Time<=MAX_TOTAL_WORKING_HOURS&&Employee_Work_Days<=MAX_TOTAL_WORKING_DAYS){
        Employee_Work_Time=Employee_Work_Time+GetWorkignHours();
        Employee_Work_Days++;
    }
    let Employee_Wages=Employee_Work_Time*WAGE_PER_HRs;
    console.log("Employee Wage is : "+Employee_Wages);
}