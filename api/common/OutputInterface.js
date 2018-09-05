/**
 * OutputInterface
 *
 * @description :: Server-side logic for managing Fronts.
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers

 giang.ngo: khai bao cac template response tra ve cho client, 
        jsonAPIOutput: tra ve dinh dang chung EC, EM,DT
        errServer: tra ve response khi bat exception tren webserver
        success: tra ve response thanh cong
	
 */

module.exports = {
   jsonAPIOutput: function(errCode,errMsg,data) {
      return {"EC":errCode,"EM":errMsg,"DT":data};
   },
    expireSession:function(data){
        return  this.jsonAPIOutput(-1000,'Het phien lam viec',data);

    },
    errServer:function(err){
        return  this.jsonAPIOutput(-101339,'Webserver gian doan',err);
    },
    errMessage:function(errMsg,err){
        return  this.jsonAPIOutput(-101339,errMsg,err);
    },
    success:function(data){
        return this.jsonAPIOutput(0,'Success',data);
    },
}