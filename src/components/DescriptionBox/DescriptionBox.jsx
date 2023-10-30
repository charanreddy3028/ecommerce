import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Clothes are a fundamental part of human culture and society. They provide us with protection from the elements, a way to express ourselves, and a sense of belonging. Clothes can also be used to convey our social status, occupation, and personal style.</p>
        <p>
        Clothes are made from a variety of materials, including natural fibers such as cotton, wool, and silk, and synthetic fibers such as polyester and nylon. The choice of material depends on the intended purpose of the garment, as well as the climate in which it will be worn.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
