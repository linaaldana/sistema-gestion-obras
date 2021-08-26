import http from '../http-common';

export default {
  crearCliente(data) { return http.post('/clientes/', data); },
  getClientes() { return http.get('/clientes/'); },
  getCliente(data) { return http.get(`/clientes/${data}`); },
  deleteCliente(data) { return http.delete(`/clientes/${data}`); },
  updateCliente(data) { return http.put(`/clientes/${data.id}`, data); },
};
