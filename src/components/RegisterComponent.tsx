import React,{useState} from 'react'
import { Input,Button, Typography} from 'antd';
import { Iinputs, IinputsRegister } from '../interface/inputs';
import { Link } from 'react-router-dom';
const inputs:IinputsRegister[] = [
    {
      name:'username',
      placeholder:'Ingrese su usuario',
      value:'',
    },
    {
      name:'email',
      placeholder:'indique su email',
      value:'',
      type:'email'
    },
    {
      name:'password',
      placeholder:'Ingrese su contraseña',
      value:'',
      type:'password'
    },{
      name:'confirmPassword',
      placeholder:'Confirme su clave',
      value:'',
      type:'password'
    }
]
const RegisterComponent = () => {

  const [auth,setAuth] = useState<{username:string,password:string,email:string,confirmPassword:string}>({
    username:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  const onChangeInput=({target}:React.ChangeEvent<HTMLInputElement>)=>{
    setAuth({
      ...auth,
      [target.name]:target.value
    })
  }

  const onClickLogin = (e:React.MouseEvent<HTMLElement, MouseEvent>)=>{
    console.log(auth)
  }

  return (
    <div>
      <Typography.Title className='title_login'> 
        WeClone 
      </Typography.Title>
      {inputs.map(i=>(
        <Input 
          {...i}
          value={auth[i.name] } 
          onChange={onChangeInput} 
          className="input_login" 
          key={i.name}
        />
      ))}   
      <Button type='primary' className='input_login' onClick={onClickLogin} > Register </Button>
      <Link to='/login'  >{<Typography.Link>Iniciar session</Typography.Link>}</Link>
    </div>
  )
}

export default RegisterComponent