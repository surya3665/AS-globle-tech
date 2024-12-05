import React from 'react'
import "./login.css"


const Login = () => {
    // const [formData,setFormData] = useState({
    //     userName:"",
    //     password:"",
    // })

    // const {mutate} = usemutation({
    //     mutationFn: async({...formData}) => {
    //         try{
    //             const response = await fetch(`http://localhost:4000/api/auth/login`,{
    //                 method:"POST",
    //                 headers:{
    //                     "Content-Type": "application/json"
    //                 },
    //                 body:JSON.stringify({...formData})
    //             })
    //             const data = await response.json()
    //             if(!response.ok){
    //                 return data
    //             }
    //         }catch(err) {
    //     throw new Error(err)
    // }
    //     }
    // })

    // const handleSubmit = async(e) => {
    //     e.preventDefault()
    //     mutate(formData)
    // }

    // const handleChange = async (e) => {
    //     setFormData({...formData,[e.target.name]: e.target.value})
    // console.log(formData)
    // }


  return (
    <div>
        <form className='form'>
            <div className='login'>
                <h1>Login</h1>
            </div>
            
            <div className='input'>
                <input type="text" placeholder='userName' /><br />
                <input type="text" placeholder='password'/>
            </div>
            
            <div className='btn'>
                <button>submit</button>
            </div>
        </form>
    </div>
  )
}

export default Login