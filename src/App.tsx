import { useRoutes } from 'react-router-dom'
import { routes } from './routes/root'

function App() {
  const element = useRoutes(routes)

  return <div>{element}</div>
}

export default App
