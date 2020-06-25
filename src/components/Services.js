import React from 'react';

function Services(){
    var html = 
    <div>
        <div id='fabrics' className='fabrics'>
            <div className='col-12 narrow text-center'>
                <h1>Wholasale & Retail Store in <i>one place</i></h1>
                <p className='lead'>Buying new merchandise for your purpose can be daunting — our wholesale & Retail marketplace can help.</p>
            </div>
        </div>
        <div className='banner'>
            <h3>We got you covered <span className='type'></span></h3>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col-sm'>
                    <div className='service1'>
                        <h5 className='card-title'>We accept School Uniform Vouchers</h5>
                        <p className='card-text'>We are pleasure to accept School Uniform vouchers issues by Ministry of Education</p>
                        <img className='school-icon' src="https://img.icons8.com/plasticine/100/000000/school.png" alt='' />
                    </div>
                </div>
                <div className='col-sm'>
                    <div className='service1'>
                        <h5 className='card-title'>Special Police Department Uniforms</h5>
                        <p className='card-text'> Specially made clothing materials for our Proud Sri Lankan Police Department</p>
                        <img className='police-icon' src="https://img.icons8.com/color/96/000000/policeman-male--v1.png" alt='' />
                    </div>
                </div>
            </div>
        </div>
    </div>;

    return html;
}

export default Services;