import appRouters from '@/pages/Router/Router'
import { store } from '@/states/store'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { ModalProvider } from './hooks/ModalContext'

function App() {
  return (
    
    <Provider store={store}>
      <ModalProvider>
        <RouterProvider router={appRouters}></RouterProvider>
      </ModalProvider>
    </Provider>
  )

}
export default App
