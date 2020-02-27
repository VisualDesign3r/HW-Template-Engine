module.exports = {
    trueFalse: function(arg){
        if (arg){
            if(!isNaN(arg)){
                return arg
            }else{
                return true
            }
        }else{
            return false
        }
    }
}