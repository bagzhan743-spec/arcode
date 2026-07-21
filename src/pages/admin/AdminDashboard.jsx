import React from 'react'

const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card-bratde">
          <p className="text-gray-400 mb-2">Total Products</p>
          <p className="text-3xl font-bold text-bratde-accent">0</p>
        </div>
        <div className="card-bratde">
          <p className="text-gray-400 mb-2">Total Orders</p>
          <p className="text-3xl font-bold text-bratde-accent">0</p>
        </div>
        <div className="card-bratde">
          <p className="text-gray-400 mb-2">Total Users</p>
          <p className="text-3xl font-bold text-bratde-accent">0</p>
        </div>
        <div className="card-bratde">
          <p className="text-gray-400 mb-2">Revenue</p>
          <p className="text-3xl font-bold text-bratde-accent">$0</p>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
