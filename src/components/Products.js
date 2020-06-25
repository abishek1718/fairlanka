import React from 'react';

function Products(){
    var html = 
    <div className='product-container'>
        <div className='product'>
            <img src={require('../images/bedsheets.jpg')} className='card-img-top' alt='...' />
            <h5 className='card-title'>Bed Sheets & Pillow Covers</h5>
            <p className='card-text'>Infuse your bedroom with the rustic, vintage elegance of the
                Harvest Floral Duvet Cover Set from Bee & Willow Home. Boasting a beautiful floral design
                in sage and grey hues.
            </p>
        </div>
        <div className='product'>
            <img src={require('../images/hand loom.jpg')} className='card-img-top' alt='...' />
            <h5 className='card-title'>Saree & Jackets</h5>
            <p className='card-text'>Sarees are preferred more for any traditional occasion 
                like wedding, festival, pooja. For casual wear, cotton sarees are preferred 
                as it is very light & comfortable. 
            </p>
        </div>
        <div className='product'>
            <img src={require('../images/mosquitonet.jpg')} className='card-img-top' alt='...' />
            <h5 className='card-title'>Mosquito Net</h5>
            <p className='card-text'>A very finely woven 100% polyester mosquito netting. Keeps
                out even the smallest pests.
            </p>
        </div>
        <div className='product'>
            <img src={require('../images/viscose.jpg')} className='card-img-top' alt='...' />
            <h5 className='card-title'>Plain & Printed Viscose</h5>
            <p className='card-text'> It is often regarded as only partially manmade. Manufactured 
                fibers derive from naturally occurring cellulose, or protein, while synthetic 
                fibers do not – they are completely manmade.
            </p>
        </div>
        <div className='product'>
            <img src={require('../images/emb.jfif')} className='card-img-top' alt='...' />
            <h5 className='card-title'>Embroidered Net & Lace</h5>
            <p className='card-text'>This textile is used because of its sturdy yet flexible origin,
                which can carry weight yet, still be lightweight and compactable.
            </p>
        </div>
        <div className='product'>
            <img src={require('../images/shirts.jpg')} className='card-img-top' alt='...' />
            <h5 className='card-title'>Shirts & Trousers</h5>
            <p className='card-text'>This stretch crepe fabric will add character and life to your 
                designs. It has a springy and flexible nature, that makes it highly stretchy and 
                comfortable to wear.
            </p>
        </div>
        <div className='product'>
            <img src={require('../images/sarong.jpg')} className='card-img-top' alt='...' />
            <h5 className='card-title'>Sarong & Handkerchief</h5>
            <p className='card-text'>Sarongs are summertime accessories that are designed to be folded and tied, 
                so they are usually made of thin, lightweight materials, and some of them are sun-protective.
            </p>
        </div>
        <div className='product'>
            <img src={require('../images/poplin.jpg')} className='card-img-top' alt='...' />
            <h5 className='card-title'>Poplin & Plain cotton</h5>
            <p className='card-text'>Tightly woven, it contains fine warp yarns and coarser weft yarns. It is a 
                strong material most often found in shirts, dresses and pajamas. 
            </p>
        </div>
    </div>;

    return html;
}

export default Products;