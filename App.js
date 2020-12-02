// document.getElementById('calBtn').addEventListener('click', calculateResults())

function calculateResult() {

    //Loader bar and Remeber
    const loader = document.getElementById('loading');

    loader.style.display = 'block'

    setTimeout(doSomething, 3000);

    function doSomething() {
        console.log('Function Running...')
        const amount = document.getElementById('amount').value;
        const intrest = document.getElementById('intrest').value
        const years = document.getElementById('years').value
        console.log(amount)
        console.log(intrest)
        console.log(years)

        //Result Labels Display 
        const monthlyPayments = document.getElementById('monthly-payment')
        const totalPayment = document.getElementById('total-payment')
        const totalIntrest = document.getElementById('total-intrest')

        const remember = document.getElementById('remember')
        //Apply Formulas
        const principal = (amount);
        const calcualtedIntrest = (intrest) / 100 / 12;
        const calculatePayments = (years) * 12;
        const x = Math.pow(1 + calcualtedIntrest, calculatePayments);
        const monthly = (principal * x * calcualtedIntrest) / (x - 1)


        //Display results
        monthlyPayments.value = monthly.toFixed(2);
        console.log(monthlyPayments)

        totalPayment.value = (monthly * calculatePayments).toFixed(2);
        console.log(totalPayment)

        totalIntrest.value = ((monthly * calculatePayments) - principal).toFixed(2)
        console.log(totalIntrest)

        remember.style.display = 'block'
        loader.style.display = 'none'
    }

}



// var loader = document.getElementById('loading');
// //loader.style.display = 'block'
// setTimeout(hideBar, 5000)
// function hideBar() {
//     loader.style.display = 'none'
//     remember.style.display = 'none'
// }

