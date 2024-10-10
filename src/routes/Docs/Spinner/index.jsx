import { onMount } from "solid-js";

export default function Spinner(){
  onMount(async () => {
    const module = await import("../../../assets/libs/prismjs/prism.js");

    module.initializePrism();
  });
    return (
        <>
                <div class="container-fluid mt-4">
          <div class="mt-1">
            <div class="d-sm-flex align-items-center justify-content-between">
              <h4 class="mb-4 pb-2 fs-5">Spinner</h4>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Bootstrap Spinner</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <h4 class="card-title">Border Spinner</h4>
                    <div class="spinner-border text-primary" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-border text-secondary" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-border text-success" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-border text-danger" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-border text-warning" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-border text-info" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-border text-light" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-border text-dark" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>

                    <h4 class="card-title mt-4">Spinner with Buttons</h4>
                    <button class="btn btn-primary" type="button" disabled="">
                      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      <span class="visually-hidden">Loading...</span>
                    </button>
                    <button class="btn btn-primary" type="button" disabled="">
                      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      Loading...
                    </button>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                  <code class="language-html">
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
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Growing spinner</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <h4 class="card-title">Growing spinner</h4>
                    <div class="spinner-grow" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-primary" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-secondary" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-success" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-danger" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-warning" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-info" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-light" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-dark" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>

                    <h4 class="card-title mt-4">Growing with Buttons</h4>
                    <button class="btn btn-primary" type="button" disabled="">
                      <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                      <span class="visually-hidden">Loading...</span>
                    </button>
                    <button class="btn btn-primary" type="button" disabled="">
                      <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                      Loading...
                    </button>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                  <code class="language-html" style="height: 300px;">
{`<h4 class="card-title">Growing spinner</h4>
<div class="spinner-grow" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<hr>
<h4 class="card-title">Growing with Buttons</h4>
<button class="btn btn-primary" type="button" disabled>
    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    <span class="visually-hidden">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    Loading...
</button>
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