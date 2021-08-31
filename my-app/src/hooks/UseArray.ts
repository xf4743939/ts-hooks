import React, { useState, useEffect } from 'react'

const useArray =<A> (initVal:A[]) =>{
  const [value, setValue] = useState(initVal);
  
   return {
     value,
     setValue,
     add:(item:A)=>setValue([...value,item]),
     remove: (index:number) =>{
       const a = [...value];
       a.splice(index,1);
       setValue(a);
     },
     clear: () => setValue([])
   }
}

export default useArray