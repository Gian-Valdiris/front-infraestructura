import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Input,Button, Typography} from 'antd';
import { Iinputs } from '../interface/inputs';

const inputs:Iinputs[] = [
    {
      name:'username',
      placeholder:'Ingrese su usuario',
      value:'',
    },
    {
      name:'password',
      placeholder:'Ingrese su contraseña',
      value:'',
      type:'password'
    }
]
const LoginComponent = () => {

  const [auth,setAuth] = useState<{username:string,password:string}>({
    username:'',
    password:'',
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
      <Button type='primary' className='input_login' onClick={onClickLogin} >Login</Button>
      <Link to='/register'  >{<Typography.Link>Ir a registrarme</Typography.Link>}</Link>
    </div>
  )
}

export default LoginComponent