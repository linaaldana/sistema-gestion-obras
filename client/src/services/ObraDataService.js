import http from '../http-common';

export default {
  crearObra(data) { return http.post('/obras/', data); },
  getObras() { return http.get('/obras/'); },
  getObra(data) { return http.get(`/obras/${data}`); },
  deleteObra(data) { return http.delete(`/obras/${data}`); },
  updateObra(data) { return http.put(`/obras/${data.id}`, data); },
};
