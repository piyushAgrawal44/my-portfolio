let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function (e) {
    document.getElementById('customLoaderBox').style.visibility='visible';
    document.getElementById('submit_btn').disabled = true;
    e.preventDefault();  //stop form from submitting


    let userName = document.getElementsByName('name')[0].value;
    let userEmail = document.getElementsByName('email')[0].value;
    let userPhone = document.getElementsByName('phone')[0].value;
    let userSubject = document.getElementsByName('subject')[0].value;
    let userMessage = document.getElementsByName('message')[0].value;

    if (userName && userEmail && userPhone && userSubject && userMessage) {
        $.ajax({
            url: "https://wodrsbattlegame.000webhostapp.com/backend_api_for_my_other_project/my_portfolio_api/contact_us.php",
            type: 'POST',
            data: {
                'name': userName,
                'email': userEmail,
                'phone': userPhone,
                'subject': userSubject,
                'message': userMessage
            },
            cache: false,
            success: function (data) {
                // console.log(data);
                document.getElementById('customLoaderBox').style.visibility='hidden';
                $('#errorMessage').text("Thank you for your request.");
                $('#successModal').modal('show');
                document.getElementsByName('name')[0].value = "";
                document.getElementsByName('email')[0].value = "";
                document.getElementsByName('phone')[0].value = "";
                document.getElementsByName('subject')[0].value = "";
                document.getElementsByName('message')[0].value="";
                document.getElementById('submit_btn').disabled = false;
            },
           
            error: function (error) {
                document.getElementById('customLoaderBox').style.visibility='hidden';
                console.log(error);
                $('#errorMessage').text("Sorry something went wrong.");
                $('#errorModal').modal('show');
                document.getElementById('submit_btn').disabled = false;
            }
        });
    }
    else {
        document.getElementById('customLoaderBox').style.visibility='hidden';
        $('#errorMessage').text("Please fill all the details correctly.");
        $('#errorModal').modal('show');
        document.getElementById('submit_btn').disabled = false;
    }
})