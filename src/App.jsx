import Home from "./routes/Home";
import { Route, Router } from "@solidjs/router";
import MainLayout from "./components/MainLayout";
import AddProduct from "./routes/App/AddProduct";
import Chat from "./routes/App/Chat";
import Checkout from "./routes/App/Checkout";
import ContactList from "./routes/App/ContactList";
import ContactTable from "./routes/App/ContactTable";
import Detail from "./routes/App/Detail";
import EditProduct from "./routes/App/EditProduct";
import Email from "./routes/App/Email";
import Invoice from "./routes/App/Invoice";
import Kanban from "./routes/App/Kanban";
import List from "./routes/App/List";
import Notes from "./routes/App/Notes";
import Shop from "./routes/App/Shop";
import ShopDetail from "./routes/App/ShopDetail";
import UserProfile from "./routes/App/UserProfile";
import Analytical from "./routes/Dashboard/Analytical";
import ECommerce from "./routes/Dashboard/ECommerce";
import AccountSetting from "./routes/Pages/AccountSetting";
import Banner from "./routes/Pages/Banner";
import Card from "./routes/Pages/Card";
import Charts from "./routes/Pages/Charts";
import FAQ from "./routes/Pages/FAQ";
import LandingPage from "./routes/Pages/LandingPage";
import Pricing from "./routes/Pages/Pricing";
import Buttons from "./routes/UI/Buttons";
import Dropdowns from "./routes/UI/Dropdowns";
import Modal from "./routes/UI/Modal";
import Pagination from "./routes/UI/Pagination";
import Progressbar from "./routes/UI/Progressbar";
import Tab from "./routes/UI/Tab";
import Typography from "./routes/UI/Typography";
import Spinner from "./routes/UI/Spinner";
import Accordion from "./routes/UI/Accordion";
import Badge from "./routes/UI/Badge";
import Alerts from "./routes/UI/Alerts";
import BootstrapUI from "./routes/UI/BootstrapUI";
import Breadcrumb from "./routes/UI/Breadcrumb";
import Carousel from "./routes/UI/Carousel";
import Grid from "./routes/UI/Grid";
import Link from "./routes/UI/Link";
import Lists from "./routes/UI/Lists";
import Scrollspy from "./routes/UI/Scrollspy";
import TooltipPopover from "./routes/UI/TooltipPopover";
import Error from "./routes/Error";
import Offcanvas from "./routes/UI/Offcanvas";
import BasicForm from "./routes/Forms/BasicForm";
import BootstrapSwitch from "./routes/Forms/BootstrapSwitch";
import CheckboxAndRadios from "./routes/Forms/CheckboxAndRadios";
import FormActions from "./routes/Forms/FormActions";
import FormBordered from "./routes/Forms/FormBordered";
import FormDetail from "./routes/Forms/FormDetail";
import FormHorizontal from "./routes/Forms/FormHorizontal";
import FormsInput from "./routes/Forms/FormsInput";
import FormVertical from "./routes/Forms/FormVertical";
import FormWizard from "./routes/Forms/FormWizard";
import InputGroups from "./routes/Forms/InputGroups";
import RowSeparator from "./routes/Forms/RowSeparator";
import Select2 from "./routes/Forms/Select2";
import InputGrid from "./routes/Forms/InputGrid";
import QuillEditor from "./routes/Forms/QuillEditor";
import BasicTable from "./routes/Tables/BasicTable";
import Api from "./routes/Tables/API";
import DarkBasicTable from "./routes/Tables/DarkBasicTable";
import ColouredTable from "./routes/Tables/ColouredTable";
import SizingTable from "./routes/Tables/SizingTable";
import BasicInitialisation from "./routes/Tables/BasicInitialisation";
import AdvancedInitialisation from "./routes/Tables/AdvancedInitialisation";
import IconSolar from "./routes/Icons/IconSolar";
import IconTabler from "./routes/Icons/IconTabler";
import Posts from "./routes/App/Posts";
import AppCalendar from "./routes/App/Calendar";
import AreaChart from "./routes/Charts/AreaChart";
import BarChart from "./routes/Charts/BarChart";
import LineChart from "./routes/Charts/LineChart";
import PieChart from "./routes/Charts/PieChart";
import RadarChart from "./routes/Charts/RadarChart";
import RadialChart from "./routes/Charts/RadialChart";
import Login from "./routes/Login";
import Regitter from "./routes/Register";
import ForgotPassword from "./routes/ForgotPassword";
import DocsLayout from "./components/DocsLayout";
import Introduction from "./routes/Docs/Introduction";
import DocsBootstrapUI from "./routes/Docs/BootstrapUI";
import Breadcrumbs from "./routes/Docs/Breadcrumbs";
import DocsButtons from "./routes/Docs/Buttons";
import DocsCarousel from "./routes/Docs/Carousel";
import DocsChangeLogo from "./routes/Docs/ChangeLogo";
import Color from "./routes/Docs/Color";
import GlobalSkinColor from "./routes/Docs/GlobalSkinColor";
import Icons from "./routes/Docs/Icons";
import Layouts from "./routes/Docs/Layouts";
import ListMedia from "./routes/Docs/ListMedia";
import Notifications from "./routes/Docs/Notifications";
import DocsProgressbar from "./routes/Docs/Progressbar";
import DocsScrollspy from "./routes/Docs/Scrollspy";
import DocsSpinner from "./routes/Docs/Spinner";
import Start from "./routes/Docs/Start";
import Structure from "./routes/Docs/Structure";
import Tabs from "./routes/Docs/Tabs";
import Toasts from "./routes/Docs/Toasts";
import DocsTooltipPopover from "./routes/Docs/TooltipPopover";
import DocsTypography from "./routes/Docs/Typography";
import Modals from "./routes/Docs/Modals";
import Grids from "./routes/Docs/Grids";
import ChangeLog from "./routes/Docs/ChangeLog";


