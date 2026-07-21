import React from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react'
import { useMusicStore } from '../../stores/musicStore'

const MusicPlayer = () => {
  const { currentSong, isPlaying, pauseSong, resumeSong } = useMusicStore()

  if (!currentSong) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 glass-effect-dark border-t border-bratde-accent border-opacity-20 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="font-semibold">{currentSong.title}</p>
            <p className="text-sm text-gray-400">{currentSong.artist}</p>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 hover:text-bratde-accent transition">
              <SkipBack size={20} />
            </button>
            <button
              onClick={() => isPlaying ? pauseSong() : resumeSong()}
              className="p-2 bg-bratde-accent text-bratde-darker rounded-full hover:bg-bratde-accent-light transition"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button className="p-2 hover:text-bratde-accent transition">
              <SkipForward size={20} />
            </button>
          </div>

          <button className="p-2 hover:text-bratde-accent transition">
            <Volume2 size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer
