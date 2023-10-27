const currencyFirstEl = document.getElementById('currency-first');
const worthFirstEl = document.getElementById('worth-first');

const currencySecondEl = document.getElementById('currency-second');
const worthSecondEl = document.getElementById('worth-second');

const exchangeRateEl = document.getElementById('exchange-rate')


function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/5f2f895d5302f0dc818765f4/latest/${currencyFirstEl.value}`)
        .then((res)=>res.json())
        .then((data)=> {
            const rate = data.conversion_rates[currencySecondEl.value];
            console.log(rate);
            exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate + '' + currencySecondEl.value}`
        });
}


currencyFirstEl.addEventListener('change',updateRate)

currencySecondEl.addEventListener('change',updateRate)

worthFirstEl.addEventListener('input',updateRate)

