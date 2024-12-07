// Toggle buttons
const donateBtn = document.getElementById('donation-button');
console.log("donateBtn");
const historyBtn = document.getElementById('history-button');
const historyMenu = document.getElementById('history-menu');
const donationSection = document.getElementById('donation-section');

historyBtn.addEventListener('click', function() {
    donationSection.classList.add('hidden');
    historyMenu.classList.remove('hidden');
    historyBtn.classList.add('bg-primary');
    donateBtn.classList.remove('bg-primary','hover:bg-gray-200');
    donateBtn.classList.add('border-2','hover:bg-gray-200');
    historyBtn.classList.remove('hover:bg-gray-200')
})

donateBtn.addEventListener('click', function(){
    historyMenu.classList.add('hidden');
    donationSection.classList.remove('hidden')
    historyBtn.classList.remove('bg-primary');
    donateBtn.classList.add('bg-primary',);
    donateBtn.classList.remove('border-2')
})
function convertValue(id){
    return parseFloat(document.getElementById(id).value);
}

function calculatePrice(total, donationAmount, donationText, postTitle){
    const AccountBalance = parseFloat(document.getElementById(total).innerText);
    const donationPriceValid = document.getElementById(donationAmount).value.trim();
    const donationPrice = convertValue(donationAmount);
    
    const validNumber = /^\d+(\.\d+)?$/.test(donationPriceValid);
    if(!validNumber || donationPrice <= 0 || isNaN(donationPrice)){
        return alert('Invalid Donation');
    }
    if(AccountBalance < donationPrice){
        return alert('insufficient balance')
    }
    const totalDonation = AccountBalance - donationPrice;
    document.getElementById(total).innerText = totalDonation.toFixed(2)

    const donationValueEl = document.getElementById(donationText);
    const donationValue = parseFloat(donationValueEl.innerText)

    const newDonation = donationPrice + donationValue;
    donationValueEl.innerText = newDonation.toFixed(2);
    document.getElementById(donationAmount).value = '';
    
    //history
    const donationTitel = document.getElementById(postTitle).innerText;
    const historyDiv = document.getElementById('history-menu')
    const history = document.createElement('div');
    history.innerHTML += `
        <div class="border-2 p-5 rounded-xl mt-4 space-y-4">
            <h1>${donationPrice.toFixed(2)} ${donationTitel}</h1>
            <p>${new Date().toString()}</p>
        </div>
    `
    historyDiv.insertBefore(history, historyDiv.firstChild)

    //show modal
    document.getElementById('my_modal_1').showModal();
}
// Close the modal
document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('my_modal_1').close();
});

// card# 1:

document.getElementById('btn-card1').addEventListener('click', function(){
        calculatePrice('total', 'donation-amount1', 'donation-price1', 'title1')
    }
)
// card# 2:
document.getElementById('btn-card2').addEventListener('click', function(){
        calculatePrice('total', 'donation-amount2', 'donation-price2', 'title2')
    }
)
// card# 3:
document.getElementById('btn-card3').addEventListener('click', function(){
        calculatePrice('total', 'donation-amount3', 'donation-price3', 'title3')
    }
)