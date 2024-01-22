const API_ADDRESS= 'https://fr-backend-fz83.onrender.com'
// const API_ADDRESS= 'http://localhost:8000'

export const serverPictureSubmit =(imageUrlToSend)=>{
  return fetch(`${API_ADDRESS}/detect-face`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      imageUrl: imageUrlToSend,
    }),
  })
}

export const serverPutPicture = (IdToSend)=>{
  return fetch(`${API_ADDRESS}/image`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: IdToSend
    })
  })
}


export const serverSignIn = (email,password)=>{
  return fetch(`${API_ADDRESS}/signin`,{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      email:email,
      password:password,
    })
  })
}

export const  serverRegister = (email,password,name,)=>{
  return fetch(`${API_ADDRESS}/register`,{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      email:email,
      password:password,
      name:name,
    })
  })
}