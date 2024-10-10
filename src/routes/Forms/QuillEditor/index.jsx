import { onMount } from "solid-js";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // นำเข้า CSS ของ Quill

export default function QuillEditor() {
  let editorContainer; // Reference สำหรับเชื่อมต่อกับ DOM ที่จะสร้าง editor

  onMount(() => {
    const quill = new Quill(editorContainer, {
      theme: "snow", // ใช้ธีม 'snow' ของ Quill
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          ["image", "code-block"],
        ],
      },
    });

    // Event listener สำหรับ text-change ถ้าคุณต้องการดึงข้อมูล
    quill.on("text-change", () => {
      console.log(quill.root.innerHTML); // แสดงข้อมูลที่ถูกแก้ไขใน console
    });
  });

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
                  <li class="breadcrumb-item" aria-current="page">Quill Editor</li>
                </ol>
              </nav>
              <h2 class="mb-0 fw-bolder fs-8">Quill Editor</h2>
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
        <div class="card">
          <div class="card-body">
            {/* Editor container */}
            <div ref={editorContainer} id="editor" style="height: 300px;">
              <p>Hello World!</p>
              <p>Some initial <strong>bold</strong> text</p>
              <p><br /></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
