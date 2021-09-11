import Vue from 'vue';
import VueRouter from 'vue-router';
import Clientes from '../views/Clientes.vue';
import crearCliente from '../views/crearCliente.vue';
import editarCliente from '../views/editarCliente.vue';
import crearTrabajador from '../views/crearTrabajador.vue';
import Trabajadores from '../views/Trabajadores.vue';
import Usuarios from '../views/Usuarios.vue';
import Obras from '../views/Obras.vue';
import Login from '../views/Login.vue';
import crearUsuario from '../views/crearUsuario.vue';
import crearObra from '../views/crearObra.vue';
import verObra from '../views/verObra.vue';
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
    path: '/clientes/crear',
    name: 'crearCliente',
    component: crearCliente,
    meta: {
      breadcrumb: [
        { name: 'Cliente nuevo' },
      ],
    },
  },
  {
    path: '/clientes/editar/:id',
    name: 'editarCliente',
    component: editarCliente,
    meta: {
      breadcrumb: [
        { name: 'Actualizar Cliente' },
      ],
    },
  },
  {
    path: '/trabajadores',
    name: 'Trabajadores',
    component: Trabajadores,
    meta: {
      breadcrumb: [
        { name: 'Trabajadores' },
      ],
    },
  },
  {
    path: '/trabajadores/crear',
    name: 'crearTrabajador',
    component: crearTrabajador,
    meta: {
      breadcrumb: [
        { name: 'Trabajador nuevo' },
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
        { name: 'Actualizar Usuario' },
      ],
    },
  },
  {
    path: '/obras',
    name: 'Obras',
    component: Obras,
    meta: {
      breadcrumb: [
        { name: 'Obras' },
      ],
    },
  },
  {
    path: '/obras/crear',
    name: 'crearObra',
    component: crearObra,
    meta: {
      breadcrumb: [
        { name: 'Obra nueva' },
      ],
    },
  },
  {
    path: '/obras/ver/:id',
    name: 'verObra',
    component: verObra,
    meta: {
      breadcrumb: [
        { name: 'ver Obra' },
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
