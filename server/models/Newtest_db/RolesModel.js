
import RolesModelGenerated from "./generated/RolesModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = RolesModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await RolesModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...RolesModelGenerated,
  ...customModel
};