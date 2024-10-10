import { onMount } from "solid-js";

export default function Structure(){
    onMount(async () => {
        const module = await import("../../../assets/libs/prismjs/prism.js");
    
        module.initializePrism();
      });
    return (
        <>
                <div class="container-fluid mt-4">
          <div class="mt-1">
            <div class="d-sm-flex align-items-center justify-content-between">
              <h4 class="mb-4 pb-2 fs-5">Package Structure</h4>
            </div>
            <div class="card p-3 rounded">
              <ul class="list-unstyled">
                <li>
                  <h4 class="fs-5">Flexy Bootstrap Dashboard</h4>
                  <ul class="ps-3 ps-md-5 list-unstyled">
                    <li class="py-2">
                      <span class="fw-bold text-dark">
                        <i class="ti ti-folder me-2 text-primary"></i>dist
                        <span class="fw-normal">
                          - Generated production files
                        </span>
                      </span>
                    </li>
                    <li class="py-2">
                      <span class="fw-bold text-dark">
                        <i class="ti ti-folder me-2 text-primary"></i>figma-file
                        <span class="fw-normal"> - Design Files </span>
                      </span>
                    </li>
                    <li class="py-2">
                      <span class="fw-bold text-dark">
                        <i class="ti ti-folder me-2 text-primary"></i>package
                        <span class="fw-normal"> - Package Here </span>
                      </span>
                      <ul class="ps-3 ps-md-5 list-unstyled">
                        <li class="py-2">
                          <span class="fw-bold text-dark">
                            <i class="ti ti-folder me-2 text-primary"></i>demos <span class="fw-normal"> - All Demos Here </span>
                          </span>
                          <ul class="ps-3 ps-md-5 list-unstyled">
                            <li class="py-2">
                              <span class="">
                                <i class="ti ti-folder me-2 text-primary"></i>src
                              </span>
                              <ul class="ps-3 ps-md-5 list-unstyled">
                                <li class="py-2">
                                  <span class="fw-bold text-dark">
                                    <i class="ti ti-folder me-2 text-primary"></i>assets
                                    <span class="fw-normal"> - All the css, fonts, images, js, scss here </span>
                                  </span>
                                </li>
                                <li class="py-2">
                                  <span class="fw-bold text-dark">
                                    <i class="ti ti-folder me-2 text-primary"></i>dark
                                    <span class="fw-normal"> - Dark Demo Here </span>
                                  </span>
                                </li>
                                <li class="py-2">
                                  <span class="fw-bold text-dark">
                                    <i class="ti ti-folder me-2 text-primary"></i>docs
                                    <span class="fw-normal"> - Documentation Here </span>
                                  </span>
                                </li>
                                <li class="py-2">
                                  <span class="fw-bold text-dark">
                                    <i class="ti ti-folder me-2 text-primary"></i>horizontal <span class="fw-normal"> -
                                      Horizontal Demo Here </span>
                                  </span>
                                </li>
                                <li class="py-2">
                                  <span class="fw-bold text-dark">
                                    <i class="ti ti-folder me-2 text-primary"></i>landingpage <span class="fw-normal"> -
                                      Landing page Here </span>
                                  </span>
                                </li>
                                <li class="py-2">
                                  <span class="fw-bold text-dark">
                                    <i class="ti ti-folder me-2 text-primary"></i>main
                                    <span class="fw-normal"> - Main demo Here </span>
                                  </span>
                                  <ul class="ps-3 ps-md-5 list-unstyled">
                                    <li class="py-2">
                                      <span class="fw-bold">
                                        <i class="ti ti-folder me-2 text-primary"></i>partials <span class="fw-normal"> - header-sidebar code Here </span>
                                      </span>
                                    </li>
                                    <li class="py-2">
                                      <span class="fw-bold">
                                        <i class="ti ti-folder me-2 text-primary"></i>all .html
                                        files here
                                      </span>
                                    </li>
                                  </ul>
                                </li>
                                <li class="py-2">
                                  <span class="fw-bold text-dark">
                                    <i class="ti ti-folder me-2 text-primary"></i>minisidebar <span class="fw-normal"> -
                                      Minisidebar demo Here </span>
                                  </span>
                                </li>
                                <li class="py-2">
                                  <span class="fw-bold text-dark">
                                    <i class="ti ti-folder me-2 text-primary"></i>rtl
                                    <span class="fw-normal"> - RTL demo Here </span>
                                  </span>
                                </li>
                              </ul>
                            </li>
                            <li class="py-2">
                              <span class="">
                                <i class="ti ti-folder me-2 text-primary"></i>gulpfile.js <span class="fw-normal"> - Gulp setting from Here </span>
                              </span>
                            </li>
                            <li class="py-2">
                              <span class="">
                                <i class="ti ti-folder me-2 text-primary"></i> .gitignore<span class="fw-normal"> - Hide all unnecessary files from Git</span>
                              </span>
                            </li>
                            <li class="py-2">
                              <span class="">
                                <i class="ti ti-folder me-2 text-primary"></i>package.json <span class="fw-normal"> - List of dependencies and npm information</span>
                              </span>
                            </li>
                          </ul>
                        </li>
                        <li class="py-2">
                          <span class="fw-bold text-dark">
                            <i class="ti ti-folder me-2 text-primary"></i>starterkit <span class="fw-normal"> - Starterkit Here </span>
                          </span>
                          <ul class="ps-3 ps-md-5 list-unstyled">
                            <li class="py-2">
                              <span class="">
                                <i class="ti ti-folder me-2 text-primary"></i>src
                              </span>
                            </li>
                            <li class="py-2">
                              <span class="">
                                <i class="ti ti-folder me-2 text-primary"></i>gulpfile.js
                              </span>
                            </li>
                            <li class="py-2">
                              <span class="">
                                <i class="ti ti-folder me-2 text-primary"></i>package.json
                              </span>
                            </li>
                          </ul>
                        </li>

                      </ul>
                    </li>
                    <li class="py-2">
                      <span class="">
                        <i class="ti ti-folder me-2 text-primary"></i>README.md<span class="fw-normal">
                          - Theme information</span>
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </>
    )
}