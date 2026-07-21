import React from 'react'
import { Link } from 'react-router-dom'
import { LayoutDashboard, Package, Folder, ShoppingCart, Music, ImageIcon, Settings } from 'lucide-react'

const AdminSidebar = () => {
  return (
    <div className="w-64 glass-effect-dark border-r border-bratde-accent border-opacity-20 p-6">
      <Link to="/admin" className="text-2xl font-bold text-bratde-accent mb-8 block">
        BRATDE ADMIN
      </Link>

      <nav className="space-y-2">
        <Link to="/admin/dashboard" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-bratde-accent hover:bg-opacity-10 transition">
          <LayoutDashboard size={20} />
          Dashboard
        </Link>
        <Link to="/admin/products" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-bratde-accent hover:bg-opacity-10 transition">
          <Package size={20} />
          Products
        </Link>
        <Link to="/admin/categories" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-bratde-accent hover:bg-opacity-10 transition">
          <Folder size={20} />
          Categories
        </Link>
        <Link to="/admin/orders" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-bratde-accent hover:bg-opacity-10 transition">
          <ShoppingCart size={20} />
          Orders
        </Link>
        <Link to="/admin/playlists" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-bratde-accent hover:bg-opacity-10 transition">
          <Music size={20} />
          Playlists
        </Link>
        <Link to="/admin/banners" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-bratde-accent hover:bg-opacity-10 transition">
          <ImageIcon size={20} />
          Banners
        </Link>
        <Link to="/admin/settings" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-bratde-accent hover:bg-opacity-10 transition">
          <Settings size={20} />
          Settings
        </Link>
      </nav>
    </div>
  )
}

export default AdminSidebar
