import './styles/main.css'
import logoImg from './assets/logo-nlw-esports.svg'
import { useEffect, useState } from 'react'
import { GameBanner } from './components/GameBanner'
import { CreateAdsBanner } from './components/CreateAdsBanner'
import * as Dialog from '@radix-ui/react-dialog'

function App() {
  interface IGame {
    id: string
    title: string
    bannerUrl: string
    _count: {
      ads: number
    }
  }

  const [games, setGames] = useState<IGame[]>([])

  useEffect(() => {
    fetch('http://localhost:3030/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
        console.log(data)
      })
  }, [])

  return (
    <>
      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 ">
        <img src={logoImg} alt="logo do site" />

        <h1 className="text-6xl text-white font-black mt-20">
          Seu{' '}
          <span className="text-transparent bg-nlw-gradient bg-clip-text">
            duo
          </span>{' '}
          está aqui.
        </h1>

        <div className="grid grid-cols-6 gap-6 mt-16">
          {games.map(game => {
            return (
              <GameBanner
                key={game.id}
                title={game.title}
                bannerUrl={game.bannerUrl}
                adsCount={game._count.ads}
              />
            )
          })}
        </div>

        <Dialog.Root>
          <CreateAdsBanner />
        </Dialog.Root>
      </div>
    </>
  )
}

export default App
