import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-vintage text-custom-gold h-screen p-5">
      <div className="bg-custom-purple p-16 rounded-3xl border-8 border-custom-gold max-w-[38rem] mx-auto my-5 shadow-2xl">
        <h1 className="text-6xl font-bold">Can you Gather the Magic?</h1>
        <div className="text-xl p-4">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            <p>Flip cards over and memorize their place</p>
          </div>
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            <p>Gather a pair of matching cards in as little turns as possible</p>
          </div>
        </div>
        <div className="flex justify-end">
          <Link className="bg-custom-gold w-2/5 text-center rounded-full animate-pulse p-2 text-custom-purple text-bold text-xl" href="/game">Let&apos;s Play!</Link>
        </div>
      </div>
    </main>
  )
}
