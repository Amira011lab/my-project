
function Dashboard({ isloggedIn }) { 
    return (
      <div>
        {isloggedIn ? <p>You are logged in!</p> : <p>Fadlan login garay.</p>}
            {isloggedIn ? <p>yes true</p> : <p>no false</p>}
      </div>
    );

}
export default Dashboard;