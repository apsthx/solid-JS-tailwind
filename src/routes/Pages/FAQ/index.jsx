import { User2, User3, User4 } from "../../../helper/img";

export default function FAQ() {
  return (
    <>
          <div class="container-fluid mw-100">
  <div class="page-titles mb-7 mb-md-5">
    <div class="row">
      <div class="col-lg-8 col-md-6 col-12 align-self-center">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb align-items-center">
            <li class="breadcrumb-item">
              <a class="text-muted text-decoration-none" href="../dark/index.html">
                <i class="ti ti-home fs-5" />
              </a>
            </li>
            <li class="breadcrumb-item" aria-current="page">FAQ</li>
          </ol>
        </nav>
        <h2 class="mb-0 fw-bolder fs-8">FAQ</h2>
      </div>
      <div class="col-lg-4 col-md-6 d-none d-md-flex align-items-center justify-content-end">
        <select class="form-select w-auto bg-primary-subtle border-0" aria-label="Default select example">
          <option selected>Today 23 March</option>
          <option value="1">Today 23 March</option>
          <option value="2">Today 24 March</option>
          <option value="3">Today 25 March</option>
        </select>
        <a href="javascript:void(0)" class="btn btn-primary d-flex align-items-center ms-2">
          <i class="ti ti-plus me-1" />Add New</a>
      </div>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <div class="text-center mb-7">
        <h3 class="fw-semibold">Frequently asked questions</h3>
        <p class="fw-normal mb-0 fs-4">Get to know more about ready-to-use admin dashboard templates</p>
      </div>
      <div class="accordion accordion-flush mb-5 card position-relative overflow-hidden" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed fs-4 fw-semibold shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">What is an Admin Dashboard?</button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body fw-normal">Admin Dashboard is the backend interface of a website or an application that helps to manage the website's overall content and settings. It is widely used by the site owners to keep track of their website, make changes to their content, and more.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed fs-4 fw-semibold shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">What should an admin dashboard template include?</button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body fw-normal">Admin dashboard template should include user &amp; SEO friendly design with a variety of components and application designs to help create your own web application with ease. This could include customization options, technical support and about 6 months of future updates.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed fs-4 fw-semibold shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Why should I buy admin templates from Wrappixel?</button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body fw-normal">Wrappixel offers high-quality templates that are easy to use and fully customizable. With over 101,801 happy customers &amp; trusted by 10,000+ Companies. Wrappixel is recognized as the leading online source for buying admin templates.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingfour">
            <button class="accordion-button collapsed fs-4 fw-semibold shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">Do Wrappixel offers a money back guarantee?</button>
          </h2>
          <div id="flush-collapsefour" class="accordion-collapse collapse" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body fw-normal">There is no money back guarantee in most companies, but if you are unhappy with our product, Wrappixel gives you a 100% money back guarantee.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card bg-primary-subtle rounded-2">
    <div class="card-body text-center">
      <div class="d-flex align-items-center justify-content-center mb-4 pt-8">
        <a href="javascript:void(0)">
          <img src={User3} class="rounded-circle me-n2 card-hover border border-2 border-white" width="44" height="44" />
        </a>
        <a href="javascript:void(0)">
          <img src={User2} class="rounded-circle me-n2 card-hover border border-2 border-white" width="44" height="44" />
        </a>
        <a href="javascript:void(0)">
          <img src={User4} class="rounded-circle me-n2 card-hover border border-2 border-white" width="44" height="44" />
        </a>
      </div>
      <h3 class="fw-semibold">Still have questions</h3>
      <p class="fw-normal mb-4 fs-4">Can't find the answer your're looking for ? Please chat to our friendly team.</p>
      <a href="javascript:void(0)" class="btn btn-primary mb-8">Chat with us</a>
    </div>
  </div>
</div>
    </>
  );
}
