// Link Functions
function blogPage() {
    window.location.href = "blog.html";
  }
function homePage() {
    window.location.href = "index.html";
  }


// Input Functions
function inputValue(id) {
    return parseFloat(document.getElementById(id).value);
  }
function inputText(id) {
    return document.getElementById(id).innerText;
  }


// Balance Total
const balanceTotal = document.getElementById("balance-total");
let total = parseFloat(balanceTotal.innerText);

//  Noakhali Donation
const btnNoakhali = document.getElementById("btn-card1");
btnNoakhali.addEventListener("click", function () {
 
  const amountNoakhali = inputValue("donation-amount1");

  if (amountNoakhali <= 0 || amountNoakhali === "" || amountNoakhali > total || isNaN(amountNoakhali))
    {
    alert("Invalid Donation Amount");
    return;
    }
 
  const titleNoa = inputText("title1");

  const donationNoa = document.getElementById("donation-price1");
  let noaDonationTotal = parseFloat(donationNoa.innerText);

  noaDonationTotal = noaDonationTotal + amountNoakhali;
  donationNoa.innerText = noaDonationTotal;

  total = total - amountNoakhali;
  balanceTotal.innerText = total;

  const modalNoa = document.getElementById("modal1");
  modalNoa.showModal();

  document.getElementById("donation-amount1").value = "";

  const historyDiv = document.createElement("div");
  historyDiv.className = "bg-white p-5 rounded-xl border border-gray-300";
  historyDiv.innerHTML = `
    <p class="text-base font-semibold">${amountNoakhali} Taka is Donated for ${titleNoa}</p><br>
    <p class="text-xs text-gray-500">Date : ${new Date().toString()}</p>
  `;

  const historySection = document.getElementById("history-menu");
  historySection.insertBefore(historyDiv, historySection.firstChild);
});


// Feni donation 

const btnFeni = document.getElementById("btn-card2");
btnFeni.addEventListener("click", function () {
 
  const amountFeni = inputValue("donation-amount2");

  if (amountFeni <= 0 || amountFeni === "" || amountFeni > total || isNaN(amountFeni)) 
    {
    alert("Invalid Donation Amount");
    return;
     }

  const titleFeni = inputText("title2");

  const donationFeni = document.getElementById("donation-price2");
  let feniDonationTotal = parseFloat(donationFeni.innerText);

  feniDonationTotal = feniDonationTotal + amountFeni;
  donationFeni.innerText = feniDonationTotal;

  total = total - amountFeni;
  balanceTotal.innerText = total;

  const modalFeni = document.getElementById("modal1");
  modalFeni.showModal();

  document.getElementById("donation-amount2").value = "";

  // History DIV
  const historyDiv = document.createElement("div");
  historyDiv.className = "bg-white p-5 rounded-xl border border-gray-300";
  historyDiv.innerHTML = `
    <p class="text-base font-semibold">${amountFeni} Taka is Donated for ${titleFeni}</p><br>
    <p class="text-xs text-gray-500">Date : ${new Date().toString()}</p>
  `;

  const historySection = document.getElementById("history-menu");
  historySection.insertBefore(historyDiv, historySection.firstChild);
});

// Quota donation 
const btnQuota = document.getElementById("btn-card3");
btnQuota.addEventListener("click", function () {
  
  const amountQuota = inputValue("donation-amount3");

  if (
    amountQuota <= 0 || amountQuota === "" || amountQuota > total || isNaN(amountQuota)) 
    {
    alert("Invalid Donation Amount");
    return;
     }

  const titleQuota = inputText("title3");

  const donationQuota = document.getElementById("donation-price3");
  let quotaDonationTotal = parseFloat(donationQuota.innerText);

  quotaDonationTotal = quotaDonationTotal + amountQuota;
  donationQuota.innerText = quotaDonationTotal;

  total = total - amountQuota;
  balanceTotal.innerText = total;

  const modalQuota = document.getElementById("modal1");
  modalQuota.showModal();

   document.getElementById("donation-amount3").value = "";

  const historyDiv = document.createElement("div");
  historyDiv.className = "bg-white p-5 rounded-xl border border-gray-300";
  historyDiv.innerHTML = `
    <p class="text-base font-semibold">${amountQuota} Taka is Donated for ${titleQuota}</p><br>
    <p class="text-xs text-gray-500">Date : ${new Date().toString()}</p>
  `;

  const historySection = document.getElementById("history-menu");
  historySection.insertBefore(historyDiv, historySection.firstChild);
});
