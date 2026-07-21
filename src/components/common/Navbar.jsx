import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { ShoppingCart, Heart, User, Menu, X } from 'lucide-react'
import { useCartStore } from '../../stores/cartStore'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, signOut } = useAuth()
  const cartItems = useCartStore((state) => state.items)

  return (
    <nav className="fixed top-0 w-full glass-effect-dark z-50 border-b border-bratde-accent border-opacity-20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-bratde-accent hover:text-bratde-accent-light transition">
            BRATDE
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/store" className="text-gray-300 hover:text-bratde-accent transition">Store</Link>
            <Link to="/music" className="text-gray-300 hover:text-bratde-accent transition">Music</Link>
            <Link to="/playlists" className="text-gray-300 hover:text-bratde-accent transition">Playlists</Link>
            <Link to="/favorites" className="text-gray-300 hover:text-bratde-accent transition">Favorites</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/cart" className="p-2 hover:text-bratde-accent transition relative">
              <ShoppingCart size={20} />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-bratde-accent text-bratde-darker text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            {user ? (
              <>
                <Link to="/profile" className="p-2 hover:text-bratde-accent transition">
                  <User size={20} />
                </Link>
                <button onClick={signOut} className="btn-bratde px-4 py-2 text-sm">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-bratde px-4 py-2 text-sm">Login</Link>
                <Link to="/register" className="btn-bratde-outline px-4 py-2 text-sm">Register</Link>
              </>
            )}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link to="/store" className="block text-gray-300 hover:text-bratde-accent transition">Store</Link>
            <Link to="/music" className="block text-gray-300 hover:text-bratde-accent transition">Music</Link>
            <Link to="/playlists" className="block text-gray-300 hover:text-bratde-accent transition">Playlists</Link>
            <Link to="/favorites" className="block text-gray-300 hover:text-bratde-accent transition">Favorites</Link>
            <Link to="/cart" className="block text-gray-300 hover:text-bratde-accent transition">Cart ({cartItems.length})</Link>
            {user ? (
              <>
                <Link to="/profile" className="block text-gray-300 hover:text-bratde-accent transition">Profile</Link>
                <button onClick={signOut} className="w-full btn-bratde">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="block w-full btn-bratde text-center">Login</Link>
                <Link to="/register" className="block w-full btn-bratde-outline text-center">Register</Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
