import React from 'react'
import './gallery.css'
import Adiwiyata1 from '../Assets/Adiwiyata1.png'
import Adiwiyata2 from '../Assets/Adiwiyata2.jpeg'

class Gallery extends React.Component{
    render(){
        return(
        <div>
            <h2>Dokumntasi Pelaksanaan Adiwiyata</h2>
            <div className="gallery-container">
            <img src={Adiwiyata1} alt="Adiwiyata di lingkungan sekolah" className='gallery-image'/>
            <p className="gallery-caption"><strong>Adiwiyata di Lingkungan Sekolah </strong></p>
            <img src={Adiwiyata2} alt="Penghargaan Adiwiyata Kota" className='gallery-image'/>
            <p className='gallery-caption'> <strong>Penghargaan Adiwiyata Kota </strong></p>
            </div>
        </div>
   ) }
}

export default Gallery;