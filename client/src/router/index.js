import Vue from 'vue';
import VueRouter from 'vue-router';
import Clientes from '../views/Clientes.vue';
import Usuarios from '../views/Usuarios.vue';
import Login from '../views/Login.vue';
import crearUsuario from '../views/crearUsuario.vue';
import editarUsuario from '../views/editarUsuario.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/clientes',
    name: 'Clientes',
    component: Clientes,
    meta: {
      breadcrumb: [
        { name: 'Clientes' },
      ],
    },
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: Usuarios,
    meta: {
      breadcrumb: [
        { name: 'Usuarios' },
      ],
    },
  },
  {
    path: '/usuarios/crear',
    name: 'crearUsuario',
    component: crearUsuario,
    meta: {
      breadcrumb: [
        { name: 'Usuario nuevo' },
      ],
    },
  },
  {
    path: '/usuarios/editar/:id',
    name: 'editarUsuario',
    component: editarUsuario,
    meta: {
      breadcrumb: [
        { name: 'Editar Usuario' },
      ],
    },
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login,
    meta: {
      allowAnonymous: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
