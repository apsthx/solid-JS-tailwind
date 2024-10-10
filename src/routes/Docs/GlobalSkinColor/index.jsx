import { onMount } from "solid-js";

export default function GlobalSkinColor(){
    onMount(async () => {
        const module = await import("../../../assets/libs/prismjs/prism.js");
    
        module.initializePrism();
      });
    return (
        <>
                <div class="container-fluid mt-4">
          <div class="mt-1">

            <div class="d-sm-flex align-items-center justify-content-between">
              <h4 class="mb-4 pb-2 fs-5">Change Global Skin Color</h4>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title mb-3">
                      How to Configure Global Skin Colors ?
                    </h4>
                    <div class="pb-2">
                      <div class="bg-primary-subtle p-3 rounded mb-4">
                        <h5>Note:</h5>
                        To execute Gulp, navigate to the package folder containing the package.json file. Open a command
                        prompt in that directory and execute the command "gulp" as demonstrated below. If you require
                        guidance on installing Gulp, please refer to the provided resource.
                        <a href="./docs-start.html" class="text-dark fw-bold">Gulp</a>
                      </div>
                      <pre>
                          <code class="language-js">
  gulp
                          </code>
                        </pre>
                    </div>
                    <pre>
                        <code class="language-css">
                            {`
  // -------------------------------------------------------------------------------------
  // File: package/main/src/assets/scss/variables/_variables.scss
  // -------------------------------------------------------------------------------------
                          
  $primary: $blue !default; // Change here
  $secondary: #6c757d !default; // Change here
  `}
                          </code>
                        </pre>
                    <pre>
                          <code class="language-css">
                            {`
  // ---------------------------------------------------------------------------------------
  // For the Blue Theme - Primary-Secondary Color
  // ---------------------------------------------------------------------------------------
  
  // ---------------------------------------------------------------------------------------
  // File: package/main/src/assets/scss/variables/_variables-blue.scss
  // ---------------------------------------------------------------------------------------
  $primary: #1e4db7;
  $light-primary: rgba($primary, 0.1);
  $secondary: #1a97f5;
  $light-secondary: rgba($secondary, 0.1);

  &:root {
    --bs-primary: #{$primary};
    --bs-primary-rgb: 30, 77, 183;
    --bs-light-primary: #{$light-primary};
    --bs-primary-bg-subtle: #{$light-primary};

    --bs-secondary: #{$secondary};
    --bs-secondary-rgb: 26, 151, 245;
    --bs-light-secondary: #{$light-secondary};
    --bs-secondary-bg-subtle: #{$light-secondary};

    .btn-primary {
      --bs-btn-bg: #{$primary};
      --bs-btn-border-color: #{$primary};
      --bs-btn-hover-bg: #173f98;
      --bs-btn-hover-border-color: #173f98;
    }

    .btn-secondary {
      --bs-btn-bg: #{$secondary};
      --bs-btn-border-color: #{$secondary};
      --bs-btn-hover-bg: #1682d4;
      --bs-btn-hover-border-color: #1682d4;
    }
  }
  `}
                      </code>
                    </pre>

                    <pre>
                      <code class="language-css">
                        {`
  // ---------------------------------------------------------------------------------------
  // For the Green Theme - Primary-Secondary Color
  // ---------------------------------------------------------------------------------------
  
  // ---------------------------------------------------------------------------------------
  // File: package/main/src/assets/scss/variables/_variables-green.scss
  // ---------------------------------------------------------------------------------------
  $primary: #00cec3;
  $light-primary: rgba($primary, 0.1);
  $secondary: #066a73;
  $light-secondary: rgba($secondary, 0.1);

  &:root {
    --bs-primary: #{$primary};
    --bs-primary-rgb: 0, 206, 195;
    --bs-light-primary: #{$light-primary};
    --bs-primary-bg-subtle: #{$light-primary};
    
    --bs-secondary: #{$secondary};
    --bs-secondary-rgb: 6, 106, 115;
    --bs-light-secondary: #{$light-secondary};
    --bs-secondary-bg-subtle: #{$light-secondary};

    .btn-primary {
      --bs-btn-bg: #{$primary};
      --bs-btn-border-color: #{$primary};
      --bs-btn-hover-bg: #02b3a9;
      --bs-btn-hover-border-color: #02b3a9;
    }

    .btn-secondary {
      --bs-btn-bg: #{$secondary};
      --bs-btn-border-color: #{$secondary};
      --bs-btn-hover-bg: #0a7a85;
      --bs-btn-hover-border-color: #0a7a85;
    }
  }
      `}
                    </code>
                  </pre>

                    <pre>
                    <code class="language-css">
                         {`
  // ---------------------------------------------------------------------------------------
  // For the Purple Theme - Primary-Secondary Color
  // ---------------------------------------------------------------------------------------
  
  // ---------------------------------------------------------------------------------------
  // File: package/main/src/assets/scss/variables/_variables-purple.scss
  // ---------------------------------------------------------------------------------------
  $primary: #7352ff;
  $light-primary: rgba($primary, 0.1);
  $secondary: #402e8d;
  $light-secondary: rgba($secondary, 0.1);

  &:root {
    --bs-primary: #{$primary};
    --bs-primary-rgb: 115, 82, 255;
    --bs-light-primary: #{$light-primary};
    --bs-primary-bg-subtle: #{$light-primary};

    --bs-secondary: #{$secondary};
    --bs-secondary-rgb: 64, 46, 141;
    --bs-light-secondary: #{$light-secondary};
    --bs-secondary-bg-subtle: #{$light-secondary};

    .btn-primary {
      --bs-btn-bg: #{$primary};
      --bs-btn-border-color: #{$primary};
      --bs-btn-hover-bg: #5739d6;
      --bs-btn-hover-border-color: #5739d6;
    }

    .btn-secondary {
      --bs-btn-bg: #{$secondary};
      --bs-btn-border-color: #{$secondary};
      --bs-btn-hover-bg: #4934a7;
      --bs-btn-hover-border-color: #4934a7;
    }
  }
        `}
                  </code>
                </pre>

                    <pre>
                      <code class="language-css">
                        {`
  // ---------------------------------------------------------------------------------------
  // For the Red Theme - Primary-Secondary Color
  // ---------------------------------------------------------------------------------------
  
  // ---------------------------------------------------------------------------------------
  // File: package/main/src/assets/scss/variables/_variables-red.scss
  // ---------------------------------------------------------------------------------------
  $primary: #ff5c8e;
  $light-primary: rgba($primary, 0.1);
  $secondary: #5e244d;
  $light-secondary: rgba($secondary, 0.1);

  &:root {
    --bs-primary: #{$primary};
    --bs-primary-rgb: 255, 92, 142;
    --bs-light-primary: #{$light-primary};
    --bs-primary-bg-subtle: #{$light-primary};
    
    --bs-secondary: #{$secondary};
    --bs-secondary-rgb: 94, 36, 77;
    --bs-light-secondary: #{$light-secondary};
    --bs-secondary-bg-subtle: #{$light-secondary};

    .btn-primary {
      --bs-btn-bg: #{$primary};
      --bs-btn-border-color: #{$primary};
      --bs-btn-hover-bg: #d43653;
      --bs-btn-hover-border-color: #d43653;
    }

    .btn-secondary {
        --bs-btn-bg: #{$secondary};
        --bs-btn-border-color: #{$secondary};
        --bs-btn-hover-bg: #762b60;
        --bs-btn-hover-border-color: #762b60;
      }
  }
  `}
                    </code>
                  </pre>

                    <pre>
                    <code class="language-css">
                        {`
  // ---------------------------------------------------------------------------------------
  // For the Indigo Theme - Primary-Secondary Color
  // ---------------------------------------------------------------------------------------
  
  // ---------------------------------------------------------------------------------------
  // File: package/main/src/assets/scss/variables/_variables-indigo.scss
  // ---------------------------------------------------------------------------------------
  $primary: #0a7ea4;
  $light-primary: rgba($primary, 0.1);
  $secondary: #ccda4e;
  $light-secondary: rgba($secondary, 0.1);

  &:root {
    --bs-primary: #{$primary};
    --bs-primary-rgb: 10, 126, 164;
    --bs-light-primary: #{$light-primary};
    --bs-primary-bg-subtle: #{$light-primary};
    
    --bs-secondary: #{$secondary};
    --bs-secondary-rgb: 204, 218, 78;
    --bs-light-secondary: #{$light-secondary};
    --bs-secondary-bg-subtle: #{$light-secondary};

    .btn-primary {
      --bs-btn-bg: #{$primary};
      --bs-btn-border-color: #{$primary};
      --bs-btn-hover-bg: #096b8b;
      --bs-btn-hover-border-color: #096b8b;
    }

    .btn-secondary {
      --bs-btn-bg: #{$secondary};
      --bs-btn-border-color: #{$secondary};
      --bs-btn-hover-bg: #d4e069;
      --bs-btn-hover-border-color: #d4e069;
    }
  }
  `}
                  </code>
                </pre>

                    <pre>
                <code class="language-css">
                    {`
  // ---------------------------------------------------------------------------------------
  // For the Orange Theme - Primary-Secondary Color
  // ---------------------------------------------------------------------------------------
  
  // ---------------------------------------------------------------------------------------
  // File: package/main/src/assets/scss/variables/_variables-orange.scss
  // ---------------------------------------------------------------------------------------
  $primary: #fb9678 ;
  $light-primary: rgba($primary, 0.1);
  $secondary: #03c9d7;
  $light-secondary: rgba($secondary, 0.1);

  &:root {
    --bs-primary: #{$primary};
    --bs-primary-rgb: 251, 150, 120;
    --bs-light-primary: #{$light-primary};
    --bs-primary-bg-subtle: #{$light-primary};

    --bs-secondary: #{$secondary};
    --bs-secondary-rgb: 3, 201, 215;
    --bs-light-secondary: #{$light-secondary};
    --bs-secondary-bg-subtle: #{$light-secondary};

    .btn-primary {
      --bs-btn-bg: #{$primary};
      --bs-btn-border-color: #{$primary};
      --bs-btn-hover-bg: #e67e5f;
      --bs-btn-hover-border-color: #e67e5f;
    }

    .btn-secondary {
      --bs-btn-bg: #{$secondary};
      --bs-btn-border-color: #{$secondary};
      --bs-btn-hover-bg: #05b2bd;
      --bs-btn-hover-border-color: #05b2bd;
    }
  }
  `}
              </code>
            </pre>


                    <div class="alert alert-success fw-normal mt-4">
                      Now, save files and check in browser
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}