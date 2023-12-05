import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import { CurrentUser } from "../contexts/CurrentUser"

function NewTaskForm() {

	const navigate = useNavigate()

  const { currentUser } = useContext(CurrentUser)

	const [task, setTask] = useState({
		description: '',
		difficulty: '',
		deadline: '',
		author_id: currentUser.userId
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:5000/tasks`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(task)
		})

		navigate('/tasks')
	}

  if (!currentUser){
    return <p>You must be logged in to create a task</p>
}

	return (
		<main>
			<h1>Add a New Task</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="description">Task Description</label>
					<input
						required
						value={task.name}
						onChange={e => setTask({ ...task, description: e.target.value })}
						className="form-control"
						id="description"
						name="description"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="difficulty">Difficulty</label>
					<input
						required
						value={task.difficulty}
						onChange={e => setTask({ ...task, difficulty: e.target.value })}
						className="form-control"
						id="difficulty"
						name="difficulty"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="deadline">Deadline</label>
					<input
						value={task.deadline}
						onChange={e => setTask({ ...task, deadline: e.target.value })}
						className="form-control"
						id="deadline"
						name="deadline"
					/>
				</div>	
				<input className="btn btn-primary" type="submit" value="Add Task" />
			</form>
		</main>
	)
}

export default NewTaskForm