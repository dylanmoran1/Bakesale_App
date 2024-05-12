const apiHost = 'https://bakesaleforgood.com'

export default {
    async fetchInitialDeals() {
        try {
            let response = await fetch(apiHost + '/api/deals')
            let responseJSON = await response.json()
            return responseJSON.movies
        }
        catch(error) {
            console.error(error);
        }
    }
}