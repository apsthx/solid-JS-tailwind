import { onMount } from "solid-js";

export default function ListMedia(){
    onMount(async () => {
        const module = await import("../../../assets/libs/prismjs/prism.js");
    
        module.initializePrism();
      });
    return (
        <>
                <div class="container-fluid mt-4">
          <div class="mt-1">
            <div class="d-sm-flex align-items-center justify-content-between">
              <h4 class="mb-4 pb-2 fs-5">List Media</h4>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Bootstrap List Media</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4">
                    <ul class="list-group">
                      <li class="list-group-item">Cras justo odio</li>
                      <li class="list-group-item">
                        Dapibus ac facilisis in
                      </li>
                      <li class="list-group-item">Morbi leo risus</li>
                      <li class="list-group-item">
                        Porta ac consectetur ac
                      </li>
                      <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                        <code class="language-html">
{`<ul class="list-group">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Morbi leo risus</li>
    <li class="list-group-item">Porta ac consectetur ac</li>
    <li class="list-group-item">Vestibulum at eros</li>
</ul>
`}
                                          </code>
                                      </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Linked Items</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4">
                    <div class="list-group">
                      <a href="javascript:void(0)" class="list-group-item active">Cras justo odio</a>
                      <a href="javascript:void(0)" class="list-group-item">Dapibus ac facilisis in</a>
                      <a href="javascript:void(0)" class="list-group-item">Morbi leo risus</a>
                      <a href="javascript:void(0)" class="list-group-item">Porta ac consectetur ac</a>
                      <a href="javascript:void(0)" class="list-group-item">Vestibulum at eros</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                      <code class="language-html">
{`<div class="list-group">
    <a href="javascript:void(0)" class="list-group-item active">Cras justo odio</a>
    <a href="javascript:void(0)" class="list-group-item">Dapibus ac facilisis in</a>
    <a href="javascript:void(0)" class="list-group-item">Morbi leo risus</a>
    <a href="javascript:void(0)" class="list-group-item">Porta ac consectetur ac</a>
    <a href="javascript:void(0)" class="list-group-item">Vestibulum at eros</a>
</div>
`}
                                        </code>
                                      </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">With Badges</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4">
                    <ul class="list-group list-group-full">
                      <li class="list-group-item d-flex">
                        Cras justo odio
                        <span class="badge d-flex align-items-center bg-info ms-auto">6</span>
                      </li>
                      <li class="list-group-item d-flex">
                        Dapibus ac facilisis in
                      </li>
                      <li class="list-group-item d-flex">
                        Morbi leo risus
                        <span class="badge d-flex align-items-center bg-danger ms-auto">3</span>
                      </li>
                      <li class="list-group-item d-flex active">
                        Porta ac consectetur ac
                        <span class="badge d-flex align-items-center bg-success ms-auto">10</span>
                      </li>
                      <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                      <code class="language-html">
{`<ul class="list-group list-group-full">
    <li class="list-group-item d-flex">Cras justo odio <span class="badge d-flex align-items-center bg-info ms-auto">6</span></li>
    <li class="list-group-item d-flex">Dapibus ac facilisis in</li>
    <li class="list-group-item d-flex">Morbi leo risus <span class="badge d-flex align-items-center bg-danger ms-auto">3</span></li>
    <li class="list-group-item d-flex active">Porta ac consectetur ac <span class="badge d-flex align-items-center bg-success ms-auto">10</span></li>
    <li class="list-group-item">Vestibulum at eros</li>
</ul>
`}
                                        </code>
                                      </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Tabs JavaScript behavior</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4">
                    <div class="row">
                      <div class="col-4">
                        <div class="list-group" id="list-tab" role="tablist">
                          <a class="
                                list-group-item list-group-item-action
                                active
                              " id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                          <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile" aria-selected="false" tabindex="-1">Profile</a>
                          <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="messages" aria-selected="false" tabindex="-1">Messages</a>
                        </div>
                      </div>
                      <div class="col-8">
                        <div class="tab-content" id="nav-tabContent">
                          <div class="tab-pane fade show active text-justify" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                            Irure enim occaecat labore sit qui aliquip
                            reprehenderit amet velit. Deserunt ullamco ex
                            elit nostrud ut dolore nisi officia magna sit
                            occaecat laboris sunt dolor.
                          </div>
                          <div class="tab-pane fade text-justify" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                            Irure enim occaecat labore sit qui aliquip
                            reprehenderit amet velit. Deserunt ullamco ex
                            elit nostrud ut dolore nisi officia magna sit
                            occaecat laboris sunt dolor.
                          </div>
                          <div class="tab-pane fade text-justify" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                            Irure enim occaecat labore sit qui aliquip
                            reprehenderit amet velit. Deserunt ullamco ex
                            elit nostrud ut dolore nisi officia magna sit
                            occaecat laboris sunt dolor.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                      <code class="language-html">
    {`<div class="row">
    <div class="col-4">
        <div class="list-group" id="list-tab" role="tablist">
            <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
            <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
            <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
        </div>
    </div>
    <div class="col-8">
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active text-justify" id="list-home" role="tabpanel" aria-labelledby="list-home-list">Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna sit occaecat laboris sunt dolor.</div>
            <div class="tab-pane fade text-justify" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna sit occaecat laboris sunt dolor.</div>
            <div class="tab-pane fade text-justify" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna sit occaecat laboris sunt dolor.</div>
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