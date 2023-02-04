import React from 'react'
import { useAppSelector } from '../app/hooks'

function Dashboard() {

  const userInfo = useAppSelector((zoom)=>zoom.auth.userInfo)
  console.log({userInfo})

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard