import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import {getAuth, onAuthStateChanged} from "firebase/auth"
export default function Header() {
  const [pageState,setPageState] = useState({
    context : 'Sign In',
    path : '/sign-in'
  });
  const {context,path} = pageState;
  const location = useLocation();
  const navigate = useNavigate();
  function activeRoute(route) {
    if(route === location.pathname) {
        return true
    }
  }
  const auth = getAuth();
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user) {
        setPageState({
          context : 'Profile',
          path : '/profile'
        })
      }else {
        setPageState({
          context : 'Sign In',
          path : '/sign-in'
        })
      }
    })
  },[auth]);

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
        <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
            <div>
                <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" className="h-5 cursor-pointer" onClick={()=>navigate('/')} />
            </div>
            <div>
                <ul className="flex space-x-10">
                    <li className={`py-4 text-sm font-semibold text-gray-400 border-b-[3px] border-white cursor-pointer ${activeRoute("/") && "text-neutral-800 border-b-red-500"}`} onClick={()=>navigate('/')}>Home</li>
                    <li className={`py-4 text-sm font-semibold text-gray-400 border-b-[3px] border-white cursor-pointer ${activeRoute("/offers") && "text-neutral-800 border-b-red-500"}`} onClick={()=>navigate('/offers')}>Offers</li>
                    <li className={`py-4 text-sm font-semibold text-gray-400 border-b-[3px] border-white cursor-pointer ${(activeRoute("/sign-in") || activeRoute("/profile")) && "text-neutral-800 border-b-red-500"}`} onClick={()=>navigate(path)}>{context}</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
