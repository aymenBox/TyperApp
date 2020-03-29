var app = {
    // Application Constructor
    initialize: function() {
            document.addEventListener("deviceready", this.onDeviceReady, false);
            this.onDeviceReady();     
    },

    onDeviceReady: function() {
        // We will init / bootstrap our application here
        var text = "Press on start then type this paragraph so you can test your typing speed , can you do this with no mistakes .";
        document.getElementById("t").innerHTML=text;
        var t=document.getElementById("t").innerHTML;
        var res=document.getElementById("result");
        var tar=t.split("");
        var i=0;
        var mistakes = 0;
        console.log(t);
        document.getElementById("myinp").addEventListener("input", check);
        document.getElementById("bt").addEventListener("click",play)
        function play(){
            document.getElementById("myinp").value="";
            var counter=60;
            document.getElementById("tmr").innerHTML=counter;
            document.getElementById("myinp").focus();
            var inter = setInterval(function(){
                counter--;
                document.getElementById("tmr").innerHTML=counter;
                if(counter==0){
                    clearInterval(inter);
                    document.getElementById("myinp").disabled=true;
                    res.innerHTML="Time is over";
                }
            },1000);
        }
        function check() 
        {
            char = document.getElementById("myinp").value;
            console.log(char);
            if(text==char){
                document.getElementById("myinp").disabled=true;
                clearInterval(inter);
                res.innerHTML+="You have made "+mistakes+" mistakes over "+text.length+" character"
            }
            if(char[char.length-1]==tar[i]){
                i++;
                document.getElementById("t").style.color="green";
            }
            else{
                document.getElementById("t").style.color="red";
                mistakes++;

            }

        }

    },
};
app.initialize();

