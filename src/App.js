import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useState } from 'react';

function App() {
  const [length, setLength] = useState(6);
  const [isnumberallowed, setnumberallowed] = useState(false)
  const [ischarallowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState("")
  const generatepassword = useCallback(() => {

    let str = "abcdefghijklmnopqrstuvwxYZABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (isnumberallowed) { str += "0123456789" }
    if (ischarallowed) { str += ")(&@%$!!&)()**&^" }
    let pass = ""
    console.log(str)
    console.log(str.length)
    for (let i = 1; i <= length; i++) {

      let ri = Math.floor(Math.random() * str.length)
      console.log(ri)
      pass += str.charAt(ri);
    }
    setpassword(pass)
  }, [length, isnumberallowed, ischarallowed, setpassword])
  useEffect(() => { generatepassword() }, [length, isnumberallowed, ischarallowed, setpassword])

  return (

    <>
      <div className=' shadow-2xl rounded-xl absolute top-1/3 -translate-x-1/2 -translate-y-1/2 left-1/2 main text-center px-4 py4 text-white bg-slate-800  place-content-around' >
        <h1 className=''> PASSWORD GENERATOR</h1>


        <input className='shadow-2xl text-blue-500 w-full' type='textbox' placeholder='PASSWORD' value={password}>

        </input> <br></br>
        LENGTH IS : {length}
        <input type='range' min={6} max={100} onChange={(e) => setLength(e.target.value)} ></input>
        <br></br>
        <label> NUMBER ALLOWED</label>
        <input type='checkbox' onChange={() => { setnumberallowed((prev) => !prev) }}></input>
        <label> CHAR ALLOWED</label>
        <input type='checkbox' onChange={() => { setcharallowed((prev) => !prev) }}></input>

      </div>
    </>

  );
}

export default App;
