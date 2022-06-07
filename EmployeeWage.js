/*--------Employee Wage-------*/
console.log("---Welcome To Employee Wage Function Using JS---");

/*Check Employe is Present for Part time or Full time and
calculate Daily wage*/

const PART_TIME_HRs=4;
const FULL_TIME_HRs=8;
const WAGE_PER_HRs=20;
let Attendance=Math.floor(Math.random()*10)%2;
console.log(Attendance);

//Checking employee is present or absent
//Present=1    Absent=0
if(Attendance==1){
    console.log("Employee is Present !!!");

    //Part_Time=0 Full_Time=1
    let Attendance_Time=Math.floor(Math.random()*10)%2;
    let Employe_Wage=0;
    switch(Attendance_Time){
        case 0:
            console.log("\nEmployee is Present for Part Time ");
            Employe_Wage=PART_TIME_HRs*WAGE_PER_HRs;
            console.log("\nEmployee_Wage for Part Time : "+Employe_Wage);
            break;
        case 1:
            console.log("\nEmployee is Present for Full Time ");
            Employe_Wage=FULL_TIME_HRs*WAGE_PER_HRs;
            console.log("\nEmployee_Wage for Full Time : "+Employe_Wage);
            break;
        default:
            console.log(" ");
            break;
        }
    }else{
    console.log("Employee is Absent");
}