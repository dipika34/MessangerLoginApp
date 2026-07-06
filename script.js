function Form() {
    email = document.getElementById("email").value;
    passowrd = document.getElementById('password').value;

    if (email == "dipi@gmail.com" && passowrd == 1234) {
        window.alert("Logged in Successfully");
    } else {
        window.alert("Invalid email or password");
    }
}
