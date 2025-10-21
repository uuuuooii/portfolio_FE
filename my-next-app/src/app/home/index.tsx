import Character from "./character"
import SpeechBubble from "./speechBubble"

const Home = () => {
  return (
    <div className="
    h-[calc(100vh-94px)] 
    flex 
    justify-center
    align-center
    ">
      <div>

     
        <Character />
        <SpeechBubble />
        </div>
    </div>
  )
}

export default Home