//add event listeners
//add calculate listener
document.querySelector('.calculate').addEventListener('click', 

function(){
    document.getElementById('output').style.display='none'

    document.querySelector('.loader').style.display='block'
    setTimeout(BMI, 2000)
})
//add clear listener
document.querySelector('.clear').addEventListener('click', Clear)


//calculate function BMI
function BMI(){
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    
    //BMI formular
    let index = (weight / (((height / 100) * height) / 100)).toFixed(0)

    if (height && weight != 0){
        const output = document.getElementById('output')
        const state = document.getElementById('state')
        output.innerHTML= 'Your BMI is ' + index
        if (index < 15){
            state.innerHTML = 'You are very severely underweight'
        } else if (index < 16){
            state.innerHTML = 'You are severely underweight'
        } else if (index < 18.5){
            state.innerHTML = 'You are underweight'
        } else if (index < 25){
            state.innerHTML = 'You have normal (healthy) weight'
        }else if (index < 30) {
            state.innerHTML = 'You are  overweight'
        }else if (index < 35){
            state.innerHTML = 'You are Obese class I(moderately obese)'
        } else if (index < 40){
            state.innerHTML = 'You are Obese class II (severly obese)'
        } else if (index > 40){
            state.innerHTML = 'You are Obese class III (very severely obese)'
        }
        document.getElementById('output').style.display='block'
        document.querySelector('.loader').style.display='none'
    } else {
        alert('error!')
    }
}
function Clear(){
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('output').innerHTML = '';
    document.getElementById('state').innerHTML = '';
}