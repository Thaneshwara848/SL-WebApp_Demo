var Demo5 = /** @class */ (function () {
    function Demo5() {
        this.speed = 200;
        for (var i = 0; i <= 10; i++) 
        //for(let i=0;i<=10;i++)
        {
            console.log(i);
        }
        console.log("Hiiiiiiiiiii : " + i);
    }
    return Demo5;
}());
var v = new Demo5();
console.log(v.speed);
v.speed = 20000;
console.log(v.speed);
