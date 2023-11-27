import './App.css';

function User ({name, pic}) {
  return (
    <section>
      <img className = 'user-profile-pic' src = {pic} alt = {name} />
      <h2 className = 'user-name'>
        Hello, <span className = 'user-first-name'>{name}</span>
      </h2>
    </section>
  )
}

function App() {
  const users = [
    {
    name: "Fam",
    pic: "https://plus.unsplash.com/premium_photo-1665941065977-993d9105662a?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Fam 2",
    pic: "https://plus.unsplash.com/premium_photo-1665941065957-8c350dee9f82?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Friends",
    pic: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Guy",
    pic: "https://images.unsplash.com/photo-1495216875107-c6c043eb703f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
  ]
  return (
    <div className = 'App'>
      {users.map((user) => (
        <User name = {user.name} pic = {user.pic} />
      ))}
    </div>
  )
}

export default App;
