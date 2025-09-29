document.getElementById("signupform").addEventListener("submit",
    function(e){
        e.preventDefault();
        let valid = true;
        document.querySelectorAll(".error").forEach(el => el.textContent = "")

        const username = document.getElementsById("username").value.trim();
        if (username.length < 3){
            document.getElementById("usernameError").textContent="Username mustbe at least 3 characters"
        }
        const email = document.getElementById ("Email").value.trim();
        const emailPattern = /^[^]+@[^ ]+.[a-z]{2,3}$/;
        if (!emailPattern.test(email)){
            document.getElementById("EmailError").textContent="Enter a valid email address.";
            valid = false
        }
        const password = document.getElementById ("password").value;
        if (password.length<6){
            document.getElementById("PasswordError").textContent="The password must be at least 6 characters.";
            valid = false
        }
        const confirmpassword = document.getElementById ("confirmpassword").value;
        if (password !== confirmpassword){
            document.getElementById("ConfirmpasswordError").textContent="Passwords don't match";
            valid= false
        }
        if(valid){
            alert("Sign up Successful")
            e.target.submit();
        }

})