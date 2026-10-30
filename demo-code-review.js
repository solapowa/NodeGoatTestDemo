function calculateTotal(prices) {
  debugger;
  console.log("TEMP DEBUG - prices:", prices);

  return prices.reduce((sum, price) => sum + price, 0);
}

module.exports = { calculateTotal };
