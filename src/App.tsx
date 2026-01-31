import { Button } from '@chakra-ui/react'

const App = () => {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}

export default App

/*src/
 ├─ app/              // app setup (providers, layouts)
 ├─ components/       // reusable UI components
 ├─ pages/            // route-level pages
 ├─ features/         // domain-specific logic (projects, tasks, etc.)
 ├─ hooks/            // custom hooks
 ├─ services/         // API logic
 ├─ store/            // global state
 ├─ types/            // shared TS types
 ├─ utils/            // helper functions
 └─ routes/           // route definitions
*/