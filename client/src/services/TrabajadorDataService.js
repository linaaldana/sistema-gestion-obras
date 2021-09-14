import http from '../http-common';

export default {
  crearTrabajador(data) { return http.post('/trabajadores/', data); },
  getTrabajadores() { return http.get('/trabajadores/'); },
  getTrabajador(data) { return http.get(`/trabajadores/${data}`); },
  deleteTrabajador(data) { return http.delete(`/trabajadores/${data}`); },
  updateTrabajador(data) { return http.put(`/trabajadores/${data.id}`, data); },
};
