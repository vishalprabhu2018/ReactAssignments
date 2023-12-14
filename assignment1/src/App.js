import './App.css';
import {useState} from 'react';

function App() {
  const [login,setLogin]=useState(true);

 const switchLogin=(()=>{
    return setLogin(!login);
  })


  
  return (
  <div className=' flex min-h-full justify-center px-6 py-12  '>

    <div className="  border border-black  flex   w-[20em]  h-[30rem] justify-center rounded-md ">
        <div className="flex flex-col justify-normal w-[18em] ">
  
<h1 className='text-4xl italic font-bold  mt-16 text-center'>Instagram</h1>

<form action="" className='flex flex-col mt-8 gap-4 '>
  <input hidden={login} className='p-3 rounded-md' type="text" placeholder='Mobile No' />
  <input hidden={login} className='p-3 rounded-md' type="text" placeholder='Full Name' />
  <input className='p-3 rounded-md' type="text" placeholder='Phone number,username or email' />
  <input className='p-3 rounded-md' type="password" placeholder='password' />
  <button className='bg-blue-500 p-3 text-white rounded-md' type='submit'> {login ?"Sign In":"Sign Up"} </button>
</form>
<div className="text-center">
<p>{login?"Don't have a account":"Have a account"}  <a className=' text-blue-600' onClick={switchLogin}>{login? "Sign Up":"Log In"}</a></p>
</div>
</div>
    </div>
  </div>
  );
}

export default App;
