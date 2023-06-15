function CheckData(phoneNumber){
    var url = "https://alif.unistar.ru/api/get_characteristics";
           
    var options = {
                    dataType: "json",
                    headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                            },
                    form: {
                            phone: phoneNumber
                        }
                    };
                                    	
    var response = $http.post(url, options);
    
    if(response.isOk) {
        return response.data
    } else {
        return "NotFound"
    };
}