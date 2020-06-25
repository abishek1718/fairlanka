import React from 'react';

function Footer(){
    var html = 
    <div className='card footer text-center'>
        <div className='card-header'>
            <a className='navbar-brand' href='/'>
                <img alt='main logo' src={require('../images/mainlogo.png')} className='footer-logo' />
            </a>
        </div>
        <div className='card-body'>
            <h5 className='card-title'>Fair Lanka</h5>
            <p>037 22 20 451</p>
            <p>7B/ Mosque Road, Kurunegala</p>
        </div>
        <div className='card-footer text-muted'>
            © 2020 Copyright: Fair Lanka
        </div>
    </div>;
    return html;
}

export default Footer;