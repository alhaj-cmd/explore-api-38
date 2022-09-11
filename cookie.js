document.getElementById('btn-exm').addEventListener('click', function(){
    const nameField = document.getElementById('input-field');
    const nameValue = nameField.value;
    //console.log('hello',inputField);
    localStorage.setItem('name',nameValue)
})