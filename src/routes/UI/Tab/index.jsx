import { BlogImg1, BlogImg2, BlogImg3 } from "../../../helper/img";
export default function TooltipPopover() {
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
                  <li class="breadcrumb-item" aria-current="page">Tab</li>
                </ol>
              </nav>
              <h2 class="mb-0 fw-bolder fs-8">Tab</h2>
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
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Default Tab</h4>
                <p class="mb-3 card-subtitle">Use default tab with class
                  <mark> <code>nav-tabs</code>
                  </mark>
                </p>
                <div>
                  <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active" data-bs-toggle="tab" href="#home" role="tab">
                        <span>Tab 1</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#profile" role="tab">
                        <span>Tab 2</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#messages" role="tab">
                        <span>Tab 3</span>
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div class="tab-pane active" id="home" role="tabpanel">
                      <div class="p-3">
                        <h3>Best Clean Tab ever</h3>
                        <h4>you can use it with the small code</h4>
                        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                      </div>
                    </div>
                    <div class="tab-pane p-3" id="profile" role="tabpanel">
                      <h3>Clean Tab ever</h3>
                      <h4>you can use it with the small code</h4>
                      <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                    </div>
                    <div class="tab-pane p-3" id="messages" role="tabpanel">
                      <h3>Best Tab ever</h3>
                      <h4>you can use it with the small code</h4>
                      <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Custom Icon Tab</h4>
                <p class="mb-3 card-subtitle">Use default tab with class
                  <mark> <code>nav-tabs</code>
                  </mark>
                </p>
                <div>
                  <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link d-flex active" data-bs-toggle="tab" href="#home2" role="tab">
                        <span>
                          <i class="ti ti-home-2 fs-4" />
                        </span>
                        <span class="d-none d-md-block ms-2">Home</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link d-flex" data-bs-toggle="tab" href="#profile2" role="tab">
                        <span>
                          <i class="ti ti-user fs-4" />
                        </span>
                        <span class="d-none d-md-block ms-2">Profile</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link d-flex" data-bs-toggle="tab" href="#messages2" role="tab">
                        <span>
                          <i class="ri-chat-4-line" />
                        </span>
                        <span class="d-none d-md-block ms-2">Messages</span>
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div class="tab-pane active" id="home2" role="tabpanel">
                      <div class="p-3">
                        <h3>Best Clean Tab ever</h3>
                        <h4>you can use it with the small code</h4>
                        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                      </div>
                    </div>
                    <div class="tab-pane p-3" id="profile2" role="tabpanel">
                      <h3>Clean Tab ever</h3>
                      <h4>you can use it with the small code</h4>
                      <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                    </div>
                    <div class="tab-pane p-3" id="messages2" role="tabpanel">
                      <h3>Best Tab ever</h3>
                      <h4>you can use it with the small code</h4>
                      <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Tab with Fill &amp; Justify</h4>
                <p class="mb-3 card-subtitle">To proportionately fill all available space with your .nav-items, use
                  <mark> <code>.nav-fill</code>
                  </mark>.</p>
                <ul class="nav nav-pills nav-fill mt-4" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="tab" href="#navpill-111" role="tab">
                      <span>Tab 1</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#navpill-222" role="tab">
                      <span>Tab 2</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#navpill-333" role="tab">
                      <span>Tab 3</span>
                    </a>
                  </li>
                </ul>
                <div class="tab-content border mt-2">
                  <div class="tab-pane active p-3" id="navpill-111" role="tabpanel">
                    <div class="row">
                      <div class="col-md-4">
                        <img src={BlogImg2} alt="flexy-img" class="img-fluid" />
                      </div>
                      <div class="col-md-8">
                        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane p-3" id="navpill-222" role="tabpanel">
                    <div class="row">
                      <div class="col-md-8">
                        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>
                      </div>
                      <div class="col-md-4">
                        <img src={BlogImg1} alt="flexy-img" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane p-3" id="navpill-333" role="tabpanel">
                    <div class="row">
                      <div class="col-md-4">
                        <img src={BlogImg3} alt="flexy-img" class="img-fluid" />
                      </div>
                      <div class="col-md-8">
                        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Tab with Flex Utilities</h4>
                <p class="mb-3 card-subtitle">If you need responsive nav variations, consider using a series of flexbox utilities.</p>
                <ul class="nav nav-pills flex-column flex-sm-row mt-4" role="tablist">
                  <li class="nav-item flex-sm-fill text-sm-center">
                    <a class="nav-link active" data-bs-toggle="tab" href="#navpill-11" role="tab">
                      <span>Tab 1</span>
                    </a>
                  </li>
                  <li class="nav-item flex-sm-fill text-sm-center">
                    <a class="nav-link" data-bs-toggle="tab" href="#navpill-22" role="tab">
                      <span>Tab 2</span>
                    </a>
                  </li>
                  <li class="nav-item flex-sm-fill text-sm-center">
                    <a class="nav-link" data-bs-toggle="tab" href="#navpill-33" role="tab">
                      <span>Tab 3</span>
                    </a>
                  </li>
                </ul>
                <div class="tab-content border mt-2">
                  <div class="tab-pane active p-3" id="navpill-11" role="tabpanel">
                    <div class="row">
                      <div class="col-md-4">
                        <img src={BlogImg2} alt="flexy-img" class="img-fluid" />
                      </div>
                      <div class="col-md-8">
                        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane p-3" id="navpill-22" role="tabpanel">
                    <div class="row">
                      <div class="col-md-8">
                        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>
                      </div>
                      <div class="col-md-4">
                        <img src={BlogImg1} alt="flexy-img" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane p-3" id="navpill-33" role="tabpanel">
                    <div class="row">
                      <div class="col-md-4">
                        <img src={BlogImg3} alt="flexy-img" class="img-fluid" />
                      </div>
                      <div class="col-md-8">
                        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="mb-3">
                  <h5 class="mb-0">Tab with dropdown</h5>
                </div>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home5" role="tab" aria-controls="home5" aria-expanded="true">
                      <span>Tab 1</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile5" role="tab" aria-controls="profile">
                      <span>Tab 2</span>
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0)" role="button" aria-expanded="false">
                      <span>Dropdown</span>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" id="dropdown1-tab" href="#dropdown1" role="tab" data-bs-toggle="tab" aria-controls="dropdown1">@fat</a>
                      </li>
                      <li>
                        <a class="dropdown-item" id="dropdown2-tab" href="#dropdown2" role="tab" data-bs-toggle="tab" aria-controls="dropdown2">@mdo</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div class="tab-content tabcontent-border p-3" id="myTabContent">
                  <div role="tabpanel" class="tab-pane fade show active" id="home5" aria-labelledby="home-tab">
                    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                  </div>
                  <div class="tab-pane fade" id="profile5" role="tabpanel" aria-labelledby="profile-tab">
                    <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
                  </div>
                  <div class="tab-pane fade" id="dropdown1" role="tabpanel" aria-labelledby="dropdown1-tab">
                    <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
                  </div>
                  <div class="tab-pane fade" id="dropdown2" role="tabpanel" aria-labelledby="dropdown2-tab">
                    <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="mb-3">
                  <h5>Underline
                    <span class="badge bg-primary">New</span>
                  </h5>
                  <p class="mb-3 card-subtitle">Take that same HTML, but use
                    <mark> <code>.nav-underline</code>
                    </mark>instead:</p>
                </div>
                <ul class="nav nav-underline" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="active-tab" data-bs-toggle="tab" href="#active" role="tab" aria-controls="active" aria-expanded="true">
                      <span>Active</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="link1-tab" data-bs-toggle="tab" href="#link1" role="tab" aria-controls="link1">
                      <span>Link</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="link2-tab" data-bs-toggle="tab" href="#link2" role="tab" aria-controls="link2">
                      <span>Link</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                  </li>
                </ul>
                <div class="tab-content tabcontent-border p-3" id="myTabContent">
                  <div role="tabpanel" class="tab-pane fade show active" id="active" aria-labelledby="active-tab">
                    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                  </div>
                  <div class="tab-pane fade" id="link1" role="tabpanel" aria-labelledby="link1-tab">
                    <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
                  </div>
                  <div class="tab-pane fade" id="link2" role="tabpanel" aria-labelledby="link2-tab">
                    <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Nav Pills Tabs - Left Align</h4>
                <p class="mb-3 card-subtitle">Use default tab with class
                  <mark> <code>justify-content-start</code>
                  </mark>
                </p>
                <div>
                  <ul class="nav nav-pills" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active" data-bs-toggle="tab" href="#navpill-1" role="tab">
                        <span>Tab 1</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#navpill-2" role="tab">
                        <span>Tab 2</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#navpill-3" role="tab">
                        <span>Tab 3</span>
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content border mt-2">
                    <div class="tab-pane active p-3" id="navpill-1" role="tabpanel">
                      <div class="row">
                        <div class="col-md-4">
                          <img src={BlogImg1} alt="flexy-img" class="img-fluid" />
                        </div>
                        <div class="col-md-8">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</div>
                      </div>
                    </div>
                    <div class="tab-pane p-3" id="navpill-2" role="tabpanel">
                      <div class="row">
                        <div class="col-md-8">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</div>
                        <div class="col-md-4">
                          <img src={BlogImg2} alt="flexy-img" class="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane p-3" id="navpill-3" role="tabpanel">
                      <div class="row">
                        <div class="col-md-4">
                          <img src={BlogImg3} alt="flexy-img" class="img-fluid" />
                        </div>
                        <div class="col-md-8">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Nav Pills Tabs - Right Align</h4>
                <p class="mb-3 card-subtitle">Use default tab with class
                  <mark> <code>justify-content-end</code>
                  </mark>
                </p>
                <div>
                  <ul class="nav nav-pills justify-content-end" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active" data-bs-toggle="tab" href="#navpill-11" role="tab">
                        <span>Tab 1</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#navpill-22" role="tab">
                        <span>Tab 2</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#navpill-33" role="tab">
                        <span>Tab 3</span>
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content border mt-2">
                    <div class="tab-pane active p-3" id="navpill-11" role="tabpanel">
                      <div class="row">
                        <div class="col-md-4">
                          <img src={BlogImg3} alt="flexy-img" class="img-fluid" />
                        </div>
                        <div class="col-md-8">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</div>
                      </div>
                    </div>
                    <div class="tab-pane p-3" id="navpill-22" role="tabpanel">
                      <div class="row">
                        <div class="col-md-8">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</div>
                        <div class="col-md-4">
                          <img src={BlogImg2} alt="flexy-img" class="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane p-3" id="navpill-33" role="tabpanel">
                      <div class="row">
                        <div class="col-md-4">
                          <img src={BlogImg1} alt="flexy-img" class="img-fluid" />
                        </div>
                        <div class="col-md-8">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <div class="mb-3">
                  <h5 class="mb-0">Vertical tabs</h5>
                </div>
                <div class="row mt-3">
                  <div class="col-md-3">
                    <div class="nav flex-column nav-pills mb-4 mb-md-0" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      <a class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                      <a class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                      <a class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                      <a class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
                    </div>
                  </div>
                  <div class="col-md-9">
                    <div class="tab-content" id="v-pills-tabContent">
                      <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</div>
                      <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <p>Probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>
                        <p>Probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>
                      </div>
                      <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</div>
                      <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                        <p>Probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <div class="mb-3">
                  <h5 class="mb-0">Vertical tabs - Right Align</h5>
                </div>
                <div class="row mt-3">
                  <div class="col-md-9">
                    <div class="tab-content mb-4 mb-md-0" id="v-pills-tabContent">
                      <div class="tab-pane fade show active" id="v-pills-home2" role="tabpanel" aria-labelledby="v-pills-home-tab2">
                        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</div>
                      <div class="tab-pane fade" id="v-pills-profile2" role="tabpanel" aria-labelledby="v-pills-profile-tab2">
                        <p>Probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>
                        <p>Probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>
                      </div>
                      <div class="tab-pane fade" id="v-pills-messages2" role="tabpanel" aria-labelledby="v-pills-messages-tab2">
                        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</div>
                      <div class="tab-pane fade" id="v-pills-settings2" role="tabpanel" aria-labelledby="v-pills-settings-tab2">
                        <p>Probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      <a class="nav-link active" id="v-pills-home-tab2" data-bs-toggle="pill" href="#v-pills-home2" role="tab" aria-controls="v-pills-home2" aria-selected="true">Home</a>
                      <a class="nav-link" id="v-pills-profile-tab2" data-bs-toggle="pill" href="#v-pills-profile2" role="tab" aria-controls="v-pills-profile2" aria-selected="false">Profile</a>
                      <a class="nav-link" id="v-pills-messages-tab2" data-bs-toggle="pill" href="#v-pills-messages2" role="tab" aria-controls="v-pills-messages2" aria-selected="false">Messages</a>
                      <a class="nav-link" id="v-pills-settings-tab2" data-bs-toggle="pill" href="#v-pills-settings2" role="tab" aria-controls="v-pills-settings2" aria-selected="false">Settings</a>
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
