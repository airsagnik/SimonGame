$(document).keypress(function (){
  startgame(1);
});


function startgame(lev)
{
  $(document).off("keypress");
  $("h1").text("Level "+lev);
  var level=lev;
  var input=[];
  $(".color-box").click(function()
    {
        if(this.id==="1")
          {
              showclick(this.id,1);
          }
        if(this.id==="2")
          {
              showclick(this.id,1);
          }
        if(this.id==="3")
          {
            showclick(this.id,1);
          }
        if(this.id==="4")
          {
            showclick(this.id,1);
          }
    });

    function showclick(id,st)
    {
      console.log(id);
      if(id===1 || id==="1")
      {
        var aud=new Audio("sounds/red.mp3");
        aud.play();
      }
      if(id===2 || id==="2")
      {
        var aud=new Audio("sounds/blue.mp3");
        aud.play();
      }
      if(id===3 || id==="3")
      {
        var aud=new Audio("sounds/green.mp3");
        aud.play();
      }
      if(id===4 || id==="4")
      {
        var aud=new Audio("sounds/yellow.mp3");
        aud.play();
      }

      $("#"+id).addClass("clickin");
      if(st===1)
      {
        input.push(id);
      }
      setTimeout(function (){
        $("#"+id).removeClass("clickin")
      },400);
    }




      var patt=generatepattern();
      for(i=0;i<patt.length;i++)
      {

         setTimeout(exe,(1000*i),patt[i]);


      }
      setTimeout(check,1000*level*2);
      function check()
      {
        //console.log(patt);
        var flag=0;
        if(input.length===patt.length)
        {
          for(i=0;i<patt.length;i++)
          {
            if(input[i]!=patt[i])
            {
              flag=1;
              break;
            }
          }
        }
        else
        {
          flag=1;
        }
        if(flag===0)
        {

          level=level+1;
          $("h1").text("Congratulations, Moving to next...");
          setTimeout(startgame,1000,level);
        }
        else
        {
          $(document).keypress(function (){
            startgame(1);
          });
          var aud=new Audio("sounds/wrong.mp3");
          aud.play();
          $("body").addClass("wrong");
          setTimeout(function()
        {
          $("body").removeClass("wrong",100);
        });
          $("h1").text("Game Over. Press any key to reset");


        }
      }



    function generatepattern()
    {
        var patt=[];
        for(i=1;i<=level;i++)
        {
          k=Math.random();
          var no=Math.floor(k*4)+1;
          patt.push(no);
        }
        return patt;
    }
    function exe(k)
    {
       showclick(k,0);
    }
}
