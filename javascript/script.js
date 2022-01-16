'use strict';
$(document).ready(function(){
      
    
     function brex(){
          var vendor = parseInt(document.getElementById("vendor").value);
         var media = parseInt(document.getElementById("media").value);
         var corb = parseInt(document.getElementById("corb").value);
         var team = parseInt(document.getElementById("team").value);
         var sum = vendor+media+corb+team;
         var brexresult = sum * 0.3;
         var stripresult = sum*2.9;
        var amexresult = sum * 1.3;
         var unlimtedresult = sum*1.1;
         var lifetimeresult = sum*1.2;
         var buttonName = document.getElementById("br").value;
         console.log(vendor);
         
         if(vendor > 0 && media >0 && corb > 0 && team >0 ){
             
             location.replace("C:/Users/NADA/Desktop/virtual/result.html")
             localStorage.setItem('brexvalue' , brexresult)
             localStorage.setItem('stripvalue' , stripresult)
             localStorage.setItem('amexvalue' , amexresult)
             localStorage.setItem('button' , buttonName)
             localStorage.setItem('unlimtedvalue' ,unlimtedresult)
             localStorage.setItem('lifetimevalue' ,lifetimeresult)
             console.log(brexresult);
             console.log("breeex");
         }
         else{
               
             console.log("error")
         } 
        }

    
    function strip(){
        var vendor = parseInt(document.getElementById("vendor").value);
         var media = parseInt(document.getElementById("media").value);
         var corb = parseInt(document.getElementById("corb").value);
         var team = parseInt(document.getElementById("team").value);
        var sum = parseInt(vendor+media+corb+team);
        var buttonName = document.getElementById("st").value;
        var stripresult = sum*2.9;
        var amexresult = sum * 1.3;
        var brexresult = sum * 0.3;
        var unlimtedresult = sum*1.1;
        var lifetimeresult = sum*1.2;
        location.replace("C:/Users/NADA/Desktop/virtual/result.html");
        localStorage.setItem('striptvalue' , stripresult)
        localStorage.setItem('amexvalue' , amexresult)
        localStorage.setItem('brexvalue' , brexresult)
        localStorage.setItem('button' , buttonName)
        localStorage.setItem('unlimtedvalue' ,unlimtedresult)
        localStorage.setItem('lifetimevalue' ,lifetimeresult)
        console.log(sum*2.9)
        console.log("striiip")
        }
    
    
    function amex(){
        var vendor = parseInt(document.getElementById("vendor").value);
        var media = parseInt(document.getElementById("media").value);
        var corb = parseInt(document.getElementById("corb").value);
        var team = parseInt(document.getElementById("team").value);
        var buttonName = document.getElementById("am").value;
        var sum = parseInt(vendor+media+corb+team);
        var amexresult = sum * 1.3;
        var brexresult = sum * 0.3;
        var stripresult = sum*2.9;
        var unlimtedresult = sum*1.1;
        var lifetimeresult = sum*1.2;
        location.replace("C:/Users/NADA/Desktop/virtual/result.html");
        localStorage.setItem('amexvalue' , amexresult)
        localStorage.setItem('brexvalue' , brexresult)
        localStorage.setItem('striptvalue' , stripresult)
        localStorage.setItem('button' , buttonName)
        localStorage.setItem('unlimtedvalue' ,unlimtedresult)
        localStorage.setItem('lifetimevalue' ,lifetimeresult) 
        console.log(sum*1.3)
        console.log("ameeeex")
        }
    
        
    $('#br').on('click',function(e){
        e.preventDefault();
        brex();
        localStorage.setItem('brex' , brex());
    })
    
    $('#st').on('click',function(e){
        e.preventDefault();
        strip();
    })
    
    $('#am').on('click',function(e){
        e.preventDefault();
        amex();
    })
    
    
    
    
    
    
    
    
    

  
});
 