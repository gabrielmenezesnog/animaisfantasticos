export default function initFetchBitcoin() {
  function displayValue(donationValue) {
    const target = document.querySelector('.btc-preco');
    target.innerHTML = donationValue;
  }

  async function fetchBitcoin(url) {
    try {
      const res = await fetch(url);
      const jsonBody = await res.json();
      const donationValue = (50 / jsonBody.BRL.buy).toFixed(4);

      displayValue(donationValue);
    } catch (error) {
      console.log(error);
    }
  }

  fetchBitcoin('https://blockchain.info/ticker');
}
