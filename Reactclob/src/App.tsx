import "./App.css";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import { Route, Routes } from "react-router-dom";
import { Home } from "./_root/pages";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/** public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SigninForm />}></Route>
          <Route path="/signup" element={<SignupForm />}></Route>
        </Route>
        <Route element={<RootLayout />}>
          <Route index element={<Home />}></Route>
        </Route>
        {/**private routes */}
      </Routes>
    </main>
  );
};
export default App;
