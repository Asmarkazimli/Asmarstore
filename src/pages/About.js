import React from 'react'
import './About.scss'
import End from '../components/End/End'
import CartPage from '../components/CartPage/CartPage';
function About(props) {
  const {showCartPage, setShowCartPage}=props;
  return (
    
    <div className='about'>
      {
      showCartPage && <CartPage setShowCartPage={setShowCartPage} />
    }
    
      <div className='about_one'>
        <p className='at'>At tarte™, we believe in</p>
        <p><b> breaking down beauty</b></p>
        <p><b>boundaries,</b></p>
        <p>shattering stereotypes & being kind.</p>
        <p>We believe in high-performance</p>
        <p><b>AND natural.</b></p>
      </div>
      <div className='about_two'>
        <p className='w  w_one'>What does</p>
        <p className='w'><b>HIGH PERFORMANCE NATURALS™</b></p>
        <p className='w'>mean to us?</p><br />
        <p>All tarte products are formulated with a</p>
        <p>blend of naturally-derived & other</p>
        <p><b>ingredients designed to perform.</b></p>
        <ul>
          <li>fruit & plant extracts from Mother Nature</li>
          <li>clinically-proven ingredients</li>
          <br />
          <li>vegan-friendly options</li>
          <li>consumer tested results</li>
        </ul>
        <p className='w_two'> <b>tarte™ formulas do not contain any of the following intentionally added ingredients*</b>: sodium lauryl sulfate, parabens, phthalates, triclosan, formaldehyde, coal tar, hydroquinone, triclocarban, aluminum salts, benzophenone + related compounds, butoxyethanol, lead + lead acetate, methyl cellosolve + methoxyethanol, mercury + related compounds, insoluble plastic microbeads, toluene, petrolatum + mineral oil, polyacrylamide + acrylamide styrene, xylenes + related compounds, ethanolamine, diethanolamine, monoethanolamine, methylchloroisothiazolinone + methylisothiazolinone & chemical sunscreens.</p>


      </div>
      <div className='about_three'>
        <div className='about-left'>
          <div className='img_ceo'></div>
        </div>
        <div className='about-right'>
          <h1>MAUREEN KELLY, CEO & FOUNDER</h1><br />
          <p>I started tarte with a dream of
            developing good-for-you beauty that's
            never boring. I became so focused on the
            ingredients I was putting on my skin, and
            a lot of my favorite products had some
            not-so-cool ingredients in them.</p> <br />
          <p>So out of my 1-bedroom, rent-controlled NYC apartment with my friends & family as employees getting paid in pizza, I launched my very first product! Our OG tartelettes know, it was the cheek stain: a skin-loving blush stick infused with acai, acerola, maracuja, goji & pomegranate – finally, ingredients you could pronounce!</p><br />
          <p>Just like that, we were on the map. I bought a bottle of champagne, celebrated the win & continued on my adventure. I started building an incredible team, we moved into a (real) office which we quickly outgrew & now we have an amazing group of peeps behind the scenes that have truly become family. </p><br />
          <p>Fast forward 20 years to a full assortment of award-winning formulas… but it’s still just the beginning. We will never stop learning, never stop growing & I will always be that girl with a dream. Thanks to YOU GUYS, my dream became a reality & I am forever grateful.</p><br />
          <p>Xo,</p>
          <p>Maureen Kelly</p>
        </div>

      </div>
      <End />
    </div>
  )
}

export default About