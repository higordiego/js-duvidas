
/**
* consumir API
* URL: https://63b97ca43329392049f4b88e.mockapi.io
* PATH: /todo
* method: POST, GET, PUT, DELETE, PATCH
*  - POST: created
*  - GET: lista
*  - PUT: Alteração
*  - DELETE: delete
*/

const axios = require('axios').default


/**
* - assinatura de contrato
* @param {*} params
*/
async function request(params) {
    try {
        const { status, data } = await axios(params)
        return { status, data }
    } catch (err) {
        if (err.response) {
            const { status, data } = err.response
            return { status, data }
        }
        return { status: 500, data: 'error signature contract!' }
    }
}

/**
 * getOne /todo/:id - um
 * getALL /todo - mais de um || ?query="key"="value"
 * put /todo/:id + body - um sempre
 * post: /todo + body - um sempre
 * delete /todo/:id - um sempre
 */
request({
    url: 'https://63b97ca43329392049f4b88e.mockapi.io/todo/2',
    method: 'DELETE',
    data: null
})
    .then(({ status, data }) => console.log('resp', { status, data }))


