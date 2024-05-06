import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Root = ({ search }) => {
  return (
    <>
      <Header search={search} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
