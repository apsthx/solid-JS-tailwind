import { onMount } from "solid-js";
import { Img1 } from "../../../helper/img.jsx";

export default function Tabs(){
    onMount(async () => {
        const module = await import("../../../assets/libs/prismjs/prism.js");
    
        module.initializePrism();
      });
    return (
        <>
                <div class="container-fluid mt-4">
          <div class="mt-1">
            <div class="d-sm-flex align-items-center justify-content-between">
              <h4 class="mb-4 pb-2 fs-5">Tabs</h4>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Default Tabs</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4">
                    <ul class="nav nav-tabs" role="tablist">
                      <li class="nav-item" role="presentation">
                        <a class="nav-link rounded-2" data-bs-toggle="tab" href="#home" role="tab" aria-selected="false" tabindex="-1">
                          <span>Tab 1</span>
                        </a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a class="nav-link rounded-2" data-bs-toggle="tab" href="#profile" role="tab" aria-selected="false" tabindex="-1">
                          <span>Tab 2</span>
                        </a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a class="nav-link rounded-2 active" data-bs-toggle="tab" href="#messages" role="tab" aria-selected="true">
                          <span>Tab 3</span>
                        </a>
                      </li>
                    </ul>
                    <div class="tab-content">
                      <div class="tab-pane" id="home" role="tabpanel">
                        <div class="py-3">
                          <h3>Best Clean Tab ever</h3>
                          <h4>you can use it with the small code</h4>
                          <p class="mb-0">
                            Donec pede justo, fringilla vel, aliquet nec,
                            vulputate eget, arcu. In enim justo, rhoncus ut,
                            imperdiet a.
                          </p>
                        </div>
                      </div>
                      <div class="tab-pane py-3" id="profile" role="tabpanel">
                        <h3>Clean Tab ever</h3>
                        <h4>you can use it with the small code</h4>
                        <p class="mb-0">
                          Donec pede justo, fringilla vel, aliquet nec,
                          vulputate eget, arcu. In enim justo, rhoncus ut,
                          imperdiet a.
                        </p>
                      </div>
                      <div class="tab-pane py-3 active show" id="messages" role="tabpanel">
                        <h3>Best Tab ever</h3>
                        <h4>you can use it with the small code</h4>
                        <p class="mb-0">
                          Donec pede justo, fringilla vel, aliquet nec,
                          vulputate eget, arcu. In enim justo, rhoncus ut,
                          imperdiet a.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">

                <pre class="mt-0">
                    <code class="language-html" style="height: 300px;">
{ `
<!-- Nav tabs -->
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link" data-bs-toggle="tab" href="#home" role="tab" aria-selected="false" tabindex="-1">
            <span>Tab 1</span>
        </a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" data-bs-toggle="tab" href="#profile" role="tab" aria-selected="false" tabindex="-1">
            <span>Tab 2</span>
        </a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link active" data-bs-toggle="tab" href="#messages" role="tab" aria-selected="true">
            <span>Tab 3</span>
        </a>
    </li>
</ul>
<!-- Tab panes -->
<div class="tab-content">
    <div class="tab-pane" id="home" role="tabpanel">
        <div class="py-3">
            <h3>Best Clean Tab ever</h3>
            <h4>you can use it with the small code</h4>
            <p class="mb-0">
                Donec pede justo, fringilla vel, aliquet nec,
                vulputate eget, arcu. In enim justo, rhoncus ut,
                imperdiet a.
            </p>
        </div>
    </div>
    <div class="tab-pane py-3" id="profile" role="tabpanel">
        <h3>Clean Tab ever</h3>
        <h4>you can use it with the small code</h4>
        <p class="mb-0">
            Donec pede justo, fringilla vel, aliquet nec,
            vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a.
        </p>
    </div>
    <div class="tab-pane py-3 active show" id="messages" role="tabpanel">
        <h3>Best Tab ever</h3>
        <h4>you can use it with the small code</h4>
        <p class="mb-0">
            Donec pede justo, fringilla vel, aliquet nec,
            vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a.
        </p>
    </div>
</div>

`}
                    </code>
                  </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Tabs Vertical Left</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <div class="row">
                      <div class="col-sm-9">
                        <div class="tab-content" id="v-pills-tabContent">
                          <div class="tab-pane fade active show" id="v-pills-home2" role="tabpanel" aria-labelledby="v-pills-home-tab2">
                            <p>
                              Raw denim you probably haven't heard of them jean
                              shorts Austin. Nesciunt tofu stumptown aliqua,
                              retro synth master cleanse. Mustache cliche
                              tempor, williamsburg carles vegan helvetica.
                            </p>
                            Raw denim you probably haven't heard of them jean
                            shorts Austin. Nesciunt tofu stumptown aliqua, retro
                            synth master cleanse. Mustache cliche tempor,
                            williamsburg carles vegan helvetica.
                          </div>
                          <div class="tab-pane fade" id="v-pills-profile2" role="tabpanel" aria-labelledby="v-pills-profile-tab2">
                            <p>
                              Probably haven't heard of them jean shorts Austin.
                              Nesciunt tofu stumptown aliqua, retro synth master
                              cleanse. Mustache cliche tempor, williamsburg
                              carles vegan helvetica.
                            </p>
                            <p>
                              Probably haven't heard of them jean shorts Austin.
                              Nesciunt tofu stumptown aliqua, retro synth master
                              cleanse. Mustache cliche tempor, williamsburg
                              carles vegan helvetica.
                            </p>
                          </div>
                          <div class="tab-pane fade" id="v-pills-messages2" role="tabpanel" aria-labelledby="v-pills-messages-tab2">
                            <p>
                              Raw denim you probably haven't heard of them jean
                              shorts Austin. Nesciunt tofu stumptown aliqua,
                              retro synth master cleanse. Mustache cliche
                              tempor, williamsburg carles vegan helvetica.
                            </p>
                            Raw denim you probably haven't heard of them jean
                            shorts Austin. Nesciunt tofu stumptown aliqua, retro
                            synth master cleanse. Mustache cliche tempor,
                            williamsburg carles vegan helvetica.
                          </div>
                          <div class="tab-pane fade" id="v-pills-settings2" role="tabpanel" aria-labelledby="v-pills-settings-tab2">
                            <p>
                              Probably haven't heard of them jean shorts Austin.
                              Nesciunt tofu stumptown aliqua, retro synth master
                              cleanse. Mustache cliche tempor, williamsburg
                              carles vegan helvetica.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-3 mt-2 mt-sm-0">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                          <a class="nav-link active" id="v-pills-home-tab2" data-bs-toggle="pill" href="#v-pills-home2" role="tab" aria-controls="v-pills-home2" aria-selected="true">
                            Home
                          </a>
                          <a class="nav-link" id="v-pills-profile-tab2" data-bs-toggle="pill" href="#v-pills-profile2" role="tab" aria-controls="v-pills-profile2" aria-selected="false" tabindex="-1">
                            Profile
                          </a>
                          <a class="nav-link" id="v-pills-messages-tab2" data-bs-toggle="pill" href="#v-pills-messages2" role="tab" aria-controls="v-pills-messages2" aria-selected="false" tabindex="-1">
                            Messages
                          </a>
                          <a class="nav-link" id="v-pills-settings-tab2" data-bs-toggle="pill" href="#v-pills-settings2" role="tab" aria-controls="v-pills-settings2" aria-selected="false" tabindex="-1">
                            Settings
                          </a>
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
 <div class="row">
    <div class="col-sm-9">
        <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade active show" id="v-pills-home2" role="tabpanel" aria-labelledby="v-pills-home-tab2">
                <p>
                    Raw denim you probably haven't heard of them jean
                    shorts Austin. Nesciunt tofu stumptown aliqua,
                    retro synth master cleanse. Mustache cliche
                    tempor, williamsburg carles vegan helvetica.
                </p>
                Raw denim you probably haven't heard of them jean
                shorts Austin. Nesciunt tofu stumptown aliqua, retro
                synth master cleanse. Mustache cliche tempor,
                williamsburg carles vegan helvetica.
            </div>
            <div class="tab-pane fade" id="v-pills-profile2" role="tabpanel" aria-labelledby="v-pills-profile-tab2">
                <p>
                    Probably haven't heard of them jean shorts Austin.
                    Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg
                    carles vegan helvetica.
                </p>
                <p>
                    Probably haven't heard of them jean shorts Austin.
                    Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg
                    carles vegan helvetica.
                </p>
            </div>
            <div class="tab-pane fade" id="v-pills-messages2" role="tabpanel" aria-labelledby="v-pills-messages-tab2">
                <p>
                    Raw denim you probably haven't heard of them jean
                    shorts Austin. Nesciunt tofu stumptown aliqua,
                    retro synth master cleanse. Mustache cliche
                    tempor, williamsburg carles vegan helvetica.
                </p>
                Raw denim you probably haven't heard of them jean
                shorts Austin. Nesciunt tofu stumptown aliqua, retro
                synth master cleanse. Mustache cliche tempor,
                williamsburg carles vegan helvetica.
            </div>
            <div class="tab-pane fade" id="v-pills-settings2" role="tabpanel" aria-labelledby="v-pills-settings-tab2">
                <p>
                    Probably haven't heard of them jean shorts Austin.
                    Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg
                    carles vegan helvetica.
                </p>
            </div>
        </div>
    </div>
    <div class="col-sm-3 mt-2 mt-sm-0">
        <!-- Nav tabs -->
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a class="nav-link active" id="v-pills-home-tab2" data-bs-toggle="pill" href="#v-pills-home2" role="tab" aria-controls="v-pills-home2" aria-selected="true">
                Home
            </a>
            <a class="nav-link" id="v-pills-profile-tab2" data-bs-toggle="pill" href="#v-pills-profile2" role="tab" aria-controls="v-pills-profile2" aria-selected="false" tabindex="-1">
                Profile
            </a>
            <a class="nav-link" id="v-pills-messages-tab2" data-bs-toggle="pill" href="#v-pills-messages2" role="tab" aria-controls="v-pills-messages2" aria-selected="false" tabindex="-1">
                Messages
            </a>
            <a class="nav-link" id="v-pills-settings-tab2" data-bs-toggle="pill" href="#v-pills-settings2" role="tab" aria-controls="v-pills-settings2" aria-selected="false" tabindex="-1">
                Settings
            </a>
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
                <h4 class="card-title mb-0">Tabs Bordered Justified</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <ul class="nav nav-pills nav-fill" role="tablist">
                      <li class="nav-item" role="presentation">
                        <a class="nav-link" data-bs-toggle="tab" href="#navpill-111" role="tab" aria-selected="false" tabindex="-1">
                          <span>Tab 1</span>
                        </a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a class="nav-link active" data-bs-toggle="tab" href="#navpill-222" role="tab" aria-selected="true">
                          <span>Tab 2</span>
                        </a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a class="nav-link" data-bs-toggle="tab" href="#navpill-333" role="tab" aria-selected="false" tabindex="-1">
                          <span>Tab 3</span>
                        </a>
                      </li>
                    </ul>
                    <div class="tab-content border mt-2">
                      <div class="tab-pane p-3" id="navpill-111" role="tabpanel">
                        <div class="row align-items-center">
                          <div class="col-sm-3">
                            <img src={Img1} alt="" class="img-fluid"/>
                          </div>
                          <div class="col-sm-9">
                            <p>
                              Raw denim you probably haven't heard of them jean
                              shorts Austin. Nesciunt tofu stumptown aliqua,
                              retro synth master cleanse. Mustache cliche
                              tempor, williamsburg carles vegan helvetica.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane p-3 active show" id="navpill-222" role="tabpanel">
                        <div class="row align-items-center">
                          <div class="col-sm-9">
                            <p>
                              Raw denim you probably haven't heard of them jean
                              shorts Austin. Nesciunt tofu stumptown aliqua,
                              retro synth master cleanse. Mustache cliche
                              tempor, williamsburg carles vegan helvetica.
                            </p>
                          </div>
                          <div class="col-sm-3">
                            <img src="../assets/images/big/img2.jpg" alt="" class="img-fluid"/>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane p-3" id="navpill-333" role="tabpanel">
                        <div class="row align-items-center">
                          <div class="col-sm-3">
                            <img src="../assets/images/big/img3.jpg" alt="" class="img-fluid"/>
                          </div>
                          <div class="col-sm-9">
                            <p>
                              Raw denim you probably haven't heard of them jean
                              shorts Austin. Nesciunt tofu stumptown aliqua,
                              retro synth master cleanse. Mustache cliche
                              tempor, williamsburg carles vegan helvetica.
                            </p>
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
<ul class="nav nav-pills nav-fill" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link" data-bs-toggle="tab" href="#navpill-111" role="tab" aria-selected="false" tabindex="-1">
            <span>Tab 1</span>
        </a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link active" data-bs-toggle="tab" href="#navpill-222" role="tab" aria-selected="true">
            <span>Tab 2</span>
        </a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" data-bs-toggle="tab" href="#navpill-333" role="tab" aria-selected="false" tabindex="-1">
            <span>Tab 3</span>
        </a>
    </li>
</ul>
<div class="tab-content border mt-2">
    <div class="tab-pane p-3" id="navpill-111" role="tabpanel">
        <div class="row align-items-center">
            <div class="col-sm-3">
                <img src="../assets/images/big/img1.jpg" alt="" class="img-fluid">
            </div>
            <div class="col-sm-9">
                <p>
                    Raw denim you probably haven't heard of them jean
                    shorts Austin. Nesciunt tofu stumptown aliqua,
                    retro synth master cleanse. Mustache cliche
                    tempor, williamsburg carles vegan helvetica.
                </p>
            </div>
        </div>
    </div>
    <div class="tab-pane p-3 active show" id="navpill-222" role="tabpanel">
        <div class="row align-items-center">
            <div class="col-sm-9">
                <p>
                    Raw denim you probably haven't heard of them jean
                    shorts Austin. Nesciunt tofu stumptown aliqua,
                    retro synth master cleanse. Mustache cliche
                    tempor, williamsburg carles vegan helvetica.
                </p>
            </div>
            <div class="col-sm-3">
                <img src="../assets/images/big/img2.jpg" alt="" class="img-fluid">
            </div>
        </div>
    </div>
    <div class="tab-pane p-3" id="navpill-333" role="tabpanel">
        <div class="row align-items-center">
            <div class="col-sm-3">
                <img src="../assets/images/big/img3.jpg" alt="" class="img-fluid">
            </div>
            <div class="col-sm-9">
                <p>
                    Raw denim you probably haven't heard of them jean
                    shorts Austin. Nesciunt tofu stumptown aliqua,
                    retro synth master cleanse. Mustache cliche
                    tempor, williamsburg carles vegan helvetica.
                </p>
            </div>
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