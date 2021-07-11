import * as React from 'react'

export default function Hamburguer (props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={192}
      height={192}
      {...props}
    >
      <path fill="#fff" d="M2 5v2h20V5H2zm0 6v2h20v-2H2zm0 6v2h20v-2H2z" />
    </svg>
  )
}
