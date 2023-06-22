const countdown = (input) => {
    const countContainer = document.getElementById('countContainer')

    for (let i = input; i >= 0; i--){
         
        setTimeout(function () {
            renderCount(i)
        }, (input - i) * 1000)
        if (i === 0) {
            setTimeout(function () {
                renderCount('KABOOM!!!')
                startKaboom()
            }, input * 1000)
        }
        
        }
    
    
}

const startKaboom = () => {
    document.body.style.backgroundColor = 'red'
}

const renderCount = (value) => {
    const countNum = document.getElementById('countNum')
    countNum.textContent = value 
    

}
    



const startCount = (event) => {
    event.preventDefault()
    const num = document.getElementById('num')
    const numInput = parseInt(num.value)
    countdown(numInput)
    
}

document.getElementById('doom').addEventListener('click', function (event) {
    startCount(event)
})

// const countdown = (input) => {
//   const countContainer = document.getElementById('countContainer');

//   for (let i = input; i >= 0; i--) {
//     setTimeout(function() {
//       renderCount(i);
//     }, (input - i) * 1000);

//     if (i === 0) {
//       setTimeout(function() {
//         renderCount('KABOOM!!!');
//       }, input * 1000);
//     }
//   }
// };

// const renderCount = (value) => {
//   const countNum = document.getElementById('countNum');
//   countNum.textContent = value;
// };

// const startCount = (event) => {
//   event.preventDefault();
//   const num = document.getElementById('num');
//   const numInput = parseInt(num.value);
//   countdown(numInput);
// };

// document.getElementById('doom').addEventListener('click', startCount);


