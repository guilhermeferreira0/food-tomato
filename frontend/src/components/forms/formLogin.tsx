import { useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/useAuth';
import { redirect } from 'react-router-dom';

interface FormLoginProps {
  setForm: () => void
}

export function FormLogin({setForm}: FormLoginProps) {
  const { register, handleSubmit, formState: {errors}, reset } = useForm();
  const { authenticate } = useAuth();

  const submitForm = async (data: any) => {
    await authenticate(data.email, data.password);
    reset({email: '', password: ''});
    redirect('/');
  } 

  return (
    <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-8 h-full mt-5">
      <h3 className="text-center text-lg font-semibold text-gray-600">Sign Up</h3>
      <div className="flex justify-center items-center">
        <label htmlFor="email" className="text-base w-36">E-mail</label>
        <input 
          type="text" 
          id="email" 
          placeholder='email@example.com' 
          className={`${errors?.email && "border-red-300"} border rounded-xl p-1 w-full`}
          {...register("email", { required: true })}
        />
      </div>

      <div className="flex justify-center items-center">
        <label htmlFor="password" className="text-base w-36">Password</label>
        <input 
          type="text" 
          id="password" 
          placeholder='example@123' 
          className={`${errors?.email && "border-red-300"} border rounded-xl p-1 w-full`}
          {...register("password", { 
            required: true, 
            minLength: 7 
          })}
        />
      </div>
     
      {errors?.email?.type === "required" && (
        <p role="alert" className='text-red-400'>Email is required</p>
      )}
      {errors?.password?.type === "required" && (
        <p role="alert" className='text-red-400'>Password is required</p>
      )}
      {errors?.password?.type === "minLength" && (
        <p role="alert" className='text-red-400'>Password must have at least 7 characters.</p>
      )}

      <div className="flex flex-col gap-5">
        <button type='button' className="w-full" onClick={setForm}>Dont´t have an account? Sign Up.</button>
        <button 
          type="submit" 
          className="bg-gray-500 rounded-xl py-2 text-white text-base font-semibold hover:bg-gray-400 transition-all w-full"
        >
          Send
        </button>
      </div>
    </form>
  );
}