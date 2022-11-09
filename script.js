let byTagname = document.querySelector('h1')
let input = document.querySelector('text')
let button = document.querySelector('button')

button.addEventListener('click' , function()
{
    let text = text.value
    byTagname.style.color = text
    input.value = " "
})  