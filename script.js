document.getElementById('submitBtn').addEventListener('click', function() {
    const selectedOption = document.getElementById('dropdownMenu').value;
    if (selectedOption) {
        window.location.href = selectedOption;
    } else {
        alert('Please select an option from the dropdown menu.');
    }
});
