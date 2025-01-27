import './App.css'
import { StarryBackground } from './components/ui/starry-background'

function App() {
  return (
    <div className="relative w-full min-h-screen">
      <StarryBackground />
      <main className="relative z-10 w-full h-full">
        <h1 className="text-amethyst">Planit</h1>
      </main>
    </div>
  )
}

export default App
