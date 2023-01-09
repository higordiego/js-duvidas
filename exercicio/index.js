
/**
 * 1 - listar todos o usuários https://63b97ca43329392049f4b88e.mockapi.io/users
 * 2 - filtrar os usuários https://63b97ca43329392049f4b88e.mockapi.io/users?name=""
 * 3 - Criar usuários https://63b97ca43329392049f4b88e.mockapi.io/users
    {
        "name": "",
        "email": "",
        "avatar": ""
    }
*  4 - Enviar mensagens para o usuários https://63b97ca43329392049f4b88e.mockapi.io/messages
    {
        "messages": "",
        "user_send_id": "",
        "user_receive_id": ""
    }

    5 - criar uma rotina de identificação de novas mensagens para os usuários.
        request para esse endpoint https://63b97ca43329392049f4b88e.mockapi.io/messages?user_receive_id= a cada 3 segundos.
 */

