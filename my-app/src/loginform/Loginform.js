import React from 'react'
import { useState } from 'react'
import "./login.css"
function Login() {
  const [gender, setGender] = useState("client");
  const [emails1, setEmails1] = useState("");
  const[errors,setErrors]=useState('')



  function onChangeValue(event) {
    setGender(event.target.value);
    console.log(event.target.value);
    console.log(gender)
  }
  function emails(event) {
    setEmails1(event.target.value);
    console.log(event.target.value);
    console.log(emails1)
  }
  const [names, setNames] = useState(true)
  const [logins, setLogins] = useState(true)


  function forgot() {
    setLogins(false)
  }
  var retrievedData = localStorage.getItem("cartData");
    var movies2 = JSON.parse(retrievedData);
//   function login1(e) {
//     e.preventDefault();
//     var email1 = document.querySelector('.email')
//     // addUser(data)
//     var email = email1.value
//     var password = document.querySelector('.password').value

    // const result = movies2.filter(datas => datas.email == emails1)
    // console.log((result[0]))
//     if (email == null || email == " ") {
//       setNames(false)
//       alert("alse")
//       return false;
//     }

//     else {
//       if (password == ((result[0]).passward) && email == emails1) {
//         setNames(true)
//         alert(names)
//         dispatch(adduser(result[0]))
//         dispatch({
//           type: 'login',
//           payload: { product: true },
//         })

//       }
//       else {
//         setNames(false)
//         alert("alse")

//       }
//     }
//   }
const insides = { fname: "", lname: "", mobile: "", email:"",location: "",password:"" }
   
    const [values, setValues] = useState(insides)
    
    const [cartData, setCartData] = useState([])
    function getdata(e) {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
        e.preventDefault()
    }
    function hanechange(e) {
      // setCartData([...movies2])
      if (
        values.fname === "" &&
        values.lname === "" &&
        values.email === "" &&
        values.password === "" &&
        values.mobile === ""
      ) {
        seterror("please enter input data");
        return;
      }
      if (JSON.parse(localStorage.getItem("cartData")) === null) {
        localStorage.setItem("cartData", JSON.stringify([values]));
      } else {
        let data = JSON.parse(localStorage.getItem("cartData"));
        data.push(values);
        localStorage.setItem("cartData", JSON.stringify(data));
      }
    console.log("setAddCart",cartData)

    // setCartData([...cartData,values])
    // console.log("setAddCart",cartData)

    // localStorage.setItem("cartData", JSON.stringify(cartData));
        e.preventDefault()
        setLogins(true)
      }
  return (
    <div>
      <div className='mb-5'>
      
        <div className='container-fluid'>
          <div className=' '>
            {logins ?
              <div className=' row   d-flex justify-content-center '>
                <div className=' col-md-4 col-sm-12 inner-form  text-center  m-3 '>
                  <form>
                    <h3 className='bg-secondary  p-2 text-light text-center'>Employee Login</h3>
                    <input className='m-3 email' type='email' onChange={emails} placeholder='email' /><br />
                    <input className='m-3 password' type='password' placeholder='********' /><br />
                    <button className='p-2 log-bn'>Login</button>
                    <li className='m-3' onClick={forgot}><a href='#'>Regester</a></li>
                    {names ? <>hi</> : <p className="text-danger">Username OR passward Incorect </p>}


                  </form>

                </div>
              </div> :
              <div className="container">
              <div className="left-container">
                  <div className="login">
                      
                      <div className="form-container">
                          <form >
                              <h4>personal Ditail</h4>
                              <div>
                                  <div className="name-box m-2">
                                      <div className="name">
                                          <label  >First Name</label><br />
                                          <input type="text" name="fname" onChange={getdata} />
                                      </div>
                                      <div className="name">
                                          <label >Last Name</label><br />
                                          <input type="text" name="lname" onChange={getdata} />
                                      </div>
                                  </div>
                                  <div className="name-box mob-box m-2">
                                      <div className="mob">
                                          <label >Mobile Number</label><br />
                                          <input type="text" name="mobile" onChange={getdata} />
                                      </div>
                                      <div className="name">
                                          <label >Email</label><br />
                                          <input type="email" name="email" onChange={getdata} />
                                      </div>
                                  </div>
                                  
                                  <div className="m-2 name">
                                      <label >location</label>
                                      <br />
                                      <input type="text" name="location" onChange={getdata} />
                                  </div>
                                  <div className="m-2 name">
                                      <label >passwordd</label>
                                      <br />
                                      <input type="password" name="password" onChange={getdata} />
                                  </div>
                              </div>
                              
                              <div className="btn-grp" id="form-btn">
                                  
                                  <button type="submit" onClick={hanechange}>ADD</button>
                              </div>
  
                          </form>
                      </div>
  
                  </div>
              </div>
          </div>
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login