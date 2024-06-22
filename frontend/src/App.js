import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import TaskIndex from './tasks/TaskIndex';
import Navigation from './Navigation';
import Error404 from './Error404';
import NewTaskForm from './tasks/NewTaskForm';
import TaskDetails from './tasks/TaskDetails';
import EditTaskForm from './tasks/EditTaskForm';
import SignUpForm from './users/SignUpForm';
import LoginForm from './users/LoginForm';
import CurrentUserProvider from './contexts/CurrentUser';

function App() {
  return (
    <CurrentUserProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/tasks" element={<TaskIndex />} />
          <Route path="/tasks/new" element={<NewTaskForm />} />
          <Route path="/tasks/:taskId" element={<TaskDetails />} />
          <Route path="/tasks/:taskId/edit" element={<EditTaskForm />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </CurrentUserProvider>
  );
}

export default App;
