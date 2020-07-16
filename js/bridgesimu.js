document.getElementById("net1").style.visibility = "hidden";
document.getElementById("net2").style.visibility = "hidden";
document.getElementById("net3").style.visibility = "hidden";
document.getElementById("net4").style.visibility = "hidden";
document.getElementById("net5").style.visibility = "hidden";
function myMove() {
    
    var elem = document.getElementById("net");   
    posx = 650
    posy = 60
    var id = setInterval(frame, 16);

    
    function frame() {
        if (posx == 910) {
             document.getElementById("net").style.visibility = "hidden";
    
             clearInterval(id)
            
                if(document.getElementById("p3").checked)
                {
                    document.getElementById("net5").style.visibility = "visible";
                   
                    document.getElementById("net1").style.visibility = "visible";
                    

                    setTimeout(function(){
                        myMove2()   
                        myMove3()  
                       
                    },2000);
                    setTimeout(function(){
                        
                    document.getElementById("net5").style.visibility = "hidden";
                        document.getElementById("net2").style.visibility = "visible";
                    },5000)
                    
                    setTimeout(myMove4,7000);
                    
                    setTimeout(function(){
                        document.getElementById("net3").style.visibility = "visible";
                        document.getElementById("net4").style.visibility = "visible";

                        myMove5()
                        myMove6()
                        document.getElementById("net2").style.visibility = "hidden";
                    },11000);


                }
                if(document.getElementById("p5").checked)
                {
                    document.getElementById("net5").style.visibility = "visible";
                    
                    document.getElementById("net1").style.visibility = "visible";
                    

                    setTimeout(function(){
                        myMove2()   
                        myMove3()  
                       
                    },2000);
                    setTimeout(function(){
                        
                    document.getElementById("net5").style.visibility = "hidden";
                    document.getElementById("net2").style.visibility = "visible";
                    },5000)
                    
                    
                    setTimeout(myMove4,7000);
                    
                    setTimeout(function(){
                        document.getElementById("net3").style.visibility = "visible";
                        document.getElementById("net4").style.visibility = "visible";
                       
                        myMove5()
                        myMove6()
                        document.getElementById("net2").style.visibility = "hidden";
                    },11000);
    
                }
                if(document.getElementById("p2").checked)
                {
                    document.getElementById("net5").style.visibility = "visible";
                    document.getElementById("net1").style.visibility = "visible";
                    setTimeout(function(){
                        myMove2()
                        myMove3()
                        
                    },2000);

                }
                setTimeout(function(){
                    document.getElementById("net1").style.visibility = "hidden";

                },6000);

                if(document.getElementById("p2").checked)
                {
                    if(document.getElementById("p3").checked)
                    {
                        document.getElementById("net5").style.visibility = "visible";
                   
                    document.getElementById("net1").style.visibility = "visible";
                    

                    setTimeout(function(){
                        myMove2()   
                        myMove3()  
                       
                    },2000);
                    setTimeout(function(){
                        
                    document.getElementById("net5").style.visibility = "visible";
                        document.getElementById("net2").style.visibility = "visible";
                    },5000)
                    
                    setTimeout(myMove4,7000);
                    
                    setTimeout(function(){
                        document.getElementById("net3").style.visibility = "visible";
                        document.getElementById("net4").style.visibility = "visible";

                        myMove5()
                        myMove6()
                        document.getElementById("net2").style.visibility = "hidden";
                    },11000);
                    }
                    if(document.getElementById("p5").checked)
                    {
                        document.getElementById("net5").style.visibility = "visible";
                    
                    document.getElementById("net1").style.visibility = "visible";
                    

                    setTimeout(function(){
                        myMove2()   
                        myMove3()  
                       
                    },2000);
                    setTimeout(function(){
                        
                    document.getElementById("net5").style.visibility = "visible";
                    document.getElementById("net2").style.visibility = "visible";
                    },5000)
                    
                    
                    setTimeout(myMove4,7000);
                    
                    setTimeout(function(){
                        document.getElementById("net3").style.visibility = "visible";
                        document.getElementById("net4").style.visibility = "visible";
                       
                        myMove5()
                        myMove6()
                        document.getElementById("net2").style.visibility = "hidden";
                    },11000);
                    }
                }
            
        }
        
        else {
           
                posx++;
              
                elem.style.top =posy + "px"; 
                elem.style.left = 1.05*posx + "px";
                
            }
        
    }
setTimeout(show,11000);
}

function myMove2() {
    var elem = document.getElementById("net5");   
    posx1 = 940;
    posy1 = 60;
    var id2 = setInterval(frame2, 16);

    function frame2() {
        if (posx1 == 1130) {
        	 clearInterval(id2);
             
        }
        
        else {
           
                posx1++;
                
                elem.style.top =posy1 + "px"; 
                elem.style.left =1.05*posx1 + "px";
                
            }
        
    }
    
}
function myMove3() {
    var elem = document.getElementById("net1");   
    posx2 = 940;
    posy2 = 60;
    var id3 = setInterval(frame1, 16);

    function frame1() {
        if (posy2 == 260) {
        	 clearInterval(id3);
             
        }
        
        else {
                posy2++;
               
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
        if (posy3 == 470) {
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
    posx4 = 940;
    posy4 = 485;
    var id5 = setInterval(frame4, 16);

    
    function frame4() {
        if (posx4 == 660) {
        	 clearInterval(id5);
             
        }
        
        else {
           
                posx4--;
                
               
                elem.style.top =posy4 + "px"; 
                elem.style.left =.9999*posx4 + "px";
                
            }
        
    }
  
}
function myMove6() {
    var elem = document.getElementById("net4");   
    posx5 = 900;
    posy5 = 485;
    var id6 = setInterval(frame5, 16);

    
    function frame5() {
        if (posx5 == 1130) {
        	 clearInterval(id6);
             
        }
        
        else {
           
                posx5++;
               
               
                elem.style.top =posy5 + "px"; 
                elem.style.left =1.05*posx5 + "px";
                
            }
        
    }

}

function show()
{
    document.getElementById("msg1").innerHTML = "*Bridge works on Physical and data Link Layer";
             
    document.getElementById("msg2").innerHTML = "*It is a 2 port device.";
  
    document.getElementById("msg3").innerHTML = "*Bridge checks to forward or filter the packet using routing table";
   
    document.getElementById("msg4").innerHTML = "*It is also used for interconnecting two LANs working on the same protocol";

   
}

