// --------------- init function from header ---------

      (function () {
        emailjs.init({
          publicKey: "fZWHlLer1__dI8TTk",
        });
      })();
      
      // ------------------ send mail --------------

function sendMail(event) {
  // Prevent the form from refreshing the page
  event.preventDefault();

  var senderName = document.getElementById("name").value;
  var senderEmail = document.getElementById("e_id").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // Send the main email
  var params = {
    from_name: senderName,
    from_e_id: senderEmail,
    subject: subject,
    message: message,
  };

  emailjs.send("service_sunylym", "template_cbn925b", params).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);

      // Auto-reply parameters
      var autoReplyParams = {
        to_name: senderName,
        to_email: senderEmail,
        reply_message:
          "Thank you for contacting us! We have received your message and will get back to you shortly.", // Customize this message as needed
      };

      // Send the auto-reply
      emailjs.send("service_sunylym", "template_xfit9o9", autoReplyParams).then(
        (autoResponse) => {
          console.log(
            "Auto-reply sent successfully!",
            autoResponse.status,
            autoResponse.text
          );

          // // Clear the form
          // document.getElementById("name").value = "";
          // document.getElementById("e_id").value = "";
          // document.getElementById("subject").value = "";
          // document.getElementById("message").value = "";

          // // Show success popup
          // alert("Email sent successfully!");
        },
        (autoError) => {
          console.error("Auto-reply failed...", autoError);
        }
      );
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );

  // Clear the form
  document.getElementById("name").value = "";
  document.getElementById("e_id").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";

  // Show success popup
  alert("Email sent successfully!");
}
