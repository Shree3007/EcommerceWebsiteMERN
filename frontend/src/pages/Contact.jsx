import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewLetterBox from '../components/NewLetterBox';

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="Contact" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <a href="https://www.google.com/maps/search/?api=1&query=345+Shetty+Road+Bangalore+Karnataka+India" 
             target="_blank" 
             rel="noopener noreferrer" 
             className='text-blue-600 font-semibold hover:text-blue-800 transition-all duration-300'>
            📍 345 Shetty Road <br/> Bangalore, Karnataka, India.
          </a>
          <a href="tel:+917259530190" 
             className='text-green-600 font-semibold hover:text-green-800 transition-all duration-300'>
            📞 Tel: 7259530190
          </a>
          <a href="https://outlook.office.com/mail/deeplink/compose?to=shreyashchavan307@gmail.com&subject=Contact%20Inquiry" 
             target="_blank" 
             rel="noopener noreferrer" 
             className='text-red-600 font-semibold hover:text-red-800 transition-all duration-300'>
            ✉️ Email: <span className='underline'>shreyashchavan307@gmail.com</span>
          </a>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewLetterBox/>
    </div>
  );
}

export default Contact;
