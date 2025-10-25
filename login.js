let inputfun = () =>{
    // alert("working !")
    let email = document.getElementById("email").value
      let password = document.getElementById("password").value

      if(email === "" || password === ""){
        // alert("fill the form please !")
                Swal.fire({
                icon: "error",
                title: "Please fill the form !"
                });
      }
     else{
            firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        window.location.href = "landingpage.html"
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(codeMessage + errorCode)
    });
     }
} 





















