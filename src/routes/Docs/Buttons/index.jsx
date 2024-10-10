import { onMount } from "solid-js";

export default function Buttons(){
    onMount(async () => {
        const module = await import("../../../assets/libs/prismjs/prism.js");
    
        module.initializePrism();
      });
    return (
        <>
                <div class="container-fluid mt-4">
          <div class="mt-1">
            <div class="d-sm-flex align-items-center justify-content-between">
              <h4 class="mb-4 pb-2 fs-5">Buttons</h4>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Default Buttons</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <div class="button-group">
                      <button type="button" class="btn mb-1 me-1 btn-primary">
                        Primary
                      </button>
                      <button type="button" class="btn mb-1 me-1 btn-secondary">
                        Secondary
                      </button>
                      <button type="button" class="btn mb-1 me-1 btn-success">
                        Success
                      </button>
                      <button type="button" class="btn mb-1 me-1 btn-info">
                        Info
                      </button>
                      <button type="button" class="btn mb-1 me-1 btn-warning">
                        Warning
                      </button>
                      <button type="button" class="btn mb-1 me-1 btn-danger">
                        Danger
                      </button>
                      <button type="button" class="btn mb-1 me-1 btn-light">
                        Light
                      </button>
                      <button type="button" class="btn mb-1 me-1 btn-dark">
                        Dark
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">
                <pre class="mt-0">
                    <code class="language-html" hljs="" xml="">
                    {`
<h1> Example heading <span class="badge bg-secondary">New</span> </h1>
<h2> Example heading <span class="badge bg-success">New</span> </h2>
<h3> Example heading <span class="badge bg-info">New</span> </h3>
<h4> Example heading <span class="badge bg-primary">New</span> </h4>
<h5> Example heading <span class="badge bg-danger">New</span> </h5>
<h6> Example heading <span class="badge bg-warning">New</span> </h6>
`}

                    </code>
                  </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Light Buttons</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <div class="button-group">
                      <button type="button" class="
                            btn mb-1 me-1
                          
                            bg-primary-subtle
                            text-primary
                          ">
                        Primary
                      </button>
                      <button type="button" class="
                            btn mb-1 me-1
                          
                            bg-secondary-subtle
                            text-secondary
                          ">
                        Secondary
                      </button>
                      <button type="button" class="
                            btn mb-1 me-1
                          
                            bg-success-subtle
                            text-success
                          ">
                        Success
                      </button>
                      <button type="button" class="
                            btn mb-1 me-1
                          
                            bg-info-subtle
                            text-info
                          ">
                        Info
                      </button>
                      <button type="button" class="
                            btn mb-1 me-1
                          
                            bg-warning-subtle
                            text-warning
                          ">
                        Warning
                      </button>
                      <button type="button" class="
                            btn mb-1 me-1
                          
                            bg-danger-subtle
                            text-danger
                          ">
                        Danger
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">
                <pre class="mt-0">
                    <code class="language-html">
                    {`
<div class="button-group">
    <button type="button" class="btn bg-primary-subtle text-primary">Primary</button>
    <button type="button" class="btn bg-secondary-subtle text-secondary">Secondary</button>
    <button type="button" class="btn bg-success-subtle text-success">Success</button>
    <button type="button" class="btn bg-info-subtle text-info">Info</button>
    <button type="button" class="btn bg-warning-subtle text-warning">Warning</button>
    <button type="button" class="btn bg-danger-subtle text-danger">Danger</button>
</div>
`}

                      </code>
                    </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Rounded Light Buttons</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <div class="button-group">
                      <button type="button" class="
                            btn mb-1 me-1
                            rounded-pill
                            btn-rounded bg-primary-subtle
                            text-primary
                          ">
                        Primary
                      </button>
                      <button type="button" class="
                            btn mb-1 me-1
                            rounded-pill
                            btn-rounded bg-secondary-subtle
                            text-secondary
                          ">
                        Secondary
                      </button>
                      <button type="button" class="
                            btn mb-1 me-1
                            rounded-pill
                            btn-rounded bg-success-subtle
                            text-success
                          ">
                        Success
                      </button>
                      <button type="button" class="
                            btn mb-1 me-1
                            rounded-pill
                            btn-rounded bg-info-subtle
                            text-info
                          ">
                        Info
                      </button>
                      <button type="button" class="
                            btn mb-1 me-1
                            rounded-pill
                            btn-rounded bg-warning-subtle
                            text-warning
                          ">
                        Warning
                      </button>
                      <button type="button" class="
                            btn mb-1 me-1
                            rounded-pill
                            btn-rounded bg-danger-subtle
                            text-danger
                          ">
                        Danger
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">
                <pre class="mt-0">
                    <code class="language-html">
                    {`
<div class="button-group">
    <button type="button" class="btn rounded-pill bg-primary-subtle text-primary">Primary</button>
    <button type="button" class="btn rounded-pill bg-secondary-subtle text-secondary">Secondary</button>
    <button type="button" class="btn rounded-pill bg-success-subtle text-success">Success</button>
    <button type="button" class="btn rounded-pill bg-info-subtle text-info">Info</button>
    <button type="button" class="btn rounded-pill bg-warning-subtle text-warning">Warning</button>
    <button type="button" class="btn rounded-pill bg-danger-subtle text-danger">Danger</button>
</div>
`}

                      </code>
                  </pre>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}