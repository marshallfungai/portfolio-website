import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4  text-center text-gray-500'>
        <p className='mb-2 '>
        <small >
            &copy; {new Date().getFullYear()} -
            Made with <span className='text-red-500'>❤</span> by <a target='_blank' className='underline' href="https://github.com/marshallfungai">Fungai Marshall Mangondoza</a>
        </small>
        </p>
    </footer>
  )
}
