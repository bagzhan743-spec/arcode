import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bratde-darker border-t border-bratde-accent border-opacity-20 text-gray-400 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-bratde-accent font-bold mb-4">BRATDE</h3>
            <p className="text-sm">THE FUTURE IS BRATDE</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Store</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/store" className="hover:text-bratde-accent transition">Browse Products</Link></li>
              <li><Link to="/store" className="hover:text-bratde-accent transition">Coming Soon</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Music</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/music" className="hover:text-bratde-accent transition">Browse Music</Link></li>
              <li><Link to="/playlists" className="hover:text-bratde-accent transition">Playlists</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Account</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/profile" className="hover:text-bratde-accent transition">Profile</Link></li>
              <li><Link to="/favorites" className="hover:text-bratde-accent transition">Favorites</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {currentYear} BRATDE STORE. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <Link to="#" className="hover:text-bratde-accent transition">Privacy Policy</Link>
            <Link to="#" className="hover:text-bratde-accent transition">Terms of Service</Link>
            <Link to="#" className="hover:text-bratde-accent transition">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
