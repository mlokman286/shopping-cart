function getTotal(phone, casing) {
    const phonePrice = 500;
    const casingPrice = 50;
    const phoneCost = phone * phonePrice;
    const casingCost = casing * casingPrice;
    const total = phoneCost + casingCost;
    // const totalElement = document.getElementById('totalCost');
    // totalElement.innerText = total;
    return total;
}
const totalCost = getTotal(4, 5);
const firstResult = document.getElementById('firstResult');
firstResult.innerText = totalCost;

const secondResult= document.getElementById('secondResult');
secondResult.innerText = totalCost;