import { onMount } from "solid-js";

export default function Layouts(){
    onMount(async () => {
        const module = await import("../../../assets/libs/prismjs/prism.js");
    
        module.initializePrism();
      });
    return (
        <>
                <div class="container-fluid mt-4">
          <div class="mt-1">
            <div class="d-sm-flex align-items-center justify-content-between">
              <h4 class="mb-4 pb-2 fs-5">Layouts</h4>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title mb-3">Default settings</h4>
                    <pre>
                          <code class="language-js">
                            {`
// ----------------------------------------------------
// File: package/demos/src/assets/js/theme/app.init.js
// ----------------------------------------------------    
var userSettings = {
  Layout: "vertical", // vertical | horizontal
  SidebarType: "full", // full | mini-sidebar
  BoxedLayout: true, // true | false
  Direction: "ltr", // ltr | rtl
  Theme: "light", // light | dark
  ColorTheme: "Blue_Theme", // Blue_Theme | Green_Theme | Purple_Theme | Red_Theme | Indogo_Theme | Orange_Theme
  cardBorder: false, // true | false
};
                            `}
                          </code>
                        </pre>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title mb-3">How to configure Theme Color ?</h4>
                    <pre>
                          <code class="language-js">
                            {`
// ---------------------------------
// ----------------------------------------------------
// File: package/demos/src/assets/js/theme/app.init.js
// ----------------------------------------------------    

var userSettings = {
  Layout: "vertical", // vertical | horizontal
  SidebarType: "full", // full / mini-sidebar
  BoxedLayout: true, // true | false
  Direction: "ltr", // ltr | rtl
  Theme: "light", // light | dark
  ColorTheme: "Green_Theme", // Change is here // Blue_Theme | Green_Theme | Purple_Theme | Red_Theme | Indogo_Theme | Orange_Theme /
  cardBorder: false // true | false
};
`}
                          </code>
                        </pre>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title mb-3">How to configure Minisidebar ?</h4>
                    <pre>
                          <code class="language-js">
                            {`
// --------------
// ----------------------------------------------------
// File: package/demos/src/assets/js/theme/app.init.js
// ----------------------------------------------------    

var userSettings = {
  Layout: "vertical", // vertical | horizontal
  SidebarType: "mini-sidebar", // full / mini-sidebar // Change is here
  BoxedLayout: true, // true | false
  Direction: "ltr", // ltr | rtl
  Theme: "light", // light | dark
  ColorTheme: "Blue_Theme", // Blue_Theme | Green_Theme | Purple_Theme | Red_Theme | Indogo_Theme | Orange_Theme
  cardBorder: false // true | false
};
`}
                          </code>
                        </pre>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title mb-3">How to configure Full Sidebar ?</h4>
                    <pre>
                          <code class="language-js">
                             {`
// ----------------------------------------------------
// File: package/demos/src/assets/js/theme/app.init.js
// ----------------------------------------------------    
    
var userSettings = {
  Layout: "vertical", // vertical | horizontal
  SidebarType: "full", // full / mini-sidebar // Change is here
  BoxedLayout: true, // true | false
  Direction: "ltr", // ltr | rtl
  Theme: "light", // light | dark
  ColorTheme: "Blue_Theme", // Blue_Theme | Green_Theme | Purple_Theme | Red_Theme | Indogo_Theme | Orange_Theme
  cardBorder: false // true | false
};`}
                          </code>
                        </pre>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title mb-3">How to configure Fullwidth Layout ?</h4>
                    <pre>
                          <code class="language-JS">
                            {`
// ----------------------------------------------------
// File: package/demos/src/assets/js/theme/app.init.js
// ----------------------------------------------------    
    
var userSettings = {
  Layout: "vertical", // vertical | horizontal
  SidebarType: "full", // full / mini-sidebar
  BoxedLayout: false, // true | false // Change is here
  Direction: "ltr", // ltr | rtl
  Theme: "light", // light | dark
  ColorTheme: "Blue_Theme", // Blue_Theme | Green_Theme | Purple_Theme | Red_Theme | Indogo_Theme | Orange_Theme
  cardBorder: false // true | false
} `}
                          </code>
                        </pre>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title mb-3">How to configure Card with Border ?</h4>
                    <pre>
                          <code class="language-JS">
                            {`
// ----------------------------------------------------
// File: package/demos/src/assets/js/theme/app.init.js
// ----------------------------------------------------    
var userSettings = {
  Layout: "vertical", // vertical | horizontal
  SidebarType: "full", // full / mini-sidebar
  BoxedLayout: true, // true | false //
  Direction: "ltr", // ltr | rtl
  Theme: "light", // light | dark
  ColorTheme: "Blue_Theme", // Blue_Theme | Green_Theme | Purple_Theme | Red_Theme | Indogo_Theme | Orange_Theme
  cardBorder: true // true | false // Change is here
};`}
                          </code>
                        </pre>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title mb-3">How to configure Card with Shadow ?</h4>
                    <pre>
                          <code class="language-js">
                            {`
// ----------------------------------------------------
// File: package/demos/src/assets/js/theme/app.init.js
// ----------------------------------------------------    
var userSettings = {
  Layout: "vertical", // vertical | horizontal
  SidebarType: "full", // full / mini-sidebar
  BoxedLayout: true, // true | false //
  Direction: "ltr", // ltr | rtl
  Theme: "light", // light | dark
  ColorTheme: "Blue_Theme", // Blue_Theme | Green_Theme | Purple_Theme | Red_Theme | Indogo_Theme | Orange_Theme
  cardBorder: false // true | false // Change is here
};`}
                          </code>
                        </pre>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title mb-3">How to configure Dark Theme ?</h4>
                    <pre>
                          <code class="language-js">
                            {`
// ----------------------------------------------------
// File: package/demos/src/assets/js/theme/app.init.js
// ----------------------------------------------------    
var userSettings = {
  Layout: "vertical", // vertical | horizontal
  SidebarType: "full", // full / mini-sidebar
  BoxedLayout: true, // true | false //
  Direction: "ltr", // ltr | rtl
  Theme: "dark", // light | dark // Change is here
  ColorTheme: "Blue_Theme", // Blue_Theme | Green_Theme | Purple_Theme | Red_Theme | Indogo_Theme | Orange_Theme
  cardBorder: false // true | false
};
`}
                          </code>
                        </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}