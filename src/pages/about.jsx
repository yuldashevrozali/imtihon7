import React from 'react'

export default function About(props) {
  const {checkbox} = props;
  return (
    <div style={checkbox ?{background:'#272935', color:'white'} :{background:'white'}} className='About'>
      <h1>We love <span style={checkbox ?{background:'#FF7AC6', color:'white'} :{background:'#057AFF'}} className='bg-blue-600 text-base-200 pl-6 pr-6 pb-2'>comfy</span></h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!</p>
    </div>
  )
}
