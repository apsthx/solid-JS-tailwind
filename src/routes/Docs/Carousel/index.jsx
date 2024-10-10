import { onMount } from "solid-js";

export default function Carousel(){
    onMount(async () => {
        const module = await import("../../../assets/libs/prismjs/prism.js");
    
        module.initializePrism();
      });
    return (
        <>
                <div class="container-fluid mt-4">
          <div class="mt-1">
            <div class="d-sm-flex align-items-center justify-content-between">
              <h4 class="mb-4 pb-2 fs-5">Carousel</h4>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Bootstrap Carousel</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item">
                          <img src="../assets/images/blog/blog-img1.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item active">
                          <img src="../assets/images/blog/blog-img2.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                          <img src="../assets/images/blog/blog-img3.jpg" class="d-block w-100" alt="..."/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                        <code class="language-html">
{`<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item">
            <img src="../assets/images/blog/blog-img1.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item active">
            <img src="../assets/images/blog/blog-img2.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="../assets/images/blog/blog-img3.jpg" class="d-block w-100" alt="...">
        </div>
    </div>
</div>
`}
                                      </code>
                                  </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">With Indicators & Captions</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <div id="carouselExampleCaptions" class="carousel slide carousel-dark" data-bs-ride="carousel">
                      <ol class="carousel-indicators">
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"></li>
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class=""></li>
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class=""></li>
                      </ol>
                      <div class="carousel-inner">
                        <div class="carousel-item carousel-item-next carousel-item-start">
                          <img src="../assets/images/blog/blog-img1.jpg" class="d-block w-100" alt="..."/>
                          <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>
                              Nulla vitae elit libero, a pharetra augue
                              mollis interdum.
                            </p>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img src="../assets/images/blog/blog-img2.jpg" class="d-block w-100" alt="..."/>
                          <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit.
                            </p>
                          </div>
                        </div>
                        <div class="carousel-item active carousel-item-start">
                          <img src="../assets/images/blog/blog-img3.jpg" class="d-block w-100" alt="..."/>
                          <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur.
                            </p>
                          </div>
                        </div>
                      </div>
                      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                      <code class="language-html" style="height: 300px;">
{`<div id="carouselExampleCaptions" class="carousel slide carousel-dark" data-bs-ride="carousel">
    <ol class="carousel-indicators">
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class=""></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class=""></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item carousel-item-next carousel-item-start">
            <img src="../assets/images/blog/blog-img1.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                    Nulla vitae elit libero, a pharetra augue
                    mollis interdum.
                </p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="../assets/images/blog/blog-img2.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                </p>
            </div>
        </div>
        <div class="carousel-item active carousel-item-start">
            <img src="../assets/images/blog/blog-img3.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                    Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur.
                </p>
            </div>
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </a>
</div>
`}
                                          </code>
                                        </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">With Individual Interval</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <div id="carouselExampleInterval" class="carousel slide carousel-dark" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                          <img src="../assets/images/blog/blog-img1.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                          <img src="../assets/images/blog/blog-img2.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                          <img src="../assets/images/blog/blog-img3.jpg" class="d-block w-100" alt="..."/>
                        </div>
                      </div>
                      <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                      <code class="language-html" style="height: 300px;">
{`<div id="carouselExampleInterval" class="carousel slide carousel-dark" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
            <img src="../assets/images/blog/blog-img1.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="2000">
            <img src="../assets/images/blog/blog-img2.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="../assets/images/blog/blog-img3.jpg" class="d-block w-100" alt="...">
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </a>
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