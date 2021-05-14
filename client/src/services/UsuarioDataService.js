import http from '../http-common';

export default {
  crearUsuario(data) { return http.post('/usuarios/', data); },
};
