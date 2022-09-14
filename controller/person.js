const personService = require('../services/person');

class PersonController {
  async createPerson(req, res) {
    try {
      const id = await personService.createPerson(req.body);
      res.status(201).json(id);
    } catch (err) {
        res.status(400).json({
            error: "Please provide valid data"
        })
      console.error(err);
    }
  }
}

module.exports = new PersonController();