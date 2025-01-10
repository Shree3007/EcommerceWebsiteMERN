import React from 'react'
import Title from '../components/Title';
import NewLetterBox from '../components/NewLetterBox'
import {assets} from '../assets/assets'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officia. Similique odio quo consequuntur deserunt commodi laborum, eum voluptate tempora quos error voluptates perspiciatis tenetur unde vel iusto, dicta explicabo!</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos in, dolorum voluptatem neque nam aliquid repudiandae cumque dolor dicta vitae maiores accusamus quibusdam recusandae accusantium illum officiis quas voluptas et!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dignissimos iusto voluptate eligendi, dolor delectus ut ea necessitatibus, voluptas rerum soluta facilis officiis nisi beatae deserunt rem odit suscipit id.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, ab.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, ab.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, ab.</p>
        </div>
      </div>
      <NewLetterBox/>
    </div>
  )
}

export default About
