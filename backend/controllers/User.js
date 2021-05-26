/* Model Require */
const UserModel = require('../models/userModels');
/* End Model Require */

/* Require Any Config */
var bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
/* End  Require Any Config */


/* GET Data user */
exports.GetAllUsers = async (req, res) => {
  UserModel.findAll({})
    .then(results => {
      res.status(200).send({ data: results })
    })
}
/* End GET Data User */

/* Delete User Data */
exports.DeleteUser = async (req, res) => {
  const idUser = req.body.idUser;
  await UserModel.destroy({ where: { id: idUser } }).then(response => {
    if (response.role == 'admin') {
      res.status(500).send({ message: `Anda tidak dapat menhapus ${response.role}` })
    }
    res.status(200).send({ message: `User Berhasil Di Hapus !` })
  })
}
/* End Delete User */

/* Find User By username */
exports.GetUser = async (req, res) => {
  const userName = req.params.userName
  console.log(userName)
  UserModel.findOne({ where: { username: userName } })
    .then(result => {
      res.status(200).send({ data: result })
    }).catch(err => {
      res.status(500).send({ message: `Cannot Find Data ${err.message}` })
    })
}
/* End Find User By username */



/* create new user API */
exports.createNewUser = async (req, res) => {
  const errors = validationResult(req);
  const { username, password, role } = req.body;
  if (!errors.isEmpty()) {
    const alert = errors.array();
    res.status(500).send({ message: alert });
  } else {
    const passwordHashed = await bcrypt.hash(password, 10);
    const user = new UserModel({
      username: username,
      password: passwordHashed,
      role: role
    });
    user.save()
      .then(results => {
        res.status(200).send({ message: `Successfuly Added New User ${results.username} !`, data: results });
      })
  }
}
/* End create new user API */



/* Uodate user  */
exports.updateUser = async (req, res) => {
  const errors = validationResult(req);
  const id = req.params.id
  const { username, password, role } = req.body;
  if (!errors.isEmpty()) {
    const alert = errors.array();
    res.status(500).send({ message: alert });
  } else {
    await UserModel.update({
      username: username,
      password: password,
      role: role
    }, {
      where: {
        id: id
      }
    }).then(result => {
      res.status(200).send({ message: `Successfull Update User Data ${result.username}`, data: { result } })
    }).catch(err => {
      res.status(500).send({ message: `Cannot Update User Data ${err.message}` })
    })
  }
}

/* End Uodate user  */
