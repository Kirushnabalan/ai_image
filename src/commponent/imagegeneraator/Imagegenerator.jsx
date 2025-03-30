import React from 'react';
import './imagegenerator.css';
import image_default from "../assets/images.jpg";
const ImageGenerator = () => {
    return (
        <div>
            <div className='image-generator'>
                 <div className='image-generator__title'>
                    <h1>Image Generator</h1>
                    <p>Generate images using AI</p>
                    <div className='image'>
                        <img src={image_default} alt="Image" className='image-generator__image'/>
                    </div>
                </div>
            </div>
        </div>
    );
    }
export default ImageGenerator;