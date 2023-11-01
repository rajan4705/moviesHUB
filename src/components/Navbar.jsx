import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { Link,useNavigate } from 'react-router-dom'
const Navbar = () => {
  const {user,logOut}=UserAuth()
  const navigate=useNavigate();

  const handleLogout=async()=>{
    try{
      await logOut();
      navigate('/');
    }
    catch(error){
      console.log(error);
    }
  };
  //console.log(user.email)
  return (
    <div className='flex items-center justify-between p-4 z-[100] absolute w-full'>
      <Link to ='/'>
        <h2 className='text-white text-3xl font-semibold cursor-pointer inline-block font-sans'>movies<button className= 'bg-[#FF9900] text-black rounded font-bold pt-0 pr-1 pb-1 pl-1'>HUB</button></h2>
      </Link>
      {user?.email ? 
        <div>
          <Link to='/account'>
            <button className='text-white pr-4'>Account</button>
          </Link>
         
            <button className='bg-[#FF9900] px-6 py-2 rounded cursor-pointer text-white' onClick={handleLogout}>Logout</button>
       
        </div>
        : 
        <div>
          <Link to='/login'>
            <button className='text-white pr-4'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-[#FF9900] px-6 py-2 rounded cursor-pointer text-white '>Sign Up</button>
          </Link> 
        </div>
      }
    </div>
  );
}
export default Navbar