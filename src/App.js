import Dashboard from "./Dashboard";
import withAuth from "./withAuth";

const App = () => {
  const AuthDash = withAuth(Dashboard);
  return (
    <div>
      <AuthDash />
    </div>
  );
};

export default App;
