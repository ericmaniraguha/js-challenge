var isPalindorme =  function(str){
    if(str == str.split('').reverse().join('')){
        return true;
    }else{
        return false;
    }
}