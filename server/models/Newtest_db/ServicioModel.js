
import ServicioModelGenerated from "./generated/ServicioModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = UserModelGenerated.init();
  
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
      return await UserModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ServicioModelGenerated,
  ...customModel
};
