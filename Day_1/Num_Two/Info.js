function getAge(name , birthdate)
{
    
    //var year = new Date(birthdate);
    var year = new Date(birthdate).getFullYear();
    var currentYear = new Date().getFullYear(); 
    // console.log(year);
    // console.log(currentYear);
    if( year > currentYear)
    {
        throw new Error("your birthdate ins't valid");
    }
    else
    {
        var age = currentYear - year ;
    }
    return "Hellow" +" "+ name+" "+"your age is : "+ age; 
}
module.exports = {GetAge:getAge};