import React from 'react'

const Modal = ({handleClose}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50 transition-opacity">
      <div className="bg-white p-4 rounded shadow-lg w-1/3 transform translate-x-full transition-transform">
        <div className="flex justify-end">
          <button onClick={handleClose} className="text-red-500">
            Close
          </button>
        </div>
        <div>Modal Content</div>
      </div>
    </div>
  )
}

export default Modal