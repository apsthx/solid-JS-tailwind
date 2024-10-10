/* @refresh reload */
import { render } from "solid-js/web";
// import $ from "jquery";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/libs/apexcharts/dist/apexcharts.min.js";
import "./index.css";
import "./assets/css/plugins/jsgrid-theme.css";
import "./assets/css/plugins/jsgrid-theme.min.css";
import "./assets/css/plugins/jsgrid.css";
import "./assets/css/plugins/jsgrid.min.css";
// import './assets/css/styles-rtl.css'
import "./assets/css/styles.css";
import "./assets/fonts/tabler-icons/tabler-icons.css";
import "./assets/fonts/flag-icon-css/flag-icon.min.css";
import "./assets/fonts/crypto-icons/cryptocoins-colors.css";
import "./assets/fonts/crypto-icons/cryptocoins.css";
// import "./assets/js/dashboards/dashboard2.js";
// import "./assets/js/dashboards/dashboard.js";
import "./assets/libs/prismjs/themes/prism-okaidia.min.css";
// import "./assets/libs/prismjs/prism.js";
import "./assets/libs/simplebar/dist/simplebar.min.js";

// datatable
import "./assets/libs/datatables.net/js/jquery.dataTables.min.js";
import "./assets/libs/datatables.net-bs5/js/dataTables.bootstrap5.min.js";
import "./assets/libs/datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "./assets/js/datatable/datatable-basic.init.js";

// import "./assets/js/forms/form-wizard.js";
// import "./assets/libs/jquery-validation/dist/jquery.validate.min.js";
// import "./assets/libs/quill/dist/quill.snow.css";
// import "./assets/libs/quill/dist/quill.min.js";
// import "./assets/js/forms/quill-init.js";
import "./assets/js/apps/calendar-init.js";
// import './assets/js/apps/contact.js'
import './assets/js/apps/chat.js'
import './assets/js/apps/invoice.js'
import './assets/js/apps/jquery.PrintArea.js'
import "./assets/js/apex-chart/apex.line.init.js";
import "./assets/js/apex-chart/apex.area.init.js";
import "./assets/js/apex-chart/apex.bar.init.js";
import "./assets/js/apex-chart/apex.radar.init.js";
import "./assets/js/apex-chart/apex.radial.init.js";
import "./assets/js/apex-chart/apex.pie.init.js";
import "./assets/js/widget/widgets-charts.js";
import "./assets/libs/fullcalendar/index.global.min.js";
import "./assets/libs/owl.carousel/dist/assets/owl.carousel.min.css";
import "./assets/js/apps/notes.js";
import "./assets/libs/owl.carousel/dist/owl.carousel.min.js";
import "./assets/js/apps/productDetail.js";


import "./assets/libs/jquery-steps/build/jquery.steps.min.js";
import "./assets/libs/jquery-validation/dist/jquery.validate.min.js";
// import "./assets/js/forms/form-wizard.js";
import "./assets/libs/jquery-ui/dist/jquery-ui.min.js";
import "./assets/js/apps/kanban.js";
import "./assets/js/apps/ecommerce.js";

import "./assets/libs/quill/dist/quill.min.js";
import "./assets/js/forms/quill-init.js";
// import "./assets/libs/select2/dist/js/select2.full.min.js";
// import "./assets/libs/select2/dist/js/select2.min.js";
// import "./assets/js/forms/select2.init.js";
import "./assets/libs/jquery.repeater/jquery.repeater.min.js";
import "./assets/js/forms/repeater-init.js";
import "./assets/js/apps/edit-product.js";
import "./assets/libs/dropzone/dist/min/dropzone.min.js";

import "./assets/libs/quill/dist/quill.snow.css";
import "./assets/libs/dropzone/dist/min/dropzone.min.css";
import "./assets/libs/select2/dist/css/select2.min.css";

// import './assets/js/theme/theme.js'
// import './assets/js/theme/app.min.js'
// import './assets/js/theme/sidebarmenu.js'
// import './assets/libs/apexcharts/dist/apexcharts.min.js'
// import './assets/js/dashboards/dashboard.js'

import App from "./App";
console.log(`App`, App);
const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(() => <App />, root);
