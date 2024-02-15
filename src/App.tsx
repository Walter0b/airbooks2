import { RouterProvider } from 'react-router-dom'
import appRouters from '@pages/Router/Router'

function App() {
    return <RouterProvider router={appRouters}></RouterProvider>
}

export default App
