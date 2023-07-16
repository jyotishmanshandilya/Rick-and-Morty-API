import Image from 'next/image'
import CharacterCard from '@/components/CharacterCard';

const charactersEndpoint = 'https://rickandmortyapi.com/api/character/';


export default async function Home() {
  const res = await fetch(charactersEndpoint);
  const data = await res.json();
  // console.log(data);
  const {results=[]} = data;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 sm:p-24">

      <h1 className=' text-center mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl bg-gradient-to-r from-green-400 to-green-900 bg-clip-text text-transparent'>Hello Rick and Morty Fans</h1>

      <div className="bg-white py-10 sm:py-20">
        <div className="mx-auto max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 ">
          <div className="max-w-2xl">
            <h2 className=" text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Cast</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 text-center">
              Get to know the cast of your favourite show
            </p>
          </div>
        </div>
      </div>

      <div>
        <ul role="list" className="grid gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-24 xl:col-span-2 ">
            {results.map(character=>(
              // console.log(character.species)
              <li key={character.key}>
                <CharacterCard key={character.id} name={character.name} image={character.image} species={character.species} gender={character.gender}/>
              </li>
            ))}
        </ul>
      </div>
      
    </main>
  )
}
