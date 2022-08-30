import React,{useState} from 'react'



function Signup() {

    const [data,setData] = useState(' ');
    function onchange(){
        console.log(data);
        setData("")
    }

  return (
    <div className="container">
        <div className="signup_main">
            <div className="envelop">
                <div>
                <img src="./image/envelope.png" alt="envelop" />
                </div>
            
            <div className="signup_context">
            <p className="signpara"> Get industry update with our daily newsletter</p>
             <p  className="signpara1">Subscribe Now !</p>
            </div>
            </div>
            <div className="signup_context_input">
                <input className="input_email"type="email" value={data} placeholder='Email address'  onChange={(e) =>setData(e.target.value)}/>
            <div className="Signup_btn">
            <button className="signup_btn1" onClick={onchange}>Signup</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Signup