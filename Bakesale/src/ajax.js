const apiHost = 'https://api.github.com/users/dylanmoran1'

export default {
    async fetchInitialDeals() {
        try {
            let response = await fetch(apiHost)
            let responseJSON = await response.json()
            return responseJSON.movies
        }
        catch(error) {
            console.error(error);
        }
    }
}