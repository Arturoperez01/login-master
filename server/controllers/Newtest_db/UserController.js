/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://beta.skaffolder.com/#!/register?friend=5d0ce5dbf311412fe6ea5315
*
* You will get 10% discount for each one of your friends
* 
*/
import UserControllerGenerated from "./generated/UserControllerGenerated";

// Properties
import Properties from "../../properties";

// Database
import UserModel from "../../models/Newtest_db/UserModel";

// Security
import { authorize } from "../../security/SecurityManager";

// Errors
import Errors from "../../classes/Errors";
import ErrorManager from "../../classes/ErrorManager";

const customControllers = {
  
  /**
   * Override here your custom routes
   * EXAMPLE:
   *
    
   init: router => {
     const baseUrl = `${Properties.api}/user`;
     
     // custom route
     router.get(baseUrl + "/:id", customControllers.get);
     
     // Init super
     UserControllerGenerated.init(router);
    },

  */

  /**
   * Override here your custom controllers
   * EXAMPLE:
   *
   
    get: async (req, res) => {
      try {
        console.log("This is my custom controller");
        const result = await UserModel.get(req.params.id);
        res.json(result);
      } catch (err) {
        const safeErr = ErrorManager.getSafeError(err);
        res.status(safeErr.status).json(safeErr);
      }
    }

   */
   

  // Custom APIs

  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/user`;
    router.post(
      baseUrl + "/:id/changePassword",
      authorize(["ADMIN"]),
      customControllers.changePassword
    );

    UserControllerGenerated.init(router);
  },

  /**
   * UserModel.changePassword
   *   @description Change password of user from admin
   *   @returns object
   *
   */
  changePassword: async (req, res) => {
    try {
      const user = await UserModel.getByUsernameAndPassword(
        req.user.username,
        req.body.passwordAdmin
      );
      if (!user) {
        throw new Errors.PWD_ADMIN_NOT_VALID();
      }
      await UserModel.updatePassword(req.params.id, req.body.passwordNew);
      res.send({
        success: true
      });
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  }
};

export default {
  ...UserControllerGenerated,
  ...customControllers
};

