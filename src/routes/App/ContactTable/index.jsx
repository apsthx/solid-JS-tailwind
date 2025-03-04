import { User2, User3, User4, User5, User12 } from "../../../helper/img";

export default function ContactTable() {
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
                  <li class="breadcrumb-item" aria-current="page">Contact</li>
                </ol>
              </nav>
              <h2 class="mb-0 fw-bolder fs-8">Contact</h2>
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
        <div class="widget-content searchable-container list">
          <div class="card card-body">
            <div class="row">
              <div class="col-md-4 col-xl-3">
                <form class="position-relative">
                  <input type="text" class="form-control product-search ps-5" id="input-search" placeholder="Search Contacts..." />
                  <i class="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3" />
                </form>
              </div>
              <div class="col-md-8 col-xl-9 text-end d-flex justify-content-md-end justify-content-center mt-3 mt-md-0">
                <div class="action-btn show-btn">
                  <a href="javascript:void(0)" class="delete-multiple bg-danger-subtle btn me-2 text-danger d-flex align-items-center ">
                    <i class="ti ti-trash me-1 fs-5" /> Delete All Row
                  </a>
                </div>
                <a href="javascript:void(0)" id="btn-add-contact" class="btn btn-primary d-flex align-items-center">
                  <i class="ti ti-users text-white me-1 fs-5" /> Add Contact
                </a>
              </div>
            </div>
          </div>
          {/* Modal */}
          <div class="modal fade" id="addContactModal" tabindex="-1" role="dialog" aria-labelledby="addContactModalTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header d-flex align-items-center">
                  <h5 class="modal-title">Contact</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div class="modal-body">
                  <div class="add-contact-box">
                    <div class="add-contact-content">
                      <form id="addContactModalTitle">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="mb-3 contact-name">
                              <input type="text" id="c-name" class="form-control" placeholder="Name" />
                              <span class="validation-text text-danger" />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="mb-3 contact-email">
                              <input type="text" id="c-email" class="form-control" placeholder="Email" />
                              <span class="validation-text text-danger" />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="mb-3 contact-occupation">
                              <input type="text" id="c-occupation" class="form-control" placeholder="Occupation" />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="mb-3 contact-phone">
                              <input type="text" id="c-phone" class="form-control" placeholder="Phone" />
                              <span class="validation-text text-danger" />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="mb-3 contact-location">
                              <input type="text" id="c-location" class="form-control" placeholder="Location" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <div class="d-flex gap-6 m-0">
                    <button id="btn-add" class="btn btn-success">Add</button>
                    <button id="btn-edit" class="btn btn-success">Save</button>
                    <button class="btn bg-danger-subtle text-danger" data-bs-dismiss="modal"> Discard
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card card-body">
            <div class="table-responsive">
              <table class="table search-table align-middle text-nowrap">
                <thead class="header-item">
                  <tr><th>
                    <div class="n-chk align-self-center text-center">
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input primary" id="contact-check-all" />
                        <label class="form-check-label" for="contact-check-all" />
                        <span class="new-control-indicator" />
                      </div>
                    </div>
                  </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Location</th>
                    <th>Phone</th>
                    <th>Action</th>
                  </tr></thead>
                <tbody>
                  {/* start row */}
                  <tr class="search-items">
                    <td>
                      <div class="n-chk align-self-center text-center">
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input contact-chkbox primary" id="checkbox1" />
                          <label class="form-check-label" for="checkbox1" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <img src={User2} alt="avatar" class="rounded-circle" width="35" />
                        <div class="ms-3">
                          <div class="user-meta-info">
                            <h6 class="user-name mb-0" data-name="Emma Adams">Emma Adams</h6>
                            <span class="user-work fs-3" data-occupation="Web Developer">Web Developer</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="usr-email-addr" data-email="adams@mail.com">adams@mail.com</span>
                    </td>
                    <td>
                      <span class="usr-location" data-location="Boston, USA">Boston, USA</span>
                    </td>
                    <td>
                      <span class="usr-ph-no" data-phone="+1 (070) 123-4567">+91 (070) 123-4567</span>
                    </td>
                    <td>
                      <div class="action-btn">
                        <a href="javascript:void(0)" class="text-primary edit">
                          <i class="ti ti-eye fs-5" />
                        </a>
                        <a href="javascript:void(0)" class="text-dark delete ms-2">
                          <i class="ti ti-trash fs-5" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  {/* end row */}
                  {/* start row */}
                  <tr class="search-items">
                    <td>
                      <div class="n-chk align-self-center text-center">
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input contact-chkbox primary" id="checkbox2" />
                          <label class="form-check-label" for="checkbox2" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <img src={User2} alt="avatar" class="rounded-circle" width="35" />
                        <div class="ms-3">
                          <div class="user-meta-info">
                            <h6 class="user-name mb-0" data-name="Olivia Allen">Olivia Allen</h6>
                            <span class="user-work fs-3" data-occupation="Web Designer">Web Designer</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="usr-email-addr" data-email="allen@mail.com">allen@mail.com</span>
                    </td>
                    <td>
                      <span class="usr-location" data-location="Sydney, Australia">Sydney, Australia</span>
                    </td>
                    <td>
                      <span class="usr-ph-no" data-phone="+91 (125) 450-1500">+91 (125) 450-1500</span>
                    </td>
                    <td>
                      <div class="action-btn">
                        <a href="javascript:void(0)" class="text-primary edit">
                          <i class="ti ti-eye fs-5" />
                        </a>
                        <a href="javascript:void(0)" class="text-dark delete ms-2">
                          <i class="ti ti-trash fs-5" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  {/* end row */}
                  {/* start row */}
                  <tr class="search-items">
                    <td>
                      <div class="n-chk align-self-center text-center">
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input contact-chkbox primary" id="checkbox3" />
                          <label class="form-check-label" for="checkbox3" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <img src={User3} alt="avatar" class="rounded-circle" width="35" />
                        <div class="ms-3">
                          <div class="user-meta-info">
                            <h6 class="user-name mb-0" data-name="Isabella Anderson"> Isabella Anderson </h6>
                            <span class="user-work fs-3" data-occupation="UX/UI Designer">UX/UI Designer</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="usr-email-addr" data-email="anderson@mail.com">anderson@mail.com</span>
                    </td>
                    <td>
                      <span class="usr-location" data-location="Miami, USA">Miami, USA</span>
                    </td>
                    <td>
                      <span class="usr-ph-no" data-phone="+91 (100) 154-1254">+91 (100) 154-1254</span>
                    </td>
                    <td>
                      <div class="action-btn">
                        <a href="javascript:void(0)" class="text-primary edit">
                          <i class="ti ti-eye fs-5" />
                        </a>
                        <a href="javascript:void(0)" class="text-dark delete ms-2">
                          <i class="ti ti-trash fs-5" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  {/* end row */}
                  {/* start row */}
                  <tr class="search-items">
                    <td>
                      <div class="n-chk align-self-center text-center">
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input contact-chkbox primary" id="checkbox4" />
                          <label class="form-check-label" for="checkbox4" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <img src={User4} alt="avatar" class="rounded-circle" width="35" />
                        <div class="ms-3">
                          <div class="user-meta-info">
                            <h6 class="user-name mb-0" data-name="Amelia Armstrong"> Amelia Armstrong </h6>
                            <span class="user-work fs-3" data-occupation="Ethical Hacker">Ethical Hacker</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="usr-email-addr" data-email="armstrong@mail.com">armstrong@mail.com</span>
                    </td>
                    <td>
                      <span class="usr-location" data-location="Tokyo, Japan">Tokyo, Japan</span>
                    </td>
                    <td>
                      <span class="usr-ph-no" data-phone="+91 (154) 199- 1540">+91 (154) 199- 1540</span>
                    </td>
                    <td>
                      <div class="action-btn">
                        <a href="javascript:void(0)" class="text-primary edit">
                          <i class="ti ti-eye fs-5" />
                        </a>
                        <a href="javascript:void(0)" class="text-dark delete ms-2">
                          <i class="ti ti-trash fs-5" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  {/* end row */}
                  {/* start row */}
                  <tr class="search-items">
                    <td>
                      <div class="n-chk align-self-center text-center">
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input contact-chkbox primary" id="checkbox5" />
                          <label class="form-check-label" for="checkbox5" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <img src={User5} alt="avatar" class="rounded-circle" width="35" />
                        <div class="ms-3">
                          <div class="user-meta-info">
                            <h6 class="user-name mb-0" data-name="Emily Atkinson"> Emily Atkinson </h6>
                            <span class="user-work fs-3" data-occupation="Web developer">Web developer</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="usr-email-addr" data-email="atkinson@mail.com">atkinson@mail.com</span>
                    </td>
                    <td>
                      <span class="usr-location" data-location="Edinburgh, UK">Edinburgh, UK</span>
                    </td>
                    <td>
                      <span class="usr-ph-no" data-phone="+91 (900) 150- 1500">+91 (900) 150- 1500</span>
                    </td>
                    <td>
                      <div class="action-btn">
                        <a href="javascript:void(0)" class="text-primary edit">
                          <i class="ti ti-eye fs-5" />
                        </a>
                        <a href="javascript:void(0)" class="text-dark delete ms-2">
                          <i class="ti ti-trash fs-5" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  {/* end row */}
                  {/* start row */}
                  <tr class="search-items">
                    <td>
                      <div class="n-chk align-self-center text-center">
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input contact-chkbox primary" id="checkbox6" />
                          <label class="form-check-label" for="checkbox6" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <img src={User12} alt="avatar" class="rounded-circle" width="35" />
                        <div class="ms-3">
                          <div class="user-meta-info">
                            <h6 class="user-name mb-0" data-name="Sofia Bailey">Sofia Bailey</h6>
                            <span class="user-work fs-3" data-occupation="UX/UI Designer">UX/UI Designer</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="usr-email-addr" data-email="bailey@mail.com">bailey@mail.com</span>
                    </td>
                    <td>
                      <span class="usr-location" data-location="New York, USA">New York, USA</span>
                    </td>
                    <td>
                      <span class="usr-ph-no" data-phone="+91 (001) 160- 1845">+91 (001) 160- 1845</span>
                    </td>
                    <td>
                      <div class="action-btn">
                        <a href="javascript:void(0)" class="text-primary edit">
                          <i class="ti ti-eye fs-5" />
                        </a>
                        <a href="javascript:void(0)" class="text-dark delete ms-2">
                          <i class="ti ti-trash fs-5" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr class="search-items">
                    <td>
                      <div class="n-chk align-self-center text-center">
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input contact-chkbox primary" id="checkbox7" />
                          <label class="form-check-label" for="checkbox7" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <img src={User2} alt="avatar" class="rounded-circle" width="35" />
                        <div class="ms-3">
                          <div class="user-meta-info">
                            <h6 class="user-name mb-0" data-name="Victoria Sharma"> Victoria Sharma </h6>
                            <span class="user-work fs-3" data-occupation="Project Manager">Project Manager</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="usr-email-addr" data-email="sharma@mail.com">sharma@mail.com</span>
                    </td>
                    <td>
                      <span class="usr-location" data-location="Miami, USA">Miami, USA</span>
                    </td>
                    <td>
                      <span class="usr-ph-no" data-phone="+91 (110) 180- 1600">+91 (110) 180- 1600</span>
                    </td>
                    <td>
                      <div class="action-btn">
                        <a href="javascript:void(0)" class="text-primary edit">
                          <i class="ti ti-eye fs-5" />
                        </a>
                        <a href="javascript:void(0)" class="text-dark delete ms-2">
                          <i class="ti ti-trash fs-5" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr class="search-items">
                    <td>
                      <div class="n-chk align-self-center text-center">
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input contact-chkbox primary" id="checkbox8" />
                          <label class="form-check-label" for="checkbox8" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <img src={User3} alt="avatar" class="rounded-circle" width="35" />
                        <div class="ms-3">
                          <div class="user-meta-info">
                            <h6 class="user-name mb-0" data-name="Penelope Baker"> Penelope Baker </h6>
                            <span class="user-work fs-3" data-occupation="Web Developer">Web Developer</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="usr-email-addr" data-email="baker@mail.com">baker@mail.com</span>
                    </td>
                    <td>
                      <span class="usr-location" data-location="Edinburgh, UK">Edinburgh, UK</span>
                    </td>
                    <td>
                      <span class="usr-ph-no" data-phone="+91 (405) 483- 4512">+91 (405) 483- 4512</span>
                    </td>
                    <td>
                      <div class="action-btn">
                        <a href="javascript:void(0)" class="text-primary edit">
                          <i class="ti ti-eye fs-5" />
                        </a>
                        <a href="javascript:void(0)" class="text-dark delete ms-2">
                          <i class="ti ti-trash fs-5" />
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
