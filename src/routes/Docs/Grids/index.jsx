import { onMount } from "solid-js";

export default function Grids(){
    onMount(async () => {
        const module = await import("../../../assets/libs/prismjs/prism.js");
    
        module.initializePrism();
      });
    return (
        <>
        <div class="container-fluid mt-4">
    <div class="mt-1">
        <div class="d-sm-flex align-items-center justify-content-between">
            <h4 class="mb-4 pb-2 fs-5">Grids</h4>
        </div>
        <div class="card">
            <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Bootstrap Grids</h4>
            </div>
            <div class="p-8">
                <div class="card mb-0">
                    <div class="p-4 text-center">
                        <div class="grid-structure">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-12
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-11">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-11
                                    </div>
                                </div>
                                <div class="col-lg-1">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        1
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-10">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-10
                                    </div>
                                </div>
                                <div class="col-lg-2">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-2
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-9">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-9
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-3
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-8
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-4
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-7">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-7
                                    </div>
                                </div>
                                <div class="col-lg-5">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-5
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-6
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-6
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-5">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-5
                                    </div>
                                </div>
                                <div class="col-lg-7">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-7
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-4
                                    </div>
                                </div>
                                <div class="col-lg-8">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-8
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-3
                                    </div>
                                </div>
                                <div class="col-lg-9">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-9
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-2">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-2
                                    </div>
                                </div>
                                <div class="col-lg-10">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-10
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-1">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        1
                                    </div>
                                </div>
                                <div class="col-lg-11">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-11
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-2">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-2
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-3
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-4
                                    </div>
                                </div>
                                <div class="col-lg-2">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        col-lg-2
                                    </div>
                                </div>
                                <div class="col-lg-1">
                                    <div class="grid-container bg-light py-2 px-3 mb-2 text-muted">
                                        1
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="px-8 pb-8">
                <pre class="mt-0">                  
                    <code class="language-html" style="height: 300px;">
                        {`
<div class="grid-structure">
    <div class="row">
        <div class="col-lg-12">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-12 </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-11">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-11 </div>
        </div>
        <div class="col-lg-1">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> 1 </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-10">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-10 </div>
        </div>
        <div class="col-lg-2">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-2 </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-9">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-9 </div>
        </div>
        <div class="col-lg-3">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-3 </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-8">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-8 </div>
        </div>
        <div class="col-lg-4">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-4 </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-7">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-7 </div>
        </div>
        <div class="col-lg-5">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-5 </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-6">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-6 </div>
        </div>
        <div class="col-lg-6">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-6 </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-5">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-5 </div>
        </div>
        <div class="col-lg-7">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-7 </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-4 </div>
        </div>
        <div class="col-lg-8">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-8 </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-3">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-3 </div>
        </div>
        <div class="col-lg-9">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-9 </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-2">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-2 </div>
        </div>
        <div class="col-lg-10">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-10 </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-1">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> 1 </div>
        </div>
        <div class="col-lg-11">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-11 </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-2">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-2 </div>
        </div>
        <div class="col-lg-3">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-3 </div>
        </div>
        <div class="col-lg-4">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-4 </div>
        </div>
        <div class="col-lg-2">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> col-lg-2 </div>
        </div>
        <div class="col-lg-1">
            <div class="grid-container bg-light py-2 px-3 mb-2 text-muted"> 1 </div>
        </div>
    </div>
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