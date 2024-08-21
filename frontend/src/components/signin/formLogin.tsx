import {  } from 'react-dom';

interface FormLoginProps {
  setForm: () => void
}

export function FormLogin({setForm}: FormLoginProps) {

  return(
    <form action="" className="flex flex-col gap-8 h-full mt-5">
      <h3 className="text-center text-lg font-semibold text-gray-600">Sign Up</h3>
      <div className="flex justify-center items-center">
        <label htmlFor="email" className="text-base w-36">E-mail</label>
        <input type="text" name="email" id="email" placeholder='email@example.com' className="border rounded-xl p-1 w-full"/>
      </div>

      <div className="flex justify-center items-center">
        <label htmlFor="password" className="text-base w-36">Password</label>
        <input type="text" name="password" id="password" placeholder='example@123' className="border rounded-xl p-1 w-full"/>
      </div>

      <div className="flex flex-col gap-5">
        <button type='button' className="w-full" onClick={setForm}>Dont´t have an account? Sign Up.</button>
        <button className="bg-gray-500 rounded-xl py-2 text-white text-base font-semibold hover:bg-gray-400 transition-all w-full">Send</button>
      </div>
    </form>
  );
}