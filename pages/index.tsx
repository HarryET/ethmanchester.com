import Head from 'next/head'


const Home = () => {
  return (
    <>
      <Head>
        <title>EthManchester</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"w-full h-full flex flex-col space-y-2 px-16 py-6 font-serif"}>
        {/* <p>Soon<sup>tm</sup></p> */}
        <a href="mailto:contact@ethmanchester.com" className='hover:underline'>contact@ethmanchester.com</a>
      </main>
    </>
  )
}

export default Home;
