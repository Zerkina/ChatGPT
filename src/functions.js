function CheckData(phoneNumber){
    var url = "https://10.131.0.14:2020/api/get_answer";
           
    var options = {
                    dataType: 'json',
                    headers: {
                            'Content-Type': 'application/json \ -d { "id": "string" }'
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