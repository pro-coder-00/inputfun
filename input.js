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
        // alert("registered !")
              firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in 
              var user = userCredential.user;
               Swal.fire({
              title: "Successful !",
              icon: "success",
              draggable: true
            });
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          Swal.fire({
              icon: "error",
              title: errorCode + errorMessage,
              text: "Something went wrong!",
            });
        });
      }
} 























// let firstfun = () =>{
//     // alert("working")
//       let email= document.getElementById("email").value
//          let password= document.getElementById("password").value
    

//     if(email === "" || password === ""){
//         alert("please fill the form !")
//     }
//     else{
     
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in 
//     var user = userCredential.user;
//        alert("registered !")
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//        alert(errorCode + errorMessage)
//   });
//     }
// }