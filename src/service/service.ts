// services/apiService.ts
import axios from 'axios'

const SERVER_BASE_URL = 'http://localhost:8090'

export interface SubscriptionSchedule {
    dailyFrequency: {
        monday: boolean;
        tuesday: boolean;
        wednesday: boolean;
        thursday: boolean;
        friday: boolean;
        saturday: boolean;
        sunday: boolean;
    };
    timeSlot: string;
    timezone: string;
}

export interface SubscriptionData {
    confirmed: boolean;
    sites: string[];
    subscriptionSchedule: SubscriptionSchedule;
}

export interface CreateUserPayload {
    email: string;
}


interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

export const createUser = async (data: CreateUserPayload): Promise<ApiResponse<any>> => {
    try {
        const response = await axios.post<any>(`${SERVER_BASE_URL}/user`, data);
        return { success: true, data: response.data };
    } catch (error: any) {
        console.error('Error creating user:', error);
        return { success: false, error: error.message };
    }
};

export const getSites = async () => {
    try {
        const response = await axios.get(`${SERVER_BASE_URL}/sites`)
        return response.data
    } catch (error) {
        console.error('Error updating data:', error)
    }
}



export const updatePreference = async (data: SubscriptionData, token: string): Promise<ApiResponse<SubscriptionData>> => {
    try {
        const response = await axios.post<SubscriptionData>(`${SERVER_BASE_URL}/subscribe`, data, { headers: { 'Authorization': token } });
        return { success: true, data: response.data };
    } catch (error: any) {
        console.error('Error updating data:', error);
        return { success: false, error: error.message };
    }
};


export const getSubscription = async (token: string): Promise<SubscriptionData | undefined> => {
    try {
        const response = await axios.get<SubscriptionData>(`${SERVER_BASE_URL}/subscription`, {
            headers: { Authorization: token }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching subscription data:', error);
        return undefined;
    }
};
