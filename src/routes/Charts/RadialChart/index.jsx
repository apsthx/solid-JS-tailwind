import { onMount } from "solid-js";

export default function RadialChart() {
  onMount(async () => {
    const module = await import("../../../assets/js/apex-chart/apex.radial.init.js");

    module.initializeApexRadialInit();
  });
  return (
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
                <li class="breadcrumb-item" aria-current="page">Chart Apex Radial</li>
              </ol>
            </nav>
            <h2 class="mb-0 fw-bolder fs-8">Chart Apex Radial</h2>
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
        {/* Start Basic Radial Bar Chart */}
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Basic Radial Bar Chart</h4>
              <div id="chart-radial-basic" />
            </div>
          </div>
        </div>
        {/* End Basic Radial Bar Chart */}
        {/* Start Multiple Radial Bar Chart */}
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Multiple Radial Bar Chart</h4>
              <div id="chart-radial-multiple" />
            </div>
          </div>
        </div>
        {/* End Multiple Radial Bar Chart */}
        {/* Start Circle Radial Bar Chart */}
        <div class="col-lg-6 d-flex align-items-stretch">
          <div class="card w-100">
            <div class="card-body">
              <h4 class="card-title">Circle Radial Bar Chart</h4>
              <div id="chart-radial-circle" />
            </div>
          </div>
        </div>
        {/* End Circle Radial Bar Chart */}
        {/* Start Gradient Radial Bar Chart */}
        <div class="col-lg-6 d-flex align-items-stretch">
          <div class="card w-100">
            <div class="card-body">
              <h4 class="card-title">Gradient Radial Bar Chart</h4>
              <div id="chart-radial-gradient" />
            </div>
          </div>
        </div>
        {/* End Gradient Radial Bar Chart */}
        {/* Start Stroked Gauge Radial Bar Chart */}
        <div class="col-lg-6 d-flex align-items-stretch">
          <div class="card w-100">
            <div class="card-body">
              <h4 class="card-title">Stroked Gauge Radial Bar Chart</h4>
              <div id="chart-radial-stroked-gauge" />
            </div>
          </div>
        </div>
        {/* End Stroked Gauge Radial Bar Chart */}
        {/* Start Semi Circle Radial Bar Chart */}
        <div class="col-lg-6 d-flex align-items-stretch">
          <div class="card w-100">
            <div class="card-body">
              <h4 class="card-title">Semi Circle Radial Bar Chart</h4>
              <div class="d-flex align-items-center justify-content-center mt-5">
                <div id="chart-radial-semi-circle" />
              </div>
            </div>
          </div>
        </div>
        {/* End Semi Circle Radial Bar Chart */}
      </div>
    </div>
  )
}