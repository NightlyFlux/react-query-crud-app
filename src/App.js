import { Route, Switch } from 'react-router-dom'
import BookList from './components/BookList'
import CreateBook from './components/CreateBook'
import Navbar from './components/shared/Navbar'
import UpdateBook from './components/UpdateBook'

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/update-book/:id'>
          <UpdateBook />
        </Route>
        <Route path='/create-book'>
          <CreateBook />
        </Route>
        <Route exact path='/'>
          <BookList />
        </Route>
      </Switch>
    </>
  )
}

export default App
