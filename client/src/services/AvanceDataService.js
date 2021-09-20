import http from '../http-common';

export default {
  crearAvance(data) { return http.post('/avances/', data); },
  getAvances() { return http.get('/avances/'); },
  getAvance(data) { return http.get(`/avances/${data}`); },
  deleteAvance(data) { return http.delete(`/avances/${data}`); },
  updateAvance(data) { return http.put(`/avances/${data.id}`, data); },
};
