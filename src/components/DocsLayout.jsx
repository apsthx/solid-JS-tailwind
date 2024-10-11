import Navbar from "./docs/Navbar";
import Sidebar from "./docs/Sidebar";
import Header from "./docs/Header";
import SearchBar from "./modals/SearchBar";
// import ShoppingBar from "./modals/Shoppingbar";
import { createSignal } from "solid-js";

const MainLayout = (props) => {
  const [isOpen, setIsOpen] = createSignal(false);
  const [darkMode, setDarkMode] = createSignal(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen());
  };

  // const toggleThemeMode = () => {
  //   setDarkMode(!darkMode());
  
  //   const htmlElement = document.documentElement; // แท็ก <html>
  //   htmlElement.setAttribute("data-bs-theme", darkMode() ? "dark" : "light");
  //   htmlElement.setAttribute("data-color-theme", "Blue_Theme");
    
  //   console.log(darkMode());
  // };

  console.log(isOpen)

  return (
    <div id="main-wrapper" class={isOpen() ? "show-sidebar" : ""}>
      <Sidebar />
      <div class="page-wrapper">
        <Header toggleNavbar={toggleNavbar} />
        {/* <Header toggleNavbar={toggleNavbar} toggleThemeMode={toggleThemeMode} /> */}
        <Navbar />
        <div class="body-wrapper pt-5">
          {props.children}
        </div>
          <footer className="footer py-3 bg-white border-top text-center">
            2024© All Rights Reserved by Wrappixel
          </footer>
      </div>
      {/* <ShoppingBar /> */}
      <SearchBar/>
    </div>
  );
};


export default MainLayout;
