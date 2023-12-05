# Milestone-Project3# Project To-Do-list
What to do Today...  is an app where users can manage a wide range of tasks setting dead lines and difficulty level.

### Setup
First, you'll need a Postgres database to connect to. Follow instructions here to setup the database and save credentials for the next step.

Next create a `.env` file inside of `backend`. It will need to contain the following environment variables (change the values for the database to match what you defined in the previous step)
```
PORT=5000
DB_USERNAME=postgres
DB_PASSWORD=Nibiru12!
DB_DATABASE=ToDoList
```

Next `cd` into `backend` and run `npm install` to install dependencies for the API.

Next, `cd` into `frontend`, and run `npm install` to install dependencies for the React app.

Finally, in separate terminals, run `npm start` in each folder so that the API and React app are running at the same time.

### API (http://localhost:5000)
| Method | Path                                 | Purpose                                   |
| ------ | ------------------------------------ | ----------------------------------------- |
| GET    | /                                    | Home page                                 |
| GET    | /tasks                              | users index page                         |
| POST   | /tasks                              | Create new task                          |
| GET    | /tasks/:taskId                     | Details about a particular task          |
| PUT    | /tasks/:taskId                     | Update a particular task                 |
| DELETE | /tasks/:taskId                     | Delete a particular task                |
| POST   | /task/:taskId/Task            | Create a  new task |
| DELETE | /tasks/:taskId/tasks/:tasksId | Delete task once finished|


### App (http://localhost:3000)
| Path                  | Component                 | Purpose                                                                         |
| --------------------- | ------------------------- | ------------------------------------------------------------------------------- |
| /                     | `Home.js`                 | Home page                                                                       |
| /sign-up              | `users/SignUpForm.js`     | Form for creating a new user                                                    |
| /tasks/new           | `task/NewTaskForm.js`  | Form for creating a new task                                                   |
| /tasks/:taskId      | `places/PlaceDetails.js`  | Details of a task, including it's difficulty level and date for completion, create a new task |
| /tasks/:taskId/edit | `tasks/TaskForm.js` | Form for editing a task                                                       |
