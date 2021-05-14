import http from '../http-common';

export default { signin(data) { return http.post('/auth/signin', data); } };
