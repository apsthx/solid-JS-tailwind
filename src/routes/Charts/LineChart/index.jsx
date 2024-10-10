import { onMount } from "solid-js";

export default function LineChart() {
  onMount(async () => {
    const module = await import("../../../assets/js/apex-chart/apex.line.init.js");

    module.initializeApexLineInit();
  });
  return (
    <div class="container-fluid mw-100">
      <div class="page-titles mb-7 mb-md-5">
        <div class="row">
          <div class="col-lg-8 col-md-6 col-12 align-self-center">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb align-items-center">
                <li class="breadcrumb-item">
                  <a
                    class="text-muted text-decoration-none"
                    href="/"
                  >
                    <i class="ti ti-home fs-5" />
                  </a>
                </li>
                <li class="breadcrumb-item" aria-current="page">
                  Chart Apex Line
                </li>
              </ol>
            </nav>
            <h2 class="mb-0 fw-bolder fs-8">Chart Apex Line</h2>
          </div>
          <div class="col-lg-4 col-md-6 d-none d-md-flex align-items-center justify-content-end">
            <select
              class="form-select w-auto bg-primary-subtle border-0"
              aria-label="Default select example"
            >
              <option selected>Today 23 March</option>
              <option value="1">Today 23 March</option>
              <option value="2">Today 24 March</option>
              <option value="3">Today 25 March</option>
            </select>
            <a
              href="javascript:void(0)"
              class="btn btn-primary d-flex align-items-center ms-2"
            >
              <i class="ti ti-plus me-1" />
              Add New
            </a>
          </div>
        </div>
      </div>
      {/* Start Basic Line Chart */}
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Basic Line Chart</h4>
          <div id="chart-line-basic" class="mx-n3" />
        </div>
      </div>
      {/* End Basic Line Chart */}
      {/* Start Line Chart With Data Label */}
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Data Label Line Chart</h4>
          <div id="chart-line-with-data-label" class="mx-n3" />
        </div>
      </div>
      {/* End Line Chart With Data Label */}
      {/* Start Zoomable Line Chart */}
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Zoomable Line Chart</h4>
          <div id="chart-line-zoomable" class="mx-n3" />
        </div>
      </div>
      {/* End Zoomable Line Chart */}
      {/* Start Gradient Line Chart */}
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Gradient Line Chart</h4>
          <div id="chart-line-gradient" class="mx-n3" />
        </div>
      </div>
      {/* End Gradient Line Chart */}
      {/* Start Real Time Line Chart */}
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Real Time Line Chart</h4>
          <div id="chart-line-real-time" class="mx-n3" />
        </div>
      </div>
      {/* End Real Time Line Chart */}
    </div>
  );
}
