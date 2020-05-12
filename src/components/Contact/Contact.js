import React from "react"

const Contact = () => {
  return (
    <section id="contact">
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
              <form className="contact-form">
                <span>Enter your mail</span>
                <input type="email" placeholder="Enter your email" />
                <span>Enter your message</span>
                <textarea
                  rows="4"
                  cols="50"
                  placeholder="Write your message"
                ></textarea>
                <input type="button" value="send" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