function App() {
  return (
    <Router>
      {/* Error */}
      <Route path="/*all" component={Error} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Regitter} />
      <Route path="/forgotPassword" component={ForgotPassword} />
      <Route path="/pages/landingPage" component={LandingPage} />
      {/* <Route path="/" component={Home} /> */}
      <Route path="/" component={DocsLayout}>
        <Route path="/docs/bootstrapUI" component={DocsBootstrapUI} />
        <Route path="/docs/breadcrumbs" component={Breadcrumbs} />
        <Route path="/docs/buttons" component={DocsButtons} />
        <Route path="/docs/carousel" component={DocsCarousel} />
        <Route path="/docs/changeLogo" component={DocsChangeLogo} />
        <Route path="/docs/color" component={Color} />
        <Route path="/docs/globalSkinColor" component={GlobalSkinColor} />
        <Route path="/docs/icons" component={Icons} />
        <Route path="/docs/introduction" component={Introduction} />
        <Route path="/docs/layouts" component={Layouts} />
        <Route path="/docs/listMedia" component={ListMedia} />
        <Route path="/docs/notifications" component={Notifications} />
        <Route path="/docs/progressbar" component={DocsProgressbar} />
        <Route path="/docs/scrollspy" component={DocsScrollspy} />
        <Route path="/docs/spinner" component={DocsSpinner} />
        <Route path="/docs/start" component={Start} />
        <Route path="/docs/structure" component={Structure} />
        <Route path="/docs/tabs" component={Tabs} />
        <Route path="/docs/toasts" component={Toasts} />
        <Route path="/docs/tooltipPopover" component={DocsTooltipPopover} />
        <Route path="/docs/typography" component={DocsTypography} />
        <Route path="/docs/modals" component={Modals} />
        <Route path="/docs/grids" component={Grids} />
        <Route path="/docs/changeLog" component={ChangeLog} />
      </Route>
      {/* app */}
      <Route path="/" component={MainLayout}>
        <Route path="/" component={Analytical} />
        <Route path="/eCommerce" component={ECommerce} />
        <Route path="/app/addproduct" component={AddProduct} />
        <Route path="/app/calendar" component={AppCalendar} />
        <Route path="/app/chat" component={Chat} />
        <Route path="/app/checkout" component={Checkout} />
        <Route path="/app/contactlist" component={ContactList} />
        <Route path="/app/contacttable" component={ContactTable} />
        <Route path="/app/detail" component={Detail} />
        <Route path="/app/editproduct" component={EditProduct} />
        <Route path="/app/email" component={Email} />
        <Route path="/app/invoice" component={Invoice} />
        <Route path="/app/kanban" component={Kanban} />
        <Route path="/app/list" component={List} />
        <Route path="/app/notes" component={Notes} />
        <Route path="/app/posts" component={Posts} />
        <Route path="/app/shop" component={Shop} />
        <Route path="/app/shopdetail" component={ShopDetail} />
        <Route path="/app/userprofile" component={UserProfile} />

        {/* Pages */}
        <Route path="/pages/accountSetting" component={AccountSetting} />
        <Route path="/pages/banner" component={Banner} />
        <Route path="/pages/card" component={Card} />
        <Route path="/pages/charts" component={Charts} />
        <Route path="/pages/faq" component={FAQ} />
        <Route path="/pages/pricing" component={Pricing} />

        {/* UI */}
        <Route path="/ui/buttons" component={Buttons} />
        <Route path="/ui/offcanvas" component={Offcanvas} />
        <Route path="/ui/dropdowns" component={Dropdowns} />
        <Route path="/ui/modals" component={Modal} />
        <Route path="/ui/pagination" component={Pagination} />
        <Route path="/ui/progressbar" component={Progressbar} />
        <Route path="/ui/tabs" component={Tab} />
        <Route path="/ui/typography" component={Typography} />
        <Route path="/ui/spinner" component={Spinner} />
        <Route path="/ui/accordion" component={Accordion} />
        <Route path="/ui/badge" component={Badge} />
        <Route path="/ui/notification" component={Alerts} />
        <Route path="/ui/bootstrapUI" component={BootstrapUI} />
        <Route path="/ui/breadcrumb" component={Breadcrumb} />
        <Route path="/ui/carousel" component={Carousel} />
        <Route path="/ui/grid" component={Grid} />
        <Route path="/ui/link" component={Link} />
        <Route path="/ui/lists" component={Lists} />
        <Route path="/ui/scrollspy" component={Scrollspy} />
        <Route path="/ui/tooltipPopover" component={TooltipPopover} />

        {/* forms */}
        <Route path="/forms/basicForm" component={BasicForm} />
        <Route path="/forms/bootstrapSwitch" component={BootstrapSwitch} />
        <Route path="/forms/checkboxRadios" component={CheckboxAndRadios} />
        <Route path="/forms/actions" component={FormActions} />
        <Route path="/forms/bordered" component={FormBordered} />
        <Route path="/forms/detail" component={FormDetail} />
        <Route path="/forms/horizontal" component={FormHorizontal} />
        <Route path="/forms/input" component={FormsInput} />
        <Route path="/forms/vertical" component={FormVertical} />
        <Route path="/forms/wizard" component={FormWizard} />
        <Route path="/forms/inputGroups" component={InputGroups} />
        <Route path="/forms/inputGrid" component={InputGrid} />
        <Route path="/forms/rowSeparator" component={RowSeparator} />
        <Route path="/forms/select2" component={Select2} />
        <Route path="/forms/quillEditor" component={QuillEditor} />

        {/* Chart */}
        <Route path="/chart/apexArea" component={AreaChart} />
        <Route path="/chart/apexBar" component={BarChart} />
        <Route path="/chart/apexLine" component={LineChart} />
        <Route path="/chart/apexPie" component={PieChart} />
        <Route path="/chart/apexRadar" component={RadarChart} />
        <Route path="/chart/apexRadial" component={RadialChart} />

        {/* Tables */}
        <Route
          path="/table/datatableAdvanced"
          component={AdvancedInitialisation}
        />
        <Route path="/table/basic" component={BasicTable} />
        <Route path="/table/darkBasic" component={DarkBasicTable} />
        <Route path="/table/Sizing" component={SizingTable} />
        <Route path="/table/layoutColoured" component={ColouredTable} />
        <Route path="/table/datatableBasic" component={BasicInitialisation} />
        <Route path="/table/datatableApi" component={Api} />

        {/* Icons */}
        <Route path="/icon/tabler" component={IconTabler} />
        <Route path="/icon/solar" component={IconSolar} />
      </Route>

    </Router>
  );
}

export default App;
