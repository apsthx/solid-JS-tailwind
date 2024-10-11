import { onMount } from "solid-js";

export default function Typography(){
    onMount(async () => {
        const module = await import("../../../assets/libs/prismjs/prism.js");
    
        module.initializePrism();
      });
    return (
        <>
        <div class="container-fluid mt-4">
          <div class="mt-1">
            <h4 class="mb-4 pb-2 fs-5">Typography</h4>
              <div class="mt-4 card">
                <div class="card-body">
                  <h4 class="card-title">Google fonts</h4>
                  <h5 class="card-subtitle mt-2 text-muted">1) Customize the Google Fonts link to your preferred
                    selection : <span class="text-dark fw-bold">scss/style.css</span>
                  </h5>
                  <div class="py-3 bg-white">
                    <div class="bg-primary-subtle p-3 rounded mb-4">
                      <h5>Note:</h5>
                      To execute Gulp, navigate to the directory containing the package.json file. Open a command prompt
                      in that location and enter the command "gulp" as indicated below. For instructions on installing
                      Gulp, please refer to the following link
                      <a href="./docs-start.html" class="text-dark fw-bold">Gulp</a>
                    </div>
                    <pre>
                            <code class="language-js py-0">
gulp
                            </code>
                        </pre>
                  </div>
                  <pre>
                            <code class="language-html py-0">
                              
{`@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");`}
                            </code>
                        </pre>
                  <h5 class="card-subtitle mt-4 text-muted">2) Change Font family : <span class="text-dark fw-bold">scss/variables.scss</span>
                  </h5>
                  <pre>
                            <code class="language-js py-0">
{`$font-family-sans-serif: "DM Sans", sans-serif !default;`}
                            </code>
                        </pre>
                  <div class="alert alert-success fw-normal mt-3">

                    Now, save your variable.scss file and verify the changes in the browser.
                  </div>
                  <div class="alert alert-info fw-normal mb-0">
                    To alter the font selection within the theme, insert the URL linking to your desired fonts and
                    update the font family attribute accordingly within the variable.scss file.
                  </div>
                </div>
              </div>
          </div>
        </div>
        </>
    )
}