import { Filter, Hero, SearchBar } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id="discover">
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
          Car Selection
          </h1>
          <p>Explore Cars That Could Be Your Favorites</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filters-container'>
          <Filter />
          <Filter />
          </div>

        </div>
      </div>
    </main>
  )
}
