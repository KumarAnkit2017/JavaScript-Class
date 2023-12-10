
        //conditional Statement-
        //.if
        //.if-else
        //
        let name="Ashish";
       
        function callIfElseFunction()
        {
            (name=="Ashish") ?  alert("Present"): alert("Absent"); 
        }
///(Conditions)?(if condition is true the exexcuet this block): (else execute this block)
        

        //if -elseif
        function ifElseIfFunction()
        {
            if(name=="Ashis")
                alert(name+" Present")
            else if(name=="Shubhi")
                alert(name+" Present")
            else if(name=="Kirti")
            {
                alert(name+" Present")
                alert(name+" Present")
            }else if(name=="Aishu")
                alert(name+" Present")
            else
                alert(name+" Absent")
            
        }


        //switch case
        //if -elseif
        let rollNum=3;
        function swithCaseFunction()
        {
           
           switch(rollNum)
           {
            case 1:
                alert("Shubhi Present");
                break;
            case 2:
                alert("Kirti Present");
                break;
            case 3:
                alert("Aishu Present");
                break;
            case 4:
                alert("Ashish Present");
                break;
            default:
               alert("Student Not Present");
           }
        }

        let genterType="Female";
        function nestedIfElse()
        {
           if(genterType=="Female")
           {
               if(true)
               {
                    alert("She is Female");
                    if(true)
                    {
                        
                    }
               }else{
                
               }
           }else{

           }
           
        }


  