import {users} from "../data/users.js"

export const listUser =(req, res) => {
    res.status(200).send(users)
    // console.log({users})
  return users;
}