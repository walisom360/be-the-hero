const routes = require('express').Router()

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')


routes.post('/sessions',SessionController.store)

routes.post('/ongs',OngController.store)
routes.get('/ongs',OngController.index)


routes.get('/incidents',IncidentController.index)
routes.post('/incidents',IncidentController.store)
routes.delete('/incidents/:id',IncidentController.delete)

routes.get('/profile',ProfileController.index)



module.exports = routes