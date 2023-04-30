import React from 'react'
import './Contact.scss'
import End from '../components/End/End'
import contact_bg from './contact.img/contact-bg.png';
import CartPage from '../components/CartPage/CartPage';
function Contact(props) {
  const { showCartPage, setShowCartPage } = props;
  return (
    <>
      {
        showCartPage && <CartPage setShowCartPage={setShowCartPage} />
      }
      <div className='contact'>
        <div className='contact_left'>
          <h1> <b>REQUESTE A CALL BACK</b></h1>
          <div className='input'>
            <input type='text' placeholder='Name' className='name'></input><br />
            <input type='text' placeholder='Email'></input><br />
            <input type='text' placeholder='Phone'></input><br />
            <textarea type='text' placeholder='Message'  ></textarea>
            <button>Send</button>
          </div>
        </div>
        <div className='contact_right'>
          <img src={contact_bg} className="contact-logo" alt="logo" />
        </div>
      </div>
      <End />
    </>
  )
}

export default Contact