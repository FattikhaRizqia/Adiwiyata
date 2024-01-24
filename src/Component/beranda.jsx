import React from 'react'
import Adiwiyata from '../Assets/Adiwiyata.jpg'
import './beranda.css'

class Beranda extends React.Component{
    render(){
        return(
        <div>
            <h2>Apa itu Adiwiyata?</h2>
            <div className="gallery-container">
            <img src={Adiwiyata} alt="" className='gallery-image'/>
            <p className="gallery-caption">Adiwiyata adalah sebuah program atau gerakan yang dicanangkan oleh
                 Kementerian Lingkungan Hidup dan Kehutanan (KLHK) Republik Indonesia, bertujuan untuk 
                 mendorong sekolah-sekolah di Indonesia agar lebih peduli dan berpartisipasi aktif dalam 
                 upaya pelestarian lingkungan hidup. Nama "Adiwiyata" sendiri berasal dari 
                 bahasa Sanskerta, di mana "Adi" berarti yang pertama atau yang utama, dan "Wiyata" berarti tempat atau hal yang baik.</p>
                 </div>
        </div>
   ) }
}

export default Beranda;