import { jsxFragment } from '@babel/types';
const apiUrl = "http://localhost:3001";
const localStorageKey = '_auth_provider_token_';

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = (user:any) =>{
   window.localStorage.setItem(localStorageKey,user.token || '');
   return user;
}

export const login = (data:{userName:string,password:string}) =>{
  return fetch(`${apiUrl}/login`,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data),
  }).then(async(response:Response)=>{
     if(response.ok){
      return handleUserResponse(await response.json());
     }else{
       return Promise.reject(data)
     }
  })
}

export const register = (data:{userName:string,password:string}) =>{
  return fetch(`${apiUrl}/register`,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data),
  }).then(async(response:Response)=>{
     if(response.ok){
      return handleUserResponse(await response.json());
     }
  })
}

export const logout =async () => window.localStorage.removeItem(localStorageKey);