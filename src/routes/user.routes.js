import { Router } from "express";
import { loginuser, logoutuser, refreshAccessToken, registerUser, updateAccountDetails, updateUserAvater } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleswares.js";


const router = Router()


router.route("/register").post(
    upload.fields([

        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }

    ]),
    
    registerUser);

router.route('/login').post(loginuser);

//secured routes

router.route("/logout").post(verifyJWT, logoutuser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/update-avatar").post(verifyJWT,
    upload.single("avatar"),
    updateUserAvater
)

router.route("/update-account").post(verifyJWT,updateAccountDetails)

export default router