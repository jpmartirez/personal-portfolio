import { ArrowRight, Download } from 'lucide-react'
import React from 'react'

const HomePage = () => {
  return (
    <div className='flex min-h-[80vh] w-full items-center justify-center'>
      <div className="hero h-full w-full">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/jppic.jpg"
            className="max-w-sm rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer "
          />
          <div className='w-full flex flex-col gap-5 max-lg:items-center'>
            <div className="badge badge-outline badge-primary font-montserrat">Primary</div>
            <h1 className="text-4xl lg:text-6xl  font-bold font-playfair ">John Paul Martirez</h1>
            <p className="max-w-3xl max-lg:text-center font-montserrat">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <div className='flex flex-wrap gap-5 '>
              <button className="btn btn-outline bg-gray-800 p-6 font-montserrat">View Selected Work <ArrowRight width={18} /></button>
              <button className="btn bg-transparent p-6 border-none font-montserrat"><Download width={18}/> Download Resume</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage