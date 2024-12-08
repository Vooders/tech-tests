const { default: resultStore } = require("./usersStore");

const store = resultStore();

function getResult(id) {
  return store.get(id);
}

function newResult(result) {
  store.create(result);
  return {};
}

function reset() {
  store.reset();
}

module.exports = { getResult, newResult, reset };
