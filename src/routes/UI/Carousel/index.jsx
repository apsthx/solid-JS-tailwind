import { blogImg1, blogImg2, blogImg3 } from "../../../helper/icon";

const Carousel = () => {
  return (
    <div class="container-fluid mw-100">
      <div class="page-titles mb-7 mb-md-5">
        <div class="row">
          <div class="col-lg-8 col-md-6 col-12 align-self-center">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb align-items-center">
                <li class="breadcrumb-item">
                  <a class="text-muted text-decoration-none" href="/">
                    <i class="ti ti-home fs-5" />
                  </a>
                </li>
                <li class="breadcrumb-item" aria-current="page">Carousel</li>
              </ol>
            </nav>
            <h2 class="mb-0 fw-bolder fs-8">Carousel</h2>
          </div>
          <div class="col-lg-4 col-md-6 d-none d-md-flex align-items-center justify-content-end">
            <select class="form-select w-auto bg-primary-subtle border-0" aria-label="Default select example">
              <option selected>Today 23 March</option>
              <option value="1">Today 23 March</option>
              <option value="2">Today 24 March</option>
              <option value="3">Today 25 March</option>
            </select>
            <button class="btn btn-primary d-flex align-items-center ms-2">
              <i class="ti ti-plus me-1" /> Add New
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-3">Slides only</h4>
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={blogImg1} class="d-block w-100" alt="flexy-img" />
                  </div>
                  <div class="carousel-item">
                    <img src={blogImg2} class="d-block w-100" alt="flexy-img" />
                  </div>
                  <div class="carousel-item">
                    <img src={blogImg3} class="d-block w-100" alt="flexy-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-3">With controls</h4>
              <div id="carouselExampleControls" class="carousel slide carousel-dark" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={blogImg2} class="d-block w-100" alt="flexy-img" />
                  </div>
                  <div class="carousel-item">
                    <img src={blogImg3} class="d-block w-100" alt="flexy-img" />
                  </div>
                  <div class="carousel-item">
                    <img src={blogImg2} class="d-block w-100" alt="flexy-img" />
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
  <div class="card">
    <div class="card-body">
      <h4 class="card-title mb-3">With indicators</h4>
      <div id="carouselExampleIndicators" class="carousel slide carousel-dark" data-bs-ride="carousel">
        <ol class="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={blogImg1} class="d-block w-100" alt="flexy-img" />
          </div>
          <div class="carousel-item">
            <img src={blogImg2} class="d-block w-100" alt="flexy-img" />
          </div>
          <div class="carousel-item">
            <img src={blogImg3} class="d-block w-100" alt="flexy-img" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  </div>
</div>

<div class="col-lg-6">
  <div class="card">
    <div class="card-body">
      <h4 class="card-title mb-3">With captions</h4>
      <div id="carouselExampleCaptions" class="carousel slide carousel-dark" data-bs-ride="carousel">
        <ol class="carousel-indicators">
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={blogImg1} class="d-block w-100" alt="flexy-img" />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={blogImg2} class="d-block w-100" alt="flexy-img" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={blogImg3} class="d-block w-100" alt="flexy-img" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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

<div class="col-lg-6">
  <div class="card">
    <div class="card-body">
      <h4 class="card-title mb-3">Crossfade</h4>
      <div id="carouselExampleFade" class="carousel slide carousel-fade carousel-dark" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={blogImg1} class="d-block w-100" alt="flexy-img" />
          </div>
          <div class="carousel-item">
            <img src={blogImg2} class="d-block w-100" alt="flexy-img" />
          </div>
          <div class="carousel-item">
            <img src={blogImg3} class="d-block w-100" alt="flexy-img" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  </div>
</div>

<div class="col-lg-6">
  <div class="card">
    <div class="card-body">
      <h4 class="card-title mb-3">Individual <code>.carousel-item</code> interval</h4>
      <div id="carouselExampleInterval" class="carousel slide carousel-dark" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={blogImg1} class="d-block w-100" alt="flexy-img" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={blogImg2} class="d-block w-100" alt="flexy-img" />
          </div>
          <div class="carousel-item">
            <img src={blogImg3} class="d-block w-100" alt="flexy-img" />
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

<div class="col-lg-6">
  <div class="card">
    <div class="card-body">
      <h4 class="card-title mb-3">Dark variant</h4>
      <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={blogImg2} class="d-block w-100" alt="flexy-img" />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={blogImg2} class="d-block w-100" alt="flexy-img" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={blogImg2} class="d-block w-100" alt="flexy-img" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</div>


      </div>
    </div>
  );
};

export default Carousel;
