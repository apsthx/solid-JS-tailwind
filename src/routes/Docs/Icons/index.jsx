import { onMount } from "solid-js";

export default function Icons(){
    onMount(async () => {
        const module = await import("../../../assets/libs/prismjs/prism.js");
    
        module.initializePrism();
      });
    return (
        <>
                <div class="container-fluid mt-4">
          <div class="mt-1">
            <h4 class="mb-4 pb-2 fs-5">Icons</h4>
              <div class="mt-4 card">
                <div class="card-body">
                  <h4 class="card-title">1. Tabler Icons</h4>
                  <a href="https://tabler-icons.io/" class="fw-normal mb-4 d-block">https://tabler-icons.io/</a>
                  <div class="card mb-0">
                    <div class="p-4 text-center">
                      <div class="list-group-horizontal">
                        <i class="ti ti-mood-happy text-dark fs-6"></i>
                        <i class="ti ti-mood-happy text-dark fs-7"></i>
                        <i class="ti ti-mood-happy text-dark fs-8"></i>
                        <i class="ti ti-mood-happy text-dark fs-9"></i>
                        <i class="ti ti-mood-happy text-dark fs-10"></i>
                      </div>
                    </div>
                  </div>
                  <pre>
                            <code class="language-html py-0">
                            {`
@import "icons/tabler-icons/tabler-icons.css";

// ----------------------------------------------------------------------

<div class="list-group-horizontal">
  <i class="ti ti-mood-happy text-dark fs-6"></i>
  <i class="ti ti-mood-happy text-dark fs-7"></i>
  <i class="ti ti-mood-happy text-dark fs-8"></i>
  <i class="ti ti-mood-happy text-dark fs-9"></i>
  <i class="ti ti-mood-happy text-dark fs-10"></i>
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