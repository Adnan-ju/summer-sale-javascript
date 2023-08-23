document.getElementById('access-1').addEventListener('click',function()
{
    const value= getElementValue('access-1-taka');
    const presentTotal= getPresentTotal('total');
    const Total=presentTotal+value;  
    const TotalTwoDecimal=Total.toFixed(2);
    setTotal('total',TotalTwoDecimal);
    checkButton(Total);
    checkPurchase(Total);
    const name= document.getElementById('access-1-name').innerText;
    addList(name);
})

document.getElementById('access-2').addEventListener('click',function()
{
    const value= getElementValue('access-2-taka');
    const presentTotal= getPresentTotal('total');
    const Total=presentTotal+value;
    const TotalTwoDecimal=Total.toFixed(2);
    setTotal('total',TotalTwoDecimal);
    checkButton(Total);
    checkPurchase(Total);
    const name= document.getElementById('access-2-name').innerText;
    addList(name);
})

document.getElementById('access-3').addEventListener('click',function()
{
    const value= getElementValue('access-3-taka');
    const presentTotal= getPresentTotal('total');
    const Total=presentTotal+value;
    const TotalTwoDecimal=Total.toFixed(2);
    setTotal('total',TotalTwoDecimal);
    checkButton(Total);
    checkPurchase(Total);
    const name= document.getElementById('access-3-name').innerText;
    addList(name);
})

document.getElementById('sports-1').addEventListener('click',function()
{
    const value= getElementValue('sports-1-taka');
    const presentTotal= getPresentTotal('total');
    const Total=presentTotal+value;
    const TotalTwoDecimal=Total.toFixed(2);
    setTotal('total',TotalTwoDecimal);
    checkButton(Total);
    checkPurchase(Total);
    const name= document.getElementById('sports-1-name').innerText;
    addList(name);
})

document.getElementById('sports-2').addEventListener('click',function()
{
    const value= getElementValue('sports-2-taka');
    const presentTotal= getPresentTotal('total');
    const Total=presentTotal+value;
    const TotalTwoDecimal=Total.toFixed(2);
    setTotal('total',TotalTwoDecimal);
    checkButton(Total);
    checkPurchase(Total);
    const name= document.getElementById('sports-2-name').innerText;
    addList(name);
})

document.getElementById('sports-3').addEventListener('click',function()
{
    const value= getElementValue('sports-3-taka');
    const presentTotal= getPresentTotal('total');
    const Total=presentTotal+value;
    const TotalTwoDecimal=Total.toFixed(2);
    setTotal('total',TotalTwoDecimal);
    checkButton(Total);
    checkPurchase(Total);
    const name= document.getElementById('sports-3-name').innerText;
    addList(name);
})

document.getElementById('apply-button').addEventListener('click',function(){
    const textField = document.getElementById('code');
    const textString =textField.value;
    console.log(textString);
    if(textString==='SELL200')
    {
    const totalValue = getPresentTotal('total');
    const discountValue = totalValue*0.2;
    discountValueTwoDecimal= discountValue.toFixed(2)
    const discountField= document.getElementById('discount');
    discountField.innerText=discountValueTwoDecimal;
    const finalValue = totalValue-discountValue;
    const finalValueTwoDecimal=finalValue.toFixed(2);
    const finalValueField=document.getElementById('finalTotal');
    finalValueField.innerText=finalValueTwoDecimal;
    }
    else
    {
        window.alert("Coupon code is invalid");
    }
})

document.getElementById('apply-modal').addEventListener('click',function()
{
    const listBlock =document.getElementById('purchase-list');
    const totalBlock = document.getElementById('total');
    const discountBlock = document.getElementById('discount');
    const finalBlock = document.getElementById('finalTotal');
    const applyPurchase= document.getElementById('make-purchase');
    const applyButton = document.getElementById('apply-button');
    const textField = document.getElementById('code');

    listBlock.innerText="";
    totalBlock.textContent = 0.00;        
    discountBlock.textContent = 0.00;     
    finalBlock.textContent = 0.00;  
    applyPurchase.setAttribute('Disabled','Disabled');
    applyButton.setAttribute('Disabled','Disabled');
    textField.value="";
})

    


