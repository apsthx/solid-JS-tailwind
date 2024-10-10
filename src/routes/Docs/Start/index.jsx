import { onMount } from "solid-js";

export default function Start(){
    onMount(async () => {
        const module = await import("../../../assets/libs/prismjs/prism.js");
    
        module.initializePrism();
      });
    return (
        <>
                <div class="container-fluid mt-4">
          <div class="mt-1">
            <h4 class="mb-4 pb-2 fs-5">Quick Start</h4>
            <div class="mt-4 card">
              <div class="card-body">
                <h4 class="card-title">1. Requirements</h4>
                <p class="card-subtitle mt-4 text-muted">Prior to advancement, it is imperative that you possess the
                  most recent stable version of <a class="text-dark fw-bold" href="https://nodejs.org/">node.js</a>
                </p>
                <h5 class="mt-4  ">Recommended environment:</h5>
                <ul class="text-muted mb-0">
                  <li class="font-16">node js 18+</li>
                  <li class="font-16">npm js 8+</li>
                </ul>
              </div>
            </div>
            <div class="mt-4 card">
              <div class="card-body">
                <h4 class="card-title">2. Install</h4>
                <p class="card-subtitle mt-4 text-muted">To initiate the process, access the package folder and proceed
                  to install its dependencies. We recommend utilizing either Yarn or npm for this task.</p>
                <h5 class="mt-4 ">1) Install with npm:</h5>
                <pre>
                        <code class="language-js py-0">
cd project-folder/package/demos
npm install
                        </code>
                    </pre>
                <h5 class="mt-3 ">2) Install with yarn:</h5>

                <pre>
                        <code class="language-js py-0">
cd project-folder/package/demos
yarn install
                        </code>
                    </pre>
              </div>
            </div>
            <div class="mt-4 card">
              <div class="card-body">
                <h4 class="card-title">3. Start</h4>
                <p class="card-subtitle mt-4 text-muted">Gulp serves as a versatile, cross-platform streaming task
                  runner, facilitating the automation of numerous development tasks for developers. To globally install
                  Gulp, the following steps are required:</p>
                <pre>
                        <code class="language-js py-0">
npm install --global gulp-cli
                        </code>
                    </pre>
                <p class="card-subtitle text-muted mt-4">Execute the gulp command within the package/demos/ directory
                  to serve the project files through BrowserSync. Running the gulp task will compile the theme and
                  automatically open the /index.html file in your default web browser.</p>
                <pre>
                        <code class="language-js py-0">
gulp
                        </code>
                    </pre>
              </div>
            </div>
            <div class="mt-4 card">
              <div class="card-body">
                <h4 class="card-title">4. Build</h4>
                <p class="card-subtitle mt-4 text-muted">To build a project use below command. It'll generate dist
                  folder , that dist folder you can upload on site.</p>

                <pre>
                      <code class="language-js py-0">
gulp build
                      </code>
                  </pre>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}