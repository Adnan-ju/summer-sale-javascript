function getElementValue(id){
        const valueblock = document.getElementById(id);
        const valueString= valueblock.innerText;
        const value= parseFloat(valueString);
        return value;  
}

function getPresentTotal(id)
{
        const presentTotalBlock=document.getElementById(id);
        const presentTotalString=presentTotalBlock.innerText;
        const presentTotal=parseFloat(presentTotalString);
        return presentTotal;
}
function setTotal(id,total)
{
    const totalBlock= document.getElementById(id);
    totalBlock.innerText=total;
}

function checkButton(Total)
{
        const applyButton = document.getElementById('apply-button');
        if (Total > 200) {
            applyButton.removeAttribute('Disabled');
        }
}
function checkPurchase(Total)
{
        const applyPurchase= document.getElementById('make-purchase');
        if (Total > 0) {
            applyPurchase.removeAttribute('Disabled');
        }
}
function addList(name)
{   
    const ListDiv =document.getElementById('purchase-list');
    const count= ListDiv.childElementCount;
    const p= document.createElement('p');
    p.classList.add('my-3');
    p.innerHTML =`${count+1}. ${name}`;
    console.log(`${count+1}. ${name}`);
    ListDiv.appendChild(p);
}

