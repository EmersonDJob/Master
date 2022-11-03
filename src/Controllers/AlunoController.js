const AlunoModel = require("../Models/AlunoModel");


class AlunoController {
    async PostAluno(req, res) {
        const createAluno = await AlunoModel.create(req.body)

        return res.status(200).json(createAluno)
    }
    async GetAluno(req, res) {
        try {
            const alunos = await AlunoModel.find();
            return res.status(200).json(alunos)
        } catch (error) {
            return res.status(404).json({ message: `Ouve um erro ${error}` })
        }

    }
    async GetAlunoById(req, res) {

        try {
            const { id } = req.params;
            const aluno = await AlunoModel.findById(id)

            if (!aluno) {
                return res.status(404).json({ message: "ID não encontrado " })
            }
            return res.status(200).json(aluno)
        }
        catch (error) {
            return res.status(404).json({ message: "ID não encontrado " })
        }

    }
    async PutAluno(req, res) {
        try {
            const { id } = req.params;
            const aluno = await AlunoModel.findByIdAndUpdate(id, req.body);

            if (!aluno) {
                return res.status(404).json({ message: `Aluno não encontrado` })
            }
            return res.status(200).json(aluno)
        }
        catch (error) {
            return res.status(404).json({ message: `Ouve um erro ${error}` })
        }
    }
    async DeleteAluno(req, res) {
        try {
            const { id } = req.params;
            const aluno = await AlunoModel.findByIdAndDelete(id)
            if (aluno) {
                return res.status(200).json(aluno)
            }
            return res.status(404).json({ message: "Aluno não encontrado" })
        } catch (error) {
            return res.status(404).json({ message: `Erro ao buscar aluno ${error}` })
        }
    }
}

module.exports = new AlunoController();
