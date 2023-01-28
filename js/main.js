function sendMail(){
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      tel: document.getElementById("tel").value,
  
    }
    const serviceId = "service_ay20qii";
    const templateId = "template_9lle6yh";
    
    emailjs.send(serviceId, templateId, params).then((res)=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("tel").value = "";
        console.log(res);
        alert("Your message sent succesfully");
      })
      .catch((err)=> console.log(err));
  }