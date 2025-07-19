// Sample cart from localStorage
const cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-items");
const totalAmountEl = document.getElementById("total-amount");
let total = 0;

cart.forEach(item => {
  const itemDiv = document.createElement("div");
  itemDiv.innerText = `${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`;
  cartContainer.appendChild(itemDiv);
  total += item.price * item.quantity;
});

totalAmountEl.textContent = total;

// Place Order Button
document.getElementById("place-order").addEventListener("click", () => {
  const isLoggedIn = localStorage.getItem("loggedIn");

  if(true){
        alert("Order placed successfully!");
        localStorage.removeItem("cart");
        window.location.href = "index.html";
  }

  const orderData = {
    items: cart.map(item => ({
      product: item.id,
      quantity: item.quantity
    }))
  };

  fetch("http://127.0.0.1:8000/api/orders/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData)
  })
  .then(res => {
    if (res.ok) {
      alert("Order placed successfully!");
      localStorage.removeItem("cart");
      window.location.href = "index.html";
    } else {
      alert("Failed to place order.");
    }
  });
});
