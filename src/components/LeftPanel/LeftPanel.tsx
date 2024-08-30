import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateResume } from '@/stores/slices/resumeSlice';
import {useDebounce} from '../../hooks/debounced'

import RichTextEditor from '../RichTextEditor';
import { CgOverflow } from 'react-icons/cg';
import { FaCross, FaPlus, FaTimes, FaTrash, FaUser } from 'react-icons/fa';
import { FaDeleteLeft, FaPencil, FaX } from 'react-icons/fa6';
interface SocialProfile {
  url: string;
}

const LeftSection: React.FC = () => {
  const dispatch = useDispatch();
  const resumeData = useSelector((state: any) => state.resume);
// Local state to handle input changes
const [localInput, setLocalInput] = useState(resumeData);
const [socialProfiles, setSocialProfiles] = useState(resumeData.socialProfiles || []);
const debouncedInput = useDebounce(localInput, 1000);

useEffect(() => {
  dispatch(updateResume(debouncedInput));
}, [debouncedInput, dispatch]);

const handleChange = useCallback(
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLocalInput((prev: any) => ({ ...prev, [name]: value }));
  },
  []
);

  return (
    <>
      <div className="w-full max-w-sm min-w-[200px] mt-2">
        <div className='flex flex-wrap gap-2 items-center'>
        <div className='text-white'><FaUser/></div>
        <div className='my-2 text-white text-[16px] font-bold'>About</div>
        </div>
        <label className="block mb-1 text-[12px] text-white">
          Full Name
        </label>
        <input
          type="text"
          className="w-full h-6 bg-transparent text-slate-100 text-[11px] border border-slate-500  px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-400 shadow-sm focus:shadow-md"
          name="name"
          value={localInput.name}
          onChange={handleChange}
        />
      </div>
      <div className="w-full max-w-sm min-w-[200px] mt-2">
        <label className="block mb-1 text-[12px] text-white">
          Job role
        </label>
        
        <input
          type="text"
          className="w-full h-6 bg-transparent text-slate-100 text-[11px] border border-slate-500 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-400 shadow-sm focus:shadow-md"
          name='title'
          onChange={handleChange}
        />
      </div>


      <div className='w-full flex gap-2 mt-2'>
        <div className="">
          <label className="block mb-1 text-[12px] text-white">
            Phone Number
          </label>
          <input
            type="text"
            className="w-full h-6 bg-transparent text-slate-100 text-[11px] border border-slate-500 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-400 shadow-sm focus:shadow-md"
          />
        </div>
        <div className="">
          <label className="block mb-1 text-[12px] text-white">
            Email
          </label>
          <input
            type="text"
            className="w-full h-6 bg-transparent text-slate-100 text-[11px] border border-slate-500 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-400 shadow-sm focus:shadow-md"
          />
        </div>
      </div>
      <div className='w-full flex gap-2 mt-2'>
        <div className="">
          <label className="block mb-1 text-[12px] text-white">
            Address
          </label>
          <input
            type="text"
            className="w-full h-6 bg-transparent text-slate-100 text-[11px] border border-slate-500 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder='eg. Pune India'
          />
        </div>
        <div className="">
          <label className="block mb-1 text-[12px] text-white">
            Portfolio
          </label>
          <input
            type="text"
            className="w-full h-6 bg-transparent text-slate-100 text-[11px] border border-slate-500 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder='http://yourwebsite.com'
          />
        </div>
      </div>
      <div className='text-white mt-2 text-[14px]'>Social Profile</div>

      <div className='w-full flex gap-2 mt-2'>
        <div className="">

          <input
            type="text"
            className="w-full h-6 bg-transparent text-slate-100 text-[11px] border border-slate-500 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder='Linkedin'
          />
        </div>
        <div className="">

          <input
            type="text"
            className="w-full h-6 bg-transparent text-slate-100 text-[11px] border border-slate-500 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder='Link'

          />
        </div>
        <FaTimes className='text-white text-[11px] mt-2 ms-2 hover:cursor-pointer ' />
      </div>
      <div className='w-full flex gap-2 mt-2'>
        <div className="">

          <input
            type="text"
            className="w-full h-6 bg-transparent text-slate-100 text-[11px] border border-slate-500 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder='Github'
          />
        </div>
        <div className="">

          <input
            type="text"
            className="w-full h-6 bg-transparent text-slate-100 text-[11px] border border-slate-500 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder='Link'
          />

        </div>
        <FaTimes className='text-white text-[11px] mt-2 ms-2 hover:cursor-pointer ' />
      </div>
      <div className='flex gap-1 text-white text-[12px]  mt-2 hover:cursor-pointer hover:underline'>
        <FaPlus className='text-[12px] mt-0.5' />
        Add more social profile
      </div>



      <hr className='mt-2 text-slate-100' />

      <div className='text-white text-[16px] my-2 font-bold flex justify-between  '>
        Summary
        <div className='p-2 hover:bg-gray-800 rounded'>
        <FaPencil className='mt-1 text-[12px] hover:cursor-pointer'  />
        </div>      </div>
      <textarea value={resumeData.summary} onChange={handleChange} name='summary'/>
      <hr className='mt-2 text-slate-100' />
      <div className='text-white text-[16px] my-2 font-bold flex justify-between  '>
        Experience
        <div className='p-2 hover:bg-gray-800 rounded'>
        <FaPencil className='mt-1 text-[12px] hover:cursor-pointer'  />
        </div>      </div>
      <div className='text-white text-[12px]  gap-1 border border-slate-500 flex justify-center mt-2 p-2 hover:bg-slate-800 hover:cursor-pointer'>
        <FaPlus className='text-[12px] mt-0.5' />
        Add Experience
      </div>

      <hr className='mt-2 text-slate-100' />

      <div className='text-white text-[16px] my-2 font-bold flex justify-between  '>
        Education
        <div className='p-2 hover:bg-gray-800 rounded'>
        <FaPencil className='mt-1 text-[12px] hover:cursor-pointer'  />
        </div>
      </div>

      <div className='text-white text-[12px] border gap-1 border-slate-500 flex justify-center mt-2 p-2  hover:bg-slate-800 hover:cursor-pointer' >
        <FaPlus className='text-[12px] mt-0.5' />
        Add Education
      </div>
      <div></div>
    </>



  );
};

export default LeftSection;
