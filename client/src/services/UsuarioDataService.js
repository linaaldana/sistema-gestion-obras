import http from '../http-common';

export default {
  crearUsuario(data) { return http.post('/usuarios/', data); },
  getUsuarios() { return http.get('/usuarios/'); },
  getUsuario(data) { return http.get(`/usuarios/${data}`); },
  deleteUsuario(data) { return http.delete(`/usuarios/${data}`); },
  updateUsuario(data) { return http.put(`/usuarios/${data.id}`, data); },
  getJefesObra() { return http.get('/usuarios/jefesobra/'); },
};
