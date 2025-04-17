import logo from "./logo.svg";
import "./App.css";
import UserList from "./components/UserList";
import UserListAsync from "./components/UserListAsync";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-content">
        <h1 className="text-3xl font-bold underline">My React Todo List</h1>
        {/* <UserList /> */}
        <UserListAsync/>
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
