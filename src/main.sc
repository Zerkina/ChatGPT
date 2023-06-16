require: slotfilling/slotFilling.sc
  module = sys.zb-common
require: functions.js
theme: /

    state: Start
        q!: $regex</start>
        a: Начнём.
        go: /Send_text
        
        state: Send_text
            q!: *
            script:
                log($parseTree);
                $session.text = $parseTree._Root; //положили то что сказал пользователь
                $session.id = Chat_Send_text($session.text); //отправляем в фцункию
            go: /Get_answer
            #go!:: /Have_fun   
        
#_Root вместо value
#Поставь паузу между запросами 10-15 секунд. Придумать загшучку чтобы быстро не переходил в GEt_answer
    # state: Have_fun
    #     a: Пока ждем ответа. Я тебя буду развлекать. Разгадай загадку: "Без окон, без дверей, полна горница людей." Что это?
        
    #     state: Right
    #         q: огурец
    #         a: Ну конечно, это огурец! Молодец! А вот и твой ответ на твой вопрос.
    #         go!: /Get_answer
        
    #     state: Wrong
    #         q: не знаю
    #         a: Это огурец! Ладно, вот твой ответ на твой вопрос.
    #         go!: /Get_answer

 
    state: Get_answer
        q!: получаем
        script:
            $session.answer = '';
            while ($session.answer === '') {
                   $session.answer = Chat_Get_answer($session.id);
            }
        a: {{$session.answer}}
        go: /Send_text
        #то что нам пришло, вернулось
    #Там 2 метода, один для того что бы отправить текст и получить id,
    #второй что бы запросить сам сгенерированный текст. 
    #Текст генерируется какое то время поэтому запросы не надо слать подряд. 
    #Поставь паузу между запросами 10-15 секунд. 
#То есть схема такая:
#отправляешь запрос с текстом, POST
#получаешь id
#сохраняешь его 
#дальше бесконечный цикл с запросом на получение текста каждые 10 секунд, если текст не пустой то заверши цикл


    state: NoMatch
        event!: noMatch
        a: Я не понял. Вы сказали: {{$request.query}}

    state: Match
        event!: match
        a: {{$context.intent.answer}}