import { User2, User3, User4, User5, User6, User7, User8, User9 } from "../../../helper/img";

export default function BasicInitialisation() {
  return (
    <div class="body-wrapper">
      <div class="container-fluid mw-100">
        <div class="page-titles mb-7 mb-md-5">
          <div class="row">
            <div class="col-lg-8 col-md-6 col-12 align-self-center">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb align-items-center">
                  <li class="breadcrumb-item">
                    <a
                      class="text-muted text-decoration-none"
                      href="../dark/index.html"
                    >
                      <i class="ti ti-home fs-5"></i>
                    </a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    Datatable Basic
                  </li>
                </ol>
              </nav>
              <h2 class="mb-0 fw-bolder fs-8">Datatable Basic</h2>
            </div>
            <div class="col-lg-4 col-md-6 d-none d-md-flex align-items-center justify-content-end">
              <select
                class="form-select w-auto bg-primary-subtle border-0"
                aria-label="Default select example"
              >
                <option selected="">Today 23 March</option>
                <option value="1">Today 23 March</option>
                <option value="2">Today 24 March</option>
                <option value="3">Today 25 March</option>
              </select>
              <a
                href="javascript:void(0)"
                class="btn btn-primary d-flex align-items-center ms-2"
              >
                <i class="ti ti-plus me-1"></i>
                Add New
              </a>
            </div>
          </div>
        </div>
        <div class="datatables">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Zero Configuration</h4>
              <p class="card-subtitle mb-3">
                DataTables has most features enabled by default, so all you need
                to do to use it with your own tables is to call the construction
                function:<code> $().DataTable();</code>. You can refer full
                documentation from here
                <a href="https://datatables.net/">Datatables</a>
              </p>
              <div class="table-responsive">
                <div id="zero_config_wrapper" class="dataTables_wrapper">
                  <div class="dataTables_length" id="zero_config_length">
                    <label>
                      Show{" "}
                      <select
                        name="zero_config_length"
                        aria-controls="zero_config"
                        class=""
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>{" "}
                      entries
                    </label>
                  </div>
                  <div id="zero_config_filter" class="dataTables_filter">
                    <label>
                      Search:
                      <input
                        type="search"
                        class=""
                        placeholder=""
                        aria-controls="zero_config"
                      />
                    </label>
                  </div>
                  <table
                    id="zero_config"
                    class="table table-striped table-bordered text-nowrap align-middle dataTable"
                    aria-describedby="zero_config_info"
                  >
                    <thead>
                      <tr>
                        <th
                          class="  sorting_asc"
                          tabindex="0"
                          aria-controls="zero_config"
                          rowspan="1"
                          colspan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                          style="width: 253.733px;"
                        >
                          Name
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="zero_config"
                          rowspan="1"
                          colspan="1"
                          aria-label="Position: activate to sort column ascending"
                          style="width: 277.274px;"
                        >
                          Position
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="zero_config"
                          rowspan="1"
                          colspan="1"
                          aria-label="Office: activate to sort column ascending"
                          style="width: 128.993px;"
                        >
                          Office
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="zero_config"
                          rowspan="1"
                          colspan="1"
                          aria-label="Age: activate to sort column ascending"
                          style="width: 51.3542px;"
                        >
                          Age
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="zero_config"
                          rowspan="1"
                          colspan="1"
                          aria-label="Start date: activate to sort column ascending"
                          style="width: 114.618px;"
                        >
                          Start date
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="zero_config"
                          rowspan="1"
                          colspan="1"
                          aria-label="Salary: activate to sort column ascending"
                          style="width: 104.167px;"
                        >
                          Salary
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="odd">
                        <td class="sorting_1">
                          <div class="d-flex align-items-center gap-6">
                            <img
                              src={User5}
                              width="45"
                              class="rounded-circle"
                            />
                            <h6 class="mb-0"> Airi Satou</h6>
                          </div>
                        </td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>33</td>
                        <td>2008/11/28</td>
                        <td>$162,700</td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1">
                          <div class="d-flex align-items-center gap-6">
                            <img
                              src={User3}
                              width="45"
                              class="rounded-circle"
                            />
                            <h6 class="mb-0"> Ashton Cox</h6>
                          </div>
                        </td>
                        <td>Junior Technical Author</td>
                        <td>San Francisco</td>
                        <td>66</td>
                        <td>2009/01/12</td>
                        <td>$86,000</td>
                      </tr>
                      <tr class="odd">
                        <td class="sorting_1">
                          <div class="d-flex align-items-center gap-6">
                            <img
                              src={User6}
                              width="45"
                              class="rounded-circle"
                            />
                            <h6 class="mb-0"> Brielle Williamson</h6>
                          </div>
                        </td>
                        <td>Integration Specialist</td>
                        <td>New York</td>
                        <td>61</td>
                        <td>2012/12/02</td>
                        <td>$372,000</td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1">
                          <div class="d-flex align-items-center gap-6">
                            <img
                              src={User4}
                              width="45"
                              class="rounded-circle"
                            />
                            <h6 class="mb-0"> Cedric Kelly</h6>
                          </div>
                        </td>
                        <td>Senior Javascript Developer</td>
                        <td>Edinburgh</td>
                        <td>22</td>
                        <td>2012/03/29</td>
                        <td>$433,060</td>
                      </tr>
                      <tr class="odd">
                        <td class="sorting_1">
                          <div class="d-flex align-items-center gap-6">
                            <img
                              src={User2}
                              width="45"
                              class="rounded-circle"
                            />
                            <h6 class="mb-0"> Garrett Winters</h6>
                          </div>
                        </td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>63</td>
                        <td>2011/07/25</td>
                        <td>$170,750</td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1">
                          <div class="d-flex align-items-center gap-6">
                            <img
                              src={User7}
                              width="45"
                              class="rounded-circle"
                            />
                            <h6 class="mb-0"> Herrod Chandler</h6>
                          </div>
                        </td>
                        <td>Sales Assistant</td>
                        <td>San Francisco</td>
                        <td>59</td>
                        <td>2012/08/06</td>
                        <td>$137,500</td>
                      </tr>
                      <tr class="odd">
                        <td class="sorting_1">
                          <div class="d-flex align-items-center gap-6">
                            <img
                              src={User4}
                              width="45"
                              class="rounded-circle"
                            />
                            <h6 class="mb-0"> Tiger Nixon</h6>
                          </div>
                        </td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>$320,800</td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1">
                          <div class="d-flex align-items-center gap-6">
                            <img
                              src={User5}
                              width="45"
                              class="rounded-circle"
                            />
                            <h6 class="mb-0">Angelica Ramos</h6>
                          </div>
                        </td>
                        <td>Chief Executive Officer (CEO)</td>
                        <td>London</td>
                        <td>47</td>
                        <td>2009/10/09</td>
                        <td>$1,200,000</td>
                      </tr>
                      <tr class="odd">
                        <td class="sorting_1">
                          <div class="d-flex align-items-center gap-6">
                            <img
                              src={User9}
                              width="45"
                              class="rounded-circle"
                            />
                            <h6 class="mb-0">Bradley Greer</h6>
                          </div>
                        </td>
                        <td>Software Engineer</td>
                        <td>London</td>
                        <td>41</td>
                        <td>2012/10/13</td>
                        <td>$132,000</td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1">
                          <div class="d-flex align-items-center gap-6">
                            <img
                              src={User8}
                              width="45"
                              class="rounded-circle"
                            />
                            <h6 class="mb-0">Brenden Wagner</h6>
                          </div>
                        </td>
                        <td>Software Engineer</td>
                        <td>San Francisco</td>
                        <td>28</td>
                        <td>2011/06/07</td>
                        <td>$206,850</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th rowspan="1" colspan="1">
                          Name
                        </th>
                        <th rowspan="1" colspan="1">
                          Position
                        </th>
                        <th rowspan="1" colspan="1">
                          Office
                        </th>
                        <th rowspan="1" colspan="1">
                          Age
                        </th>
                        <th rowspan="1" colspan="1">
                          Start date
                        </th>
                        <th rowspan="1" colspan="1">
                          Salary
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                  <div
                    class="dataTables_info"
                    id="zero_config_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 1 to 10 of 57 entries
                  </div>
                  <div
                    class="dataTables_paginate paging_simple_numbers"
                    id="zero_config_paginate"
                  >
                    <a
                      class="paginate_button previous disabled"
                      aria-controls="zero_config"
                      aria-disabled="true"
                      role="link"
                      data-dt-idx="previous"
                      tabindex="-1"
                      id="zero_config_previous"
                    >
                      Previous
                    </a>
                    <span>
                      <a
                        class="paginate_button current"
                        aria-controls="zero_config"
                        role="link"
                        aria-current="page"
                        data-dt-idx="0"
                        tabindex="0"
                      >
                        1
                      </a>
                      <a
                        class="paginate_button "
                        aria-controls="zero_config"
                        role="link"
                        data-dt-idx="1"
                        tabindex="0"
                      >
                        2
                      </a>
                      <a
                        class="paginate_button "
                        aria-controls="zero_config"
                        role="link"
                        data-dt-idx="2"
                        tabindex="0"
                      >
                        3
                      </a>
                      <a
                        class="paginate_button "
                        aria-controls="zero_config"
                        role="link"
                        data-dt-idx="3"
                        tabindex="0"
                      >
                        4
                      </a>
                      <a
                        class="paginate_button "
                        aria-controls="zero_config"
                        role="link"
                        data-dt-idx="4"
                        tabindex="0"
                      >
                        5
                      </a>
                      <a
                        class="paginate_button "
                        aria-controls="zero_config"
                        role="link"
                        data-dt-idx="5"
                        tabindex="0"
                      >
                        6
                      </a>
                    </span>
                    <a
                      class="paginate_button next"
                      aria-controls="zero_config"
                      role="link"
                      data-dt-idx="next"
                      tabindex="0"
                      id="zero_config_next"
                    >
                      Next
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Default Ordering</h4>
              <p class="card-subtitle mb-3">
                With DataTables you can alter the ordering characteristics of
                the table at initialisation time. Using the
                <code> order | option</code>
                order initialisation parameter, you can set the table to display
                the data in exactly the order that you want.
              </p>
              <div class="table-responsive">
                <div id="default_order_wrapper" class="dataTables_wrapper">
                  <div class="dataTables_length" id="default_order_length">
                    <label>
                      Show{" "}
                      <select
                        name="default_order_length"
                        aria-controls="default_order"
                        class=""
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>{" "}
                      entries
                    </label>
                  </div>
                  <div id="default_order_filter" class="dataTables_filter">
                    <label>
                      Search:
                      <input
                        type="search"
                        class=""
                        placeholder=""
                        aria-controls="default_order"
                      />
                    </label>
                  </div>
                  <table
                    id="default_order"
                    class="table table-striped table-bordered display text-nowrap dataTable"
                    aria-describedby="default_order_info"
                  >
                    <thead>
                      <tr>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="default_order"
                          rowspan="1"
                          colspan="1"
                          aria-label="Name: activate to sort column ascending"
                          style="width: 189.774px;"
                        >
                          Name
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="default_order"
                          rowspan="1"
                          colspan="1"
                          aria-label="Position: activate to sort column ascending"
                          style="width: 300.26px;"
                        >
                          Position
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="default_order"
                          rowspan="1"
                          colspan="1"
                          aria-label="Office: activate to sort column ascending"
                          style="width: 141.337px;"
                        >
                          Office
                        </th>
                        <th
                          class="sorting sorting_desc"
                          tabindex="0"
                          aria-controls="default_order"
                          rowspan="1"
                          colspan="1"
                          aria-sort="descending"
                          aria-label="Age: activate to sort column ascending"
                          style="width: 58.1424px;"
                        >
                          Age
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="default_order"
                          rowspan="1"
                          colspan="1"
                          aria-label="Start date: activate to sort column ascending"
                          style="width: 125.92px;"
                        >
                          Start date
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="default_order"
                          rowspan="1"
                          colspan="1"
                          aria-label="Salary: activate to sort column ascending"
                          style="width: 114.705px;"
                        >
                          Salary
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="odd">
                        <td>Ashton Cox</td>
                        <td>Junior Technical Author</td>
                        <td>San Francisco</td>
                        <td class="sorting_1">66</td>
                        <td>2009/01/12</td>
                        <td>$86,000</td>
                      </tr>
                      <tr class="even">
                        <td>Michael Silva</td>
                        <td>Marketing Designer</td>
                        <td>London</td>
                        <td class="sorting_1">66</td>
                        <td>2012/11/27</td>
                        <td>$198,500</td>
                      </tr>
                      <tr class="odd">
                        <td>Jackson Bradshaw</td>
                        <td>Director</td>
                        <td>New York</td>
                        <td class="sorting_1">65</td>
                        <td>2008/09/26</td>
                        <td>$645,750</td>
                      </tr>
                      <tr class="even">
                        <td>Paul Byrd</td>
                        <td>Chief Financial Officer (CFO)</td>
                        <td>New York</td>
                        <td class="sorting_1">64</td>
                        <td>2010/06/09</td>
                        <td>$725,000</td>
                      </tr>
                      <tr class="odd">
                        <td>Olivia Liang</td>
                        <td>Support Engineer</td>
                        <td>Singapore</td>
                        <td class="sorting_1">64</td>
                        <td>2011/02/03</td>
                        <td>$234,500</td>
                      </tr>
                      <tr class="even">
                        <td>Serge Baldwin</td>
                        <td>Data Coordinator</td>
                        <td>Singapore</td>
                        <td class="sorting_1">64</td>
                        <td>2012/04/09</td>
                        <td>$138,575</td>
                      </tr>
                      <tr class="odd">
                        <td>Garrett Winters</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td class="sorting_1">63</td>
                        <td>2011/07/25</td>
                        <td>$170,750</td>
                      </tr>
                      <tr class="even">
                        <td>Zenaida Frank</td>
                        <td>Software Engineer</td>
                        <td>New York</td>
                        <td class="sorting_1">63</td>
                        <td>2010/01/04</td>
                        <td>$125,250</td>
                      </tr>
                      <tr class="odd">
                        <td>Vivian Harrell</td>
                        <td>Financial Controller</td>
                        <td>San Francisco</td>
                        <td class="sorting_1">62</td>
                        <td>2009/02/14</td>
                        <td>$452,500</td>
                      </tr>
                      <tr class="even">
                        <td>Tiger Nixon</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td class="sorting_1">61</td>
                        <td>2011/04/25</td>
                        <td>$320,800</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th rowspan="1" colspan="1">
                          Name
                        </th>
                        <th rowspan="1" colspan="1">
                          Position
                        </th>
                        <th rowspan="1" colspan="1">
                          Office
                        </th>
                        <th rowspan="1" colspan="1">
                          Age
                        </th>
                        <th rowspan="1" colspan="1">
                          Start date
                        </th>
                        <th rowspan="1" colspan="1">
                          Salary
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                  <div
                    class="dataTables_info"
                    id="default_order_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 1 to 10 of 57 entries
                  </div>
                  <div
                    class="dataTables_paginate paging_simple_numbers"
                    id="default_order_paginate"
                  >
                    <a
                      class="paginate_button previous disabled"
                      aria-controls="default_order"
                      aria-disabled="true"
                      role="link"
                      data-dt-idx="previous"
                      tabindex="-1"
                      id="default_order_previous"
                    >
                      Previous
                    </a>
                    <span>
                      <a
                        class="paginate_button current"
                        aria-controls="default_order"
                        role="link"
                        aria-current="page"
                        data-dt-idx="0"
                        tabindex="0"
                      >
                        1
                      </a>
                      <a
                        class="paginate_button "
                        aria-controls="default_order"
                        role="link"
                        data-dt-idx="1"
                        tabindex="0"
                      >
                        2
                      </a>
                      <a
                        class="paginate_button "
                        aria-controls="default_order"
                        role="link"
                        data-dt-idx="2"
                        tabindex="0"
                      >
                        3
                      </a>
                      <a
                        class="paginate_button "
                        aria-controls="default_order"
                        role="link"
                        data-dt-idx="3"
                        tabindex="0"
                      >
                        4
                      </a>
                      <a
                        class="paginate_button "
                        aria-controls="default_order"
                        role="link"
                        data-dt-idx="4"
                        tabindex="0"
                      >
                        5
                      </a>
                      <a
                        class="paginate_button "
                        aria-controls="default_order"
                        role="link"
                        data-dt-idx="5"
                        tabindex="0"
                      >
                        6
                      </a>
                    </span>
                    <a
                      class="paginate_button next"
                      aria-controls="default_order"
                      role="link"
                      data-dt-idx="next"
                      tabindex="0"
                      id="default_order_next"
                    >
                      Next
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Multi-column ordering</h4>

              <p class="card-subtitle mb-3">
                On a per-column basis (i.e. order by a specific column and then
                a secondary column if the data in the first column is
                identical), through the
                <code> columns.orderData</code> option.
              </p>
              <div class="table-responsive">
                <div
                  id="multi_col_order_wrapper"
                  class="dataTables_wrapper no-footer"
                >
                  <div class="dataTables_length" id="multi_col_order_length">
                    <label>
                      Show{" "}
                      <select
                        name="multi_col_order_length"
                        aria-controls="multi_col_order"
                        class=""
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>{" "}
                      entries
                    </label>
                  </div>
                  <div id="multi_col_order_filter" class="dataTables_filter">
                    <label>
                      Search:
                      <input
                        type="search"
                        class=""
                        placeholder=""
                        aria-controls="multi_col_order"
                      />
                    </label>
                  </div>
                  <table
                    id="multi_col_order"
                    class="table table-striped table-bordered display text-nowrap dataTable no-footer"
                    aria-describedby="multi_col_order_info"
                  >
                    <thead>
                      <tr>
                        <th
                          class="sorting sorting_asc"
                          tabindex="0"
                          aria-controls="multi_col_order"
                          rowspan="1"
                          colspan="1"
                          aria-sort="ascending"
                          aria-label="First name: activate to sort column descending"
                          style="width: 155.729px;"
                        >
                          First name
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="multi_col_order"
                          rowspan="1"
                          colspan="1"
                          aria-label="Last name: activate to sort column ascending"
                          style="width: 152.708px;"
                        >
                          Last name
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="multi_col_order"
                          rowspan="1"
                          colspan="1"
                          aria-label="Position: activate to sort column ascending"
                          style="width: 354.601px;"
                        >
                          Position
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="multi_col_order"
                          rowspan="1"
                          colspan="1"
                          aria-label="Office: activate to sort column ascending"
                          style="width: 170.521px;"
                        >
                          Office
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="multi_col_order"
                          rowspan="1"
                          colspan="1"
                          aria-label="Salary: activate to sort column ascending"
                          style="width: 139.67px;"
                        >
                          Salary
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="odd">
                        <td class="sorting_1 sorting_2">Airi</td>
                        <td>Satou</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>$162,700</td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1 sorting_2">Angelica</td>
                        <td>Ramos</td>
                        <td>Chief Executive Officer (CEO)</td>
                        <td>London</td>
                        <td>$1,200,000</td>
                      </tr>
                      <tr class="odd">
                        <td class="sorting_1 sorting_2">Ashton</td>
                        <td>Cox</td>
                        <td>Junior Technical Author</td>
                        <td>San Francisco</td>
                        <td>$86,000</td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1 sorting_2">Bradley</td>
                        <td>Greer</td>
                        <td>Software Engineer</td>
                        <td>London</td>
                        <td>$132,000</td>
                      </tr>
                      <tr class="odd">
                        <td class="sorting_1 sorting_2">Brenden</td>
                        <td>Wagner</td>
                        <td>Software Engineer</td>
                        <td>San Francisco</td>
                        <td>$206,850</td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1 sorting_2">Brielle</td>
                        <td>Williamson</td>
                        <td>Integration Specialist</td>
                        <td>New York</td>
                        <td>$372,000</td>
                      </tr>
                      <tr class="odd">
                        <td class="sorting_1 sorting_2">Bruno</td>
                        <td>Nash</td>
                        <td>Software Engineer</td>
                        <td>London</td>
                        <td>$163,500</td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1 sorting_2">Caesar</td>
                        <td>Vance</td>
                        <td>Pre-Sales Support</td>
                        <td>New York</td>
                        <td>$106,450</td>
                      </tr>
                      <tr class="odd">
                        <td class="sorting_1 sorting_2">Cara</td>
                        <td>Stevens</td>
                        <td>Sales Assistant</td>
                        <td>New York</td>
                        <td>$145,600</td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1 sorting_2">Cedric</td>
                        <td>Kelly</td>
                        <td>Senior Javascript Developer</td>
                        <td>Edinburgh</td>
                        <td>$433,060</td>
                      </tr>
                    </tbody>
                  </table>
                  <div
                    class="dataTables_info"
                    id="multi_col_order_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 1 to 10 of 57 entries
                  </div>
                  <div
                    class="dataTables_paginate paging_simple_numbers"
                    id="multi_col_order_paginate"
                  >
                    <a
                      class="paginate_button previous disabled"
                      aria-controls="multi_col_order"
                      aria-disabled="true"
                      role="link"
                      data-dt-idx="previous"
                      tabindex="-1"
                      id="multi_col_order_previous"
                    >
                      Previous
                    </a>
                    <span>
                      <a
                        class="paginate_button current"
                        aria-controls="multi_col_order"
                        role="link"
                        aria-current="page"
                        data-dt-idx="0"
                        tabindex="0"
                      >
                        1
                      </a>
                      <a
                        class="paginate_button "
                        aria-controls="multi_col_order"
                        role="link"
                        data-dt-idx="1"
                        tabindex="0"
                      >
                        2
                      </a>
                      <a
                        class="paginate_button "
                        aria-controls="multi_col_order"
                        role="link"
                        data-dt-idx="2"
                        tabindex="0"
                      >
                        3
                      </a>
                      <a
                        class="paginate_button "
                        aria-controls="multi_col_order"
                        role="link"
                        data-dt-idx="3"
                        tabindex="0"
                      >
                        4
                      </a>
                      <a
                        class="paginate_button "
                        aria-controls="multi_col_order"
                        role="link"
                        data-dt-idx="4"
                        tabindex="0"
                      >
                        5
                      </a>
                      <a
                        class="paginate_button "
                        aria-controls="multi_col_order"
                        role="link"
                        data-dt-idx="5"
                        tabindex="0"
                      >
                        6
                      </a>
                    </span>
                    <a
                      class="paginate_button next"
                      aria-controls="multi_col_order"
                      role="link"
                      data-dt-idx="next"
                      tabindex="0"
                      id="multi_col_order_next"
                    >
                      Next
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">DOM Positioning</h4>

              <p class="card-subtitle mb-3">
                When customising DataTables for your own usage, you might find
                that the default position of the feature elements (filter input
                etc) is not quite to your liking. To address this issue
                DataTables takes inspiration from the CSS 3 Advanced Layout
                Module and provides the
                <code> dom</code> initialisation parameter which can be set to
                indicate where you wish particular features to appear in the
                DOM. You can also specify div wrapping containers (with an id
                and / or class) to provide complete layout flexibility.
              </p>
              <div class="table-responsive">
                <div id="DOM_pos_wrapper" class="dataTables_wrapper">
                  <div class="top">
                    <div
                      class="dataTables_info"
                      id="DOM_pos_info"
                      role="status"
                      aria-live="polite"
                    >
                      Showing 1 to 10 of 57 entries
                    </div>
                  </div>
                  <table
                    id="DOM_pos"
                    class="table table-striped table-bordered display text-nowrap dataTable"
                    aria-describedby="DOM_pos_info"
                  >
                    <thead>
                      <tr>
                        <th
                          class="sorting sorting_asc"
                          tabindex="0"
                          aria-controls="DOM_pos"
                          rowspan="1"
                          colspan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                          style="width: 189.774px;"
                        >
                          Name
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DOM_pos"
                          rowspan="1"
                          colspan="1"
                          aria-label="Position: activate to sort column ascending"
                          style="width: 300.26px;"
                        >
                          Position
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DOM_pos"
                          rowspan="1"
                          colspan="1"
                          aria-label="Office: activate to sort column ascending"
                          style="width: 141.337px;"
                        >
                          Office
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DOM_pos"
                          rowspan="1"
                          colspan="1"
                          aria-label="Age: activate to sort column ascending"
                          style="width: 58.1424px;"
                        >
                          Age
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DOM_pos"
                          rowspan="1"
                          colspan="1"
                          aria-label="Start date: activate to sort column ascending"
                          style="width: 125.92px;"
                        >
                          Start date
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DOM_pos"
                          rowspan="1"
                          colspan="1"
                          aria-label="Salary: activate to sort column ascending"
                          style="width: 114.705px;"
                        >
                          Salary
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="odd">
                        <td class="sorting_1">Airi Satou</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>33</td>
                        <td>2008/11/28</td>
                        <td>$162,700</td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1">Angelica Ramos</td>
                        <td>Chief Executive Officer (CEO)</td>
                        <td>London</td>
                        <td>47</td>
                        <td>2009/10/09</td>
                        <td>$1,200,000</td>
                      </tr>
                      <tr class="odd">
                        <td class="sorting_1">Ashton Cox</td>
                        <td>Junior Technical Author</td>
                        <td>San Francisco</td>
                        <td>66</td>
                        <td>2009/01/12</td>
                        <td>$86,000</td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1">Bradley Greer</td>
                        <td>Software Engineer</td>
                        <td>London</td>
                        <td>41</td>
                        <td>2012/10/13</td>
                        <td>$132,000</td>
                      </tr>
                      <tr class="odd">
                        <td class="sorting_1">Brenden Wagner</td>
                        <td>Software Engineer</td>
                        <td>San Francisco</td>
                        <td>28</td>
                        <td>2011/06/07</td>
                        <td>$206,850</td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1">Brielle Williamson</td>
                        <td>Integration Specialist</td>
                        <td>New York</td>
                        <td>61</td>
                        <td>2012/12/02</td>
                        <td>$372,000</td>
                      </tr>
                      <tr class="odd">
                        <td class="sorting_1">Bruno Nash</td>
                        <td>Software Engineer</td>
                        <td>London</td>
                        <td>38</td>
                        <td>2011/05/03</td>
                        <td>$163,500</td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1">Caesar Vance</td>
                        <td>Pre-Sales Support</td>
                        <td>New York</td>
                        <td>21</td>
                        <td>2011/12/12</td>
                        <td>$106,450</td>
                      </tr>
                      <tr class="odd">
                        <td class="sorting_1">Cara Stevens</td>
                        <td>Sales Assistant</td>
                        <td>New York</td>
                        <td>46</td>
                        <td>2011/12/06</td>
                        <td>$145,600</td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1">Cedric Kelly</td>
                        <td>Senior Javascript Developer</td>
                        <td>Edinburgh</td>
                        <td>22</td>
                        <td>2012/03/29</td>
                        <td>$433,060</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th rowspan="1" colspan="1">
                          Name
                        </th>
                        <th rowspan="1" colspan="1">
                          Position
                        </th>
                        <th rowspan="1" colspan="1">
                          Office
                        </th>
                        <th rowspan="1" colspan="1">
                          Age
                        </th>
                        <th rowspan="1" colspan="1">
                          Start date
                        </th>
                        <th rowspan="1" colspan="1">
                          Salary
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                  <div class="bottom">
                    <div id="DOM_pos_filter" class="dataTables_filter">
                      <label>
                        Search:
                        <input
                          type="search"
                          class=""
                          placeholder=""
                          aria-controls="DOM_pos"
                        />
                      </label>
                    </div>
                    <div class="dataTables_length" id="DOM_pos_length">
                      <label>
                        Show{" "}
                        <select
                          name="DOM_pos_length"
                          aria-controls="DOM_pos"
                          class=""
                        >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>{" "}
                        entries
                      </label>
                    </div>
                    <div
                      class="dataTables_paginate paging_simple_numbers"
                      id="DOM_pos_paginate"
                    >
                      <a
                        class="paginate_button previous disabled"
                        aria-controls="DOM_pos"
                        aria-disabled="true"
                        role="link"
                        data-dt-idx="previous"
                        tabindex="-1"
                        id="DOM_pos_previous"
                      >
                        Previous
                      </a>
                      <span>
                        <a
                          class="paginate_button current"
                          aria-controls="DOM_pos"
                          role="link"
                          aria-current="page"
                          data-dt-idx="0"
                          tabindex="0"
                        >
                          1
                        </a>
                        <a
                          class="paginate_button "
                          aria-controls="DOM_pos"
                          role="link"
                          data-dt-idx="1"
                          tabindex="0"
                        >
                          2
                        </a>
                        <a
                          class="paginate_button "
                          aria-controls="DOM_pos"
                          role="link"
                          data-dt-idx="2"
                          tabindex="0"
                        >
                          3
                        </a>
                        <a
                          class="paginate_button "
                          aria-controls="DOM_pos"
                          role="link"
                          data-dt-idx="3"
                          tabindex="0"
                        >
                          4
                        </a>
                        <a
                          class="paginate_button "
                          aria-controls="DOM_pos"
                          role="link"
                          data-dt-idx="4"
                          tabindex="0"
                        >
                          5
                        </a>
                        <a
                          class="paginate_button "
                          aria-controls="DOM_pos"
                          role="link"
                          data-dt-idx="5"
                          tabindex="0"
                        >
                          6
                        </a>
                      </span>
                      <a
                        class="paginate_button next"
                        aria-controls="DOM_pos"
                        role="link"
                        data-dt-idx="next"
                        tabindex="0"
                        id="DOM_pos_next"
                      >
                        Next
                      </a>
                    </div>
                  </div>
                  <div class="clear"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Alternative Pagination</h4>

              <p class="card-subtitle mb-3">
                The default page control presented by DataTables (forward and
                backward buttons with up to 7 page numbers in-between) is fine
                for most situations, but there are cases where you may wish to
                customise the options presented to the end user. This is done
                through DataTables' extensible pagination mechanism, the
                <code> pagingType</code> option.
              </p>
              <div class="table-responsive">
                <div id="alt_pagination_wrapper" class="dataTables_wrapper">
                  <div class="dataTables_length" id="alt_pagination_length">
                    <label>
                      Show{" "}
                      <select
                        name="alt_pagination_length"
                        aria-controls="alt_pagination"
                        class=""
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>{" "}
                      entries
                    </label>
                  </div>
                  <div id="alt_pagination_filter" class="dataTables_filter">
                    <label>
                      Search:
                      <input
                        type="search"
                        class=""
                        placeholder=""
                        aria-controls="alt_pagination"
                      />
                    </label>
                  </div>
                  <table
                    id="alt_pagination"
                    class="table table-striped table-bordered display text-nowrap dataTable"
                    aria-describedby="alt_pagination_info"
                  >
                    <thead>
                      <tr>
                        <th
                          class="sorting sorting_asc"
                          tabindex="0"
                          aria-controls="alt_pagination"
                          rowspan="1"
                          colspan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                          style="width: 189.774px;"
                        >
                          Name
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="alt_pagination"
                          rowspan="1"
                          colspan="1"
                          aria-label="Position: activate to sort column ascending"
                          style="width: 300.26px;"
                        >
                          Position
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="alt_pagination"
                          rowspan="1"
                          colspan="1"
                          aria-label="Office: activate to sort column ascending"
                          style="width: 141.337px;"
                        >
                          Office
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="alt_pagination"
                          rowspan="1"
                          colspan="1"
                          aria-label="Age: activate to sort column ascending"
                          style="width: 58.1424px;"
                        >
                          Age
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="alt_pagination"
                          rowspan="1"
                          colspan="1"
                          aria-label="Start date: activate to sort column ascending"
                          style="width: 125.92px;"
                        >
                          Start date
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="alt_pagination"
                          rowspan="1"
                          colspan="1"
                          aria-label="Salary: activate to sort column ascending"
                          style="width: 114.705px;"
                        >
                          Salary
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="odd">
                        <td class="sorting_1">Airi Satou</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>33</td>
                        <td>2008/11/28</td>
                        <td>$162,700</td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1">Angelica Ramos</td>
                        <td>Chief Executive Officer (CEO)</td>
                        <td>London</td>
                        <td>47</td>
                        <td>2009/10/09</td>
                        <td>$1,200,000</td>
                      </tr>
                      <tr class="odd">
                        <td class="sorting_1">Ashton Cox</td>
                        <td>Junior Technical Author</td>
                        <td>San Francisco</td>
                        <td>66</td>
                        <td>2009/01/12</td>
                        <td>$86,000</td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1">Bradley Greer</td>
                        <td>Software Engineer</td>
                        <td>London</td>
                        <td>41</td>
                        <td>2012/10/13</td>
                        <td>$132,000</td>
                      </tr>
                      <tr class="odd">
                        <td class="sorting_1">Brenden Wagner</td>
                        <td>Software Engineer</td>
                        <td>San Francisco</td>
                        <td>28</td>
                        <td>2011/06/07</td>
                        <td>$206,850</td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1">Brielle Williamson</td>
                        <td>Integration Specialist</td>
                        <td>New York</td>
                        <td>61</td>
                        <td>2012/12/02</td>
                        <td>$372,000</td>
                      </tr>
                      <tr class="odd">
                        <td class="sorting_1">Bruno Nash</td>
                        <td>Software Engineer</td>
                        <td>London</td>
                        <td>38</td>
                        <td>2011/05/03</td>
                        <td>$163,500</td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1">Caesar Vance</td>
                        <td>Pre-Sales Support</td>
                        <td>New York</td>
                        <td>21</td>
                        <td>2011/12/12</td>
                        <td>$106,450</td>
                      </tr>
                      <tr class="odd">
                        <td class="sorting_1">Cara Stevens</td>
                        <td>Sales Assistant</td>
                        <td>New York</td>
                        <td>46</td>
                        <td>2011/12/06</td>
                        <td>$145,600</td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1">Cedric Kelly</td>
                        <td>Senior Javascript Developer</td>
                        <td>Edinburgh</td>
                        <td>22</td>
                        <td>2012/03/29</td>
                        <td>$433,060</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th rowspan="1" colspan="1">
                          Name
                        </th>
                        <th rowspan="1" colspan="1">
                          Position
                        </th>
                        <th rowspan="1" colspan="1">
                          Office
                        </th>
                        <th rowspan="1" colspan="1">
                          Age
                        </th>
                        <th rowspan="1" colspan="1">
                          Start date
                        </th>
                        <th rowspan="1" colspan="1">
                          Salary
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                  <div
                    class="dataTables_info"
                    id="alt_pagination_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 1 to 10 of 57 entries
                  </div>
                  <div
                    class="dataTables_paginate paging_full_numbers"
                    id="alt_pagination_paginate"
                  >
                    <a
                      class="paginate_button first disabled"
                      aria-controls="alt_pagination"
                      aria-disabled="true"
                      role="link"
                      data-dt-idx="first"
                      tabindex="-1"
                      id="alt_pagination_first"
                    >
                      First
                    </a>
                    <a
                      class="paginate_button previous disabled"
                      aria-controls="alt_pagination"
                      aria-disabled="true"
                      role="link"
                      data-dt-idx="previous"
                      tabindex="-1"
                      id="alt_pagination_previous"
                    >
                      Previous
                    </a>
                    <span>
                      <a
                        class="paginate_button current"
                        aria-controls="alt_pagination"
                        role="link"
                        aria-current="page"
                        data-dt-idx="0"
                        tabindex="0"
                      >
                        1
                      </a>
                      <a
                        class="paginate_button "
                        aria-controls="alt_pagination"
                        role="link"
                        data-dt-idx="1"
                        tabindex="0"
                      >
                        2
                      </a>
                      <a
                        class="paginate_button "
                        aria-controls="alt_pagination"
                        role="link"
                        data-dt-idx="2"
                        tabindex="0"
                      >
                        3
                      </a>
                      <a
                        class="paginate_button "
                        aria-controls="alt_pagination"
                        role="link"
                        data-dt-idx="3"
                        tabindex="0"
                      >
                        4
                      </a>
                      <a
                        class="paginate_button "
                        aria-controls="alt_pagination"
                        role="link"
                        data-dt-idx="4"
                        tabindex="0"
                      >
                        5
                      </a>
                      <a
                        class="paginate_button "
                        aria-controls="alt_pagination"
                        role="link"
                        data-dt-idx="5"
                        tabindex="0"
                      >
                        6
                      </a>
                    </span>
                    <a
                      class="paginate_button next"
                      aria-controls="alt_pagination"
                      role="link"
                      data-dt-idx="next"
                      tabindex="0"
                      id="alt_pagination_next"
                    >
                      Next
                    </a>
                    <a
                      class="paginate_button last"
                      aria-controls="alt_pagination"
                      role="link"
                      data-dt-idx="last"
                      tabindex="0"
                      id="alt_pagination_last"
                    >
                      Last
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
