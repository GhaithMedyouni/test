import SignInForm from '@/components/form/SignInForm';
import Navbar from '@/components/Navbar';

const page = () => {
  return (
    <div >
      <div className='h-screen flex flex-col justify-center items-center'>
      <Navbar/>
      </div>
      <div className='w-full'>
      <SignInForm />
      </div>
      
    </div>
  );
};

export default page;
