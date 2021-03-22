import React, { useState } from 'react';
import emailjs, { init } from 'emailjs-com';
init("user_0laE1CyljqduXLPSz4BQE");

const Contact = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [subject, setSubject] = useState('')
   const [message, setMessage] = useState('')

   const onNameChange = (event) => {
      setName(event.target.value)
   }

   const onEmailChange = (event) => {
      setEmail(event.target.value)
   }

   const onSubjectChange = (event) => {
      setSubject(event.target.value)
   }

   const onMsgChange = (event) => {
      setMessage(event.target.value)
   }

   function sendEmail(e) {
      e.preventDefault();

      const messageDetails = {
      name,
      email,
      subject,
      message
      }

      console.log("submit button clicked with these message details: ", messageDetails);
      emailjs.send('service_yltvg0s', 'template_1sxj2o5', messageDetails)
      .then((result) => {
            console.log(result);
            alert("Message Sent."); 
            resetForm()
      }, (error) => {
            console.log(error.text);
      });
   }

   const resetForm = () =>{
      setSubject('')
      setEmail('')
      setName('')
      setMessage('')
   }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">Contact Iris to discuss your design journey!</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

            <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" value={name} size="35" id="contactName" name="contactName" onChange={(event) => onNameChange(event)}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" value={email} size="35" id="contactEmail" name="contactEmail" onChange={(event) => onEmailChange(event)}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" size="35" id="contactSubject" name="contactSubject" value={subject} onChange={(event) => onSubjectChange(event)}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" value={message} onChange={(event) => onMsgChange(event)}></textarea>
                  </div>

                  <div>
                     <button className="submit" onClick={(e) => sendEmail(e)}>Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>

					</fieldset>
				</form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
            <img className="footer-pic"  src="images/footer-pic.jpg" alt="Iris Chanterelle Profile" />
            </aside>
      </div>
   </section>
  );
}

export default Contact;