function Add(num1,num2)
{
    if(isNaN(num1) || isNaN(num2)){
    throw new Error('arguments must be numbers');
    }
    return num1+num2;
}

function Sub(num1,num2)
{
    if(isNaN(num1) || isNaN(num2)){
    throw new Error('arguments must be numbers');
    }
    return num1-num2;
}

function Multi(num1,num2)
{
    if(isNaN(num1) || isNaN(num2)){
    throw new Error('arguments must be numbers');
    }
    return num1*num2;
}

function Div(num1,num2)
{
    if(isNaN(num1) || isNaN(num2) ){
    throw new Error('arguments must be numbers');
    }
    else if( num2 == 0 )
    {
        throw new Error('num2 must be not equal zero');
    }
    else
    {
        return num1/num2;
    }
    
}

// module.exports = {Add,Sub,Multi,Div};
module.exports = {add:Add,sub:Sub,muti:Multi,div:Div};
