const cards = document.getElementsByClassName("card");
let seatCount = 0;
let price = 0;
const store = [];

for (const card of cards) {
  card.addEventListener("click", function () {
    card.disabled = true;
    seatCount = seatCount + 1;
    const remainingSeat = document.getElementById("seat-four").innerText;
    const seatFour = remainingSeat - 1;
    const totalPrice = price + 550;
    const perSeatPrice = parseFloat(document.getElementById("total-price").innerText) + totalPrice;

    
    const putDataContainer = document.getElementById("book-seat-info");
    const getSeatInnerText = card.innerText;
    store.push(getSeatInnerText);
    if (store.length <= 4) {
      
      const createTr = document.createElement("tr");
      const td = document.createElement("td");
      td.innerText = getSeatInnerText;
      const p = document.createElement("td");
      const tk = document.createElement("td");
      p.innerText = "economic";
      tk.innerText = 550;
      createTr.appendChild(td);
      createTr.appendChild(p);
      createTr.appendChild(tk);
      putDataContainer.appendChild(createTr);
      console.log(getSeatInnerText);
      

      setInnerText("book-seat", seatCount);
      setInnerText("seat-four", seatFour);
      setInnerText("total-price", perSeatPrice);
      setInnerText("grand-total", perSeatPrice);
      
      card.style.backgroundColor = "#1DD100";

    } else {
      return alert("Your seat limit is exist");
    }


    document.getElementById("coupon-btn").addEventListener("click", function () {
        
        const getInputValue = document.getElementById("coupon-input").value;
        if (getInputValue === "NEW15") {
          const discount = perSeatPrice * 0.15;
          const afterDiscount = perSeatPrice - discount;
          setInnerText("grand-total", afterDiscount);
          console.log("parse", afterDiscount);
        } else if (getInputValue === "Couple 20") {
          const discount = perSeatPrice * 0.2;
          const afterDiscount = perSeatPrice - discount;
          setInnerText("grand-total", afterDiscount);
          console.log("parse", afterDiscount);
        } else {
          alert("invalid coupon");
        }
        console.log(getInputValue);
      });
  });
}
console.log(store);

function setInnerText(id, value) {
  const getId = document.getElementById(id);
  getId.innerText = value;
}


document.getElementById("inputField").addEventListener("keyup", function () {
  var inputText = this.value.trim();
  var enableButton = document.getElementById("enableButton");

  if (inputText !== " ") {
    enableButton.removeAttribute("disabled");

  } else {
    enableButton.setAttribute("disabled", "disabled");
  }
});
