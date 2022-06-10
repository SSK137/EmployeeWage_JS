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
let DailyHoursMap=new Map();
let DailyWageArray=new Array();
let DailyHrsAndWageArray=new Array();

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
function CalculateDailyWage(DailyHours){
    return WAGE_PER_HRs*DailyHours;
}
//Function Calculate Wage for a month
while(TotalWorkingHours<=MAX_TOTAL_WORKING_HOURS&&TotalWorkDays<MAX_TOTAL_WORKING_DAYS){
    TotalWorkDays++;
    DailyHours=GetWorkignHours();
    TotalWorkingHours=TotalWorkingHours+DailyHours;
    DailyWage=CalculateDailyWage(DailyHours);
    DailyWageArray.push(DailyWage);
    DailyWageMap.set(TotalWorkDays,DailyWage);
    DailyHoursMap.set(TotalWorkDays,DailyHours);

    DailyHrsAndWageArray.push(
        {
            daynum: TotalWorkDays,
            dayhrs: DailyHours,
            dailywage: DailyWage,
            toString() {
                return '\nDay '+this.daynum+',Hours '+this.dayhrs+',Wage '+this.dailywage;
            },
        });
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

//UC9 - Calc total Wage and total hours worked
let totalHours = Array.from(DailyWageArray.values()).reduce(totalDaysWorked, 0);
let totalSalary = DailyWageArray
        .filter(DailyWage => DailyWage > 0)
        .reduce(TotalWorkWages, 0);
console.log("Emp Wage with Arrow. : " + "Total Hours: " + totalHours + ", Total Wages: " + totalSalary);

//UC 9-b. Show the full workings days, part working days and no working days
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
DailyHoursMap.forEach((value, key) => {
        if (value == 8) fullWorkingDays.push(key);
        else if (value == 4) partWorkingDays.push(key);
        else nonWorkingDays.push(key);
});
console.log("Full Working Days : " + fullWorkingDays);
console.log("Part Working Days : " + partWorkingDays);
console.log("Non Working Days : " + nonWorkingDays);

//UC 10 - Ability to store the Day,Hours Worked and Wage Earned in a single object.
console.log("\n===================UC10====================");
console.log(" "+DailyHrsAndWageArray);

//UC -11A Calculate total wage and total hours worked 
console.log("======================UC11-A=======================");
let totalwages=DailyHrsAndWageArray.filter(dailyhousrAndwage => dailyhousrAndwage.dailywage>0)
                                .reduce((DailyWage,dailyhousrAndwage) => DailyWage+=dailyhousrAndwage.dailywage,0);
console.log("Total Wage : "+totalwages);
let totalHour=DailyHrsAndWageArray.filter(dailyhousrAndwage => dailyhousrAndwage.dayhrs>0)
                                .reduce((dayhrs,dailyhousrAndwage) => dayhrs+=dailyhousrAndwage.dayhrs,0);
console.log("Total Hours : "+totalHour);

//UC -11B Show the full workings days using foreach
console.log("======================UC11-B=======================");
process.stdout.write("");
DailyHrsAndWageArray.filter(dailyhousrAndwage=> dailyhousrAndwage.dayhrs == 8)
            .forEach(dailyhousrAndwage=>process.stdout.write(dailyhousrAndwage.toString()));

//Uc -11C Show Part working days using Map by reducing to String Array
console.log("\n======================UC11-C=======================");
let partWorkingDayStrArr = DailyHrsAndWageArray
                           .filter(dailyHrsAndWages => dailyHrsAndWages.dayhrs == 4)
                           .map(dailyHrsAndWages => dailyHrsAndWages.toString());
console.log("\nPartWorkingDayStrings : " + partWorkingDayStrArr);

//UC 11D No working days only using Map function
console.log("\n======================UC11-C=======================");
let nonWorkingDayNums = DailyHrsAndWageArray
                        .filter(dailyHrsAndWage => dailyHrsAndWage.dayhrs == 0)
                        .map(dailyHrsAndWage => dailyHrsAndWage.daynum);
console.log("\nNonWorkingDayNums : " + nonWorkingDayNums);