const Dashboard = ({ isLogin, toggle }) => {
  return (
    <div>
      <p>Dashboard Page</p>
      <button onClick={toggle}>{isLogin}</button>
    </div>
  );
};
export default Dashboard;
