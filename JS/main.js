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