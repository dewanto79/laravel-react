import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'

export default function Toast() {
  const { toast } = useStateContext();

  return (
    <>
      {toast.show &&
        <div className='py-2 px-3 text-white text-center rounded bg-emerald-600 fixed bottom-8 left-1/2 z-50 animate-fade-in-down'>
          {toast.message}
        </div>
      }
    </>
  )
}
