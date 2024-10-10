import { onMount } from "solid-js";

export default function Modals(){
    onMount(async () => {
        const module = await import("../../../assets/libs/prismjs/prism.js");
    
        module.initializePrism();
      });
    return (
        <>
                <div class="container-fluid mt-4">
          <div class="mt-1">
            <div class="d-sm-flex align-items-center justify-content-between">
              <h4 class="mb-4 pb-2 fs-5">Modals</h4>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Bootstrap Modals</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel">
                              Modal Heading
                            </h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <h6>Text in a modal</h6>
                            <p>
                              Duis mollis, est non commodo luctus, nisi erat
                              porttitor ligula.
                            </p>

                            <h6>
                              Overflowing text to show scroll behavior
                            </h6>
                            <p>
                              Cras mattis consectetur purus sit amet
                              fermentum. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam. Morbi leo
                              risus, porta ac consectetur ac, vestibulum at
                              eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus
                              vel augue laoreet rutrum faucibus dolor
                              auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                              Close
                            </button>
                            <button type="button" class="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal fade" id="bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h4 class="modal-title" id="myLargeModalLabel">
                              Large modal
                            </h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">...</div>
                        </div>
                      </div>
                    </div>
                    <div class="modal fade" id="bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h4 class="modal-title" id="mySmallModalLabel">
                              Small modal
                            </h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">...</div>
                        </div>
                      </div>
                    </div>
                    <div id="full-width-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="fullWidthModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-fullscreen">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h4 class="modal-title" id="fullWidthModalLabel">
                              Modal Heading
                            </h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <h6>Text in a modal</h6>
                            <p>
                              Duis mollis, est non commodo luctus, nisi erat
                              porttitor ligula.
                            </p>

                            <h6>
                              Overflowing text to show scroll behavior
                            </h6>
                            <p>
                              Cras mattis consectetur purus sit amet
                              fermentum. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam. Morbi leo
                              risus, porta ac consectetur ac, vestibulum at
                              eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus
                              vel augue laoreet rutrum faucibus dolor
                              auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                              Close
                            </button>
                            <button type="button" class="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal fade" id="scrollable-modal" tabindex="-1" role="dialog" aria-labelledby="scrollableModalTitle" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-scrollable" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="scrollableModalTitle">
                              Modal title
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <p>
                              Cras mattis consectetur purus sit amet
                              fermentum. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam. Morbi leo
                              risus, porta ac consectetur ac, vestibulum at
                              eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus
                              vel augue laoreet rutrum faucibus dolor
                              auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet
                              fermentum. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam. Morbi leo
                              risus, porta ac consectetur ac, vestibulum at
                              eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus
                              vel augue laoreet rutrum faucibus dolor
                              auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet
                              fermentum. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam. Morbi leo
                              risus, porta ac consectetur ac, vestibulum at
                              eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus
                              vel augue laoreet rutrum faucibus dolor
                              auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet
                              fermentum. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam. Morbi leo
                              risus, porta ac consectetur ac, vestibulum at
                              eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus
                              vel augue laoreet rutrum faucibus dolor
                              auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet
                              fermentum. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam. Morbi leo
                              risus, porta ac consectetur ac, vestibulum at
                              eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus
                              vel augue laoreet rutrum faucibus dolor
                              auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet
                              fermentum. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam. Morbi leo
                              risus, porta ac consectetur ac, vestibulum at
                              eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus
                              vel augue laoreet rutrum faucibus dolor
                              auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                              Close
                            </button>
                            <button type="button" class="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="button-group">
                      <button type="button" class="btn mb-1 me-1 btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" fdprocessedid="tml8fm">
                        Standard Modal
                      </button>
                      <button type="button" class="btn mb-1 me-1 btn-danger" data-bs-toggle="modal" data-bs-target="#bs-example-modal-lg" fdprocessedid="kklft">
                        Large modal
                      </button>
                      <button type="button" class="btn mb-1 me-1 btn-success" data-bs-toggle="modal" data-bs-target="#bs-example-modal-sm" fdprocessedid="zuikg">
                        Small modal
                      </button>
                      <button type="button" class="btn mb-1 me-1 btn-warning" data-bs-toggle="modal" data-bs-target="#full-width-modal" fdprocessedid="j87qu">
                        Full screen modal
                      </button>
                      <button type="button" class="btn mb-1 me-1 btn-secondary" data-bs-toggle="modal" data-bs-target="#scrollable-modal" fdprocessedid="flss0a">
                        Scrollable modal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">

                <pre class="mt-0">
                    <code class="language-html" style="height: 300px;">
                        {`
<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">Modal Heading</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h6>Text in a modal</h6>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                <h6>Overflowing text to show scroll behavior</h6>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div> <!-- /.modal-content -->
    </div> <!-- /.modal-dialog -->
</div> <!-- /.modal -->

<!-- Large Modal -->
<div class="modal fade" id="bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="myLargeModalLabel">Large modal</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">...</div>
        </div> <!-- /.modal-content -->
    </div> <!-- /.modal-dialog -->
</div> <!-- /.modal -->

<!-- Small Modal -->
<div class="modal fade" id="bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="mySmallModalLabel">Small modal</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">...</div>
        </div> <!-- /.modal-content -->
    </div> <!-- /.modal-dialog -->
</div> <!-- /.modal -->

<!-- Full Width Modal -->
<div id="full-width-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="fullWidthModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="fullWidthModalLabel">Modal Heading</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h6>Text in a modal</h6>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                <h6>Overflowing text to show scroll behavior</h6>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div> <!-- /.modal-content -->
    </div> <!-- /.modal-dialog -->
</div> <!-- /.modal -->

<!-- Scrollable Modal -->
<div class="modal fade" id="scrollable-modal" tabindex="-1" role="dialog" aria-labelledby="scrollableModalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="scrollableModalTitle">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div> <!-- /.modal-content -->
    </div> <!-- /.modal-dialog -->
</div> <!-- /.modal -->

<div class="button-group">
    <!-- Standard modal -->
    <button type="button" class="btn mb-1 me-1 btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Standard Modal</button>
    
    <!-- Large modal -->
    <button type="button" class="btn mb-1 me-1 btn-danger" data-bs-toggle="modal" data-bs-target="#bs-example-modal-lg">Large modal</button>
    
    <!-- Small modal -->
    <button type="button" class="btn mb-1 me-1 btn-success" data-bs-toggle="modal" data-bs-target="#bs-example-modal-sm">Small modal</button>
    
    <!-- Full width modal -->
    <button type="button" class="btn mb-1 me-1 btn-warning" data-bs-toggle="modal" data-bs-target="#full-width-modal">Full screen modal</button>
    
    <!-- Scrollable modal -->
    <button type="button" class="btn mb-1 me-1 btn-secondary" data-bs-toggle="modal" data-bs-target="#scrollable-modal">Scrollable modal</button>
</div>
`}
                                      </code>
                                  </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Modal with Pages</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <div id="signup-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-body">
                            <div class="text-center mt-2 mb-4">
                              <a href="index.html" class="text-success">
                                <span>
                                  <img class="img-fluid" src="../assets/images/logos/favicon.png" alt=""/>
                                </span>
                              </a>
                            </div>
                            <form class="ps-3 pe-3 text-start" action="#">
                              <div class="mb-3">
                                <label for="username">Name</label>
                                <input class="form-control" type="email" id="username" required="" placeholder="Michael Zenaty"/>
                              </div>
                              <div class="mb-3">
                                <label for="emailaddress">Email address</label>
                                <input class="form-control" type="email" id="emailaddress" required="" placeholder="john@deo.com"/>
                              </div>
                              <div class="mb-3">
                                <label for="password">Password</label>
                                <input class="form-control" type="password" required="" id="password" placeholder="Enter your password"/>
                              </div>
                              <div class="mb-3">
                                <div class="form-check">
                                  <input type="checkbox" class="form-check-input" id="customCheck1"/>
                                  <label class="form-check-label" for="customCheck1">I accept
                                    <a href="javascript:void(0)">Terms and Conditions</a>
                                  </label>
                                </div>
                              </div>
                              <div class="mb-3 text-center">
                                <button class="btn btn-primary" type="submit">
                                  Sign Up Free
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="login-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-body">
                            <div class="text-center mt-2 mb-4">
                              <a href="index.html" class="text-success">
                                <span>
                                  <img class="img-fluid" src="../assets/images/logos/favicon.png" alt=""/>
                                </span>
                              </a>
                            </div>
                            <form action="#" class="ps-3 pe-3 text-start">
                              <div class="mb-3">
                                <label for="emailaddress1">Email address</label>
                                <input class="form-control" type="email" id="emailaddress1" required="" placeholder="john@deo.com"/>
                              </div>
                              <div class="mb-3">
                                <label for="password1">Password</label>
                                <input class="form-control" type="password" required="" id="password1" placeholder="Enter your password"/>
                              </div>
                              <div class="mb-3">
                                <div class="form-check">
                                  <input type="checkbox" class="form-check-input" id="customCheck2"/>
                                  <label class="form-check-label" for="customCheck2">Remember me</label>
                                </div>
                              </div>
                              <div class="mb-3 text-center">
                                <button class="btn btn-rounded btn-primary" type="submit">
                                  Sign In
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="button-group">
                      <button type="button" class="btn mb-1 me-1 btn-success" data-bs-toggle="modal" data-bs-target="#signup-modal" fdprocessedid="mb0mrj">
                        Sign Up Modal
                      </button>
                      <button type="button" class="btn mb-1 me-1 btn-info" data-bs-toggle="modal" data-bs-target="#login-modal" fdprocessedid="8q33om">
                        Log in Modal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">

                <pre class="mt-0">
                    <code class="language-html" style="height: 300px;">
                        {`
                    <!-- Signup modal content -->
<div id="signup-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                <div class="text-center mt-2 mb-4">
                    <a href="index.html" class="text-success">
                        <span>
                            <img class="img-fluid" src="../assets/images/logos/favicon.png" alt="">
                        </span>
                    </a>
                </div>
                <form class="ps-3 pe-3 text-start" action="#">
                    <div class="mb-3">
                        <label for="username">Name</label>
                        <input class="form-control" type="text" id="username" required placeholder="Michael Zenaty">
                    </div>
                    <div class="mb-3">
                        <label for="emailaddress">Email address</label>
                        <input class="form-control" type="email" id="emailaddress" required placeholder="john@deo.com">
                    </div>
                    <div class="mb-3">
                        <label for="password">Password</label>
                        <input class="form-control" type="password" required id="password" placeholder="Enter your password">
                    </div>
                    <div class="mb-3">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="customCheck1">
                            <label class="form-check-label" for="customCheck1">I accept <a href="#">Terms and Conditions</a></label>
                        </div>
                    </div>
                    <div class="mb-3 text-center">
                        <button class="btn btn-primary" type="submit">Sign Up Free</button>
                    </div>
                </form>
            </div>
        </div> <!-- /.modal-content -->
    </div> <!-- /.modal-dialog -->
</div> <!-- /.modal -->

<!-- SignIn modal content -->
<div id="login-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                <div class="text-center mt-2 mb-4">
                    <a href="index.html" class="text-success">
                        <span>
                            <img class="img-fluid" src="../assets/images/logos/favicon.png" alt="">
                        </span>
                    </a>
                </div>
                <form action="#" class="ps-3 pe-3 text-start">
                    <div class="mb-3">
                        <label for="emailaddress1">Email address</label>
                        <input class="form-control" type="email" id="emailaddress1" required placeholder="john@deo.com">
                    </div>
                    <div class="mb-3">
                        <label for="password1">Password</label>
                        <input class="form-control" type="password" required id="password1" placeholder="Enter your password">
                    </div>
                    <div class="mb-3">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="customCheck2">
                            <label class="form-check-label" for="customCheck2">Remember me</label>
                        </div>
                    </div>
                    <div class="mb-3 text-center">
                        <button class="btn btn-rounded btn-primary" type="submit">Sign In</button>
                    </div>
                </form>
            </div>
        </div> <!-- /.modal-content -->
    </div> <!-- /.modal-dialog -->
</div> <!-- /.modal -->

<div class="button-group">
    <!-- Custom width modal -->
    <button type="button" class="btn mb-1 me-1 btn-success" data-bs-toggle="modal" data-bs-target="#signup-modal">Sign Up Modal</button>
    <!-- Full width modal -->
    <button type="button" class="btn mb-1 me-1 btn-info" data-bs-toggle="modal" data-bs-target="#login-modal">Log in Modal</button>
</div>
`}
                                        </code>
                                    </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Modal based Alerts</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <div class="button-group">
                      <button type="button" class="
                            btn mb-1 me-1 bg-success-subtle
                            text-success
                          " data-bs-toggle="modal" data-bs-target="#al-success-alert" fdprocessedid="7ydygv">
                        Success Alert
                      </button>
                      <div class="modal fade" id="al-success-alert" tabindex="-1" aria-labelledby="vertical-center-modal" aria-hidden="true">
                        <div class="modal-dialog modal-sm">
                          <div class="
                                modal-content modal-filled
                                bg-light-success
                                text-success
                              ">
                            <div class="modal-body p-4">
                              <div class="text-center text-success">
                                <i data-feather="check-circle" class="fill-white feather-lg"></i>
                                <h4 class="mt-2">Well Done!</h4>
                                <p class="mt-3 text-success-50">
                                  Cras mattis consectetur purus sit amet
                                  fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam.
                                </p>
                                <button type="button" class="btn btn-light my-2" data-bs-dismiss="modal">
                                  Continue
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button type="button" class="
                            btn mb-1 me-1 bg-info-subtle
                            text-info
                          " data-bs-toggle="modal" data-bs-target="#al-info-alert" fdprocessedid="3q9ytp">
                        Info Alert
                      </button>
                      <div class="modal fade" id="al-info-alert" tabindex="-1" aria-labelledby="vertical-center-modal" aria-hidden="true">
                        <div class="modal-dialog modal-sm">
                          <div class="modal-content modal-filled bg-light-info">
                            <div class="modal-body p-4">
                              <div class="text-center text-info">
                                <i data-feather="info" class="fill-white feather-lg"></i>
                                <h4 class="mt-2">Heads up!</h4>
                                <p class="mt-3">
                                  Cras mattis consectetur purus sit amet
                                  fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam.
                                </p>
                                <button type="button" class="btn btn-light my-2" data-bs-dismiss="modal">
                                  Continue
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button type="button" class="
                            btn mb-1 me-1 bg-warning-subtle
                            text-warning
                          " data-bs-toggle="modal" data-bs-target="#al-warning-alert" fdprocessedid="8ybi79">
                        Warning Alert
                      </button>
                      <div class="modal fade" id="al-warning-alert" tabindex="-1" aria-labelledby="vertical-center-modal" aria-hidden="true">
                        <div class="modal-dialog modal-sm">
                          <div class="
                                modal-content modal-filled
                                bg-light-warning
                              ">
                            <div class="modal-body p-4">
                              <div class="text-center text-warning">
                                <i data-feather="alert-octagon" class="fill-white feather-lg"></i>
                                <h4 class="mt-2">Incorrect Information</h4>
                                <p class="mt-3">
                                  Cras mattis consectetur purus sit amet
                                  fermentum.Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam.
                                </p>
                                <button type="button" class="btn btn-light my-2" data-bs-dismiss="modal">
                                  Continue
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button type="button" class="
                            btn mb-1 me-1 bg-danger-subtle
                            text-danger
                          " data-bs-toggle="modal" data-bs-target="#al-danger-alert" fdprocessedid="qhj8ng">
                        Danger Alert
                      </button>
                      <div class="modal fade" id="al-danger-alert" tabindex="-1" aria-labelledby="vertical-center-modal" aria-hidden="true" style="display: none;">
                        <div class="modal-dialog modal-sm">
                          <div class="
                                modal-content modal-filled
                                bg-light-danger
                              ">
                            <div class="modal-body p-4">
                              <div class="text-center text-danger">
                                <i data-feather="x-octagon" class="fill-white feather-lg"></i>
                                <h4 class="mt-2">Oh snap!</h4>
                                <p class="mt-3">
                                  Cras mattis consectetur purus sit amet
                                  fermentum.Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam.
                                </p>
                                <button type="button" class="btn btn-light my-2" data-bs-dismiss="modal">
                                  Continue
                                </button>
                              </div>
                            </div>
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
<div class="modal fade" id="al-success-alert" tabindex="-1" aria-labelledby="vertical-center-modal" aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content modal-filled bg-light-success text-success">
            <div class="modal-body p-4">
                <div class="text-center text-success">
                    <i data-feather="check-circle" class="fill-white feather-lg"></i>
                    <h4 class="mt-2">Well Done!</h4>
                    <p class="mt-3 text-success-50">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                    <button type="button" class="btn btn-light my-2" data-bs-dismiss="modal">Continue</button>
                </div>
            </div>
        </div> <!-- /.modal-content -->
    </div>
</div> <!-- Button trigger modal -->
<button type="button" class="btn bg-info-subtle text-info btn-lg px-4 fs-4" data-bs-toggle="modal" data-bs-target="#al-info-alert"> Info Alert </button>

<!-- Vertically centered modal -->
<div class="modal fade" id="al-info-alert" tabindex="-1" aria-labelledby="vertical-center-modal" aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content modal-filled bg-light-info">
            <div class="modal-body p-4">
                <div class="text-center text-info">
                    <i data-feather="info" class="fill-white feather-lg"></i>
                    <h4 class="mt-2">Heads up!</h4>
                    <p class="mt-3">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                    <button type="button" class="btn btn-light my-2" data-bs-dismiss="modal">Continue</button>
                </div>
            </div>
        </div> <!-- /.modal-content -->
    </div>
</div>

<!-- Button trigger modal -->
<button type="button" class="btn bg-warning-subtle text-warning btn-lg px-4 fs-4" data-bs-toggle="modal" data-bs-target="#al-warning-alert"> Warning Alert </button>

<!-- Vertically centered modal -->
<div class="modal fade" id="al-warning-alert" tabindex="-1" aria-labelledby="vertical-center-modal" aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content modal-filled bg-light-warning">
            <div class="modal-body p-4">
                <div class="text-center text-warning">
                    <i data-feather="alert-octagon" class="fill-white feather-lg"></i>
                    <h4 class="mt-2">Incorrect Information</h4>
                    <p class="mt-3">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                    <button type="button" class="btn btn-light my-2" data-bs-dismiss="modal">Continue</button>
                </div>
            </div>
        </div> <!-- /.modal-content -->
    </div>
</div>

<!-- Button trigger modal -->
<button type="button" class="btn bg-danger-subtle text-danger btn-lg px-4 fs-4" data-bs-toggle="modal" data-bs-target="#al-danger-alert"> Danger Alert </button>

<!-- Vertically centered modal -->
<div class="modal fade" id="al-danger-alert" tabindex="-1" aria-labelledby="vertical-center-modal" aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content modal-filled bg-light-danger">
            <div class="modal-body p-4">
                <div class="text-center text-danger">
                    <i data-feather="x-octagon" class="fill-white feather-lg"></i>
                    <h4 class="mt-2">Oh snap!</h4>
                    <p class="mt-3">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                    <button type="button" class="btn btn-light my-2" data-bs-dismiss="modal">Continue</button>
                </div>
            </div>
        </div> <!-- /.modal-content -->
    </div>
</div>
`}

                                        </code>
                                    </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Colored Header Modals</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <div class="button-group">
                      <button type="button" class="
                            btn mb-1 me-1 bg-primary-subtle
                            text-primary
                          " data-bs-toggle="modal" data-bs-target="#primary-header-modal" fdprocessedid="vj0v62j">
                        Primary Header
                      </button>
                      <div id="primary-header-modal" class="modal fade" tabindex="-1" aria-labelledby="primary-header-modalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="
                                  modal-header modal-colored-header
                                  bg-primary
                                  text-white
                                ">
                              <h4 class="modal-title text-white" id="primary-header-modalLabel">
                                Modal Heading
                              </h4>
                              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <h5 class="mt-0">Primary Background</h5>
                              <p>
                                Cras mattis consectetur purus sit amet
                                fermentum. Cras justo odio, dapibus ac
                                facilisis in, egestas eget quam. Morbi leo
                                risus, porta ac consectetur ac, vestibulum
                                at eros.
                              </p>
                              <p>
                                Praesent commodo cursus magna, vel
                                scelerisque nisl consectetur et. Vivamus
                                sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor.
                              </p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                                Close
                              </button>
                              <button type="button" class="
                                    btn bg-primary-subtle
                                    text-primary
                                    
                                  ">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button type="button" class="
                            btn mb-1 me-1 bg-info-subtle
                            text-info
                          " data-bs-toggle="modal" data-bs-target="#info-header-modal" fdprocessedid="smq8on">
                        Info Header
                      </button>
                      <div id="info-header-modal" class="modal fade" tabindex="-1" aria-labelledby="info-header-modalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="
                                  modal-header modal-colored-header
                                  bg-info
                                  text-white
                                ">
                              <h4 class="modal-title text-white" id="info-header-modalLabel">
                                Modal Heading
                              </h4>
                              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <h5 class="mt-0">Info Background</h5>
                              <p>
                                Cras mattis consectetur purus sit amet
                                fermentum. Cras justo odio, dapibus ac
                                facilisis in, egestas eget quam. Morbi leo
                                risus, porta ac consectetur ac, vestibulum
                                at eros.
                              </p>
                              <p>
                                Praesent commodo cursus magna, vel
                                scelerisque nisl consectetur et. Vivamus
                                sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor.
                              </p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                                Close
                              </button>
                              <button type="button" class="
                                    btn bg-info-subtle
                                    text-info
                                    
                                  ">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button type="button" class="
                            btn mb-1 me-1 bg-danger-subtle
                            text-danger
                          " data-bs-toggle="modal" data-bs-target="#danger-header-modal" fdprocessedid="vnzjw">
                        Danger Header
                      </button>
                      <div id="danger-header-modal" class="modal fade" tabindex="-1" aria-labelledby="danger-header-modalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="
                                  modal-header modal-colored-header
                                  bg-danger
                                  text-white
                                ">
                              <h4 class="modal-title text-white" id="danger-header-modalLabel">
                                Modal Heading
                              </h4>
                              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <h5 class="mt-0">Danger Background</h5>
                              <p>
                                Cras mattis consectetur purus sit amet
                                fermentum. Cras justo odio, dapibus ac
                                facilisis in, egestas eget quam. Morbi leo
                                risus, porta ac consectetur ac, vestibulum
                                at eros.
                              </p>
                              <p>
                                Praesent commodo cursus magna, vel
                                scelerisque nisl consectetur et. Vivamus
                                sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor.
                              </p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                                Close
                              </button>
                              <button type="button" class="
                                    btn bg-danger-subtle
                                    text-danger
                                    
                                  ">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button type="button" class="
                            btn mb-1 me-1 bg-warning-subtle
                            text-warning
                          " data-bs-toggle="modal" data-bs-target="#warning-header-modal" fdprocessedid="l8awt4b">
                        Warning Header
                      </button>
                      <div id="warning-header-modal" class="modal fade" tabindex="-1" aria-labelledby="warning-header-modalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="
                                  modal-header modal-colored-header
                                  bg-warning
                                  text-white
                                ">
                              <h4 class="modal-title text-white" id="warning-header-modalLabel">
                                Modal Heading
                              </h4>
                              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <h5 class="mt-0">Warning Background</h5>
                              <p>
                                Cras mattis consectetur purus sit amet
                                fermentum. Cras justo odio, dapibus ac
                                facilisis in, egestas eget quam. Morbi leo
                                risus, porta ac consectetur ac, vestibulum
                                at eros.
                              </p>
                              <p>
                                Praesent commodo cursus magna, vel
                                scelerisque nisl consectetur et. Vivamus
                                sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor.
                              </p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                                Close
                              </button>
                              <button type="button" class="
                                    btn bg-warning-subtle
                                    text-warning
                                    
                                  ">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button type="button" class="
                            btn mb-1 me-1 bg-success-subtle
                            text-success
                          " data-bs-toggle="modal" data-bs-target="#success-header-modal" fdprocessedid="cw61t3">
                        Success Header
                      </button>
                      <div id="success-header-modal" class="modal fade" tabindex="-1" aria-labelledby="success-header-modalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="
                                  modal-header modal-colored-header
                                  bg-success
                                  text-white
                                ">
                              <h4 class="modal-title text-white" id="success-header-modalLabel">
                                Modal Heading
                              </h4>
                              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <h5 class="mt-0">Success Background</h5>
                              <p>
                                Cras mattis consectetur purus sit amet
                                fermentum. Cras justo odio, dapibus ac
                                facilisis in, egestas eget quam. Morbi leo
                                risus, porta ac consectetur ac, vestibulum
                                at eros.
                              </p>
                              <p>
                                Praesent commodo cursus magna, vel
                                scelerisque nisl consectetur et. Vivamus
                                sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor.
                              </p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                                Close
                              </button>
                              <button type="button" class="
                                    btn bg-success-subtle
                                    text-success
                                    
                                  ">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button type="button" class="btn btn-dark btn-lg px-4 fs-4 " data-bs-toggle="modal" data-bs-target="#dark-header-modal" fdprocessedid="nb24yi">
                        Dark Header
                      </button>
                      <div id="dark-header-modal" class="modal fade" tabindex="-1" aria-labelledby="dark-header-modalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="
                                  modal-header modal-colored-header
                                  bg-dark
                                  text-white
                                ">
                              <h4 class="modal-title text-white" id="dark-header-modalLabel">
                                Modal Heading
                              </h4>
                              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <h5 class="mt-0">Dark Background</h5>
                              <p>
                                Cras mattis consectetur purus sit amet
                                fermentum. Cras justo odio, dapibus ac
                                facilisis in, egestas eget quam. Morbi leo
                                risus, porta ac consectetur ac, vestibulum
                                at eros.
                              </p>
                              <p>
                                Praesent commodo cursus magna, vel
                                scelerisque nisl consectetur et. Vivamus
                                sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor.
                              </p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                                Close
                              </button>
                              <button type="button" class="btn btn-dark">
                                Save changes
                              </button>
                            </div>
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
<div class="button-group">
    <!-- Primary header modal -->
    <button type="button" class="btn mb-1 me-1 bg-primary-subtle text-primary" data-bs-toggle="modal" data-bs-target="#primary-header-modal" fdprocessedid="vj0v62j">
      Primary Header
    </button>
    <!-- Primary Header Modal -->
    <div id="primary-header-modal" class="modal fade" tabindex="-1" aria-labelledby="primary-header-modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header modal-colored-header bg-primary text-white">
            <h4 class="modal-title text-white" id="primary-header-modalLabel">
              Modal Heading
            </h4>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h5 class="mt-0">Primary Background</h5>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn bg-primary-subtle text-primary ">
              Save changes
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    <!-- info header modal -->
    <button type="button" class="btn mb-1 me-1 bg-info-subtle text-info" data-bs-toggle="modal" data-bs-target="#info-header-modal" fdprocessedid="smq8on">
      Info Header
    </button>
    <!-- info Header Modal -->
    <div id="info-header-modal" class="modal fade" tabindex="-1" aria-labelledby="info-header-modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header modal-colored-header bg-info text-white">
            <h4 class="modal-title text-white" id="info-header-modalLabel">
              Modal Heading
            </h4>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h5 class="mt-0">Info Background</h5>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn bg-info-subtle text-info ">
              Save changes
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    <!-- danger header modal -->
    <button type="button" class="btn mb-1 me-1 bg-danger-subtle text-danger" data-bs-toggle="modal" data-bs-target="#danger-header-modal" fdprocessedid="vnzjw">
      Danger Header
    </button>
    <!-- danger Header Modal -->
    <div id="danger-header-modal" class="modal fade" tabindex="-1" aria-labelledby="danger-header-modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header modal-colored-header bg-danger text-white">
            <h4 class="modal-title text-white" id="danger-header-modalLabel">
              Modal Heading
            </h4>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h5 class="mt-0">Danger Background</h5>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn bg-danger-subtle text-danger ">
              Save changes
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    <!-- warning header modal -->
    <button type="button" class="btn mb-1 me-1 bg-warning-subtle text-warning" data-bs-toggle="modal" data-bs-target="#warning-header-modal" fdprocessedid="l8awt4b">
      Warning Header
    </button>
    <!-- warning Header Modal -->
    <div id="warning-header-modal" class="modal fade" tabindex="-1" aria-labelledby="warning-header-modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header modal-colored-header bg-warning text-white">
            <h4 class="modal-title text-white" id="warning-header-modalLabel">
              Modal Heading
            </h4>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h5 class="mt-0">Warning Background</h5>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn bg-warning-subtle text-warning ">
              Save changes
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    <!-- success header modal -->
    <button type="button" class="btn mb-1 me-1 bg-success-subtle text-success" data-bs-toggle="modal" data-bs-target="#success-header-modal" fdprocessedid="cw61t3">
      Success Header
    </button>
    <!-- success Header Modal -->
    <div id="success-header-modal" class="modal fade" tabindex="-1" aria-labelledby="success-header-modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header modal-colored-header bg-success text-white">
            <h4 class="modal-title text-white" id="success-header-modalLabel">
              Modal Heading
            </h4>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h5 class="mt-0">Success Background</h5>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn bg-success-subtle text-success ">
              Save changes
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    <!-- dark header modal -->
    <button type="button" class="btn btn-dark btn-lg px-4 fs-4 " data-bs-toggle="modal" data-bs-target="#dark-header-modal" fdprocessedid="nb24yi">
      Dark Header
    </button>
    <!-- dark Header Modal -->
    <div id="dark-header-modal" class="modal fade" tabindex="-1" aria-labelledby="dark-header-modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header modal-colored-header bg-dark text-white">
            <h4 class="modal-title text-white" id="dark-header-modalLabel">
              Modal Heading
            </h4>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h5 class="mt-0">Dark Background</h5>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn bg-dark text-white">
              Save changes
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
</div>
`}

                                        </code>
                                    </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Filled Modals</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <div class="button-group">
                      <button type="button" class="
                            btn mb-1 me-1 bg-primary-subtle
                            text-primary
                          " data-bs-toggle="modal" data-bs-target="#bg-primary-header-modal" fdprocessedid="25na8">
                        Primary Modal
                      </button>
                      <div id="bg-primary-header-modal" class="modal fade" tabindex="-1" aria-labelledby="primary-header-modalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content modal-filled bg-primary">
                            <div class="
                                  modal-header modal-colored-header
                                  text-white
                                ">
                              <h4 class="modal-title text-white" id="primary-header-modalLabel">
                                Modal Heading
                              </h4>
                              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <h5 class="mt-0 text-white">
                                Primary Background
                              </h5>
                              <p class="text-white-50">
                                Cras mattis consectetur purus sit amet
                                fermentum. Cras justo odio, dapibus ac
                                facilisis in, egestas eget quam. Morbi leo
                                risus, porta ac consectetur ac, vestibulum
                                at eros.
                              </p>
                              <p class="text-white-50">
                                Praesent commodo cursus magna, vel
                                scelerisque nisl consectetur et. Vivamus
                                sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor.
                              </p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-light" data-bs-dismiss="modal">
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button type="button" class="
                            btn mb-1 me-1 bg-info-subtle
                            text-info
                          " data-bs-toggle="modal" data-bs-target="#bg-info-header-modal" fdprocessedid="0488r">
                        Info Modal
                      </button>
                      <div id="bg-info-header-modal" class="modal fade" tabindex="-1" aria-labelledby="info-header-modalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content modal-filled bg-info">
                            <div class="
                                  modal-header modal-colored-header
                                  text-white
                                ">
                              <h4 class="modal-title text-white" id="info-header-modalLabel">
                                Modal Heading
                              </h4>
                              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <h5 class="mt-0 text-white">
                                Info Background
                              </h5>
                              <p class="text-white-50">
                                Cras mattis consectetur purus sit amet
                                fermentum. Cras justo odio, dapibus ac
                                facilisis in, egestas eget quam. Morbi leo
                                risus, porta ac consectetur ac, vestibulum
                                at eros.
                              </p>
                              <p class="text-white-50">
                                Praesent commodo cursus magna, vel
                                scelerisque nisl consectetur et. Vivamus
                                sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor.
                              </p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-light" data-bs-dismiss="modal">
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button type="button" class="
                            btn mb-1 me-1 bg-danger-subtle
                            text-danger
                          " data-bs-toggle="modal" data-bs-target="#bg-danger-header-modal" fdprocessedid="iigz6">
                        Danger Modal
                      </button>
                      <div id="bg-danger-header-modal" class="modal fade" tabindex="-1" aria-labelledby="danger-header-modalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content modal-filled bg-danger">
                            <div class="
                                  modal-header modal-colored-header
                                  text-white
                                ">
                              <h4 class="modal-title text-white" id="danger-header-modalLabel">
                                Modal Heading
                              </h4>
                              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <h5 class="mt-0 text-white">
                                Danger Background
                              </h5>
                              <p class="text-white-50">
                                Cras mattis consectetur purus sit amet
                                fermentum. Cras justo odio, dapibus ac
                                facilisis in, egestas eget quam. Morbi leo
                                risus, porta ac consectetur ac, vestibulum
                                at eros.
                              </p>
                              <p class="text-white-50">
                                Praesent commodo cursus magna, vel
                                scelerisque nisl consectetur et. Vivamus
                                sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor.
                              </p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-light" data-bs-dismiss="modal">
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button type="button" class="
                            btn mb-1 me-1 bg-warning-subtle
                            text-warning
                          " data-bs-toggle="modal" data-bs-target="#bg-warning-header-modal" fdprocessedid="g7th7">
                        Warning Modal
                      </button>
                      <div id="bg-warning-header-modal" class="modal fade" tabindex="-1" aria-labelledby="warning-header-modalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content modal-filled bg-warning">
                            <div class="
                                  modal-header modal-colored-header
                                  text-white
                                ">
                              <h4 class="modal-title text-white text-white" id="warning-header-modalLabel">
                                Modal Heading
                              </h4>
                              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <h5 class="mt-0 text-white">
                                Warning Background
                              </h5>
                              <p class="text-white-50">
                                Cras mattis consectetur purus sit amet
                                fermentum. Cras justo odio, dapibus ac
                                facilisis in, egestas eget quam. Morbi leo
                                risus, porta ac consectetur ac, vestibulum
                                at eros.
                              </p>
                              <p class="text-white-50">
                                Praesent commodo cursus magna, vel
                                scelerisque nisl consectetur et. Vivamus
                                sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor.
                              </p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-light" data-bs-dismiss="modal">
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button type="button" class="
                            btn mb-1 me-1 bg-success-subtle
                            text-success
                          " data-bs-toggle="modal" data-bs-target="#bg-success-header-modal" fdprocessedid="lwbst">
                        Success Modal
                      </button>
                      <div id="bg-success-header-modal" class="modal fade" tabindex="-1" aria-labelledby="success-header-modalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content modal-filled bg-success">
                            <div class="
                                  modal-header modal-colored-header
                                  text-white
                                ">
                              <h4 class="modal-title text-white" id="success-header-modalLabel">
                                Modal Heading
                              </h4>
                              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <h5 class="mt-0 text-white">
                                Success Background
                              </h5>
                              <p class="text-white-50">
                                Cras mattis consectetur purus sit amet
                                fermentum. Cras justo odio, dapibus ac
                                facilisis in, egestas eget quam. Morbi leo
                                risus, porta ac consectetur ac, vestibulum
                                at eros.
                              </p>
                              <p class="text-white-50">
                                Praesent commodo cursus magna, vel
                                scelerisque nisl consectetur et. Vivamus
                                sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor.
                              </p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-light" data-bs-dismiss="modal">
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button type="button" class="btn btn-dark mb-1 me-1" data-bs-toggle="modal" data-bs-target="#bg-dark-header-modal" fdprocessedid="sg79re">
                        Dark Modal
                      </button>
                      <div id="bg-dark-header-modal" class="modal fade" tabindex="-1" aria-labelledby="dark-header-modalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-contentmodal-filled bg-dark">
                            <div class="
                                  modal-header modal-colored-header
                                  text-white
                                ">
                              <h4 class="modal-title text-white" id="dark-header-modalLabel">
                                Modal Heading
                              </h4>
                              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <h5 class="mt-0 text-white">
                                Dark Background
                              </h5>
                              <p class="text-white-50">
                                Cras mattis consectetur purus sit amet
                                fermentum. Cras justo odio, dapibus ac
                                facilisis in, egestas eget quam. Morbi leo
                                risus, porta ac consectetur ac, vestibulum
                                at eros.
                              </p>
                              <p class="text-white-50">
                                Praesent commodo cursus magna, vel
                                scelerisque nisl consectetur et. Vivamus
                                sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor.
                              </p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-light" data-bs-dismiss="modal">
                                Close
                              </button>
                            </div>
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
 <div class="button-group">
    <!-- Primary header modal -->
    <button type="button" class="btn mb-1 me-1 bg-primary-subtle text-primary" data-bs-toggle="modal" data-bs-target="#bg-primary-header-modal" fdprocessedid="25na8">
      Primary Modal
    </button>
    <!-- Primary Header Modal -->
    <div id="bg-primary-header-modal" class="modal fade" tabindex="-1" aria-labelledby="primary-header-modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content modal-filled bg-primary">
          <div class="modal-header modal-colored-header text-white">
            <h4 class="modal-title text-white" id="primary-header-modalLabel">
              Modal Heading
            </h4>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h5 class="mt-0 text-white">
              Primary Background
            </h5>
            <p class="text-white-50">
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <p class="text-white-50">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    
    <!-- info header modal -->
    <button type="button" class="btn mb-1 me-1 bg-info-subtle text-info" data-bs-toggle="modal" data-bs-target="#bg-info-header-modal" fdprocessedid="0488r">
      Info Modal
    </button>
    <!-- info Header Modal -->
    <div id="bg-info-header-modal" class="modal fade" tabindex="-1" aria-labelledby="info-header-modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content modal-filled bg-info">
          <div class="modal-header modal-colored-header text-white">
            <h4 class="modal-title text-white" id="info-header-modalLabel">
              Modal Heading
            </h4>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h5 class="mt-0 text-white">
              Info Background
            </h5>
            <p class="text-white-50">
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <p class="text-white-50">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    
    <!-- danger header modal -->
    <button type="button" class="btn mb-1 me-1 bg-danger-subtle text-danger" data-bs-toggle="modal" data-bs-target="#bg-danger-header-modal" fdprocessedid="iigz6">
      Danger Modal
    </button>
    <!-- danger Header Modal -->
    <div id="bg-danger-header-modal" class="modal fade" tabindex="-1" aria-labelledby="danger-header-modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content modal-filled bg-danger">
          <div class="modal-header modal-colored-header text-white">
            <h4 class="modal-title text-white" id="danger-header-modalLabel">
              Modal Heading
            </h4>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h5 class="mt-0 text-white">
              Danger Background
            </h5>
            <p class="text-white-50">
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <p class="text-white-50">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    
    <!-- warning header modal -->
    <button type="button" class="btn mb-1 me-1 bg-warning-subtle text-warning" data-bs-toggle="modal" data-bs-target="#bg-warning-header-modal" fdprocessedid="g7th7">
      Warning Modal
    </button>
    <!-- warning Header Modal -->
    <div id="bg-warning-header-modal" class="modal fade" tabindex="-1" aria-labelledby="warning-header-modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content modal-filled bg-warning">
          <div class="modal-header modal-colored-header text-white">
            <h4 class="modal-title text-white" id="warning-header-modalLabel">
              Modal Heading
            </h4>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h5 class="mt-0 text-white">
              Warning Background
            </h5>
            <p class="text-white-50">
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <p class="text-white-50">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    
    <!-- success header modal -->
    <button type="button" class="btn mb-1 me-1 bg-success-subtle text-success" data-bs-toggle="modal" data-bs-target="#bg-success-header-modal" fdprocessedid="lwbst">
      Success Modal
    </button>
    <!-- success Header Modal -->
    <div id="bg-success-header-modal" class="modal fade" tabindex="-1" aria-labelledby="success-header-modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content modal-filled bg-success">
          <div class="modal-header modal-colored-header text-white">
            <h4 class="modal-title text-white" id="success-header-modalLabel">
              Modal Heading
            </h4>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h5 class="mt-0 text-white">
              Success Background
            </h5>
            <p class="text-white-50">
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <p class="text-white-50">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    
    <!-- dark header modal -->
    <button type="button" class="btn btn-dark mb-1 me-1" data-bs-toggle="modal" data-bs-target="#bg-dark-header-modal" fdprocessedid="sg79re">
      Dark Modal
    </button>
    <!-- dark Header Modal -->
    <div id="bg-dark-header-modal" class="modal fade" tabindex="-1" aria-labelledby="dark-header-modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content modal-filled bg-dark">
          <div class="modal-header modal-colored-header text-white">
            <h4 class="modal-title text-white" id="dark-header-modalLabel">
              Modal Heading
            </h4>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h5 class="mt-0 text-white">
              Dark Background
            </h5>
            <p class="text-white-50">
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <p class="text-white-50">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
</div>

 `}
                                        </code>
                                    </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Multiple Modal</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <div id="multiple-one" class="modal fade" tabindex="-1" aria-labelledby="multiple-oneModalLabel" aria-hidden="true" style="display: none;">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h4 class="modal-title" id="multiple-oneModalLabel">
                              Modal Heading
                            </h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" fdprocessedid="egnlz9"></button>
                          </div>
                          <div class="modal-body">
                            <h5 class="mt-0">Text in a modal</h5>
                            <p>
                              Duis mollis, est non commodo luctus, nisi erat
                              porttitor ligula.
                            </p>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-target="#multiple-two" data-bs-toggle="modal" data-bs-dismiss="modal" fdprocessedid="do3s7b8">
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="multiple-two" class="modal fade" tabindex="-1" aria-labelledby="multiple-twoModalLabel" aria-hidden="true" style="display: none;">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h4 class="modal-title" id="multiple-twoModalLabel">
                              Modal Heading
                            </h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" fdprocessedid="z4okwn"></button>
                          </div>
                          <div class="modal-body">
                            <h5 class="mt-0">Text in a modal</h5>
                            <p>
                              Duis mollis, est non commodo luctus, nisi erat
                              porttitor ligula.
                            </p>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" fdprocessedid="k88afm">
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="button-group">
                      <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#multiple-one" fdprocessedid="u2xk1g6">
                        Multiple Modal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">

                <pre class="mt-0">
                    <code class="language-html" style="height: 300px;">
{`
<div id="multiple-one" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="multiple-oneModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="multiple-oneModalLabel">Modal Heading</h4> 
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h5 class="mt-0">Text in a modal</h5>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-bs-target="#multiple-two" data-bs-toggle="modal" data-bs-dismiss="modal">Next</button> 
            </div>
        </div> 
        <!-- /.modal-content -->
    </div> 
    <!-- /.modal-dialog -->
</div> 
<!-- /.modal -->
<!-- Modal -->
<div id="multiple-two" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="multiple-twoModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="multiple-twoModalLabel">Modal Heading</h4> 
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h5 class="mt-0">Text in a modal</h5>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button> 
            </div>
        </div> 
        <!-- /.modal-content -->
    </div> 
    <!-- /.modal-dialog -->
</div> 
<!-- /.modal -->
<div class="button-group">
    <!-- Top modal --> 
    <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#multiple-one">Multiple Modal</button>
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