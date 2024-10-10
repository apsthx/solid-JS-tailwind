import { onMount } from "solid-js";

export default function ChangeLogo(){
    onMount(async () => {
        const module = await import("../../../assets/libs/prismjs/prism.js");
    
        module.initializePrism();
      });
    return (
        <>
                <div class="container-fluid mt-4">
          <div class="mt-1">
            <div class="d-sm-flex align-items-center justify-content-between">
              <h4 class="mb-4 pb-2 fs-5">Change Logo</h4>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title mb-3">How to Change Logo?</h4>
                    <pre>
                        <code class="language-html">
                        {`
<!-- ----------------------------------------------------
 File: package/demos/src/main/partials/logo-sidebar.html
---------------------------------------------------- -->    
<div class="brand-logo d-flex align-items-center justify-content-between">
    <a href="../main/index.html" class="text-nowrap logo-img">
        <img src="../assets/images/logos/dark-logo.svg" class="dark-logo" alt="Logo-Dark" />
        <img src="../assets/images/logos/light-logo.svg" class="light-logo" alt="Logo-light" />
    </a>
    <a href="javascript:void(0)" class="sidebartoggler ms-auto text-decoration-none fs-5 d-block d-xl-none">
        <i class="ti ti-x"></i>
    </a>
</div>
`}

                        </code>
                      </pre>
                    <h6 class="fw-bold mt-4 mb-0 align-items-center">
                      Put the image in
                      <span class="text-dark fw-bold mx-1">src / assets / images / logos</span>
                      Folder.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}