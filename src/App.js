import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import {useSelector } from 'react-redux';
import UsersProfile from './components/UserProfile';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  console.log(useSelector((state) => state.auth.isAuthenticated));

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UsersProfile />}

      <Counter />
    </Fragment>
  );
}

export default App;
