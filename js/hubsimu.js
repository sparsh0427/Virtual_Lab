
function myMove() {
    var elem = document.getElementById("net");   
    posx = 580;
    posy = 10;
    var id = setInterval(frame, 16);

    
    function frame() {
        if (posy == 280) {

             clearInterval(id)
             setTimeout(function(){
                myMove2()
                myMove3()
                myMove4()
                myMove5()
                myMove6()
                

             },2000)
                          
        }
        
        else {
           
                posx++;
                posy++;
               
                elem.style.top =posy + "px"; 
                elem.style.left = 1.05*posx + "px";
                
            }
        
    }
    setTimeout(show,5000);

}
function myMove2() {
    var elem = document.getElementById("net");   
    posx1 = 940;
    posy1 = 250;
    var id2 = setInterval(frame2, 16);

    function frame2() {
        if (posy1 == 50) {
        	 clearInterval(id2);
             
        }
        
        else {
           
                posx1++;
                posy1--;
               
                elem.style.top =posy1 + "px"; 
                elem.style.left =1.05*posx1 + "px";
                
            }
        
    }
    
}
function myMove3() {
    var elem = document.getElementById("net1");   
    posx2 = 940;
    posy2 = 260;
    var id3 = setInterval(frame1, 16);

    function frame1() {
        if (posy2 == 50) {
        	 clearInterval(id3);
             
        }
        
        else {
           
               
                posy2--;
               
                elem.style.top =posy2 + "px"; 
                elem.style.left =posx2 + "px";
                
            }
        
    }
    
}
function myMove4() {
    var elem = document.getElementById("net2");   
    posx3 = 940;
    posy3 = 260;
    var id4 = setInterval(frame3, 16);

    
    function frame3() {
        if (posy3 == 480) {
        	 clearInterval(id4);
             
        }
        
        else {
                posy3++;
               
                elem.style.top =posy3 + "px"; 
                elem.style.left =posx3 + "px";
                
            }
        
    }   
}
function myMove5() {
    var elem = document.getElementById("net3");   
    posx4 = 900;
    posy4 = 260;
    var id5 = setInterval(frame4, 16);

    
    function frame4() {
        if (posy4 == 485) {
        	 clearInterval(id5);
             
        }
        
        else {           
                posx4--;
                posy4++;
               
                elem.style.top =posy4 + "px"; 
                elem.style.left =.9999*posx4 + "px";
                
            }
        
    }
   
}
function myMove6() {
    var elem = document.getElementById("net4");   
    posx5 = 900;
    posy5 = 260;
    var id6 = setInterval(frame5, 16);

    
    function frame5() {
        if (posy5 == 485) {
        	 clearInterval(id6);
             
        }
        
        else {           
                posx5++;
                posy5++;
               
                elem.style.top =posy5 + "px"; 
                elem.style.left =1.05*posx5 + "px";
                
            }
        
    }   
}
function show()
{
    document.getElementById("msg1").innerHTML = "*Hub Is properly a hardware device";
             
    document.getElementById("msg2").innerHTML = "*It works on Physical Layer";
  
    document.getElementById("msg3").innerHTML = "*It never Checks any address Just Broadcast the message";
   
    document.getElementById("msg4").innerHTML = "*It works as a multiport Repeater";

}