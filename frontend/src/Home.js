
function Home() {
    return (
      <main>
        <h1>HOME</h1>
        <div >
          <img height="300" width="500" src="http://localhost:5000/images/to-do-list.png" alt="to-do-list" />
        </div>
        <a href="/tasks">
          <button className="btn-primary">To Do List</button>
        </a>
        <a href="/tasks/new">
          <button className="btn-primary">New Task</button>
        </a>
      </main>
    );
  }
  
  export default Home;