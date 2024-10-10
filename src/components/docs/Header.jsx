import { createSignal, onMount } from "solid-js";

export default function Header(props) {
  const [isOpenToggleHeader, setIsOpenToggleHeader] = createSignal(false);
  const [isOpenOffcanvas, setIsOpenOpenOffcanvas] = createSignal(false);
  const [isOpenSearchBar, setIsOpenSearchBar] = createSignal(false);
  const [darkMode, setDarkMode] = createSignal(false);

  const toggleSearchBar = () => {
    setIsOpenSearchBar(!isOpenSearchBar());
  };
  const toggleHeader = () => {
    setIsOpenToggleHeader(!isOpenToggleHeader());
    console.log('isOpenToggleHeader', isOpenToggleHeader())

  };
  const toggleOffcanvas = () => {
    setIsOpenOpenOffcanvas(!isOpenOffcanvas());
    console.log('isOpenOffcanvas', isOpenOffcanvas())
  };
  const toggleThemeMode = () => {
    setDarkMode(!darkMode());

    const htmlElement = document.documentElement; // แท็ก <html>
    htmlElement.setAttribute("data-bs-theme", darkMode() ? "dark" : "light");
    htmlElement.setAttribute("data-color-theme", "Blue_Theme");

    console.log(darkMode());
  };

  // const toggleThemeMode = () => {
  //   setDarkMode(!darkMode());

  //   const htmlElement = document.documentElement; // แท็ก <html>
  //   htmlElement.setAttribute("data-bs-theme", darkMode() ? "dark" : "light");
  //   htmlElement.setAttribute("data-color-theme", "Blue_Theme");

  //   console.log(darkMode());
  // };

  onMount(async () => {
    import("../../assets/libs/simplebar/dist/simplebar.min.js").then(({ initializeSimplebar }) => {
      initializeSimplebar();
    });

    // const module = await import("../assets/libs/simplebar/dist/simplebar.min.js");
    // module.initializeCharts();

    function handleSidebar() {
      document.querySelectorAll(".sidebartoggler").forEach(function (element) {
        element.addEventListener("click", function () {
          document.querySelectorAll(".sidebartoggler").forEach(function (el) {
            el.checked = true;
          });
          document
            .getElementById("main-wrapper")
            .classList.toggle("show-sidebar");
          document.querySelectorAll(".sidebarmenu").forEach(function (el) {
            el.classList.toggle("close");
          });
          var dataTheme = document.body.getAttribute("data-sidebartype");
          if (dataTheme === "full") {
            document.body.setAttribute("data-sidebartype", "mini-sidebar");
          } else {
            document.body.setAttribute("data-sidebartype", "full");
          }
        });
      });
    }

    handleSidebar();

    function findMatchingElement() {
      var currentUrl = window.location.href;
      var anchors = document.querySelectorAll("#sidebarnav a");
      for (var i = 0; i < anchors.length; i++) {
        if (anchors[i].href === currentUrl) {
          return anchors[i];
        }
      }

      return null; // Return null if no matching element is found
    }
    var elements = findMatchingElement();

    // Do something with the matching element
    if (elements) {
      elements.classList.add("active");
    }

    document
      .querySelectorAll("ul#sidebarnav ul li a.active")
      .forEach(function (link) {
        link.closest("ul").classList.add("in");
        link.closest("ul").parentElement.classList.add("selected");
      });

    document.querySelectorAll("#sidebarnav li").forEach(function (li) {
      const isActive = li.classList.contains("selected");
      if (isActive) {
        const anchor = li.querySelector("a");
        if (anchor) {
          anchor.classList.add("active");
        }
      }
    });

    document.querySelectorAll("#sidebarnav a").forEach(function (link) {
      link.addEventListener("click", function (e) {
        const isActive = this.classList.contains("active");
        const parentUl = this.closest("ul");
        if (!isActive) {
          // hide any open menus and remove all other classes
          parentUl.querySelectorAll("ul").forEach(function (submenu) {
            submenu.classList.remove("in");
          });
          parentUl.querySelectorAll("a").forEach(function (navLink) {
            navLink.classList.remove("active");
          });

          // open our new menu and add the open class
          const submenu = this.nextElementSibling;
          if (submenu) {
            submenu.classList.add("in");
          }

          this.classList.add("active");
        } else {
          this.classList.remove("active");
          parentUl.classList.remove("active");
          const submenu = this.nextElementSibling;
          if (submenu) {
            submenu.classList.remove("in");
          }
        }
      });
    });
  });
  return (
    <>
      <header class="topbar position-relative">
        <div class="navbar navbar-header bg-white d-flex align-items-center justify-content-between p-3 fixed-top">
          {/* ============================================================== */}
          {/* Toggle which is visible on mobile only */}
          {/* ============================================================== */}
          {/* Logo icon */}
          <a href="../index.html">
            <b class="logo-icon d-xl-none d-block">
              {/* Dark Logo icon */}
              <img src="../assets/images/logos/dark-logo.svg" alt="homepage" class="dark-logo" />
            </b>
            {/*End Logo icon */}
          </a>
          <div class="d-flex align-items-center">
            {/*-Mobile view canvas button-*/}
            <a class="fs-8 text-muted d-xl-none d-block sidebartoggler" href="javascript:void(0)" role="button">
              <i class="ti ti-menu-2" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
