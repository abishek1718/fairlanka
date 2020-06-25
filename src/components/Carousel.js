import React from 'react';

function Carousel(){
    var html = 
    <div>
        <div id='carouselExampleIndicators' className='carousel slide' data-ride='carousel'>
            <ol className='carousel-indicators'>
                <li data-target='#carouselExampleIndicators' data-slide-to='0' className='active'></li>
                <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
                <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
            </ol>
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <img className='d-block w-100' src={require('../images/slideshow1.jpg')} alt='First slide' />
                </div>
                <div className='carousel-item'>
                    <img className='d-block w-100' src={require('../images/slideshow3.jpg')} alt='Second slide' />
                </div>
                <div className='carousel-item'>
                    <img className='d-block w-100' src={require('../images/slideshow4.jpg')} alt='Third slide' />
                </div>
            </div>
            <a className='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-slide='prev'>
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                <span className='sr-only'>Previous</span>
            </a>
            <a className='carousel-control-next' href='#carouselExampleIndicators' role='button' data-slide='next'>
                <span className='carousel-control-next-icon' aria-hidden='true'></span>
                <span className='sr-only'>Next</span>
            </a>
        </div>
        <h1 className='display-1 text-center'>fair lanka</h1>

        <div className='mouse_wave'>
            <span className='scroll_arrows one'></span>
            <span className='scroll_arrows two'></span>
            <span className='scroll_arrows three'></span>
        </div>
    </div>;
    return html;
}

export default Carousel;