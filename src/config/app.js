
const apiUrl = 'https://portal.yamaha-motor.co.th/api'

module.exports = {
    api: {
        news: {
            search: `${apiUrl}/news/search`,
            query: `${apiUrl}/news/query`,
            updateNewsUserAccess: `${apiUrl}/news/updateNewsUserAccess`,
            getDepartments: `${apiUrl}/news/getDepartments`,
        },
    },
}