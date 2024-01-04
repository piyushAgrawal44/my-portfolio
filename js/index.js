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


function toggleFxn(type){
    
    if(type=="experience"){
        $("#exp_btn").addClass('btn-type1');
        $('#exp_btn').removeClass('btn-type2');
        $("#edu_btn").addClass('btn-type2');
        $('#edu_btn').removeClass('btn-type1');
        $("#experience_div").removeClass('d-none');
        $("#education_div").addClass('d-none');
    }
    else{
        $("#edu_btn").addClass('btn-type1');
        $('#edu_btn').removeClass('btn-type2');
        $("#exp_btn").addClass('btn-type2');
        $('#exp_btn').removeClass('btn-type1');
        $("#education_div").removeClass('d-none');
        $("#experience_div").addClass('d-none');
    }
}

// tabs js
let tabs = document.querySelector(".tabs");
let tabHeader = tabs.querySelector(".tab-header");
let tabHeaderElements = tabs.querySelectorAll(".tab-header > div");
let tabBody = tabs.querySelector(".tab-body");
let tabBodyElements = tabs.querySelectorAll(".tab-body > div");
let tabIndicator = tabs.querySelector(".tab-indicator > div");

for (let i = 0; i < tabHeaderElements.length; i++) {
  tabHeaderElements[i].addEventListener("click", function () {
    tabHeader.querySelector(".active").classList.remove("active");
    tabHeaderElements[i].classList.add("active");
    tabBody.querySelector(".active").classList.remove("active");
    tabBodyElements[i].classList.add("active");
    // tabIndicator.style.left = `${(i+1) * 25}%`;
    $(".tab-indicator > div").toggleClass('active_tab')
  });
}


//typing effect

var wordsToType = document
    .querySelector("span[words]")
    .getAttribute("words")
    .split(","),
  typer = document.querySelector("span[words]"),
  typingSpeed = parseInt(typer.getAttribute("typing-speed")) || 70,
  typingDelay = parseInt(typer.getAttribute("typing-delay")) || 700;

var currentWordIndex = 0,
  currentCharacterIndex = 0;

function type() {
  var wordToType = wordsToType[currentWordIndex % wordsToType.length];

  if (currentCharacterIndex < wordToType.length) {
    typer.innerHTML += wordToType[currentCharacterIndex++];
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, typingDelay);
  }
}
function erase() {
  var wordToType = wordsToType[currentWordIndex % wordsToType.length];
  if (currentCharacterIndex > 0) {
    typer.innerHTML = wordToType.substr(0, --currentCharacterIndex - 1);
    setTimeout(erase, typingSpeed);
  } else {
    currentWordIndex++;
    setTimeout(type, typingDelay);
  }
}

window.onload = function () {
  type();
};

