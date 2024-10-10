import { onMount } from "solid-js";

export default function TooltipPopover(){
    onMount(async () => {
        const module = await import("../../../assets/libs/prismjs/prism.js");
    
        module.initializePrism();
      });
    return (
        <>
                <div class="container-fluid mt-4">
          <div class="mt-1">
            <div class="d-sm-flex align-items-center justify-content-between">
              <h4 class="mb-4 pb-2 fs-5">Tooltip & Popover</h4>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Interactive demo - Tooltip</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <div class="button-group">
                      <button type="button" class="
                            me-1
                            mb-1
                            btn bg-info-subtle
                            text-info
                            
                          " data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Tooltip on top">
                        Tooltip on top
                      </button>
                      <button type="button" class="
                            me-1
                            mb-1
                            btn bg-primary-subtle
                            text-primary
                            
                          " data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Tooltip on right">
                        Tooltip on right
                      </button>
                      <button type="button" class="
                            me-1
                            mb-1
                            btn bg-success-subtle
                            text-success
                            
                          " data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Tooltip on bottom">
                        Tooltip on bottom
                      </button>
                      <button type="button" class="
                            me-1
                            mb-1
                            btn bg-danger-subtle
                            text-danger
                            
                          " data-bs-toggle="tooltip" data-bs-placement="left" data-bs-original-title="Tooltip on left">
                        Tooltip on left
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                        <code class="language-html">
 {`<div class="button-group">
    <button type="button" class="me-2 btn bg-info-subtle text-info" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
        Tooltip on top
    </button>
    <button type="button" class="me-2 btn bg-primary-subtle text-primary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
        Tooltip on right
    </button>
    <button type="button" class="me-2 btn bg-success-subtle text-success" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
        Tooltip on bottom
    </button>
    <button type="button" class="me-2 btn bg-danger-subtle text-danger" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
        Tooltip on left
    </button>
</div>
`}
                                                           </code>
                                                        </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Interactive demo - Popover</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <div class="button-group">
                      <button type="button" class="
                            me-1
                            mb-1
                            btn bg-info-subtle
                            text-info
                            
                          " data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                        Popover on top
                      </button>
                      <button type="button" class="
                            me-1
                            mb-1
                            btn bg-primary-subtle
                            text-primary
                            
                          " data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                        Popover on right
                      </button>
                      <button type="button" class="
                            me-1
                            mb-1
                            btn bg-success-subtle
                            text-success
                            
                          " data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                        Popover on bottom
                      </button>
                      <button type="button" class="
                            me-1
                            mb-1
                            btn bg-danger-subtle
                            text-danger
                            
                          " data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                        Popover on left
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                        <code class="language-html">
{`<div class="button-group">
    <button type="button" class="me-2 btn bg-info-subtle text-info" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
        Popover on top
    </button>
    <button type="button" class="me-2 btn bg-primary-subtle text-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
        Popover on right
    </button>
    <button type="button" class="me-2 btn bg-success-subtle text-success" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
        Popover on bottom
    </button>
    <button type="button" class="me-2 btn bg-danger-subtle text-danger" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
        Popover on left
    </button>
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