/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export const useMount = (callback:()=>void)=>{
  useEffect(()=>{
    callback()
  }, [])
}