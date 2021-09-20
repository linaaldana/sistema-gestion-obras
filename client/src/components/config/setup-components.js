// Core Components
import Toolbar from '../core/Toolbar.vue';
import Navigation from '../core/NavigationDrawer.vue';
import Breadcrumbs from '../core/Breadcrumbs.vue';
import PageFooter from '../core/PageFooter.vue';

import Widget from '../Widget.vue';
import SocialWidget from '../SocialWidget.vue';
import DataTableUsuarios from '../DataTableUsuarios.vue';
import DataTableObras from '../DataTableObras.vue';
import DataTableAvances from '../DataTableAvances.vue';
import DataTableClientes from '../DataTableClientes.vue';
import DataTableTrabajadores from '../DataTableTrabajadores.vue';
import TimeLine from '../TimeLine.vue';
import UserTreeView from '../UserTreeView.vue';
import Stepper from '../Stepper.vue';

export default function setupComponents(Vue) {
  Vue.component('toolbar', Toolbar);
  Vue.component('navigation', Navigation);
  Vue.component('breadcrumbs', Breadcrumbs);
  Vue.component('page-footer', PageFooter);
  Vue.component('widget', Widget);
  Vue.component('social-widget', SocialWidget);
  Vue.component('data-table-usuarios', DataTableUsuarios);
  Vue.component('data-table-obras', DataTableObras);
  Vue.component('data-table-avances', DataTableAvances);
  Vue.component('data-table-clientes', DataTableClientes);
  Vue.component('data-table-trabajadores', DataTableTrabajadores);
  Vue.component('time-line', TimeLine);
  Vue.component('user-tree-view', UserTreeView);
  Vue.component('stepper', Stepper);
}
