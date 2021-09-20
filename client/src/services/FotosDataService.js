import http from '../http-common';

export default {
  crearFoto(data) { return http.post('/fotos/', data); },
  getFotos() { return http.get('/fotos/'); },
  getFoto(data) { return http.get(`/fotos/${data}`); },
  deleteFoto(data) { return http.delete(`/fotos/${data}`); },
  updateFoto(data) { return http.put(`/fotos/${data.id}`, data); },
};
