let formfun = () =>{
    let name = document.getElementById("name").value
        let email = document.getElementById("email").value
            let password = document.getElementById("password").value
                let adress = document.getElementById("adress").value
                    let CNIC = document.getElementById("CNIC").value

    if( name == "" || email === "" || password === "" || adress === "" || CNIC === "" )
        {
            // alert("please fill the form ......!")
            Swal.fire({
  icon: "error",
  title: "please fill the form ......!",
});
        }                
      else{



      let userfulldata = db.collection("user-data").doc()
     

      let obj={
        name: name,
        email: email,
        password : password,
        adress : adress,
        CNIC : CNIC,
        date : Date()
        }

         userfulldata.set(obj) 
        Swal.fire({
  title: "USER_ SAVED!",
  icon: "success"
});
}

}