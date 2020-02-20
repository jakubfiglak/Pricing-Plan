const checkbox = document.querySelector('#switch');
const priceElements = document.querySelectorAll('.price');

const annualPrices = {
  basic: '199.99',
  prof: '249.99',
  master: '399.99',
};

const monthPrices = {
  basic: '19.99',
  prof: '24.99',
  master: '39.99',
};

function displayPrices() {
  if (this.checked) {
    priceElements.forEach(price => {
      price.innerHTML = `<span>$</span>${monthPrices[price.id]}`;
    });
  } else {
    priceElements.forEach(price => {
      price.innerHTML = `<span>$</span>${annualPrices[price.id]}`;
    });
  }
}

checkbox.addEventListener('change', displayPrices);
