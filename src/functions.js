function Chat(){
    var url = "https://10.131.0.14:2020/api/send_text";
           
    var options = {
                    dataType: "json",
                    headers: {
                            "Content-Type": "application/json"
                            },
                    body: {
                            "text": "Специальность врача: терапевт. Время приема: Пн 15:00, Вт 14:00, Ср 09:00, Чт 16:40,
                        }
                    };
                                    	
    var response = $http.post(url, options);
    
    if(response.isOk) {
        return response.data
    } else {
        return "NotFound"
    };
}