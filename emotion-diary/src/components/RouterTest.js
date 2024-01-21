import { Link } from 'react-router-dom'; 

const RouterTest = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <Link to="/diary">DIARY</Link>
      <br />
      <Link to="/new">NEW</Link>
      <br />
      <Link to="/edit">EDIT</Link>
    </>
  );
}

export default RouterTest;