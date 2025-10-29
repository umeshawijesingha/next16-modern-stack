import Link from 'next/link'
import React from 'react'

function users() {
  return (
    <><h1 className="text-5xl underline"> Dashboard Users</h1>
    <ul className='mt-10'>
          <li><Link href="/dashboard/users/1">User 1</Link></li>
          <li><Link href="/dashboard/users/2">User 2</Link></li>
          <li><Link href="/dashboard/users/3">User 3</Link></li>
          <li><Link href="/dashboard/users/4">User 4</Link></li>
      </ul>
      </>
  )
}

export default users