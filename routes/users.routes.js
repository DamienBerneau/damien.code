import User from "../models/User.models.js";
import express from "express";

const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).send('user created ' + JSON.stringify(user))
    } catch (err) {
        console.error(err);
    }
})

router.get('/',async (req, res) => {
    const user = await User.findAll()
    res.json(user)
})
router.get('/email', async (req, res) => {
    try {
        const email = req.query.email;

        const getUserByEmail = await User.findOne({
            where: {
                email: email
            }
        })
        if (getUserByEmail === null) {
            console.log('not fund !');
        }
        res.send(getUserByEmail)
    } catch (err) {
        console.error(err);
    }
})

async function updateUserPassword(email, newPassword) {
    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            throw new Error('Utilisateur non trouvé');
        }

        // Mise à jour du mot de passe de l'utilisateur dans la base de données
        await user.update({ password: newPassword });

        console.log('Mot de passe mis à jour avec succès');
    } catch (error) {
        console.error('Erreur lors de la mise à jour du mot de passe :', error.message);
    }
}
router.put('/updatePassword', async (req, res) => {
    try {
        const { email, newPassword } = req.body;
        await updateUserPassword(email, newPassword);
        res.status(200).send('Mot de passe mis à jour avec succès.');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erreur lors de la mise à jour du mot de passe.');
    }
});

export default router