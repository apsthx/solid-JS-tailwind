import { onMount } from "solid-js";
import { Img1 } from "../../../helper/img.jsx";

export default function BootstrapUI(){
    onMount(async () => {
        const module = await import("../../../assets/libs/prismjs/prism.js");
    
        module.initializePrism();
      });
    return (
        <>
                <div class="container-fluid mt-4">
          <div class="mt-1">
            <div class="d-sm-flex align-items-center justify-content-between">
              <h4 class="mb-4 pb-2 fs-5">Bootstrap UI</h4>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Bootstrap Badges</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4">
                    <h1>
                      Example heading
                      <span class="badge bg-secondary">New</span>
                    </h1>
                    <h2>
                      Example heading
                      <span class="badge bg-success">New</span>
                    </h2>
                    <h3>
                      Example heading <span class="badge bg-info">New</span>
                    </h3>
                    <h4>
                      Example heading
                      <span class="badge bg-primary">New</span>
                    </h4>
                    <h5>
                      Example heading
                      <span class="badge bg-danger">New</span>
                    </h5>
                    <h6>
                      Example heading
                      <span class="badge bg-warning">New</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                    <code class="language-html">
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
                <h4 class="card-title mb-0">Pill badges</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <span class="badge me-2 badge-pill bg-secondary">Default</span>
                    <span class="badge me-2 badge-pill bg-primary">Primary</span>
                    <span class="badge me-2 badge-pill bg-success">Success</span>
                    <span class="badge me-2 badge-pill bg-info">Info</span>
                    <span class="badge me-2 badge-pill bg-warning">Warning</span>
                    <span class="badge badge-pill bg-danger">Danger</span>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                    <code class="language-html">
                {`
<span class="badge me-2 badge-pill bg-secondary">Default</span>
<span class="badge me-2 badge-pill bg-primary">Primary</span>
<span class="badge me-2 badge-pill bg-success">Success</span>
<span class="badge me-2 badge-pill bg-info">Info</span>
<span class="badge me-2 badge-pill bg-warning">Warning</span>
<span class="badge badge-pill bg-danger">Danger</span>
`}

                                      </code>
                                  </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Button Badges</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <button type="button" class="btn bg-primary-subtle text-primary ">
                      Notifications <span class="badge bg-success">4</span>
                    </button>
                    <button type="button" class="btn bg-primary-subtle text-primary ">
                      Profile <span class="badge bg-danger">9</span>
                      <span class="sr-only">unread messages</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                    <code class="language-html">
                {`
<button type="button" class="btn bg-primary-subtle text-primary ">
  Notifications <span class="badge bg-success">4</span>
</button>
<button type="button" class="btn bg-primary-subtle text-primary ">
  Profile <span class="badge bg-danger">9</span>
  <span class="sr-only">unread messages</span>
</button>
`}

  
                                  </code>
                              </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Collapse (Toggle)</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <p>
                      <a class="
                            btn bg-info-subtle
                            
                            text-info
                            px-4
                            rounded-pill
                          " data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Link with href
                      </a>
                      <button class="
                            btn bg-warning-subtle
                            
                            text-warning
                            px-4
                            rounded-pill
                          " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Button with data-bs-target
                      </button>
                    </p>
                    <div class="collapse" id="collapseExample">
                      <div class="card card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod
                        high life accusamus terry richardson ad squid. Nihil
                        anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                    <code class="language-html">
                {`
<p>
  <a class="btn bg-info-subtle text-info px-4 rounded-pill" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button class="btn bg-warning-subtle text-warning px-4 rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div>
`}

                                  </code>
                              </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Active & Disabled Pagination</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <nav aria-label="...">
                      <ul class="pagination">
                        <li class="page-item disabled">
                          <a class="page-link" href="javascript:void(0)" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="javascript:void(0)">1</a>
                        </li>
                        <li class="page-item active">
                          <a class="page-link" href="javascript:void(0)">2 <span class="sr-only">(current)</span>
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="javascript:void(0)">3</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="javascript:void(0)">Next</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                    <code class="language-html">
                {`
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="javascript:void(0)" tabindex="-1">Previous</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="javascript:void(0)">1</a>
    </li>
    <li class="page-item active">
      <a class="page-link" href="javascript:void(0)">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item">
      <a class="page-link" href="javascript:void(0)">3</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="javascript:void(0)">Next</a>
    </li>
  </ul>
</nav>
`}

                                        </code>
                                    </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Pagination Sizing</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4">
                    <h4>Small Pagination</h4>
                    <nav aria-label="...">
                      <ul class="pagination pagination-sm">
                        <li class="page-item disabled">
                          <a class="page-link" href="javascript:void(0)" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="javascript:void(0)">1</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="javascript:void(0)">2</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="javascript:void(0)">3</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="javascript:void(0)">Next</a>
                        </li>
                      </ul>
                    </nav>

                    <h4>Pagination Alignment</h4>
                    <nav aria-label="Page navigation example">
                      <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                          <a class="page-link" href="javascript:void(0)" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="javascript:void(0)">1</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="javascript:void(0)">2</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="javascript:void(0)">3</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="javascript:void(0)">Next</a>
                        </li>
                      </ul>
                    </nav>

                    <h4>Large Pagination</h4>
                    <nav aria-label="...">
                      <ul class="pagination pagination-lg">
                        <li class="page-item disabled">
                          <a class="page-link" href="javascript:void(0)" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="javascript:void(0)">1</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="javascript:void(0)">2</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="javascript:void(0)">3</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="javascript:void(0)">Next</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                  <code class="language-html" style="height: 300px;">
                {`
<h4>Small Pagination</h4> <!-- Small -->
<nav aria-label="...">
    <ul class="pagination pagination-sm">
        <li class="page-item disabled">
            <a class="page-link" href="javascript:void(0)" tabindex="-1">Previous</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="javascript:void(0)">1</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="javascript:void(0)">2</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="javascript:void(0)">3</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="javascript:void(0)">Next</a>
        </li>
    </ul>
</nav>
<h4>Pagination Alignment</h4> <!-- Alignment -->
<nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
        <li class="page-item disabled">
            <a class="page-link" href="javascript:void(0)" tabindex="-1">Previous</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="javascript:void(0)">1</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="javascript:void(0)">2</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="javascript:void(0)">3</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="javascript:void(0)">Next</a>
        </li>
    </ul>
</nav>
<h4>Large Pagination</h4> <!-- Large -->
<nav aria-label="...">
    <ul class="pagination pagination-lg">
        <li class="page-item disabled">
            <a class="page-link" href="javascript:void(0)" tabindex="-1">Previous</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="javascript:void(0)">1</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="javascript:void(0)">2</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="javascript:void(0)">3</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="javascript:void(0)">Next</a>
        </li>
    </ul>
</nav>
`}

                                    </code>
                                  </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Image with round corner</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <div class="row">
                      <div class="col-md-4">
                        <h4 class="card-title">Image Rounded</h4>
                        <img src={Img1} alt="image" class="img-fluid rounded mb-4"/>
                      </div>
                      <div class="col-md-4">
                        <h4 class="card-title">Image Circle</h4>
                        <img src={Img1} alt="image" class="img-fluid rounded-circle mb-4"/>
                      </div>
                      <div class="col-md-4">
                        <h4 class="card-title">Image with thumbnail</h4>
                        <img src={Img1} alt="image" class="img-fluid img-thumbnail"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">
                <pre class="mt-0">
                    <code class="language-html">
                    {`
<div class="row">
  <div class="col-md-4">
    <h4 class="card-title">Image Rounded</h4>
    <img src="../assets/images/big/img1.jpg" alt="image" class="img-fluid rounded mb-4">
  </div>
  <div class="col-md-4">
    <h4 class="card-title">Image Circle</h4>
    <img src="../assets/images/big/img1.jpg" alt="image" class="img-fluid rounded-circle mb-4">
  </div>
  <div class="col-md-4">
    <h4 class="card-title">Image with thumbnail</h4>
    <img src="../assets/images/big/img1.jpg" alt="image" class="img-fluid img-thumbnail">
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