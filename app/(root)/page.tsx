// import Hello from "../components/hello"


async function Home() {
  console.log('i am a server component')
  return (
    <main>
      <div className="text-5xl underline">Welcome to Home</div>
      {/* <Hello/> */}
    </main>



  )
}

export default Home