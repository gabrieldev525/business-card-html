document.querySelector('#info-form').onsubmit = (event) => {
    let emailField = document.querySelector('#email-field')
    let cellphoneField = document.querySelector('#cellphone-field')
    let addressField = document.querySelector('#address-field')

    if(!emailField.value || !cellphoneField.value || !addressField.value) {
        document.querySelector('.warning').style.display = 'block';

        if(!emailField.value)
            emailField.classList.add('required-field')
        if(!cellphoneField.value)
            cellphoneField.classList.add('required-field')
        if(!addressField.value)
            addressField.classList.add('required-field')
    } else {
        document.querySelector('#email-text').innerHTML = emailField.value
        document.querySelector('#cellphone-text').innerHTML = cellphoneField.value
        document.querySelector('#address-text').innerHTML = addressField.value

        document.querySelector('.modal').style.display = 'none'
    }

    return false;
};

const fields = document.querySelectorAll('.field')
for(field of fields) {
    field.oninput = function() {
        const warning = document.querySelector('.warning')
        if(warning.style.display != 'none')
            warning.style.display = 'none' 
        this.classList.remove('required-field')
    }
}