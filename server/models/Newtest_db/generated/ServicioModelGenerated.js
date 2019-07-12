// Database
import Database from "../../../classes/Database_Newtest_db";
import mongoose, { Schema } from "mongoose";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
      * servicio
      */
    const servicioSchema = new mongoose.Schema({
      name: {
        type: "String"
      },
      //RELATIONS
      
      
      //EXTERNAL RELATIONS
      /*
      evento_servicio: {
        type: Schema.ObjectId,
        ref : "evento"
      },
      user_servicio: [{
        type: Schema.ObjectId,
        ref : "User"
      }],
      */
    });

    generatedModel.setModel(db.connection.model("Servicio", servicioSchema));

    return servicioSchema;
  },

  /**
   * Set Model
   */
  setModel: model => {
    generatedModel.model = model;
  },

  /**
   * Get model
   */
  getModel: () => {
    return generatedModel.model;
  },

  // Start queries
    

  // CRUD METHODS


  /**
  * servicioModel.create
  *   @description CRUD ACTION create
  *   @param servicio obj Object to insert
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * servicioModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id servicio
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * servicioModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id servicio
  *   @returns servicio
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({_id: id});
  },
  
  /**
  * servicioModel.list
  *   @description CRUD ACTION list
  *   @returns ARRAY OF servicio
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * servicioModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id servicio
  *   @returns servicio
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
  


};

export default generatedModel;