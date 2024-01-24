import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Beranda from './beranda';
import Gallery from './galerry';
import HariBesar from './haribesar';

const Utama = () => (
    <div>

    <Routes>
        <Route exact path='/' element={<Beranda/>}/>
        <Route path='/galerry' element={<Gallery/>}/>
        <Route path='/haribesar' element={<HariBesar/>}/>
    </Routes>
    </div>
)

export default Utama;