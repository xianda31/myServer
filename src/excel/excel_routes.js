function set_excel_routes(router) {

    router.get("/tournament", (req, res, next) => {
        res.status(201).send('Hi you!');
      console.log('Hi !');

      });
}

module.exports = {
    set_excel_routes,
};