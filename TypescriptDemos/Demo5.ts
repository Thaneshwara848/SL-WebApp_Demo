class Demo5
{
   // const speed=200;  kind of final 
   
   speed=200;
    constructor()
    {
        for(var i=0;i<=10;i++)
      //for(let i=0;i<=10;i++)
        {

            console.log(i)
        }
        console.log("Hiiiiiiiiiii : "+i )
    }
}

var v = new Demo5();


console.log(v.speed);
v.speed=20000;
console.log(v.speed)