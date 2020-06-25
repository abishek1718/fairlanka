import React from 'react';

function ContactForm(){
    var html = 
    <section className='mb-4 contactFormSection'>
        {/* Section heading */}
        <h2 className='h1-responsive font-weight-bold text-center my-4'>Contact us</h2>
        {/* Section description */}
        <p className='text-center w-responsive mx-auto mb-5'>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</p>
        <div className='row'>
            <div className='col-md-4'></div>
            {/* Grid column */}
            <div className='col-md-4 mb-md-0 mb-5'>
                <form className='contact-form' action='https://formspree.io/abishekkanageswaran70@gmail.com' method='POST'>
                    {/* Grid row */}
                    <div className='row'>
                        {/* Grid column */}
                        <div className='col-md-6'>
                            <div className='md-form mb-0'>
                                <input className='form-control' type='text' name='name' />
                                <label for='name' className=''>Your name</label>
                            </div>
                        </div>
                        {/* Grid column */}
                        
                        {/* Grid column */}
                        <div className='col-md-6'>
                            <div className='md-form mb-0'>
                                <input className='form-control' type='email' name='_replyto' />
                                <label for='email' class=''>Your email</label>
                            </div>
                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Grid row */}

                    {/* Grid row */}
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='md-form mb-0'>
                                <input type='text' id='subject' name='subject' className='form-control' />
                                <label for='subject' className=''>Subject</label>
                            </div>
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='md-form'>
                                <textarea type='text' id='message' name='message' rows='2' className='form-control md-textarea'></textarea>
                                <label for='message'>Your message</label>
                            </div>
                        </div>
                    </div>

                    <div className='text-center text-md-left'>
                        <input className='btn btn-light' type='submit' value='Send' />
                    </div>
                </form>
            </div>

            {/* Grid column */}
            <div className='col-md-4'>
                <ul className='list-unstyled mb-0 text-center'>
                    <li>
                        <a href='https://instagram.com'>
                            <img src={require('../images/instagram32.png')} className='imageIcon' alt='instagram' />
                        </a>  Instagram
                    </li>
                    <br/>
                    <li>
                        <a href='https://www.facebook.com/Fair-Lanka-106478254117932'>
                            <img src={require('../images/facebook32.png')} className='imageIcon' alt='facebook' />
                        </a>  Facebook
                    </li>
                </ul>
            </div>
        </div>
    </section>;
    return html;
}

export default ContactForm;