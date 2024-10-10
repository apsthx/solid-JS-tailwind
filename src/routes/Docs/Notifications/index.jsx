import { onMount } from "solid-js";

export default function Notifications(){
    onMount(async () => {
        const module = await import("../../../assets/libs/prismjs/prism.js");
    
        module.initializePrism();
      });
    return (
        <>
                <div class="container-fluid mt-4">
          <div class="mt-1">
            <div class="d-sm-flex align-items-center justify-content-between">
              <h4 class="mb-4 pb-2 fs-5">Notifications</h4>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Default Alert</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4">
                    <div class="alert alert-primary" role="alert">
                      <strong>Primary - </strong> A simple primary alert
                    </div>
                    <div class="alert alert-secondary" role="alert">
                      <strong>Secondary - </strong> A simple secondary alert
                    </div>
                    <div class="alert alert-success" role="alert">
                      <strong>Success - </strong> A simple success alert
                    </div>
                    <div class="alert alert-danger" role="alert">
                      <strong>Error - </strong> A simple danger alert
                    </div>
                    <div class="alert alert-warning" role="alert">
                      <strong>Warning - </strong> A simple warning alert
                    </div>
                    <div class="alert alert-info" role="alert">
                      <strong>Info - </strong> A simple info alert
                    </div>
                    <div class="alert alert-light text-dark" role="alert">
                      <strong>Light - </strong> A simple light alert
                    </div>
                    <div class="alert alert-dark text-white" role="alert">
                      <strong>Dark - </strong> A simple dark alert
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                       <code class="language-html">
{`<div class="alert alert-primary" role="alert"> 
    <strong>Primary - </strong> A simple primary alert 
</div>
<div class="alert alert-secondary" role="alert"> 
    <strong>Secondary - </strong> A simple secondary alert 
</div>
<div class="alert alert-success" role="alert"> 
    <strong>Success - </strong> A simple success alert 
</div>
<div class="alert alert-danger" role="alert"> 
    <strong>Error - </strong> A simple danger alert 
</div>
<div class="alert alert-warning" role="alert"> 
    <strong>Warning - </strong> A simple warning alert 
</div>
<div class="alert alert-info" role="alert"> 
    <strong>Info - </strong> A simple info alert 
</div>
<div class="alert alert-light" role="alert"> 
    <strong>Light - </strong> A simple light alert 
</div>
<div class="alert alert-dark" role="alert"> 
    <strong>Dark - </strong> A simple dark alert 
</div>
`}
                                                            </code>
                                                        </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Dismissing Alerts</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4">
                    <div class="alert alert-primary alert-dismissible bg-primary text-white border-0 fade show" role="alert">
                      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                      <strong>Primary - </strong> A simple primary alert
                    </div>
                    <div class="alert alert-secondary alert-dismissible bg-secondary text-white border-0 fade show" role="alert">
                      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                      <strong>Secondary - </strong> A simple secondary alert
                    </div>
                    <div class="alert alert-success alert-dismissible bg-success text-white border-0 fade show" role="alert">
                      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                      <strong>Success - </strong> A simple success alert
                    </div>
                    <div class="alert alert-danger alert-dismissible bg-danger text-white border-0 fade show" role="alert">
                      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                      <strong>Error - </strong> A simple danger alert
                    </div>
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                      <strong>Warning - </strong> A simple warning alert
                    </div>
                    <div class="alert alert-info alert-dismissible fade show" role="alert">
                      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                      <strong>Info - </strong> A simple info alert
                    </div>
                    <div class="alert alert-light alert-dismissible fade show text-dark" role="alert">
                      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      <strong>Light - </strong> A simple light alert
                    </div>
                    <div class="alert alert-dark alert-dismissible fade show mb-0 text-white" role="alert">
                      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                      <strong>Dark - </strong> A simple dark alert
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                    <code class="language-html">
{`<div class="alert alert-primary alert-dismissible bg-primary text-white border-0 fade show" role="alert"> 
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button> 
    <strong>Primary - </strong> A simple primary alert 
</div>
<div class="alert alert-secondary alert-dismissible bg-secondary text-white border-0 fade show" role="alert"> 
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button> 
    <strong>Secondary - </strong> A simple secondary alert 
</div>
<div class="alert alert-success alert-dismissible bg-success text-white border-0 fade show" role="alert"> 
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button> 
    <strong>Success - </strong> A simple success alert 
</div>
<div class="alert alert-danger alert-dismissible bg-danger text-white border-0 fade show" role="alert"> 
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button> 
    <strong>Error - </strong> A simple danger alert 
</div>
<div class="alert alert-warning alert-dismissible fade show" role="alert"> 
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button> 
    <strong>Warning - </strong> A simple warning alert 
</div>
<div class="alert alert-info alert-dismissible fade show" role="alert"> 
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button> 
    <strong>Info - </strong> A simple info alert 
</div>
<div class="alert alert-light alert-dismissible fade show" role="alert"> 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> 
    <strong>Light - </strong> A simple light alert 
</div>
<div class="alert alert-dark alert-dismissible fade show mb-0" role="alert"> 
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button> 
    <strong>Dark - </strong> A simple dark alert 
</div>
`}
                                                        </code>
                                                    </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Outline Alerts</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4">
                    <div class="
                          alert
                          customize-alert
                          alert-dismissible
                          text-primary
                          border border-primary
                          fade
                          show
                        " role="alert">
                      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      <div class="d-flex align-items-center ">
                        <i data-feather="info" class="text-primary feather-sm me-2 flex-shrink-0"></i>
                        A simple primary outline alert—check it out!
                      </div>
                    </div>
                    <div class="
                          alert
                          customize-alert
                          alert-dismissible
                          border-secondary
                          text-secondary
                          fade
                          show
                        " role="alert">
                      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      <div class="d-flex align-items-center ">
                        <i data-feather="info" class="text-secondary fill-white feather-sm me-2"></i>
                        A simple secondary outline alert—check it out!
                      </div>
                    </div>
                    <div class="
                          alert
                          customize-alert
                          alert-dismissible
                          border-success
                          text-success
                          fade
                          show
                        " role="alert">
                      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      <div class="d-flex align-items-center ">
                        <i data-feather="info" class="text-success fill-white feather-sm me-2"></i>
                        A simple success outline alert—check it out!
                      </div>
                    </div>
                    <div class="
                          alert
                          customize-alert
                          alert-dismissible
                          border-danger
                          text-danger
                          fade
                          show
                        " role="alert">
                      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      <div class="d-flex align-items-center ">
                        <i data-feather="info" class="text-danger fill-white feather-sm me-2"></i>
                        A simple danger outline alert—check it out!
                      </div>
                    </div>
                    <div class="
                          alert
                          customize-alert
                          alert-dismissible
                          border-warning
                          text-warning
                          fade
                          show
                        " role="alert">
                      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      <div class="d-flex align-items-center ">
                        <i data-feather="info" class="text-warning feather-sm me-2"></i>
                        A simple warning outline alert—check it out!
                      </div>
                    </div>
                    <div class="
                          alert
                          customize-alert
                          alert-dismissible
                          border-info
                          text-info
                          fade
                          show
                        " role="alert">
                      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      <div class="d-flex align-items-center ">
                        <i data-feather="info" class="text-info feather-sm me-2"></i>
                        A simple info outline alert—check it out!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                    <code class="language-html" style="height: 300px;">
  {`<div class="alert customize-alert alert-dismissible text-primary border border-primary fade show" role="alert">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    <div class="d-flex align-items-center ">
        <i data-feather="info" class="text-primary feather-sm me-2 flex-shrink-0"></i>
        A simple primary outline alert—check it out!
    </div>
</div>
<div class="alert customize-alert  alert-dismissible border-secondary text-secondary fade show" role="alert">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    <div class="d-flex align-items-center ">
        <i data-feather="info" class="text-secondary fill-white feather-sm me-2"></i>
        A simple secondary outline alert—check it out!
    </div>
</div>
<div class="alert customize-alert alert-dismissible border-success text-success fade show" role="alert">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    <div class="d-flex align-items-center ">
        <i data-feather="info" class="text-success fill-white feather-sm me-2"></i>
        A simple success outline alert—check it out!
    </div>
</div>
<div class="alert customize-alert alert-dismissible border-danger text-danger fade show" role="alert">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    <div class="d-flex align-items-center ">
        <i data-feather="info" class="text-danger fill-white feather-sm me-2"></i>
        A simple danger outline alert—check it out!
    </div>
</div>
<div class="alert customize-alert alert-dismissible border-warning text-warning fade show" role="alert">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    <div class="d-flex align-items-center ">
        <i data-feather="info" class="text-warning feather-sm me-2"></i>
        A simple warning outline alert—check it out!
    </div>
</div>
<div class="alert customize-alert alert-dismissible border-info text-info fade show" role="alert">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    <div class="d-flex align-items-center ">
        <i data-feather="info" class="text-info feather-sm me-2"></i>
        A simple info outline alert—check it out!
    </div>
</div>
`}
                                                        </code>
                                                    </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Additional content</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4">
                    <div class="alert alert-success mb-0" role="alert">
                      <h4 class="alert-heading">Well done!</h4>
                      <p>
                        Aww yeah, you successfully read this important alert
                        message. This example text is going to run a bit
                        longer so that you can see how spacing within an
                        alert works with this kind of content.
                      </p>

                      <p class="mb-0">
                        Whenever you need to, be sure to use margin
                        utilities to keep things Adminpro and tidy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                    <code class="language-html">
{`<div class="alert alert-success mb-0" role="alert">
    <h4 class="alert-heading">Well done!</h4>
    <p>Aww yeah, you successfully read this important alert message. This example text
        is going to run a bit longer so that you can see how spacing within an alert
        works with this kind of content.
    </p>
    <hr>
    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things
        Adminpro and tidy.
    </p>
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