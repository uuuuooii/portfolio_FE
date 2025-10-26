import Character from "./character"
import SpeechBubble from "./speechBubble"

const Home = () => {
  return (
    <section className="
    h-[calc(100vh-169px)] 
    flex 
    justify-center
    align-center
    ">
      <div>
        <Character />
        <SpeechBubble />
        </div>
    </section>
  )
}

export default Home