
import Properties from "../../../properties";
import RolesModel from "../../../models/Newtest_db/RolesModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import RolesController from "../RolesController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/roles`;
    router.post(baseUrl + "", authorize([]), RolesController.create);
    router.delete(baseUrl + "/:id", authorize([]), RolesController.delete);
    router.get(baseUrl + "", authorize([]), RolesController.list);
    router.post(baseUrl + "/:id", authorize([]), RolesController.update);
  },


  // CRUD METHODS


  /**
  * rolesModel.create
  *   @description CRUD ACTION create
  *   @param roles obj Object to insert
  *
  */
  create: async (req, res) => {
    try {
      const result = await RolesModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * rolesModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id roles
  *
  */
  delete: async (req, res) => {
    try {
      const result = await RolesModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * rolesModel.list
  *   @description CRUD ACTION list
  *   @returns ARRAY OF roles
  *
  */
  list: async (req, res) => {
    try {
      const result = await RolesModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * rolesModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id roles
  *   @returns roles
  *
  */
  update: async (req, res) => {
    try {
      const result = await RolesModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

};

export default generatedControllers;
