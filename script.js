


let input = document.getElementById("email")
let responsealert = document.querySelector(".responsealert")

function succcessalert(){
    responsealert.classList.add("show")
    setTimeout(() => {
        responsealert.classList.remove("show")
    }, 5000);
}


function subscript(){
    const validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)
    if(input.value !== ""){
        if(validMail !== true){
            alert("Email is not validate")
        }else{
            fetch("https://formsubmit.co/ajax/info@neetadvisor.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    message: "Email : "+input.value
                })
            }).then(response => response.json())
            .then(data => succcessalert())
            .catch(error => console.log(error));
        }
    } else{
        alert("Please enter email for subscribe")
    }
}

let callMe = document.querySelector(".call-me")
let whatsappme = document.querySelector(".whatsapp-me")
setTimeout(() => {
  callMe.classList.add("active")
  whatsappme.classList.add("active")
}, 3000);