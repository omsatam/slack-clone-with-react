import React from "react";
import { useStateValue } from "./StateProvider";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
               
              <Switch>
              

    


                <Route exact path="/room/:roomId">
                  <Chat />
                </Route>
    
    
                <Route exact path = "/">


               <h1>welcome</h1>

                </Route>
              </Switch>
              {/* Sidebar */}
              {/* React router */}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
