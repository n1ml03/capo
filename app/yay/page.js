'use client'

import { useEffect } from 'react';

export default function page() {
    useEffect(() => {
      // Redirect to another website after 5 seconds
      const timer = setTimeout(() => {
        window.location.href = 'https://n1ml03.github.io/KN/';
      }, 10000);
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div className='box'>
        <img alt='bugcat yayyy' className='image' src='/bugcat-yay.gif' />
        Happy Valentine&apos;s Day ngoan xinh yeu cua anh &lt;3
      </div>
    );
  }
