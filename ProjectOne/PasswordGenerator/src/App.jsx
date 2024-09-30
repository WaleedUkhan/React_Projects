import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  
  //State Initialization

  const [length, setLength]= useState(8);
  const [numAllowed, setNumAllowed]= useState(false);
  const [charAllowed, setCharAllowed]= useState(false);
  const [password, setPassword] = useState("");

  //useRef Hook 
  const passwordRef = useRef(null)

  const passwordGen = useCallback(()=>{

    let pass = ""

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str+= "123456789"


    if(charAllowed) str+= "~`!@#$%&^*';"

    for (let i = 1; i <= length; i++){
     let char = Math.floor(Math.random() * str.length + 1)
     pass += str.charAt(char)     
   }

   setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])


  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(1,25);optional
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(()=>{
    passwordGen();
  }, [length, numAllowed, charAllowed, passwordGen])

  return (
   <>
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-400 bg-gray-700'>

  <h1 className='text-yellow-300 text-2xl my-3 text-center'>Password Generator!</h1>

    <div className='flex shadow-sm rounded-lg mb-4 overflow-hidden'>
      <input type="text"
      value={password}
      className='outline-none w-full py-1 px-3 '
      readOnly
      placeholder='PASSWORD'
      ref={passwordRef}
      />

      <button 
      onClick={copyPassword}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '>COPY</button>

    </div>

    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={30}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label >Length: {length}</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked= {numAllowed}
        id='numberInput'
        onChange={()=>{
          setNumAllowed((prev)=>!prev);
        }
        }
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked= {charAllowed}
        id='charInput'
        onChange={()=>{
          setCharAllowed((prev)=>!prev);
        }
        }
        />
        <label htmlFor="charInput">Characters</label>
      </div>
    </div>

  </div>
   </>
  )
}

export default App
