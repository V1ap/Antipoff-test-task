import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Card } from "./components/Card";
import { Catalog } from "./components/Catalog";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { RootState } from "./store";
import { setUser } from "./store/slice/userSlice";
import { getUserLS } from "./utils/storageUser";
import {} from "firebase/auth";
import { NotFound } from "./components/NotFound";

function App() {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const dispatch = useDispatch();
  dispatch(setUser(getUserLS()));
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              replace
              to={
                useAppSelector((state) => state.user.token)
                  ? "/menu"
                  : "/signup"
              }
            />
          }
        />
        <Route
          path="/login"
          element={
            useAppSelector((state) => state.user.token) ? (
              <Navigate replace to="/menu" />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/signup"
          element={
            useAppSelector((state) => state.user.token) ? (
              <Navigate replace to="/menu" />
            ) : (
              <SignUp />
            )
          }
        />
        <Route
          path="/menu"
          element={
            useAppSelector((state) => state.user.token) ? (
              <Catalog />
            ) : (
              <Navigate replace to="/signup" />
            )
          }
        />
        <Route
          path="/card/:id"
          element={
            useAppSelector((state) => state.user.token) ? (
              <Card />
            ) : (
              <Navigate replace to="/signup" />
            )
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
