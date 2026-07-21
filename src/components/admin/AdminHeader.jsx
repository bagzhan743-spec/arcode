import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { LogOut } from 'lucide-react'

const AdminHeader = () => {
  const { signOut } = useAuth()

  return (
    <div className="glass-effect-dark border-b border-bratde-accent border-opacity-20 px-8 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-bratde-accent">Admin Dashboard</h1>
      <button
        onClick={signOut}
        className="flex items-center gap-2 btn-bratde px-4 py-2"
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  )
}

export default AdminHeader
