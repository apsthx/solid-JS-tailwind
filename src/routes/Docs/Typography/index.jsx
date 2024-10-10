import { onMount } from "solid-js";

export default function Typography(){
    onMount(async () => {
        const module = await import("../../../assets/libs/prismjs/prism.js");
    
        module.initializePrism();
      });
    return (
        <>
                <div class="container-fluid mt-4">
          <div class="mt-1">
            <div class="d-sm-flex align-items-center justify-content-between">
              <h4 class="mb-4 pb-2 fs-5">Typography</h4>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Bootstrap Typography</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4">
                    <h1>h1. Bootstrap heading</h1>
                    <h2>h2. Bootstrap heading</h2>
                    <h3>h3. Bootstrap heading</h3>
                    <h4>h4. Bootstrap heading</h4>
                    <h5>h5. Bootstrap heading</h5>
                    <h6>h6. Bootstrap heading</h6>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">
                    <code class="language-html">
                    {`
<h1>h1. Bootstrap heading</h1>
<h2>h2. Bootstrap heading</h2>
<h3>h3. Bootstrap heading</h3>
<h4>h4. Bootstrap heading</h4>
<h5>h5. Bootstrap heading</h5>
<h6>h6. Bootstrap heading</h6>
`}
                      </code>
                  </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Heading With Subtitle</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4">
                    <h1>Heading 1 <small>Sub-heading</small>
                    </h1>
                    <h2>Heading 2 <small>Sub-heading</small>
                    </h2>
                    <h3>Heading 3 <small>Sub-heading</small>
                    </h3>
                    <h4>Heading 4 <small>Sub-heading</small>
                    </h4>
                    <h5>Heading 5 <small>Sub-heading</small>
                    </h5>
                    <h6>Heading 6 <small>Sub-heading</small>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                        <code class="language-html">
                {`
<h1>Heading 1 <small>Sub-heading</small></h1>
<h2>Heading 2 <small>Sub-heading</small></h2>
<h3>Heading 3 <small>Sub-heading</small></h3>
<h4>Heading 4 <small>Sub-heading</small></h4>
<h5>Heading 5 <small>Sub-heading</small></h5>
<h6>Heading 6 <small>Sub-heading</small></h6>
`}

                                          </code>
                                      </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Paragraph with justify</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4">
                    <p class="text-justify">
                      Ambitioni dedisse scripsisse iudicaretur. Cras mattis
                      iudicium purus sit amet fermentum. Donec sed odio
                      operae, eu vulputate felis rhoncus. Praeterea iter est
                      quasdam res quas ex communi. At nos hinc posthac,
                      sitientis piros Afros. Petierunt uti sibi concilium
                      totius Galliae in diem certam indicere. Cras mattis
                      iudicium purus sit amet fermentum.
                    </p>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                        <code class="language-html">
                {`
<p class="text-justify">
    Ambitioni dedisse scripsisse iudicaretur. Cras mattis
    iudicium purus sit amet fermentum. Donec sed odio
    operae, eu vulputate felis rhoncus. Praeterea iter est
    quasdam res quas ex communi. At nos hinc posthac,
    sitientis piros Afros. Petierunt uti sibi concilium
    totius Galliae in diem certam indicere. Cras mattis
    iudicium purus sit amet fermentum.
</p>
`}

                                          </code>
                                      </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Alignment text</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4">
                    <p class="text-start">
                      Left aligned text on all viewport sizes.
                    </p>
                    <p class="text-center">
                      Center aligned text on all viewport sizes.
                    </p>
                    <p class="text-end">
                      Right aligned text on all viewport sizes.
                    </p>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                        <code class="language-html">
                {`
<p class="text-start">Left aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-end">Right aligned text on all viewport sizes.</p>
`}
                                          </code>
                                      </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">View port text</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4">
                    <p class="text-sm-left">
                      Left aligned text on viewports sized SM (small) or
                      wider.
                    </p>
                    <p class="text-md-left">
                      Left aligned text on viewports sized MD (medium) or
                      wider.
                    </p>
                    <p class="text-lg-left">
                      Left aligned text on viewports sized LG (large) or
                      wider.
                    </p>
                    <p class="text-xl-left">
                      Left aligned text on viewports sized XL (extra-large)
                      or wider.
                    </p>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                        <code class="language-html">
                {`
<p class="text-sm-left">Left aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-left">Left aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-left">Left aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-left">Left aligned text on viewports sized XL (extra-large) or wider.</p>
`}

                                          </code>
                                      </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Font weight and italics</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4 text-center">
                    <p class="fw-bold">Bold text.</p>
                    <p class="fw-normal">Normal weight text.</p>
                    <p class="fst-italic">Italic text.</p>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                        <code class="language-html">
                {`
<p class="fw-bold">Bold text.</p>
<p class="fw-normal">Normal weight text.</p>
<p class="fst-italic">Italic text.</p>
`}

                                          </code>
                                      </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Text colors</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4">
                    <p class="text-muted">
                      This is an example of muted text.
                    </p>
                    <p class="text-primary">
                      This is an example of primary text.
                    </p>
                    <p class="text-success">
                      This is an example of success text.
                    </p>
                    <p class="text-info">
                      This is an example of info text.
                    </p>
                    <p class="text-warning">
                      This is an example of warning text.
                    </p>
                    <p class="text-danger">
                      This is an example of danger text.
                    </p>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                        <code class="language-html">
                {`
<p class="text-muted">This is an example of muted text.</p>
<p class="text-primary">This is an example of primary text.</p>
<p class="text-success">This is an example of success text.</p>
<p class="text-info">This is an example of info text.</p>
<p class="text-warning">This is an example of warning text.</p>
<p class="text-danger">This is an example of danger text.</p>
`}
                                     </code>
                                  </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Address</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4">
                      <strong>Twitter, Inc.</strong>
                      <br/>
                      795 Folsom Ave, Suite 600
                      <br/>
                      San Francisco, CA 94107
                      <br/>
                      <abbr title="Phone">P:</abbr>(123) 456-7890
                      <strong>George Belly</strong>
                      <br/>
                      <a href="mailto:#">first.last@example.com</a>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                        <code class="language-html">
                {`
<address>
    <strong>Twitter, Inc.</strong>
    <br> 795 Folsom Ave, Suite 600
    <br> San Francisco, CA 94107
    <br>
    <abbr title="Phone">P:</abbr>(123) 456-7890
</address>
<address>
    <strong>George Belly</strong>
    <br>
    <a href="mailto:#">first.last@example.com</a>
</address>
`}

                                      </code>
                                  </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Ol Listing</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4">
                    <ol>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Consectetur adipiscing elit</li>
                      <li>Integer molestie lorem at massa</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                                      <code class="language-html">
                {`
<ol>
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa </li>
</ol>
`}

                                        </code>
                                      </pre>
              </div>
            </div>
            <div class="card">
              <div class="card-body border-bottom">
                <h4 class="card-title mb-0">Fancy Listing with href</h4>
              </div>
              <div class="p-8">
                <div class="card mb-0">
                  <div class="p-4">
                    <ul class="list-style-none">
                      <li>
                        <a href="javascript:void(0)">
                          <i class="fa fa-check text-info"></i> Lorem ipsum
                          dolor sit amet
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i class="fa fa-check text-info"></i> Consectetur
                          adipiscing elit
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i class="fa fa-check text-info"></i> Integer
                          molestie lorem at massa
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">


                <pre class="mt-0">                  <code class="language-html">
                {`
<ul class="list-style-none">
    <li><a href="javascript:void(0)"><i class="fa fa-check text-info"></i> Lorem ipsum dolor sit amet</a></li>
    <li><a href="javascript:void(0)"><i class="fa fa-check text-info"></i> Consectetur adipiscing elit</a></li>
    <li><a href="javascript:void(0)"><i class="fa fa-check text-info"></i> Integer molestie lorem at massa </a></li>
</ul>
`}

                    </code>
                  </pre>
              </div>
            </div>
          </div>
        </div>
        </div>
        </>
    )
}