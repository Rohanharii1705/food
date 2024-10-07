let order = [];
let totalAmount = 0;

function addToOrder(itemName, itemPrice) {
    order.push({ name: itemName, price: itemPrice });
    updateOrderSummary();
}

function updateOrderSummary() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';
    totalAmount = 0;

    order.forEach((item, index) => {
        totalAmount += item.price;
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromOrder(index);
        
        listItem.appendChild(removeButton);
        orderList.appendChild(listItem);
    });

    document.getElementById('total-price').textContent = totalAmount.toFixed(2);
}

function removeFromOrder(index) {
    order.splice(index, 1);
    updateOrderSummary();
}

function placeOrder() {
    if (order.length === 0) {
        alert("Your order is empty!");
        return;
    }

    const orderSummary = order.map(item => item.name).join(', ');
    alert(`Your order: ${orderSummary}\nTotal: $${totalAmount.toFixed(2)}`);

    order = [];
    totalAmount = 0;
    updateOrderSummary();
}