import express from express;
import {registerUser , loginuser} from '../Controllers/user.controllers.js'

const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(loginuser)

export default router;