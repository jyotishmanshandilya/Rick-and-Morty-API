'use client'

export default function CharacterCard({key, name, gender, species, image}) {
    return (
            <div className="flex items-center gap-x-8">
                <img className="h-20 w-20 rounded-full" src={image} alt="" />
                <div>
                    <h3 className="text-xl font-semibold leading-7 tracking-tight text-black">{name}</h3>
                    <p className="text-md font-semibold leading-6 text-green-600">{gender}</p>
                    <p className="text-md font-semibold leading-6 text-green-800">{species}</p>
                </div>
            </div> 
    )
}
  