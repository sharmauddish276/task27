```jsx
import React from "react";
import useFetch from "./useFetch";
import "./App.css";

function App() {
    const { data, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    return (
        <div className="container">
            <h1>Users List</h1>

            {data && data.map((user) => (
                <div className="card" key={user.id}>
                    <h3>{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>City: {user.address.city}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
```
