import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import TaskIndex from './tasks/TaskIndex'
import Navigation from './Navigation'
import Error404 from './Error404'
import NewTaskForm from './tasks/NewTaskForm'
import TaskDetails from './tasks/TaskDetails'
import EditTaskForm from './tasks/EditTaskForm'
import SignUpForm from './users/SignUpForm'
import LoginForm from './users/LoginForm'
import CurrentUserProvider from './contexts/CurrentUser'

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={SignUpForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/tasks" component={TaskIndex} />
          <Route exact path="/tasks/new" component={NewTaskForm} />
          <Route exact path="/tasks/:taskId" component={TaskDetails} />
          <Route exact path="/tasks/:taskId/edit" component={EditTaskForm} />
          <Route path="/" component={Error404} />
        </Routes>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
