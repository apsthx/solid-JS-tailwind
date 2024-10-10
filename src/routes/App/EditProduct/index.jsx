import { User3, User4, User5, User6, User7, User8, User10, User11 } from "../../../helper/img";
import { onMount } from "solid-js";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // นำเข้า CSS ของ Quill
import { SuidExample, Select } from "../../../components/editproduct/select";
import { Tags } from "../../../components/editproduct/Tags";

export default function EditProduct() {
  let editorContainer; // Reference สำหรับเชื่อมต่อกับ DOM ที่จะสร้าง editor

  onMount(() => {
    const quill = new Quill(editorContainer, {
      theme: "snow", // ใช้ธีม 'snow' ของ Quill
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          ["image", "code-block"],
        ],
      },
    });

    // Event listener สำหรับ text-change ถ้าคุณต้องการดึงข้อมูล
    quill.on("text-change", () => {
      console.log(quill.root.innerHTML); // แสดงข้อมูลที่ถูกแก้ไขใน console
    });
  });
  onMount(async () => {
    const module = await import("../../../assets/libs/select2/dist/js/select2.min.js");

    module.initializeSelect2Init();
  });
  onMount(async () => {
    const module = await import("../../../assets/js/forms/select2.init.js");

    module.initializeSelect2Init();
  });
  onMount(async () => {
    const module = await import("../../../assets/js/forms/repeater-init.js");

    module.initializeRepeaterInit();
    module.education_fieldsRepeater();
  });

  onMount(async () => {
    const module = await import("../../../assets/js/apps/edit-product.js");

    module.initializeEditProduct();
  });
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
                  <li class="breadcrumb-item" aria-current="page">Edit Product</li>
                </ol>
              </nav>
              <h2 class="mb-0 fw-bolder fs-8">Edit Product</h2>
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
        {/* start Basic Area Chart */}
        <div class="row">
          <div class="col-lg-8">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-7">
                  <h4 class="card-title">General</h4>
                  <button class="navbar-toggler border-0 shadow-none d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <i class="ti ti-menu fs-5 d-flex" />
                  </button>
                </div>
                <form action class="form-horizontal">
                  <div class="mb-4">
                    <label class="form-label">Product Name <span class="text-danger">*</span>
                    </label>
                    <input type="text" class="form-control" placeholder="Product Name" value="Sample product" />
                    <p class="fs-2">A product name is required and recommended to be unique.</p>
                  </div>
                  <div>
                    <label class="form-label">Description</label>
                    <div ref={editorContainer} id="editor" style="height: 300px;">
                      <p>Hello World!</p>
                      <p>Some initial <strong>bold</strong> text</p>
                      <p><br /></p>
                    </div>
                    <p class="fs-2 mb-0">Set a description to the product for better visibility.
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h4 class="card-title mb-7">Media</h4>
                <form action="#" class="dropzone dz-clickable mb-2">
                  <div class="dz-default dz-message">
                    <button class="dz-button" type="button">Drop
                      files here
                      to upload</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h4 class="card-title mb-7">Variation</h4>
                <form action>
                  <label class="form-label">Add Product Variations</label>
                  <div class="email-repeater mb-3">
                    <div data-repeater-list="repeater-group">
                      <div data-repeater-item class="row mb-3">
                        <div class="col-md-4">
                          <select class="select2 form-control">
                            <option>Color</option>
                            <option selected>Size</option>
                            <option>Material</option>
                            <option>Style</option>
                          </select>
                        </div>
                        <div class="col-md-4 mt-3 mt-md-0">
                          <input type="text" class="form-control" placeholder="Variation" />
                        </div>
                        <div class="col-md-2 mt-3 mt-md-0">
                          <button data-repeater-delete class="btn bg-danger-subtle text-danger" type="button">
                            <i class="ti ti-x fs-5 d-flex" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button type="button" data-repeater-create class="btn bg-primary-subtle text-primary  ">
                      <span class="fs-4 me-1">+</span>
                      Add another variation
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h4 class="card-title mb-7">Pricing</h4>
                <form>
                  <div class="mb-7">
                    <label class="form-label">Base Price <span class="text-danger">*</span>
                    </label>
                    <input type="text" class="form-control" placeholder="Product Price" value="199.99" />
                    <p class="fs-2">Set the product price.</p>
                  </div>
                  <div class="mb-7">
                    <label class="form-label">Discount Type</label>
                    <nav>
                      <div class="nav nav-tabs justify-content-between align-items-center gap-9" id="nav-tab" role="tablist">
                        <label for="radio1" class="form-check-label form-check p-3  border gap-2 rounded-2 d-flex flex-fill justify-content-center cursor-pointer" id="customControlValidation2" data-bs-toggle="tab" data-bs-target="#nav-home" aria-controls="nav-home">
                          <input type="radio" class="form-check-input" name="new-products" id="radio1" checked />
                          <span class="fs-4 fw-bold text-dark">No Discount</span>
                        </label>
                        <label for="radio2" class="form-check-label p-3 form-check border gap-2 rounded-2 d-flex flex-fill justify-content-center cursor-pointer" id="customControlValidation2" data-bs-toggle="tab" data-bs-target="#nav-profile" aria-controls="nav-profile">
                          <input type="radio" class="form-check-input" name="new-products" id="radio2" />
                          <span class="fs-4 fw-bold text-dark">Percentage %</span>
                        </label>
                        <label for="radio3" class="form-check-label form-check p-3 border gap-2 rounded-2 d-flex flex-fill justify-content-center cursor-pointer" id="customControlValidation2" data-bs-toggle="tab" data-bs-target="#nav-contact" aria-controls="nav-contact">
                          <input type="radio" class="form-check-input" name="new-products" id="radio3" />
                          <span class="fs-4 fw-bold text-dark">Fixed Price</span>
                        </label>
                      </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                      <div class="tab-pane fade mt-7" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        <div class="form-group">
                          <label class="form-label">Set Discount Percentage <span class="text-danger">*</span>
                          </label>
                          <input type="range" class="form-range" id="customRange1" min="0" max="100" step="10" />
                          <p class="fs-2">Set a percentage discount to be applied on
                            this product.</p>
                        </div>
                      </div>
                      <div class="tab-pane fade mt-7" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                        <div class="mb-7">
                          <label class="form-label">Fixed Discounted Price <span class="text-danger">*</span>
                          </label>
                          <input type="text" class="form-control" placeholder="Discounted Price" />
                          <p class="fs-2">Set the discounted product price. The product
                            will be reduced at the
                            determined fixed price.</p>
                        </div>
                      </div>
                    </div>
                  </div></form>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-4">
                      <label class="form-label">
                        Tax Class <span class="text-danger">*</span>
                      </label>
                      <select class="form-select mr-sm-2" id="inlineFormCustomSelect">
                        <option>Select an option</option>
                        <option value="1">Tax Free</option>
                        <option value="2" selected>Taxable Goods</option>
                        <option value="3">Downloadable Products</option>
                      </select>
                      <p class="fs-2">Set the product tax class.</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-4">
                      <label class="form-label">VAT Amount (%) <span class="text-danger">*</span>
                      </label>
                      <input type="text" class="form-control" value="35" />
                      <p class="fs-2">Set the product VAT about.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h4 class="card-title mb-7">
                  Customer Reviews
                </h4>
                <div cass="table-responsive mb-4 rounded-1">
                  <table class="table mb-0 align-middle">
                    <thead class="text-dark fs-4">
                      <tr>
                        <th>
                          <h6 class="fs-3 fw-semibold mb-0">Customer</h6>
                        </th>
                        <th>
                          <h6 class="fs-3 fw-semibold mb-0">Comment</h6>
                        </th>
                        <th>
                          <h6 class="fs-3 fw-semibold mb-0 text-end">Date</h6>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <img src={User11} class="rounded-circle" width="30" height="30" />
                            <div class="ms-3">
                              <h6 class="fs-4 fw-semibold mb-0 text-nowrap">Sunil
                                Joshi</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex align-items-center gap-1 mb-1">
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                          </div>
                          <span class="mb-0 fw-normal fs-3 mt-2">I like this design</span>
                        </td>
                        <td>
                          <p class="mb-0 fw-normal fs-3 text-end text-nowrap">1 day ago
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <img src={User8} class="rounded-circle" width="30" height="30" />
                            <div class="ms-3">
                              <h6 class="fs-4 fw-semibold mb-0 text-nowrap">Mark
                                Richard</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex align-items-center gap-1 mb-1">
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-linear" class="text-warning fs-3" />
                          </div>
                          <span class="mb-0 fw-normal fs-3 mt-2">
                            Awesome quality with great materials used, but could be
                            more comfortable
                          </span>
                        </td>
                        <td>
                          <p class="mb-0 fw-normal fs-3 text-end text-nowrap">11:20 PM</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <img src={User3} class="rounded-circle" width="30" height="30" />
                            <div class="ms-3">
                              <h6 class="fs-4 fw-semibold mb-0 text-nowrap">Hanry Lord
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex align-items-center gap-1 mb-1">
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                          </div>
                          <span class="mb-0 fw-normal fs-3 mt-2">This is the best product
                            I have ever used.</span>
                        </td>
                        <td>
                          <p class="mb-0 fw-normal fs-3 text-end text-nowrap">Today</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <img src={User4} class="rounded-circle" width="30" height="30" />
                            <div class="ms-3">
                              <h6 class="fs-4 fw-semibold mb-0 text-nowrap">Britny Cox
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex align-items-center gap-1 mb-1">
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-linear" class="text-warning fs-3" />
                          </div>
                          <span class="mb-0 fw-normal fs-3 mt-2">Beautifully crafted.
                            Worth every penny.</span>
                        </td>
                        <td>
                          <p class="mb-0 fw-normal fs-3 text-end text-nowrap">Today</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <img src={User5} class="rounded-circle" width="30" height="30" />
                            <div class="ms-3">
                              <h6 class="fs-4 fw-semibold mb-0 text-nowrap">Olvin wild
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex align-items-center gap-1 mb-1">
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-linear" class="text-warning fs-3" />
                          </div>
                          <span class="mb-0 fw-normal fs-3 mt-2">
                            Awesome value for money. Shipping could be faster tho.
                          </span>
                        </td>
                        <td>
                          <p class="mb-0 fw-normal fs-3 text-end text-nowrap">12:00 PM</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <img src={User6} class="rounded-circle" width="30" height="30" />
                            <div class="ms-3">
                              <h6 class="fs-4 fw-semibold mb-0 text-nowrap">Dan wilsed
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex align-items-center gap-1 mb-1">
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                          </div>
                          <span class="mb-0 fw-normal fs-3 mt-2">
                            Excellent quality, I got it for my sons birthday and he
                            loved it.
                          </span>
                        </td>
                        <td>
                          <p class="mb-0 fw-normal fs-3 text-end text-nowrap">1 May 2024
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <img src={User7} class="rounded-circle" width="30" height="30" />
                            <div class="ms-3">
                              <h6 class="fs-4 fw-semibold mb-0 text-nowrap">Jon Miller
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex align-items-center gap-1 mb-1">
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                          </div>
                          <span class="mb-0 fw-normal fs-3 mt-2">Firesale is on! Buy now!
                            Totally worth it!</span>
                        </td>
                        <td>
                          <p class="mb-0 fw-normal fs-3 text-end text-nowrap">25 April
                            2024</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <img src={User10} class="rounded-circle" width="30" height="30" />
                            <div class="ms-3">
                              <h6 class="fs-4 fw-semibold mb-0 text-nowrap">Anaa Crown
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex align-items-center gap-1 mb-1">
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-bold" class="text-warning fs-3" />
                            <iconify-icon icon="solar:star-linear" class="text-warning fs-3" />
                          </div>
                          <span class="mb-0 fw-normal fs-3 mt-2">
                            Excellent quality, I got it for my sons birthday and he
                            loved it
                          </span>
                        </td>
                        <td>
                          <p class="mb-0 fw-normal fs-3 text-end text-nowrap">25 April
                            2024</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="form-actions mb-5">
              <button type="submit" class="btn btn-primary">
                Save changes
              </button>
              <button type="button" class="btn bg-danger-subtle text-danger ms-6">
                Cancel
              </button>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="offcanvas-lg offcanvas-end overflow-auto" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title mb-7">Thumbnail</h4>
                  <form action="#" class="dropzone dz-clickable mb-2">
                    <div class="dz-default dz-message">
                      <button class="dz-button" type="button">Drop Thumbnail here
                        to upload</button>
                    </div>
                  </form>
                  <p class="fs-2 text-center mb-0">
                    Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image files
                    are accepted.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between mb-7">
                    <h4 class="card-title">Status</h4>
                    <div class="p-2 h-100 bg-success rounded-circle" />
                  </div>
                  <form action class="form-horizontal">
                    <div>
                      <select class="form-select mr-sm-2  mb-2" id="inlineFormCustomSelect">
                        <option selected>Published</option>
                        <option value="1">Draft</option>
                        <option value="2">Sheduled</option>
                        <option value="3">Inactive</option>
                      </select>
                      <p class="fs-2 mb-0">
                        Set the product status.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title mb-7">Product Details</h4>
                  <div class="mb-3">
                    <label class="form-label">Categories</label>
                    {/* <SuidExample /> */}
                    {/* หรือ */}
                    {/* <Select multiple label="Custom Select" placeholder="Choose..." /> */}
                    <select class="select2 form-control" multiple="multiple">
                      <option value selected>Computer</option>
                      <option value selected>Watches</option>
                      <option value selected>Headphones</option>
                      <option value>Beauty</option>
                      <option value>Fashion</option>
                      <option value>Footwear</option>
                    </select>
                    <p class="fs-2 mb-0">
                      Add product to a category.
                    </p>
                  </div>
                  <button type="button" class="btn bg-primary-subtle text-primary fs-3 fw-bold p-2">
                    <span class="fs-4 me-1">+</span>
                    Create New Category
                  </button>
                  <div class="mt-7">
                    <label class="form-label">Tags</label>
                    <label class="form-label">Tags</label>
                    <select class="select2 form-control" multiple="multiple">
                      <option value="">New</option>
                      <option value="" selected>trending</option>
                      <option value="">Headphones</option>
                      <option value="" selected>Beauty</option>
                      <option value="" selected>Fashion</option>
                      <option value="">Footwear</option>
                    </select>
                    <p class="fs-2 mb-0">
                      Add product to a category.
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title mb-2">$2,420</h4>
                  <div class="d-flex align-items-center">
                    <p class="fs-4 fw-base mb-0">
                      Average Daily Sales
                    </p>
                    <p class="fs-2 text-success bg-success-subtle mb-0 px-2 py-1 rounded-1">
                      2.6%
                    </p>
                  </div>
                  <div class="mt-7">
                    <div id="sales" />
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title mb-7">Product Template</h4>
                  <form action class="form-horizontal">
                    <div>
                      <label class="form-label text-nowrap">Select a product template</label>
                      <select class="form-select mr-sm-2  mb-2" id="inlineFormCustomSelect">
                        <option selected>Default Template</option>
                        <option value="1">Fashion</option>
                        <option value="2">Office Stationary</option>
                        <option value="3">Electronics</option>
                      </select>
                      <p class="fs-2 mb-0">
                        Assign a template from your current theme to define how a single
                        product is displayed.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end Basic Area Chart */}
      </div>
    </>
  );
}
