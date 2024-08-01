"use client" 
import React from 'react'

export default function Loading() {
  return (
    <div className="ml-34 fixed inset-0 flex items-center justify-center bg-white bg-opacity-10 z-50">
      <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
    </div>
  )
}