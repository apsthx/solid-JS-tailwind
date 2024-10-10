﻿
export default function FormBordered() {
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
            <li class="breadcrumb-item" aria-current="page">Bordered</li>
          </ol>
        </nav>
        <h2 class="mb-0 fw-bolder fs-8">Bordered</h2>
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
  {/* Row */}
  <div class="row">
    <div class="col-12">
      {/* start Project Assinging */}
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Project Assinging</h4>
          <p class="card-subtitle mb-0">
            To use add <mark>
              <code>.r-separator</code>
            </mark> class in
            the form with form styling.
          </p>
        </div>
        <form class="form-horizontal r-separator">
          <div class="card-body">
            <h5>Personal Info</h5>
            <div class="form-group mb-0">
              <div class="row align-items-center">
                <label for="inputText1" class="col-3 text-end  col-form-label">First Name</label>
                <div class="col-9 border-start pb-2 pt-2">
                  <input type="text" class="form-control" id="inputText1" placeholder="First Name Here" />
                </div>
              </div>
            </div>
            <div class="form-group mb-0">
              <div class="row align-items-center">
                <label for="inputText2" class="col-3 text-end  col-form-label">Last Name</label>
                <div class="col-9 border-start pb-2 pt-2">
                  <input type="text" class="form-control" id="inputText2" placeholder="Last Name Here" />
                </div>
              </div>
            </div>
            <div class="form-group mb-0">
              <div class="row align-items-center">
                <label for="inputEmail1" class="col-3 text-end  col-form-label">Email</label>
                <div class="col-9 border-start pb-2 pt-2">
                  <input type="email" class="form-control" id="inputEmail1" placeholder="Email Here" />
                </div>
              </div>
            </div>
            <div class="form-group mb-0">
              <div class="row align-items-center">
                <label for="inputText3" class="col-3 text-end  col-form-label">Contact No</label>
                <div class="col-9 border-start pb-2 pt-2">
                  <input type="text" class="form-control" id="inputText3" placeholder="Contact No Here" />
                </div>
              </div>
            </div>
          </div>
          <div class="card-body text-bg-light">
            <h4 class="card-title mt-2 pb-3">Requirements</h4>
            <div class="form-group mb-0">
              <div class="row align-items-center">
                <label for="inputText4" class="col-3 text-end  col-form-label">Company</label>
                <div class="col-9 border-start pb-2 pt-2">
                  <input type="text" class="form-control" id="inputText4" placeholder="Company Name Here" />
                </div>
              </div>
            </div>
            <div class="form-group mb-0">
              <div class="row align-items-center">
                <label for="inputSelect1" class="col-3 text-end  col-form-label">Interested
                  In</label>
                <div class="col-9 border-start pb-2 pt-2">
                  <select class="form-select" id="inputSelect1">
                    <option>Choose Your Option</option>
                    <option>Desiging</option>
                    <option>Development</option>
                    <option>Videography</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-group mb-0">
              <div class="row align-items-center">
                <label for="inputSelect2" class="col-3 text-end  col-form-label">Budget</label>
                <div class="col-9 border-start pb-2 pt-2">
                  <select class="form-select" id="inputSelect2">
                    <option>Choose Your Option</option>
                    <option>Less then $5000</option>
                    <option>$5000 - $10000</option>
                    <option>$10000 - $20000</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-group mb-0">
              <div class="row align-items-center">
                <label for="inputGroupFile01" class="col-3 text-end  col-form-label">Select
                  File</label>
                <div class="col-9 border-start pb-2 pt-2">
                  <div class="input-group">
                    <span class="input-group-text">Upload</span>
                    <div class="custom-file">
                      <input type="file" class="form-control" id="inputGroupFile01" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group mb-0">
              <div class="row align-items-center">
                <label for="inputText5" class="col-3 text-end  col-form-label">About
                  Project</label>
                <div class="col-9 border-start pb-2 pt-2">
                  <input type="text" class="form-control" id="inputText5" placeholder="About Project Here" />
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="form-group mb-0 text-end">
              <button type="submit" class="btn btn-primary">
                Save
              </button>
              <button type="submit" class="btn bg-danger-subtle text-danger ms-6">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* end Project Assinging */}
    </div>
    <div class="col-12">
      {/* start Employee Profile */}
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Employee Profile</h4>
          <p class="card-subtitle mb-0">
            To use add <mark>
              <code>.r-separator</code>
            </mark> class in
            the form with form styling.
          </p>
        </div>
        <form class="form-horizontal r-separator">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-12 col-lg-6">
                <div class="form-group row align-items-center mb-0">
                  <label for="inputText6" class="col-3 text-end  col-form-label">First
                    Name</label>
                  <div class="col-9 border-start pt-2 pb-2">
                    <input type="text" class="form-control" id="inputText6" placeholder="First Name Here" />
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-lg-6">
                <div class="form-group row align-items-center mb-0">
                  <label for="inputText7" class="col-3 text-end  col-form-label">Last Name</label>
                  <div class="col-9 border-start pt-2 pb-2">
                    <input type="text" class="form-control" id="inputText7" placeholder="Last Name Here" />
                  </div>
                </div>
              </div>
            </div>
            <hr class="m-0" />
            <div class="row">
              <div class="col-sm-12 col-lg-6">
                <div class="form-group row align-items-center mb-0">
                  <label for="inputEmail7" class="col-3 text-end  col-form-label">Username</label>
                  <div class="col-9 border-start pb-2 pt-2">
                    <input type="email" class="form-control" id="inputEmail7" placeholder="Username Here" />
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-lg-6">
                <div class="form-group row align-items-center mb-0">
                  <label for="inputText19" class="col-3 text-end  col-form-label">Nick Name</label>
                  <div class="col-9 border-start pb-2 pt-2">
                    <input type="text" class="form-control" id="inputText19" placeholder="Nick Name Here" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body text-bg-light">
            <h4 class="card-title mt-2 pb-3">
              Contact Info &amp; Bio
            </h4>
            <div class="row">
              <div class="col-sm-12 col-lg-6">
                <div class="form-group row align-items-center mb-0">
                  <label for="inputEmail2" class="col-3 text-end  col-form-label">Email</label>
                  <div class="col-9 border-start pt-2 pb-2">
                    <input type="email" class="form-control" id="inputEmail2" placeholder="Email Here" />
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-lg-6">
                <div class="form-group row align-items-center mb-0">
                  <label for="inputText8" class="col-3 text-end  col-form-label">Website</label>
                  <div class="col-9 border-start pt-2 pb-2">
                    <input type="text" class="form-control" id="inputText8" placeholder="http://" />
                  </div>
                </div>
              </div>
            </div>
            <hr class="m-0" />
            <div class="row">
              <div class="col-sm-12 col-lg-6">
                <div class="form-group row align-items-center mb-0">
                  <label for="inputText9" class="col-3 text-end  col-form-label">Contact
                    No</label>
                  <div class="col-9 border-start pt-2 pb-2">
                    <input type="text" class="form-control" id="inputText9" placeholder="Contact No Here" />
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-lg-6">
                <div class="form-group row align-items-center mb-0">
                  <label for="inputText10" class="col-3 text-end  col-form-label">Bio</label>
                  <div class="col-9 border-start pt-2 pb-2">
                    <input type="text" class="form-control" id="inputText10" placeholder="Bio Here" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="form-group mb-0 text-end">
              <button type="submit" class="btn btn-primary">
                Save
              </button>
              <button type="submit" class="btn bg-danger-subtle text-danger ms-6">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* end Employee Profile */}
    </div>
    <div class="col-12">
      {/* start Employee Timing */}
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Employee Timing</h4>
          <p class="card-subtitle mb-0">
            To use add <mark>
              <code>.r-separator</code>
            </mark> class in
            the form with form styling.
          </p>
        </div>
        <form class="form-horizontal r-separator">
          <div class="card-body">
            <div class="form-group mb-0">
              <div class="row align-items-center">
                <label for="inputText11" class="col-3 text-end  col-form-label">Employee
                  Name</label>
                <div class="col-9 border-start pb-2 pt-2">
                  <input type="text" class="form-control" id="inputText11" placeholder="Employee Name Here" />
                </div>
              </div>
            </div>
            <div class="form-group mb-0">
              <div class="row align-items-center">
                <label for="inputText12" class="col-3 text-end  col-form-label">Project
                  Name</label>
                <div class="col-9 border-start pb-2 pt-2">
                  <input type="text" class="form-control" id="inputText12" placeholder="Project Name Here" />
                </div>
              </div>
            </div>
            <div class="form-group mb-0">
              <div class="row align-items-center">
                <label for="inputDate1" class="col-3 text-end  col-form-label">Date</label>
                <div class="col-9 border-start pb-2 pt-2">
                  <input type="date" class="form-control" id="inputDate1" placeholder="Date Here" />
                </div>
              </div>
            </div>
            <div class="form-group mb-0">
              <div class="row align-items-center">
                <label for="inputText13" class="col-3 text-end  col-form-label">Rate Per
                  Hour</label>
                <div class="col-9 border-start pb-2 pt-2">
                  <input type="text" class="form-control" id="inputText13" placeholder="Rate Per Hour Here" />
                </div>
              </div>
            </div>
            <div class="form-group mb-0">
              <div class="row align-items-center">
                <label for="inputTime1" class="col-3 text-end  col-form-label">Start Time</label>
                <div class="col-9 border-start pb-2 pt-2">
                  <input type="time" class="form-control" id="inputTime1" placeholder="Start Time Here" />
                </div>
              </div>
            </div>
            <div class="form-group mb-0">
              <div class="row align-items-center">
                <label for="inputTime2" class="col-3 text-end  col-form-label">End Time</label>
                <div class="col-9 border-start pb-2 pt-2">
                  <input type="time" class="form-control" id="inputTime2" placeholder="End Time Here" />
                </div>
              </div>
            </div>
            <div class="form-group mb-0">
              <div class="row align-items-center">
                <label for="inputText14" class="col-3 text-end  col-form-label">Notes</label>
                <div class="col-9 border-start pb-2 pt-2">
                  <input type="text" class="form-control" id="inputText14" placeholder="Notes Here" />
                </div>
              </div>
            </div>
          </div>
          <div class="p-3 border-top">
            <div class="form-group mb-0 text-end">
              <button type="submit" class="btn btn-primary">
                Save
              </button>
              <button type="submit" class="btn bg-danger-subtle text-danger ms-6">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* end Employee Timing */}
    </div>
    <div class="col-12">
      {/* start Event Registration */}
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Event Registration</h4>
          <p class="card-subtitle mb-0">
            To use add <mark>
              <code>.r-separator</code>
            </mark> class in
            the form with form styling.
          </p>
        </div>
        <form class="form-horizontal r-separator">
          <div class="card-body">
            <div class="form-group mb-0">
              <div class="row align-items-center">
                <label for="inputText15" class="col-3 text-end  col-form-label">Full Name</label>
                <div class="col-9 border-start pb-2 pt-2">
                  <input type="text" class="form-control" id="inputText15" placeholder="Full Name Here" />
                </div>
              </div>
            </div>
            <div class="form-group mb-0">
              <div class="row align-items-center">
                <label for="inputText16" class="col-3 text-end  col-form-label">Title</label>
                <div class="col-9 border-start pb-2 pt-2">
                  <input type="text" class="form-control" id="inputText16" placeholder="Title Here" />
                </div>
              </div>
            </div>
            <div class="form-group mb-0">
              <div class="row align-items-center">
                <label for="inputText17" class="col-3 text-end  col-form-label">Company</label>
                <div class="col-9 border-start pb-2 pt-2">
                  <input type="text" class="form-control" id="inputText17" placeholder="Company Name Here" />
                </div>
              </div>
            </div>
            <div class="form-group mb-0">
              <div class="row align-items-center">
                <label for="inputEmail4" class="col-3 text-end  col-form-label">Email</label>
                <div class="col-9 border-start pb-2 pt-2">
                  <input type="email" class="form-control" id="inputEmail4" placeholder="Email Here" />
                </div>
              </div>
            </div>
            <div class="form-group mb-0">
              <div class="row align-items-center">
                <label for="inputText18" class="col-3 text-end  col-form-label">Contact No</label>
                <div class="col-9 border-start pb-2 pt-2">
                  <input type="text" class="form-control" id="inputText18" placeholder="Contact No Here" />
                </div>
              </div>
            </div>
            <div class="form-group mb-0">
              <div class="row align-items-center">
                <label for="customControlValidation2" class="col-3 text-end  col-form-label">Existing
                  Customer</label>
                <div class="col-9 border-start pb-2 pt-2">
                  <div class="form-check">
                    <label class="form-check-label" for="customControlValidation2">Yes</label>
                    <input type="radio" class="form-check-input" id="customControlValidation2" name="radio-stacked" required />
                  </div>
                  <div class="form-check">
                    <label class="form-check-label" for="customControlValidation3">No</label>
                    <input type="radio" class="form-check-input" id="customControlValidation3" name="radio-stacked" required />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-3 border-top">
            <div class="form-group mb-0 text-end">
              <button type="submit" class="btn btn-primary">
                Save
              </button>
              <button type="submit" class="btn bg-danger-subtle text-danger ms-6">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* end Event Registration */}
    </div>
  </div>
  {/* End Row */}
</div>
    </>
  );
}
