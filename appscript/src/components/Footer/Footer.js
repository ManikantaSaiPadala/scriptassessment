import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer>
      <div className="footer-div">
        <div className='div1'>
            <div>
            <p>BE THE FIRST TO KNOW</p>
            <p>SIGN UP FOR MORE DETAILS</p>
            <div className='div2'>
                <input type='search' className='inp-ele'  />
                <p>Subscribe</p>
            </div>
            </div>
            <div>
                <p>CONTACT US</p>
                <p>+998254145455</p>
                <p>customercare@gmail.com</p>
            </div>
        </div>
        <hr className='hr-line' />
        <div className='below-foot'>
            <div>
                <h1>Metta muse</h1>
                <ul className='ul-list1'>
                    <li>About us</li>
                    <li>Stories</li>
                    <li>Artisans</li>
                    <li>Boutiques</li>
                    <li>Contact Us</li>
                    <li>EU Compliances Docs</li>
                </ul>
            </div>
            <div>
                <h1>Quick Links</h1>
                <ul className='ul-list1'>
                    <li>Order & Shipping</li>
                    <li>Join/Login as seller</li>
                    <li>Payment & Pricing</li>
                    <li>Return & Refunds</li>
                    <li>FAQS</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <div>
                <h1>Follow Us</h1>
                <ul className='ul-list1'>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </div>
        <p className='para'> Copyright &copy; 2023 mettamuse. All Rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
