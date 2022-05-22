import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Image from '../components/Image';
import Footer from '../components/Footer';

export default function Splash() {
  return (
    <div>
        <Header />
        <section className='splash-img-container'>
            <div className='img-container'>
                <Image imgSrc='https://images.unsplash.com/photo-1550483513-b4fd222ce32e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760' imgAlt='coding on a computer'/>
            </div>
            <div className='img-container'>
                <Image imgSrc='https://images.unsplash.com/photo-1549399905-5d1bad747576?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRlc2t8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800' imgAlt='computer on desk'/> 
            </div>
            <div className='img-container'>
                <Image imgSrc='https://images.unsplash.com/photo-1597567918979-a06f2e60bd5a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=800' imgAlt='laptop on desk'/>
            </div>
                
        </section>
        <Footer />
    </div>

  )
}
