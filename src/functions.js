function Chat_Send_text(text){
    var url = "https://gpt.unistar.ru/api/send_text";
           
    var options = {
                    dataType: "json",
                    headers: {
                            "Content-Type": "application/json"
                            },
                    body: {
                            "text": text
                        }
                    };
                                    	
    var response = $http.post(url, options);
    $reactions.answer(response.data["id"]);
    if(response.isOk) {
        return response.data["id"]
    } else {
        return "NotFound"
    };
}

function Chat_Get_answer(id){
    var url = "https://gpt.unistar.ru/api/get_answer";
           
    var options = {
                    dataType: "json",
                    headers: {
                            "Content-Type": "application/json"
                            },
                    body: {
                            "id": id
                        }
                    };
                                    	
    var response = $http.get(url, options);
    
    if(response.isOk) {
        return response.data
    } else {
        return "NotFound"
    };
}
//После запроса должен прийти id запроса, мы его сохраняем в перменную
//пишем такую же функцию но только с get и меняем ссылку и  параметры, в body не тект, а id