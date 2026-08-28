// ================= SIGN UP =================

const signupForm = document.querySelector(".signup-box form");

if (signupForm) {

    signupForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const fullname =
            document.getElementById("fullname").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirm-password").value;


        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }


        localStorage.setItem("userFullname", fullname);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);


        alert("Account created successfully! You can now sign in.");


        window.location.href = "login.html";

    });

}


// ================= LOGIN =================

const loginForm = document.querySelector(".login-box form");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const email =
            document.getElementById("login-email").value.trim();

        const password =
            document.getElementById("login-password").value;


        const savedEmail =
            localStorage.getItem("userEmail");

        const savedPassword =
            localStorage.getItem("userPassword");

        const savedName =
            localStorage.getItem("userFullname");


        if (
            email === savedEmail &&
            password === savedPassword
        ) {

            alert(
                "Welcome back, " +
                savedName +
                "! Login successful."
            );


            window.location.href = "index.html";

        } else {

            alert("Invalid email or password.");

        }

    });

}