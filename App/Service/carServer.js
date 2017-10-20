/**
 * Created by °×ÈãÈã on 2017/10/20.
 */
app.factory('carServer',['baseServer',function(baseServer){
    return{
        getCars:function(type,url) {
            return baseServer.ajax(type,url)
        }
    }
}])
