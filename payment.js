
// Function to submit the payment
function submitPayment() {
    // Gather data from the form fields
    const nameSurname = document.querySelector('.payInput[placeholder="ELISA ELIVE"]').value;
    const phoneNumber = document.querySelector('.payInput[placeholder="+250 787239952"]').value;
    const address = document.querySelector('.payInput[placeholder="Nyarugenge St 21 22-145"]').value;
    const cardNumber = document.querySelector('.payInput[placeholder="Card Number"]').value;
    const cardMM = document.querySelector('.payInput[placeholder="mm"]').value;
    const cardYYYY = document.querySelector('.payInput[placeholder="yyyy"]').value;
    const cvv = document.querySelector('.payInput[placeholder="cvv"]').value;

    // Perform validation if needed

    // Construct a data object to send to the server
    const paymentData = {
        nameSurname,
        phoneNumber,
        address,
        cardNumber,
        cardMM,
        cardYYYY,
        cvv
    };

    // Send the payment data to the server using AJAX, fetch, or another method
    // Here, we'll simply log the data to the console as an example
    console.log(paymentData);

    // You can also redirect to a payment gateway or perform further processing here
}

// Add a click event listener to the submit button
document.getElementById('submitPayment').addEventListener('click', submitPayment);
