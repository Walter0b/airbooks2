import appRouters from '@/pages/Router/Router'
import { store } from '@/states/store'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouters}></RouterProvider>
    </Provider>
  )

}
export default App
