
import Properties from "../../../properties";
import ServicioModel from "../../../models/Newtest_db/ServicioModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import ServicioController from "../ServicioController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/servicio`;
    router.post(baseUrl + "", authorize([]), ServicioController.create);
    router.delete(baseUrl + "/:id", authorize([]), ServicioController.delete);
    router.get(baseUrl + "/:id", authorize([]), ServicioController.get);
    router.get(baseUrl + "", authorize([]), ServicioController.list);
    router.post(baseUrl + "/:id", authorize([]), ServicioController.update);
  },


  // CRUD METHODS


  /**
  * servicioModel.create
  *   @description CRUD ACTION create
  *   @param servicio obj Object to insert
  *
  */
  create: async (req, res) => {
    try {
      const result = await ServicioModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * servicioModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id servicio
  *
  */
  delete: async (req, res) => {
    try {
      const result = await ServicioModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * servicioModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id servicio
  *   @returns servicio
  *
  */
  get: async (req, res) => {
    try {
      const result = await ServicioModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * servicioModel.list
  *   @description CRUD ACTION list
  *   @returns ARRAY OF servicio
  *
  */
  list: async (req, res) => {
    try {
      const result = await ServicioModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * servicioModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id servicio
  *   @returns servicio
  *
  */
  update: async (req, res) => {
    try {
      const result = await ServicioModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

};

export default generatedControllers;
