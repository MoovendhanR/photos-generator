import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { preview } from '../assets'
import FormField from '../components/FormField'
import {getRandomPrompt} from '../utils/index'

const CreatePost = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name:'',
    prompt:'',
    photo:'',
  });
  const [generatingImg,setGeneratingImg] = useState(false);
  const [loading,setLoading] = useState(false)

  const handleSubmit = ()=>{

  }
  const handleChange = (e)=>{

  }
  const handleSurpriseMe = ()=>{

  }


  return (
    <section className="max-w-7xl mx-auto">
        <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          Create
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">
        Create imaginative and visually stunning images through @vendhan-AI and Share them with the community
        </p>
      </div>
      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField 
           labelName='Your name'
           type='text'
           name="name"
           placeholder="Moovendhan R"
           value={form.name}
           handleChange={handleChange}
          />
            <FormField 
           labelName='prompt'
           type='text'
           name="prompt"
           placeholder="A plush toy robot sitting against a yellow wall"
           value={form.prompt}
           handleChange={handleChange}
           isSupriseMe
           handleSurpriseMe={handleSurpriseMe}
          />
        </div>
      </form>
    </section>
  )
}

export default CreatePost
