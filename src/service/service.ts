// services/apiService.ts
import axios from 'axios'

const SERVER_BASE_URL = 'http://localhost:8090'

export const updateData = async (data: any) => {
    try {
        const response = await axios.post(`${SERVER_BASE_URL}/user`, data)
        return response.data
    } catch (error) {
        console.error('Error updating data:', error)
    }
}

export const getSites = async () => {
    try {
        const response = await axios.get(`${SERVER_BASE_URL}/sites`)
        return response.data
    } catch (error) {
        console.error('Error updating data:', error)
    }
}



export const updatePreference = async (data: any, token: string) => {
    try {
        const response = await axios.post(`${SERVER_BASE_URL}/subscribe`, data, { headers: { 'Authorization': token } })
        return response.data
    } catch (error) {
        console.error('Error updating data:', error)
    }
}


export const getSubscription = async (token: string) => {
    try {
        const response = await axios.get(`${SERVER_BASE_URL}/subscription`, { headers: { 'Authorization': token } })
        return response.data
    } catch (error) {
        console.error('Error updating data:', error)
    }
}
