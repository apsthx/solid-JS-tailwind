﻿
export default function FormHorizontal() {
  return (
    <>
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
            <li class="breadcrumb-item" aria-current="page">Horizontal Form</li>
          </ol>
        </nav>
        <h2 class="mb-0 fw-bolder fs-8">Horizontal Form</h2>
      </div>
      <div class="col-lg-4 col-md-6 d-none d-md-flex align-items-center justify-content-end">
        <select class="form-select w-auto bg-primary-subtle border-0" aria-label="Default select example">
          <option selected>Today 23 March</option>
          <option value="1">Today 23 March</option>
          <option value="2">Today 24 March</option>
          <option value="3">Today 25 March</option>
        </select>
        <a href="javascript:void(0)" class="btn btn-primary d-flex align-items-center ms-2">
          <i class="ti ti-plus me-1" />
          Add New
        </a>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-6">
      <div class="card">
        <div class="px-4 py-3 border-bottom">
          <h4 class="card-title mb-0">Basic Layout</h4>
        </div>
        <div class="card-body">
          <div class="mb-4 row align-items-center">
            <label for="exampleInputText1" class="form-label col-sm-3 col-form-label">Name</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="exampleInputText1" placeholder="John Deo" />
            </div>
          </div>
          <div class="mb-4 row align-items-center">
            <label for="exampleInputText2" class="form-label col-sm-3 col-form-label">Company</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="exampleInputText2" placeholder="ACME Inc." />
            </div>
          </div>
          <div class="mb-4 row align-items-center">
            <label for="exampleInputText30" class="form-label col-sm-3 col-form-label">Email</label>
            <div class="col-sm-9">
              <div class="input-group border rounded-1">
                <input type="text" class="form-control border-0" id="exampleInputText30" placeholder="John Deo" />
                <span class="input-group-text bg-transparent px-6 border-0" id="basic-addon1">@example.com</span>
              </div>
            </div>
          </div>
          <div class="mb-4 row align-items-center">
            <label for="exampleInputText3" class="form-label col-sm-3 col-form-label">Phone
              No</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="exampleInputText3" placeholder="412 2150 451" />
            </div>
          </div>
          <div class="mb-4 row align-items-center">
            <label for="exampleInputText29" class="form-label col-sm-3 col-form-label">Message</label>
            <div class="col-sm-9">
              <textarea class="form-control p-7" name id="exampleInputText29" cols="20" rows="1" placeholder="Hi, Do you  have a moment to talk Jeo ?" value=""/>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3" />
            <div class="col-sm-9">
              <button class="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card">
        <div class="px-4 py-3 border-bottom">
          <h4 class="card-title mb-0">Basic with Icons</h4>
        </div>
        <div class="card-body">
          <div class="mb-4 row align-items-center">
            <label for="exampleInputText31" class="form-label col-sm-3 col-form-label">Name</label>
            <div class="col-sm-9">
              <div class="input-group border rounded-1">
                <span class="input-group-text bg-transparent px-6 border-0" id="basic-addon1">
                  <i class="ti ti-user fs-6" />
                </span>
                <input type="text" class="form-control border-0 ps-2" id="exampleInputText31" placeholder="John Deo" />
              </div>
            </div>
          </div>
          <div class="mb-4 row align-items-center">
            <label for="exampleInputText32" class="form-label col-sm-3 col-form-label">Company</label>
            <div class="col-sm-9">
              <div class="input-group border rounded-1">
                <span class="input-group-text bg-transparent px-6 border-0" id="basic-addon1">
                  <i class="ti ti-building-arch fs-6" />
                </span>
                <input type="text" id="exampleInputText32" class="form-control border-0 ps-2" placeholder="ACME Inc." />
              </div>
            </div>
          </div>
          <div class="mb-4 row align-items-center">
            <label for="exampleInputText33" class="form-label col-sm-3 col-form-label">Email</label>
            <div class="col-sm-9">
              <div class="input-group border rounded-1">
                <span class="input-group-text bg-transparent px-6 border-0" id="basic-addon1">
                  <i class="ti ti-mail fs-6" />
                </span>
                <input type="text" id="exampleInputText33" class="form-control border-0 ps-2" placeholder="John Deo" />
              </div>
            </div>
          </div>
          <div class="mb-4 row align-items-center">
            <label for="exampleInputText40" class="form-label col-sm-3 col-form-label">Phone
              No</label>
            <div class="col-sm-9">
              <div class="input-group border rounded-1">
                <span class="input-group-text bg-transparent px-6 border-0" id="basic-addon1">
                  <i class="ti ti-phone fs-6" />
                </span>
                <input type="text" id="exampleInputText40" class="form-control border-0 ps-2" placeholder="412 2150 451" />
              </div>
            </div>
          </div>
          <div class="mb-4 row align-items-center">
            <label for="exampleInputText34" class="form-label col-sm-3 col-form-label">Message</label>
            <div class="col-sm-9">
              <div class="input-group border rounded-1">
                <span class="input-group-text bg-transparent px-6 border-0" id="basic-addon1">
                  <i class="ti ti-message-2 fs-6" />
                </span>
                <textarea class="form-control p-7 border-0 ps-2" name id="exampleInputText34" cols="20" rows="1" placeholder="Hi, Do you  have a moment to talk Jeo ?" value=""/>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3" />
            <div class="col-sm-9">
              <button class="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card">
        <div class="px-4 py-3 border-bottom">
          <h4 class="card-title mb-0">Form Separator</h4>
        </div>
        <div class="card-body p-4 border-bottom">
          <h5 class="fs-4 fw-semibold mb-4">Account Details</h5>
          <div class="mb-4 row align-items-center">
            <label for="exampleInputText4" class="form-label col-sm-3 col-form-label">Username</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="exampleInputText4" placeholder="John Deo" />
            </div>
          </div>
          <div class="mb-4 row align-items-center">
            <label for="exampleInputText35" class="form-label col-sm-3 col-form-label">Email</label>
            <div class="col-sm-9">
              <div class="input-group border rounded-1">
                <input type="text" class="form-control border-0" id="exampleInputText35" placeholder="John Deo" />
                <span class="input-group-text bg-transparent px-6 border-0" id="basic-addon1">@example.com</span>
              </div>
            </div>
          </div>
          <div class="row align-items-center">
            <label for="exampleInputPassword2" class="form-label col-sm-3 col-form-label">Password</label>
            <div class="col-sm-9">
              <div class="input-group border rounded-1">
                <input type="password" class="form-control border-0" id="exampleInputPassword2" placeholder="John Deo" />
                <span class="input-group-text bg-transparent px-6 border-0" id="basic-addon1">
                  <i class="ti ti-eye fs-6" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h5 class="fs-4 fw-semibold mb-4">Personal Info</h5>
          <div class="mb-4 row align-items-center">
            <label for="exampleInputText5" class="form-label col-sm-3 col-form-label">Full
              Name</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="exampleInputText5" placeholder="John Deo" />
            </div>
          </div>
          <div class="mb-4 row align-items-center">
            <label for="exampleInputselect" class="form-label col-sm-3 col-form-label">Country</label>
            <div class="col-sm-9">
              <select class="form-select" id="exampleInputselect" aria-label="Default select example">
                <option selected>India</option>
                <option value="1">United Kingdom</option>
                <option value="2">Srilanka</option>
              </select>
            </div>
          </div>
          <div class="mb-4 row align-items-center">
            <label for="startDate" class="form-label col-sm-3 col-form-label">Birth
              Date</label>
            <div class="col-sm-9">
              <div class="input-group">
                <input id="startDate" class="form-control" type="date" />
              </div>
            </div>
          </div>
          <div class="mb-4 row align-items-center">
            <label for="exampleInputText6" class="form-label col-sm-3 col-form-label">Phone
              no</label>
            <div class="col-sm-9">
              <div class="input-group">
                <input type="text" class="form-control" id="exampleInputText6" placeholder="123 4567 201" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3" />
            <div class="col-sm-9">
              <div class="d-flex align-items-center gap-6">
                <button class="btn btn-primary">Submit</button>
                <button class="btn bg-danger-subtle text-danger">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card">
        <div class="px-4 py-3 border-bottom">
          <h4 class="card-title mb-0">Form Label Alignment</h4>
        </div>
        <div class="card-body p-4 border-bottom">
          <h5 class="fs-4 fw-semibold mb-4">Account Details</h5>
          <div class="mb-4 row align-items-center">
            <label for="exampleInputText7" class="form-label col-sm-3 col-form-label text-end">Username</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="exampleInputText7" placeholder="John Deo" />
            </div>
          </div>
          <div class="mb-4 row align-items-center">
            <label for="exampleInpuText36" class="form-label col-sm-3 col-form-label text-end">Email</label>
            <div class="col-sm-9">
              <div class="input-group border rounded-1">
                <input type="text" class="form-control border-0" id="exampleInpuText36" placeholder="John Deo" />
                <span class="input-group-text bg-transparent px-6 border-0" id="basic-addon1">@example.com</span>
              </div>
            </div>
          </div>
          <div class="row align-items-center">
            <label for="exampleInputPassword3" class="form-label col-sm-3 col-form-label text-end">Password</label>
            <div class="col-sm-9">
              <div class="input-group border rounded-1">
                <input type="password" class="form-control border-0" id="exampleInputPassword3" placeholder="John Deo" />
                <span class="input-group-text bg-transparent px-6 border-0" id="basic-addon1">
                  <i class="ti ti-eye fs-6" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h5 class="fs-4 fw-semibold mb-4">Personal Info</h5>
          <div class="mb-4 row align-items-center">
            <label for="exampleInputText8" class="form-label col-sm-3 col-form-label text-end">Full
              Name</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="exampleInputText8" placeholder="John Deo" />
            </div>
          </div>
          <div class="mb-4 row align-items-center">
            <label for="exampleInputSelect2" class="form-label col-sm-3 col-form-label text-end">Country</label>
            <div class="col-sm-9">
              <select class="form-select" id="exampleInputSelect2" aria-label="Default select example">
                <option selected>India</option>
                <option value="1">United Kingdom</option>
                <option value="2">Srilanka</option>
              </select>
            </div>
          </div>
          <div class="mb-4 row align-items-center">
            <label for="startDate2" class="form-label col-sm-3 col-form-label text-end">Birth
              Date</label>
            <div class="col-sm-9">
              <div class="input-group">
                <input id="startDate2" class="form-control" type="date" />
              </div>
            </div>
          </div>
          <div class="mb-4 row align-items-center">
            <label for="exampleInputText9" class="form-label col-sm-3 col-form-label text-end">Phone
              no</label>
            <div class="col-sm-9">
              <div class="input-group">
                <input type="text" class="form-control" id="exampleInputText9" placeholder="123 4567 201" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3" />
            <div class="col-sm-9">
              <div class="d-flex align-items-center gap-6">
                <button class="btn btn-primary">Submit</button>
                <button class="btn bg-danger-subtle text-danger">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="collapsible-section mb-4">
    <h4 class="card-title text-dark mt-5 mb-4">Collapsible Section</h4>
    <div class="card">
      <div class="card-body">
        <div class="accordion accordion-flush position-relative overflow-hidden" id="accordionFlushExample">
          <div class="accordion-item shadow-none border rounded-top">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed fs-4 fw-semibold px-3 py-6 lh-base border-0 rounded" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"> Delivery Address </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body px-3 fw-normal">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-4 row align-items-center">
                      <label for="exampleInputText10" class="form-label col-sm-3 col-form-label text-end">Full Name</label>
                      <div class="col-sm-9">
                        <input type="text" class="form-control" id="exampleInputText10" placeholder="John Deo" />
                      </div>
                    </div>
                    <div class="mb-4 row align-items-center">
                      <label for="exampleInputText37" class="form-label col-sm-3 col-form-label text-end">Address</label>
                      <div class="col-sm-9">
                        <div class="input-group border rounded-1">
                          <textarea class="form-control p-7 border-0" name id="exampleInputText37" cols="20" rows="1" placeholder="150, Ring Road" value=""/>
                        </div>
                      </div>
                    </div>
                    <div class="mb-4 row align-items-center">
                      <label for="exampleInputText11" class="form-label col-sm-3 col-form-label text-end">City</label>
                      <div class="col-sm-9">
                        <input type="text" class="form-control" id="exampleInputText11" placeholder="Jackson" />
                      </div>
                    </div>
                    <div class="row">
                      <label class="form-label col-sm-3 col-form-label text-end">Address
                        Type</label>
                      <div class="col-sm-9">
                        <div class="form-check d-flex align-items-center gap-2 mb-8">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label class="form-check-label" for="flexRadioDefault1"> Home (All day delivery)
                          </label>
                        </div>
                        <div class="form-check d-flex align-items-center gap-2">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                          <label class="form-check-label" for="flexRadioDefault2"> Office (Delivery between 10
                            AM -
                            5 PM) </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-4 row align-items-center">
                      <label for="exampleInputText12" class="form-label col-sm-3 col-form-label text-end">Phone no</label>
                      <div class="col-sm-9">
                        <div class="input-group">
                          <input type="text" class="form-control" id="exampleInputText12" placeholder="1340 2154 123" />
                        </div>
                      </div>
                    </div>
                    <div class="mb-4 row align-items-center">
                      <label for="exampleInputText13" class="form-label col-sm-3 col-form-label text-end">Pincode</label>
                      <div class="col-sm-9">
                        <div class="input-group">
                          <input type="text" class="form-control" id="exampleInputText13" placeholder="120125" />
                        </div>
                      </div>
                    </div>
                    <div class="mb-4 row align-items-center">
                      <label for="exampleInputText14" class="form-label col-sm-3 col-form-label text-end">Landmark</label>
                      <div class="col-sm-9">
                        <div class="input-group">
                          <input type="text" class="form-control" id="exampleInputText14" placeholder="Nr. Wall Street" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item shadow-none border">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button collapsed fs-4 fw-semibold px-3 py-6 lh-base border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"> Delivery Options </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body px-3 fw-normal">
                <div class="d-flex align-items-center gap-2">
                  <div class="form-check d-flex align-items-center gap-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">Standard 3-5 Days</label>
                  </div>
                  <div class="form-check d-flex align-items-center gap-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option1" />
                    <label class="form-check-label" for="inlineRadio2">Express</label>
                  </div>
                  <div class="form-check d-flex align-items-center gap-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option1" />
                    <label class="form-check-label" for="inlineRadio3">Overnight</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item shadow-none border rounded-bottom">
            <h2 class="accordion-header" id="flush-headingThree">
              <button class="accordion-button collapsed fs-4 fw-semibold px-3 py-6 lh-base border-0 rounded-bottom" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"> Payment Method </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body px-3 fw-normal">
                <div class="d-flex align-items-center gap-2 mb-4">
                  <div class="form-check d-flex align-items-center gap-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option1" />
                    <label class="form-check-label" for="inlineRadio4">Credit/Debit/ATM Card</label>
                  </div>
                  <div class="form-check d-flex align-items-center gap-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option1" />
                    <label class="form-check-label" for="inlineRadio5">Cash on Delivery</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-8">
                    <div class="mb-4">
                      <label for="exampleInputText27" class="form-label">Card Number</label>
                      <input type="text" class="form-control" id="exampleInputText27" placeholder="1250 4521 5630 1540" />
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="mb-4">
                          <label for="exampleInputText28" class="form-label">Name</label>
                          <input type="text" class="form-control" id="exampleInputText28" placeholder="John Deo" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-4">
                          <label for="exampleInputText16" class="form-label">Exp. Date</label>
                          <input type="text" class="form-control" id="exampleInputText16" placeholder="MM/YY" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-4">
                          <label for="exampleInpuText38" class="form-label">CCV Code</label>
                          <div class="input-group border rounded-1">
                            <input type="text" class="form-control border-0" id="exampleInpuText38" placeholder="456" />
                            <span class="input-group-text bg-transparent px-6" id="basic-addon1">
                              <i class="ti ti-help fs-6" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex align-items-center gap-6">
                      <button class="btn btn-primary">Submit</button>
                      <button class="btn bg-danger-subtle text-danger">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="form-with-tabs">
    <h4 class="card-title text-dark mt-5 mb-4">Form with Tabs</h4>
    <div class="card">
      <ul class="nav nav-pills user-profile-tab border-bottom" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link position-relative rounded-0 active d-flex align-items-center justify-content-center bg-transparent fs-3 py-6 fw-bold" id="pills-personal-info-tab" data-bs-toggle="pill" data-bs-target="#pills-personal-info" type="button" role="tab" aria-controls="pills-personal-info" aria-selected="true"> Personal Info
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-transparent fs-3 py-6 fw-bold" id="pills-account-details-tab" data-bs-toggle="pill" data-bs-target="#pills-account-details" type="button" role="tab" aria-controls="pills-account-details" aria-selected="false"> Account
            Details </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-transparent fs-3 py-6 fw-bold" id="pills-social-links-tab" data-bs-toggle="pill" data-bs-target="#pills-social-links" type="button" role="tab" aria-controls="pills-social-links" aria-selected="false"> Social Links </button>
        </li>
      </ul>
      <div class="card-body">
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-personal-info" role="tabpanel" aria-labelledby="pills-personal-info-tab" tabindex="0">
            <div class="row">
              <div class="col-lg-6 mb-4 mb-lg-0">
                <div class="mb-4 row align-items-center">
                  <label for="exampleInputText17" class="form-label col-sm-3 col-form-label">Full
                    Name</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="exampleInputText17" placeholder="John" />
                  </div>
                </div>
                <div class="mb-4 row align-items-center">
                  <label for="exampleInputSelect4" class="form-label col-sm-3 col-form-label">Country</label>
                  <div class="col-sm-9">
                    <select class="form-select" id="exampleInputSelect4" aria-label="Default select example">
                      <option selected>India</option>
                      <option value="1">United Kingdom</option>
                      <option value="2">Srilanka</option>
                    </select>
                  </div>
                </div>
                <div class="mb-4 row align-items-center">
                  <label for="startDate3" class="form-label col-sm-3 col-form-label">Birth
                    Date</label>
                  <div class="col-sm-9">
                    <div class="input-group">
                      <input id="startDate3" class="form-control" type="date" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3" />
                  <div class="col-sm-9">
                    <div class="d-flex align-items-center gap-6">
                      <button class="btn btn-primary">Submit</button>
                      <button class="btn bg-danger-subtle text-danger">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-4 row align-items-center">
                  <label for="exampleInputText18" class="form-label col-sm-3 col-form-label">Last
                    Name</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="exampleInputText18" placeholder="Deo" />
                  </div>
                </div>
                <div class="mb-4 row align-items-center">
                  <label for="exampleInputSelect5" class="form-label col-sm-3 col-form-label">Language</label>
                  <div class="col-sm-9">
                    <select class="form-select" id="exampleInputSelect5" aria-label="Default select example">
                      <option selected>English</option>
                      <option value="1">French</option>
                    </select>
                  </div>
                </div>
                <div class="mb-4 row align-items-center">
                  <label for="exampleInputText19" class="form-label col-sm-3 col-form-label">Phone
                    no</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="exampleInputText19" placeholder="123 4567 201" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-account-details" role="tabpanel" aria-labelledby="pills-account-details-tab" tabindex="0">
            <div class="row">
              <div class="col-lg-6 mb-4 mb-lg-0">
                <div class="mb-4 row align-items-center">
                  <label for="exampleInputText20" class="form-label col-sm-3 col-form-label">Full
                    Name</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="exampleInputText20" placeholder="John.Deo" />
                  </div>
                </div>
                <div class="mb-4 row align-items-center">
                  <label for="exampleInputPassword4" class="form-label col-sm-3 col-form-label">Password</label>
                  <div class="col-sm-9">
                    <div class="input-group border rounded-1">
                      <input type="password" class="form-control border-0" id="exampleInputPassword4" placeholder="John Deo" />
                      <span class="input-group-text bg-transparent px-6 border-0" id="basic-addon1">
                        <i class="ti ti-eye fs-6" />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3" />
                  <div class="col-sm-9">
                    <div class="d-flex align-items-center gap-6">
                      <button class="btn btn-primary">Submit</button>
                      <button class="btn bg-danger-subtle text-danger">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-4 row align-items-center">
                  <label for="exampleInputText39" class="form-label col-sm-3 col-form-label">Email</label>
                  <div class="col-sm-9">
                    <div class="input-group border rounded-1">
                      <input type="text" class="form-control border-0" id="exampleInputText39" placeholder="John Deo" />
                      <span class="input-group-text bg-transparent px-6 border-0" id="basic-addon1">@example.com</span>
                    </div>
                  </div>
                </div>
                <div class="mb-4 row align-items-center">
                  <label for="exampleInputPassword5" class="form-label col-sm-3 col-form-label">Confirm</label>
                  <div class="col-sm-9">
                    <div class="input-group border rounded-1">
                      <input type="password" class="form-control border-0" id="exampleInputPassword5" placeholder="John Deo" />
                      <span class="input-group-text bg-transparent px-6 border-0" id="basic-addon1">
                        <i class="ti ti-eye fs-6" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-social-links" role="tabpanel" aria-labelledby="pills-social-links-tab" tabindex="0">
            <div class="row">
              <div class="col-lg-6 mb-4 mb-lg-0">
                <div class="mb-4 row align-items-center">
                  <label for="exampleInputText21" class="form-label col-sm-3 col-form-label">Twitter</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="exampleInputText21" placeholder="https://twitter.com/abc" />
                  </div>
                </div>
                <div class="mb-4 row align-items-center">
                  <label for="exampleInputText22" class="form-label col-sm-3 col-form-label">Google</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="exampleInputText22" placeholder="https://plus.google.com/abc" />
                  </div>
                </div>
                <div class="mb-4 row align-items-center">
                  <label for="exampleInputText23" class="form-label col-sm-3 col-form-label">Instagram</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="exampleInputText23" placeholder="https://instagram.com/abc" />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3" />
                  <div class="col-sm-9">
                    <div class="d-flex align-items-center gap-6">
                      <button class="btn btn-primary">Submit</button>
                      <button class="btn bg-danger-subtle text-danger">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-4 row align-items-center">
                  <label for="exampleInputText24" class="form-label col-sm-3 col-form-label">Facebook</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="exampleInputText24" placeholder="https://facebook.com/abc" />
                  </div>
                </div>
                <div class="mb-4 row align-items-center">
                  <label for="exampleInputText25" class="form-label col-sm-3 col-form-label">Linkedin</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="exampleInputText25" placeholder="https://linkedin.com/abc" />
                  </div>
                </div>
                <div class="mb-4 row align-items-center">
                  <label for="exampleInputText26" class="form-label col-sm-3 col-form-label">Quora</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="exampleInputText26" placeholder="https://quora.com/abc" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
