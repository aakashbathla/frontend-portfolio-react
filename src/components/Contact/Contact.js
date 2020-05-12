import React from "react"

const Contact = () => {
  return (
    <section id="contactus">
      <div className="mian-footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-heading-1 mb-85">
                <h4>Inquiry</h4>
                <h2>Contact me</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <form
                className="contact-form"
                action="https://formspree.io/aakash.bathla7@gmail.com"
                method="POST"
              >
                <span>Enter your mail</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="_replyto"
                />
                <span>Enter your message</span>
                <textarea
                  rows="4"
                  cols="50"
                  placeholder="Write your message"
                  name="message"
                ></textarea>
                <input type="submit" value="send" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
