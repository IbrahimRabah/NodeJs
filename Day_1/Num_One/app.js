var mathOpertion = require('./math');

console.log(mathOpertion.add(4,8));

console.log(mathOpertion.sub(4,8));

console.log(mathOpertion.muti(8,4));

console.log(mathOpertion.div(8,4));

try 
  {
    console.log(mathOpertion.add('A', 3));
  } 
  catch (error) 
  {
    console.error(error.message); 
  }
 
  try 
  {
    console.log(mathOpertion.div(8,0));
  } 
  catch (error) 
  {
    console.error(error.message); 
  }

  try 
  {
    console.log(mathOpertion.muti('D','S'));
  } 
  catch (error) 
  {
    console.error(error.message); 
  }
 
