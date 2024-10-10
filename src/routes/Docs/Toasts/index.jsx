import { onMount } from "solid-js";

export default function Toasts(){
    onMount(async () => {
        const module = await import("../../../assets/libs/prismjs/prism.js");
    
        module.initializePrism();
      });
    return (
        <>
                <div class="container-fluid mt-4">
          <div class="mt-1">
            <div class="d-sm-flex align-items-center justify-content-between">
              <h4 class="mb-4 pb-2 fs-5">Toasts</h4>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Bootstrap Toasts</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="d-flex justify-content-center p-4">
                    <div class="toast fw-bold show" role="alert" aria-live="assertive" aria-atomic="true">
                      <div class="toast-header">
                        <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                          <rect width="100%" height="100%" fill="#007aff"></rect>
                        </svg>
                        <strong class="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                      </div>
                      <div class="toast-body">
                        Hello, world! This is a toast message.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                      <code class="language-html">
{`<div class="toast fw-bold show" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
        <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
            <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body"> Hello, world! This is a toast message. </div>
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