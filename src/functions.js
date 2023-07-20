// МОЯ ВЕРСИЯ СЦЕНАРИЯ
function Login_to_ChatGPT(){
    var url = "https://gpt.unistar.ru/api/login";
           
    var options = {
                    dataType: "json",
                    headers: {
                            "Content-Type": "application/json"
                            },
                    body: {
                            "login": "unistaradmin"
                            "password": "X~z%$uyAhXW53rmi9uouitMoy"
                        }
                    };
                      {
}              	
    var response = $http.post(url, options);
    //$reactions.answer(response.data["id"]);
    if(response.isOk) {
        return response.data["token"]
    } else {
        return "Authorization failed"
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
    //$reactions.answer(response.data["text"]);
    if(response.isOk) {
        return response.data["text"]
    } else {
        return "NotFound"
    };
}
//После запроса должен прийти id запроса, мы его сохраняем в перменную
//пишем такую же функцию но только с get и меняем ссылку и  параметры, в body не тект, а id