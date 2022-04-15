const form = document.getElementById('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let name = document.querySelector('#name').value
    let phone = document.querySelector('#phone').value
    let message = document.querySelector('#message').value

    let my_text = `Result is: %AO - Ism: ${name} %AO - Telefon: ${phone} %AO - Ism: ${message}`

    let token = '5219968887:AAH-F720dZq2CcoqeJRe_HH_lUQHgDzGoLc'
    let chat_id = -1001796764085
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}/`

    console.log(name);
})