const currencyOne = $("#currency-one");
const currencyTwo = $("#currency-two");
const amountOne = $("#amount-one");
const amountTwo = $("#amount-two");
const rateElement = $("#rate");
const swapBtn = $("#swap");

function calculate() {
  const currency_one = currencyOne.val();
  const currency_two = currencyTwo.val();
  const url = `https://api.exchangerate-api.com/v4/latest/${currency_one}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency_two];
      rateElement.text(`1 ${currency_one} = ${rate} ${currency_two}`);
      amountTwo.val((amountOne.val() * rate).toFixed(2));
    })
    .catch((error) => {
      console.error("Fetch Error:", error);
    });
}

function swapRate() {
  const temp = currencyOne.val();
  currencyOne.val(currencyTwo.val());
  currencyTwo.val(temp);
  calculate();
}

currencyOne.on("change", calculate);
amountOne.on("input", calculate);
currencyTwo.on("change", calculate);
amountTwo.on("input", calculate);

swapBtn.on("click", swapRate);

calculate();
