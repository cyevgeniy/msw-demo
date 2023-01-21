export const getUserInfo = async (id) => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL
        const response = await fetch(baseUrl + `/users/${id}`)
        const info = await response.json()
        return info
    } catch(e) {
        console.error("Error in getUserInfo: ", e)
        return null
    }
}
