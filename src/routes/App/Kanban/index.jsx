import { KanbanImg1, KanbanImg2, MyCard, Profilebg } from "../../../helper/img";

export default function Kanban() {
    return (
      <>
        <div class="container-fluid mw-100">
  <div class="page-titles mb-7 mb-md-5">
    <div class="row">
      <div class="col-lg-8 col-md-6 col-12 align-self-center">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb align-items-center">
            <li class="breadcrumb-item">
              <a class="text-muted text-decoration-none" href="../horizontal/index.html">
                <i class="ti ti-home fs-5" />
              </a>
            </li>
            <li class="breadcrumb-item" aria-current="page">Kanban</li>
          </ol>
        </nav>
        <h2 class="mb-0 fw-bolder fs-8">Kanban</h2>
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
  <div class="action-btn layout-top-spacing mb-7 d-flex align-items-center justify-content-between flex-wrap gap-6">
    <h5 class="mb-0 fs-5">Improving Work Processes</h5>
    <button id="add-list" class="btn btn-primary">Add List</button>
  </div>
  <div class="modal fade" id="addItemModal" tabindex="-1" role="dialog" aria-labelledby="addTaskModalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="add-task-title modal-title" id="addTaskModalTitleLabel1">Add Task</h5>
          <h5 class="edit-task-title modal-title" id="addTaskModalTitleLabel2">Edit Task</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-body">
          <div class="compose-box">
            <div class="compose-content" id="addTaskModalTitle">
              <div class="addTaskAccordion" id="add_task_accordion">
                <div class="task-content task-text-progress">
                  <div id="collapseTwo" class="collapse show" data-parent="#add_task_accordion">
                    <div class="task-content-body">
                      <form action="javascript:void(0);">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="task-title mb-4 d-flex">
                              <input id="kanban-title" type="text" placeholder="Task" class="form-control" name="task" />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="task-badge d-flex">
                              <textarea id="kanban-text" placeholder="Task Text" class="form-control" name="taskText" value="" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer justify-content-start">
          <div class="d-flex gap-6">
            <button data-btn-action="addTask" class="btn add-tsk btn-primary">Add Task</button>
            <button data-btn-action="editTask" class="btn edit-tsk btn-success">Save</button>
            <button class="btn bg-danger-subtle text-danger d-flex align-items-center gap-1" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="addListModal" tabindex="-1" role="dialog" aria-labelledby="addListModalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title add-list-title" id="addListModalTitleLabel1">Add List</h5>
          <h5 class="modal-title edit-list-title" id="addListModalTitleLabel2">Edit List</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div class="modal-body">
          <div class="compose-box">
            <div class="compose-content" id="addListModalTitle">
              <form action="javascript:void(0);">
                <div class="row">
                  <div class="col-md-12">
                    <div class="list-title d-flex align-items-center">
                      <input id="item-name" type="text" placeholder="List Name" class="form-control" name="task" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="modal-footer justify-content-start">
          <div class="d-flex gap-6">
            <button class="btn bg-danger-subtle text-danger d-flex align-items-center gap-1" data-bs-dismiss="modal">Cancel</button>
            <button class="btn add-list btn-primary">Add List</button>
            <button class="btn edit-list btn-success">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="deleteConformation" tabindex="-1" role="dialog" aria-labelledby="deleteConformationLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content" id="deleteConformationLabel">
        <div class="modal-header">
          <div class="icon round-40 d-flex align-items-center justify-content-center bg-light-danger text-danger me-2 rounded-circle">
            <i class="ti ti-trash fs-6" />
          </div>
          <h5 class="modal-title fw-semibold" id="exampleModalLabel">Delete the task?</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-body">
          <p class="mb-0">If you delete the task it will be gone forever. Are you sure you want to
            proceed?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn bg-danger-subtle text-danger" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-danger" data-remove="task">Delete</button>
        </div>
      </div>
    </div>
  </div>
  <div class="scrumboard" id="cancel-row">
    <div class="layout-spacing pb-3">
      <div data-simplebar>
        <div class="task-list-section">
          <div data-item="item-todo" class="task-list-container" data-action="sorting">
            <div class="connect-sorting connect-sorting-todo">
              <div class="task-container-header">
                <h6 class="item-head mb-0 fs-4 fw-semibold" data-item-title="Todo">Todo</h6>
                <div class="hstack gap-2">
                  <div class="add-kanban-title">
                    <a class="addTask d-flex align-items-center justify-content-center gap-1 lh-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add Task">
                      <i class="ti ti-plus text-dark" />
                    </a>
                  </div>
                  <div class="dropdown">
                    <a class="dropdown-toggle" href="javascript:void(0)" role="button" id="dropdownMenuLink-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <i class="ti ti-dots-vertical text-dark" />
                    </a>
                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink-1">
                      <a class="dropdown-item list-edit" href="javascript:void(0);">Edit</a>
                      <a class="dropdown-item list-delete" href="javascript:void(0);">Delete</a>
                      <a class="dropdown-item list-clear-all" href="javascript:void(0);">Clear All</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="connect-sorting-content" data-sortable="true">
                <div data-draggable="true" class="card img-task">
                  <div class="card-body">
                    <div class="task-header">
                      <div>
                        <h4 data-item-title="This is first task">
                          This is first task</h4>
                      </div>
                      <div class="dropdown">
                        <a class="dropdown-toggle" href="javascript:void(0)" role="button" id="dropdownMenuLink-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <i class="ti ti-dots-vertical text-dark" />
                        </a>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink-1">
                          <a class="dropdown-item kanban-item-edit cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);">
                            <i class="ti ti-pencil fs-5" />Edit
                          </a>
                          <a class="dropdown-item kanban-item-delete cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);">
                            <i class="ti ti-trash fs-5" />Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="task-content p-0">
                      <img src={KanbanImg1} class="img-fluid" alt="scrumboard" />
                    </div>
                    <div class="task-body">
                      <div class="task-bottom">
                        <div class="tb-section-1">
                          <span class="hstack gap-2 fs-2" data-item-date="24 July">
                            <i class="ti ti-calendar fs-5" /> 24 July
                          </span>
                        </div>
                        <div class="tb-section-2">
                          <span class="badge text-bg-success fs-1">Design</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-draggable="true" class="card img-task">
                  <div class="card-body">
                    <div class="task-header">
                      <div>
                        <h4 data-item-title="Lets do some task on pd">
                          Lets do some task on pd</h4>
                      </div>
                      <div class="dropdown">
                        <a class="dropdown-toggle" href="javascript:void(0)" role="button" id="dropdownMenuLink-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <i class="ti ti-dots-vertical text-dark" />
                        </a>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink-1">
                          <a class="dropdown-item kanban-item-edit cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);">
                            <i class="ti ti-pencil fs-5" />Edit
                          </a>
                          <a class="dropdown-item kanban-item-delete cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);">
                            <i class="ti ti-trash fs-5" />Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="task-content">
                      <p class="mb-0" data-item-text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, o eiusmod tempor incid.">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, o eiusmod tempor incid.
                      </p>
                    </div>
                    <div class="task-body">
                      <div class="task-bottom">
                        <div class="tb-section-1">
                          <span class="hstack gap-2 fs-2" data-item-date="24 July">
                            <i class="ti ti-calendar fs-5" /> 24 July
                          </span>
                        </div>
                        <div class="tb-section-2">
                          <span class="badge text-bg-warning fs-1">Development</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-draggable="true" class="card img-task">
                  <div class="card-body">
                    <div class="task-header">
                      <div>
                        <h4 data-item-title="Do some projects on React Native with Flutter">
                          Do some projects on React Native with Flutter</h4>
                      </div>
                      <div class="dropdown">
                        <a class="dropdown-toggle" href="javascript:void(0)" role="button" id="dropdownMenuLink-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <i class="ti ti-dots-vertical text-dark" />
                        </a>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink-1">
                          <a class="dropdown-item kanban-item-edit cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);">
                            <i class="ti ti-pencil fs-5" />Edit
                          </a>
                          <a class="dropdown-item kanban-item-delete cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);">
                            <i class="ti ti-trash fs-5" />Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="task-body">
                      <div class="task-bottom">
                        <div class="tb-section-1">
                          <span class="hstack gap-2 fs-2" data-item-date="24 July">
                            <i class="ti ti-calendar fs-5" /> 24 July
                          </span>
                        </div>
                        <div class="tb-section-2">
                          <span class="badge text-bg-primary fs-1">Mobile</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-item="item-inprogress" class="task-list-container" data-action="sorting">
            <div class="connect-sorting connect-sorting-inprogress">
              <div class="task-container-header">
                <h6 class="item-head mb-0 fs-4 fw-semibold" data-item-title="In Progress">In Progress</h6>
                <div class="hstack gap-2">
                  <div class="dropdown">
                    <a class="dropdown-toggle" href="javascript:void(0)" role="button" id="dropdownMenuLink-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <i class="ti ti-dots-vertical text-dark" />
                    </a>
                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink-1">
                      <a class="dropdown-item list-edit" href="javascript:void(0);">Edit</a>
                      <a class="dropdown-item list-delete" href="javascript:void(0);">Delete</a>
                      <a class="dropdown-item list-clear-all" href="javascript:void(0);">Clear All</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="connect-sorting-content" data-sortable="true">
                <div data-draggable="true" class="card">
                  <div class="card-body">
                    <div class="task-header">
                      <div>
                        <h4 data-item-title="Design navigation changes">
                          Design navigation changes</h4>
                      </div>
                      <div class="dropdown">
                        <a class="dropdown-toggle" href="javascript:void(0)" role="button" id="dropdownMenuLink-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <i class="ti ti-dots-vertical text-dark" />
                        </a>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink-1">
                          <a class="dropdown-item kanban-item-edit cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);">
                            <i class="ti ti-pencil fs-5" />Edit
                          </a>
                          <a class="dropdown-item kanban-item-delete cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);">
                            <i class="ti ti-trash fs-5" />Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="task-body">
                      <div class="task-bottom">
                        <div class="tb-section-1">
                          <span class="hstack gap-2 fs-2" data-item-date="24 July">
                            <i class="ti ti-calendar fs-5" /> 24 July
                          </span>
                        </div>
                        <div class="tb-section-2">
                          <span class="badge text-bg-primary fs-1">Mobile</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-draggable="true" class="card img-task">
                  <div class="card-body">
                    <div class="task-header">
                      <div>
                        <h4 data-item-title="Battle with fire">
                          Battle with fire</h4>
                      </div>
                      <div class="dropdown">
                        <a class="dropdown-toggle" href="javascript:void(0)" role="button" id="dropdownMenuLink-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <i class="ti ti-dots-vertical text-dark" />
                        </a>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink-1">
                          <a class="dropdown-item kanban-item-edit cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);">
                            <i class="ti ti-pencil fs-5" />Edit
                          </a>
                          <a class="dropdown-item kanban-item-delete cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);">
                            <i class="ti ti-trash fs-5" />Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="task-content p-0">
                      <img src={KanbanImg2} class="img-fluid" alt="scrumboard" />
                    </div>
                    <div class="task-body">
                      <div class="task-bottom">
                        <div class="tb-section-1">
                          <span class="hstack gap-2 fs-2" data-item-date="24 July">
                            <i class="ti ti-calendar fs-5" /> 24 July
                          </span>
                        </div>
                        <div class="tb-section-2">
                          <span class="badge text-bg-success fs-1">Design</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-draggable="true" class="card">
                  <div class="card-body">
                    <div class="task-header">
                      <div>
                        <h4 data-item-title="First design concept">
                          First design concept</h4>
                      </div>
                      <div class="dropdown">
                        <a class="dropdown-toggle" href="javascript:void(0)" role="button" id="dropdownMenuLink-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <i class="ti ti-dots-vertical text-dark" />
                        </a>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink-1">
                          <a class="dropdown-item kanban-item-edit cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);">
                            <i class="ti ti-pencil fs-5" />Edit
                          </a>
                          <a class="dropdown-item kanban-item-delete cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);">
                            <i class="ti ti-trash fs-5" />Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="task-body">
                      <div class="task-bottom">
                        <div class="tb-section-1">
                          <span class="hstack gap-2 fs-2" data-item-date="24 July">
                            <i class="ti ti-calendar fs-5" /> 24 July
                          </span>
                        </div>
                        <div class="tb-section-2">
                          <span class="badge text-bg-primary fs-1">Mobile</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-item="item-pending" class="task-list-container" data-action="sorting">
            <div class="connect-sorting connect-sorting-pending">
              <div class="task-container-header">
                <h6 class="item-head mb-0 fs-4 fw-semibold" data-item-title="Pending">Pending</h6>
                <div class="hstack gap-2">
                  <div class="dropdown">
                    <a class="dropdown-toggle" href="javascript:void(0)" role="button" id="dropdownMenuLink-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <i class="ti ti-dots-vertical text-dark" />
                    </a>
                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink-1">
                      <a class="dropdown-item list-edit" href="javascript:void(0);">Edit</a>
                      <a class="dropdown-item list-delete" href="javascript:void(0);">Delete</a>
                      <a class="dropdown-item list-clear-all" href="javascript:void(0);">Clear All</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="connect-sorting-content" data-sortable="true">
                <div data-draggable="true" class="card img-task">
                  <div class="card-body">
                    <div class="task-header">
                      <div>
                        <h4 data-item-title="Persona development">
                          Persona development</h4>
                      </div>
                      <div class="dropdown">
                        <a class="dropdown-toggle" href="javascript:void(0)" role="button" id="dropdownMenuLink-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <i class="ti ti-dots-vertical text-dark" />
                        </a>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink-1">
                          <a class="dropdown-item kanban-item-edit cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);">
                            <i class="ti ti-pencil fs-5" />Edit
                          </a>
                          <a class="dropdown-item kanban-item-delete cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);">
                            <i class="ti ti-trash fs-5" />Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="task-content">
                      <p class="mb-0" data-item-text="Create user personas based on the research data to represent different user groups and their characteristics, gols, and behaviors..">
                        Create user personas based on the research data to represent different user groups and
                        their
                        characteristics, gols, and behaviors..
                      </p>
                    </div>
                    <div class="task-body">
                      <div class="task-bottom">
                        <div class="tb-section-1">
                          <span class="hstack gap-2 fs-2" data-item-date="24 July">
                            <i class="ti ti-calendar fs-5" /> 24 July
                          </span>
                        </div>
                        <div class="tb-section-2">
                          <span class="badge text-bg-warning fs-1">UX stage</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-draggable="true" class="card img-task">
                  <div class="card-body">
                    <div class="task-header">
                      <div>
                        <h4 data-item-title="Redesign overview">
                          Redesign overview</h4>
                      </div>
                      <div class="dropdown">
                        <a class="dropdown-toggle" href="javascript:void(0)" role="button" id="dropdownMenuLink-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <i class="ti ti-dots-vertical text-dark" />
                        </a>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink-1">
                          <a class="dropdown-item kanban-item-edit cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);">
                            <i class="ti ti-pencil fs-5" />Edit
                          </a>
                          <a class="dropdown-item kanban-item-delete cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);">
                            <i class="ti ti-trash fs-5" />Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="task-content p-0">
                      <img src={MyCard} class="img-fluid" alt="scrumboard" />
                    </div>
                    <div class="task-body">
                      <div class="task-bottom">
                        <div class="tb-section-1">
                          <span class="hstack gap-2 fs-2" data-item-date="24 July">
                            <i class="ti ti-calendar fs-5" /> 24 July
                          </span>
                        </div>
                        <div class="tb-section-2">
                          <span class="badge text-bg-success fs-1">Design</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-item="item-pending" class="task-list-container" data-action="sorting">
            <div class="connect-sorting connect-sorting-done">
              <div class="task-container-header">
                <h6 class="item-head mb-0 fs-4 fw-semibold" data-item-title="Done">Done</h6>
                <div class="hstack gap-2">
                  <div class="dropdown">
                    <a class="dropdown-toggle" href="javascript:void(0)" role="button" id="dropdownMenuLink-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <i class="ti ti-dots-vertical text-dark" />
                    </a>
                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink-1">
                      <a class="dropdown-item list-edit" href="javascript:void(0);">Edit</a>
                      <a class="dropdown-item list-delete" href="javascript:void(0);">Delete</a>
                      <a class="dropdown-item list-clear-all" href="javascript:void(0);">Clear All</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="connect-sorting-content" data-sortable="true">
                <div data-draggable="true" class="card img-task">
                  <div class="card-body">
                    <div class="task-header">
                      <div>
                        <h4 data-item-title="Usability testing">
                          Usability testing</h4>
                      </div>
                      <div class="dropdown">
                        <a class="dropdown-toggle" href="javascript:void(0)" role="button" id="dropdownMenuLink-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <i class="ti ti-dots-vertical text-dark" />
                        </a>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink-1">
                          <a class="dropdown-item kanban-item-edit cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);">
                            <i class="ti ti-pencil fs-5" />Edit
                          </a>
                          <a class="dropdown-item kanban-item-delete cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);">
                            <i class="ti ti-trash fs-5" />Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="task-content p-0">
                      <img src={Profilebg} class="img-fluid" alt="scrumboard" />
                    </div>
                    <div class="task-body">
                      <div class="task-bottom">
                        <div class="tb-section-1">
                          <span class="hstack gap-2 fs-2" data-item-date="24 July">
                            <i class="ti ti-calendar fs-5" /> 24 July
                          </span>
                        </div>
                        <div class="tb-section-2">
                          <span class="badge text-bg-info fs-1">Research</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-draggable="true" class="card">
                  <div class="card-body">
                    <div class="task-header">
                      <div>
                        <h4 data-item-title="Introduce new navigation">
                          Introduce new navigation</h4>
                      </div>
                      <div class="dropdown">
                        <a class="dropdown-toggle" href="javascript:void(0)" role="button" id="dropdownMenuLink-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <i class="ti ti-dots-vertical text-dark" />
                        </a>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink-1">
                          <a class="dropdown-item kanban-item-edit cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);">
                            <i class="ti ti-pencil fs-5" />Edit
                          </a>
                          <a class="dropdown-item kanban-item-delete cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);">
                            <i class="ti ti-trash fs-5" />Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="task-body">
                      <div class="task-bottom">
                        <div class="tb-section-1">
                          <span class="hstack gap-2 fs-2" data-item-date="24 July">
                            <i class="ti ti-calendar fs-5" /> 24 July
                          </span>
                        </div>
                        <div class="tb-section-2">
                          <span class="badge text-bg-danger fs-1">Data science</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-draggable="true" class="card">
                  <div class="card-body">
                    <div class="task-header">
                      <div>
                        <h4 data-item-title="Branding visual identity">
                          Branding visual identity</h4>
                      </div>
                      <div class="dropdown">
                        <a class="dropdown-toggle" href="javascript:void(0)" role="button" id="dropdownMenuLink-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <i class="ti ti-dots-vertical text-dark" />
                        </a>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink-1">
                          <a class="dropdown-item kanban-item-edit cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);">
                            <i class="ti ti-pencil fs-5" />Edit
                          </a>
                          <a class="dropdown-item kanban-item-delete cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);">
                            <i class="ti ti-trash fs-5" />Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="task-body">
                      <div class="task-bottom">
                        <div class="tb-section-1">
                          <span class="hstack gap-2 fs-2" data-item-date="24 July">
                            <i class="ti ti-calendar fs-5" /> 24 July
                          </span>
                        </div>
                        <div class="tb-section-2">
                          <span class="badge text-bg-primary fs-1">Branding</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-draggable="true" class="card">
                  <div class="card-body">
                    <div class="task-header">
                      <div>
                        <h4 data-item-title="Competitor research">
                          Competitor research</h4>
                      </div>
                      <div class="dropdown">
                        <a class="dropdown-toggle" href="javascript:void(0)" role="button" id="dropdownMenuLink-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <i class="ti ti-dots-vertical text-dark" />
                        </a>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink-1">
                          <a class="dropdown-item kanban-item-edit cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);">
                            <i class="ti ti-pencil fs-5" />Edit
                          </a>
                          <a class="dropdown-item kanban-item-delete cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);">
                            <i class="ti ti-trash fs-5" />Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="task-content">
                      <p class="mb-0" data-item-text="research competitors and identify weakness and strengths each of them. comparing their product features, quelity...">
                        research competitors and identify weakness and strengths each of them. comparing their
                        product features, quelity...
                      </p>
                    </div>
                    <div class="task-body">
                      <div class="task-bottom">
                        <div class="tb-section-1">
                          <span class="hstack gap-2 fs-2" data-item-date="24 July">
                            <i class="ti ti-calendar fs-5" /> 24 July
                          </span>
                        </div>
                        <div class="tb-section-2">
                          <span class="badge text-bg-warning fs-1">UX stages</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
  