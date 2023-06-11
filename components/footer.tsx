import { JetBrains_Mono } from 'next/font/google'

const jetbrains = JetBrains_Mono({ subsets: ['latin'] })

export const Footer: React.FC = () => {
    return (
        <footer className={`flex flex-col w-full space-y-2 sm:space-y-0 sm:flex-row sm:justify-between ${jetbrains.className}`}>
          <div className="flex flex-row space-x-4">
            {/* <a className='text-gray-700 hover:text-gray-800 hover:underline' href="mailto:contact@ethmanchester.com">Email</a> */}
          </div>
          <p className='text-gray-600'>&copy; 2023 <a href="https://catpowered.xyz" className="hover:underline">CatPowered Ltd</a></p>
        </footer>
    )
}
