import { View, Text, StyleSheet, TextInput, Pressable, Button} from 'react-native'
import React, {useState} from 'react'

import { useAddUserSignUpMutation } from '../features/actions/authAPI'


const SignUp = () => {
  
  const [singUp] = useAddUserSignUpMutation()
  
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [photo, setPhoto] = useState('')

  const userData = {
    name: name,
    lastName: lastName,
    email: email,
    password: password,
    photo: photo,
    from: 'form'
  }

  function handleSubmit(e){
    e.preventDefault()
    
    if(name.length <= 2){
     
    }else if(lastName.length <= 2){
     
    }else if( email.length <= 7 ){
      
    }else if(password.length <= 5){
    
        
      
    }else if(photo.length <= 8){
      ;
    }else{
      singUp(userData)
      .unwrap()
      .then( res => console.log(res) )
    
       

      e.target.reset()
    }

  }

  function handleChange(e){
    switch (e.target.id) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'photo':
        setPhoto(e.target.value);
        break;
      case 'name':
        setName(e.target.value);
        break;
      case 'lastName':
        setLastName(e.target.value);
        break;
    
      default:
        break;
    }

  }

  
  
  return (
    <View  method='post'>
    <Text>Registrarse</Text>
    <View >
      <Text>Nombre</Text>
      <TextInput  type='text' onChange={handleChange} id='name' placeholder='Juan' name='name'></TextInput>
      
      <Text >Apellido</Text>
      <TextInput  type='text' onChange={handleChange} id='lastName' placeholder='Perez' name='lastName'></TextInput>
      
      <Text >Correo</Text>
      <TextInput  type='text' onChange={handleChange} id='email' placeholder='ejemplo@ejemplo.com' name='email'></TextInput>
      
      <Text  >Contraseña</Text>
      <TextInput  type='password' onChange={handleChange}  placeholder='******' id='password' name='password'></TextInput>
      
      <Text  >foto URL</Text>   
      <TextInput type='text' onChange={handleChange}  placeholder='https://...' id='photo' name='photo'></TextInput>
    <Button onPress={handleSubmit} method='post' title='Registrarse'/>
    </View>
    
  </View>
   
  
  )
}

export default SignUp

const styles = StyleSheet.create({

})