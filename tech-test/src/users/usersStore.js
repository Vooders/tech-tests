function userStore() {
    const store = [];
  
    function get(idToGet) {
      return store.find(({ id }) => id === idToGet);
    }
  
    function create(result) {
      store.push(result);
    }
  
    function getAll() {
      return store;
    }
  
    function reset() {
      store.splice(0);
    }
  
    return {
      get,
      create,
      getAll,
      reset,
    };
  }
  
  module.exports.default = userStore;
