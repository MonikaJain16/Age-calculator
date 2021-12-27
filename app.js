document.getElementById('calculate').addEventListener('click',calculateResult);


function calculateResult(){

    const dateInput=document.getElementById('date-input').value;
    const showResult=document.getElementById('show-result');
    var dob=new Date(dateInput);
    var now= new Date();
    if(dateInput==null||dateInput==""){
        showResult.innerHTML="Choose a Date please!!";
        return false;
    }
    
    else if(dob>now){
        showResult.innerHTML="Invalid Entry!! Please Input a Valid Date."
        return false;
    }
    else{
        var dobYear=dob.getFullYear();
        var dobMonth=dob.getMonth();
        var dobDate=dob.getDate();
        
        var currentYear=now.getFullYear();
        var currentMonth=now.getMonth();
        var currentDate=now.getDate();

        var age={};

        yearAge=currentYear-dobYear;
       
        if(currentMonth>=dobMonth)
        var monthAge=currentMonth-dobMonth;
        else{
            yearAge--;
           
            var monthAge= 12+currentMonth-dobMonth;
        }

        if(currentDate>=dobDate)
        {
            var dateAge=currentDate-dobDate;
        }
        else{
            monthAge--;
            var dateAge=31+currentDate-dobDate;
            if(monthAge<0){
                monthAge=11;
                yearAge--;
            }
        }
        
        age={
            years:yearAge,
            months:monthAge,
            days:dateAge
        };
        console.log(yearAge);
        if(age.years>0 && age.months>0 && age.days>0)
            showResult.innerHTML=`${age.years} years ${age.months} months ${age.days} days old`;
        else if(age.years==0 && age.months==0 && age.days>0)
            showResult.innerHTML=`Only ${age.days} days old`;
        else if(age.years>0 && age.months>0 && age.days==0)
            showResult.innerHTML=`${age.years} years ${age.months} months old`;
        else if(age.years==0 && age.months>0 && age.days>0)
            showResult.innerHTML=`${age.months} months ${age.days} days old`;
        else if(age.years>0 && age.months==0 && age.days>0)
            showResult.innerHTML=`${age.years} years ${age.days} days old`;
        else if(age.years==0 && age.months>0 && age.days==0)
            showResult.innerHTML=` ${age.months} months old`;
        else if(age.years>0 && age.months==0 && age.days==0)
            showResult.innerHTML=`${age.years} years  old.<br/> Happy Birthday!!`;
        else
            showResult.innerHTML='Welcome To The World!!<br/> It is the first day of life.';
    }
   
}