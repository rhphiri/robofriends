import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./CardList";
import Searchbox from "./Searchbox";

function App() {
  const [fetchedUsers, setFetchedUsers] = useState([]);
  const [usersArray, setUsersArray] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setFetchedUsers(data);
        setUsersArray(data);
      })
      .catch((error) => console.log("Error fetching user data."));
  }, []);

  function filterUsers(event) {
    let filteredUsers = fetchedUsers.filter((user) => {
      return user.name.toLowerCase().includes(event.target.value);
    });
    setUsersArray(filteredUsers);
  }
  return (
    <div className="App container-fluid">
      <h1 className="text-center display-1">Robofriends</h1>
      <div className="d-flex justify-content-center">
        <Searchbox onChange={filterUsers} />
      </div>

      <hr />
      <div>
        <CardList robots={usersArray} />
      </div>
    </div>
  );
}

export default App;
