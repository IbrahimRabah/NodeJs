var personInfo = require('./Info');

try 
  {
    console.log(personInfo.GetAge("Prahim",'2000-01-01'));
    //console.log(personInfo.GetAge("Prahim",2000)); 
  } 
  catch (error) 
  {
    console.error(error.message); 
  }