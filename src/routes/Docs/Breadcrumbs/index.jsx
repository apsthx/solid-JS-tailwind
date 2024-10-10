import { onMount } from "solid-js";

export default function Breadcrumbs(){
    onMount(async () => {
        const module = await import("../../../assets/libs/prismjs/prism.js");
    
        module.initializePrism();
      });
    return (
        <>
                <div class="container-fluid mt-4">
          <div class="mt-1">
            <div class="d-sm-flex align-items-center justify-content-between">
              <h4 class="mb-4 pb-2 fs-5">Breadcrumbs</h4>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Default bootstrap breadcrumb</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <ol class="breadcrumb mb-2">
                      <li class="breadcrumb-item active">Home</li>
                    </ol>
                    <ol class="breadcrumb mb-2">
                      <li class="breadcrumb-item">
                        <a href="javascript:void(0)">Home</a>
                      </li>
                      <li class="breadcrumb-item active">Library</li>
                    </ol>
                    <ol class="breadcrumb mb-2">
                      <li class="breadcrumb-item">
                        <a href="javascript:void(0)">Home</a>
                      </li>
                      <li class="breadcrumb-item">
                        <a href="javascript:void(0)">Library</a>
                      </li>
                      <li class="breadcrumb-item active">Data</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                        <code class="language-html">
{`
<ol class="breadcrumb mb-2">
    <li class="breadcrumb-item active">Home</li>
</ol>
<ol class="breadcrumb mb-2">
    <li class="breadcrumb-item"> <a href="javascript:void(0)">Home</a> </li>
    <li class="breadcrumb-item active">Library</li>
</ol>
<ol class="breadcrumb mb-2">
    <li class="breadcrumb-item"> <a href="javascript:void(0)">Home</a> </li>
    <li class="breadcrumb-item"> <a href="javascript:void(0)">Library</a> </li>
    <li class="breadcrumb-item active">Data</li>
</ol>
`}
                                          </code>
                                      </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Nav breadcrumb</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <nav class="breadcrumb mb-0">
                      <a class="breadcrumb-item" href="javascript:void(0)">Home</a>
                      <a class="breadcrumb-item" href="javascript:void(0)">Library</a>
                      <a class="breadcrumb-item" href="javascript:void(0)">Data</a>
                      <span class="breadcrumb-item active">Bootstrap</span>
                    </nav>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                      <code class="language-html">
{`<nav class="breadcrumb mb-0">
    <a class="breadcrumb-item" href="javascript:void(0)">Home</a>
    <a class="breadcrumb-item" href="javascript:void(0)">Library</a>
    <a class="breadcrumb-item" href="javascript:void(0)">Data</a>
    <span class="breadcrumb-item active">Bootstrap</span>
</nav>
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