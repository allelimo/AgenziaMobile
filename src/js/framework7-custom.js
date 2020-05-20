
import Framework7, { Device, Request, Utils } from 'framework7';
import Appbar from 'framework7/components/appbar/appbar.js';
import Dialog from 'framework7/components/dialog/dialog.js';
import Popup from 'framework7/components/popup/popup.js';
import Popover from 'framework7/components/popover/popover.js';
import Actions from 'framework7/components/actions/actions.js';
import Preloader from 'framework7/components/preloader/preloader.js';
import ListIndex from 'framework7/components/list-index/list-index.js';
import Tabs from 'framework7/components/tabs/tabs.js';
import Panel from 'framework7/components/panel/panel.js';
import Form from 'framework7/components/form/form.js';
import Input from 'framework7/components/input/input.js';
import Checkbox from 'framework7/components/checkbox/checkbox.js';
import Radio from 'framework7/components/radio/radio.js';
import Toggle from 'framework7/components/toggle/toggle.js';
import Range from 'framework7/components/range/range.js';
import PullToRefresh from 'framework7/components/pull-to-refresh/pull-to-refresh.js';
import DataTable from 'framework7/components/data-table/data-table.js';
import Messages from 'framework7/components/messages/messages.js';
import Messagebar from 'framework7/components/messagebar/messagebar.js';
import Notification from 'framework7/components/notification/notification.js';
import Autocomplete from 'framework7/components/autocomplete/autocomplete.js';
import Tooltip from 'framework7/components/tooltip/tooltip.js';
import Menu from 'framework7/components/menu/menu.js';
import LoginScreen from 'framework7/components/login-screen/login-screen.js';

Framework7.use([
  Appbar,
  Dialog,
  Popup,
  Popover,
  Actions,
  Preloader,
  ListIndex,
  Tabs,
  Panel,
  Form,
  Input,
  Checkbox,
  Radio,
  Toggle,
  Range,
  PullToRefresh,
  DataTable,
  Messages,
  Messagebar,
  Notification,
  Autocomplete,
  Tooltip,
  Menu,
  LoginScreen
]);

export default Framework7;
export { Device, Request, Utils };
