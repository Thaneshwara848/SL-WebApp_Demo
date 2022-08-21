class Demo3
{
    private  name="Ramesh";
    constructor()
    {
        console.log("Hi Demo 3 "+this.name)
    }
}
class A  extends Demo3
{
    constructor()
    {
        super();
        //console.log("Hi A "+this.name)private , we cant 
        // console.log("Hi A "+this.name) if it is public we can access 
    }
}
var a = new A();
