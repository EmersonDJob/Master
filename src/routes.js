const { Router } = require('express');
const AlunoController = require('./Controllers/AlunoController')

const routes = Router();

routes.get('/', (req, res) => {
    return res.status(200).json({ message: "Server is On..." })
})


routes.post('/alunos', AlunoController.PostAluno)
routes.get('/alunos', AlunoController.GetAluno)
routes.get('/alunos/:id', AlunoController.GetAlunoById)
routes.put('/alunos/:id', AlunoController.PutAluno)
routes.delete('/alunos/:id', AlunoController.DeleteAluno)
module.exports = routes;
