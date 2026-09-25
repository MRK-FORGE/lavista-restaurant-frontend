function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


const navLinks = document.querySelectorAll("#navLinks a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navLinks").classList.remove("active");

    });

});


function selectFood(foodName) {

    document.getElementById("message").value =
        "Hello! I would like to order " + foodName;

    document.getElementById("successMessage").textContent =
        foodName + " selected! Please complete your details.";

    document.getElementById("successMessage")
        .classList.add("success-visible");

}


async function sendMessage(event) {

    event.preventDefault();

    const successMessage =
        document.getElementById("successMessage");

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const phone =
        document.getElementById("phone").value;

    const subject =
        document.getElementById("subject").value;

    const reservationType =
        document.getElementById("reservationType").value;

    const message =
        document.getElementById("message").value;


    successMessage.textContent = "Sending...";

    successMessage.classList.add("success-visible");


    try {

        const response = await fetch(
            "https://lavista-restaurant.onrender.com/send-message",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    name: name,
                    email: email,
                    phone: phone,
                    subject: subject,
                    reservationType: reservationType,
                    message: message

                })
            }
        );


        const result = await response.json();


        if (result.success) {

            successMessage.textContent =
                "Your message has been sent successfully!";

            event.target.reset();

        } else {

            successMessage.textContent =
                "Failed to send your message.";

        }


    } catch (error) {

        console.error("Send message error:", error);

        successMessage.textContent =
            "Unable to connect to the server.";

    }


    setTimeout(function() {

        successMessage.textContent = "";

        successMessage.classList.remove("success-visible");

    }, 5000);

}


function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


window.addEventListener("scroll", function() {

    const backToTop =
        document.getElementById("backToTop");

    if (window.scrollY > 300) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});