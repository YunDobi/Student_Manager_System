import http from "./ http-common"
const getAll = () => {
  return http.get("/");
};
const get = (id) => {
  return http.get(`/tutorials/${id}`);
};
const create = (data) => {
  return http.post("/", data);
};
const update = (id, name, email) => {
  return http.put(`/${id}?name=${name}&&email=${email}`);
};
const remove = (id) => {
  return http.delete(`/${id}`);
};

const StudentService = {
  getAll,
  get,
  create,
  update,
  remove,
};
export default StudentService;
