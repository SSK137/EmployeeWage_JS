const WAGE_PER_HRs=4;
const MAX_TOTAL_WORKING_DAYS=5;
const MAX_TOTAL_WORKING_HOURS=50;
let Employee_Work_Time=0;
let Employee_Work_Days=0;
let TotalWorkWage=0;
let TotalWorkDays=0;
let DailyWageArray=[];

function CalculateDailyWage(){
    DailyWage=WAGE_PER_HRs*5;
    return DailyWage;
}
//Function Calculate Wage for a month
while(Employee_Work_Time<=MAX_TOTAL_WORKING_HOURS&&Employee_Work_Days<MAX_TOTAL_WORKING_DAYS){
    Employee_Work_Days++;
    Employee_Work_Time=Employee_Work_Time+5;
    DailyWageArray.push(CalculateDailyWage());
}
console.log(DailyWageArray);

function TotalWorkingDays(){
    for(i=0;i<DailyWageArray.length;i++){
        if(DailyWageArray[i]>0){
            TotalWorkDays=TotalWorkDays+1;
        }
    }
    return TotalWorkDays;
}
let sum=TotalWorkingDays();

function TotalWorkWages(){
    TotalWorkWage=TotalWorkWage+DailyWage;
}
DailyWageArray.forEach(TotalWorkWages)
console.log("\nTotal Working Days : "+"\nTotal Working Hours : "+sum+"\nTotal Wage is : "+TotalWorkWage);