import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Page1 = () => {
  // useDispatch การเปลี่ยนแปลง store (การส่งค่าเข้าไป)
  const dispatch = useDispatch();

  // useSelector การเข้าถึง store
  const { user } = useSelector(state => ({ ...state }));

  const handleLogin = () => {
    dispatch({
      type: "LOGIN",
      payload: {
        username: 'Degang',
        password: '123456'
      }
    });
  };

  const handleLogout = () => {
    console.log('logout');
    dispatch({
      type: "LOGOUT",
      payload: 'DeGang logout'
    });
  };

  console.log(user);

  return (
    <div>
      <h1>Hello Page1</h1>
      {/* <h2>{user}</h2> */}
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Page1;
