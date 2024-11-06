import axios from 'axios';

const SERVER_BASE_URL = import.meta.env.VITE_BACKEND_URL;

export interface DailyFrequency {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
}

export interface SubscriptionSchedule {
    dailyFrequency: DailyFrequency;
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

export interface Site {
    url: string;
    name: string
}

export interface FeedbackData {
    content: string;
}

interface ApiResponse<T> {
    success: boolean;
    data: T
    error: string;
    status: number;
}

const defaultSubscriptionData: SubscriptionData = {
    confirmed: false,
    sites: [],
    subscriptionSchedule: {
        dailyFrequency: {
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false,
        },
        timeSlot: '',
        timezone: ''
    }
};

export const cancelSubscription = async (token: string): Promise<ApiResponse<any>> => {
    try {
        const response = await axios.post<any>(`${SERVER_BASE_URL}/cancel`, { confirmed: false }, { headers: { 'Authorization': token } });
        return { success: true, data: response.data, status: response.status, error: '' };
    } catch (error: any) {
        console.error('Error canelling subscription:', error);
        return { success: false, data: null, error: error.message, status: error.status };
    }
};

export const createUser = async (data: CreateUserPayload): Promise<ApiResponse<any>> => {
    try {
        const response = await axios.post<any>(`${SERVER_BASE_URL}/user`, data);
        return { success: true, data: response.data, status: response.status, error: '' };
    } catch (error: any) {
        console.error('Error creating user:', error);
        return { success: false, data: null, error: error.message, status: error.status };
    }
};

export const getSites = async (token: string): Promise<ApiResponse<Site[]>> => {
    try {
        const response = await axios.get(`${SERVER_BASE_URL}/sites`, { headers: { Authorization: token } });
        return { success: true, data: response.data, error: '', status: 200 };
    } catch (error: any) {
        console.error('Error getting sites:', error);
        return { success: false, data: [], error: error.message, status: error.status };
    }
};

export const getTopSites = async (): Promise<ApiResponse<Site[]>> => {
    try {
        const response = await axios.get(`${SERVER_BASE_URL}/sites/top`);
        return { success: true, data: response.data, error: '', status: 200 };
    } catch (error: any) {
        console.error('Error getting sites:', error);
        return { success: false, data: [], error: error.message, status: error.status };
    }
};

export const updatePreference = async (data: SubscriptionData, token: string): Promise<ApiResponse<SubscriptionData>> => {
    try {
        const response = await axios.post<SubscriptionData>(`${SERVER_BASE_URL}/subscribe`, data, { headers: { 'Authorization': token } });
        return { success: true, data: response.data, status: response.status, error: '' };
    } catch (error: any) {
        console.error('Error updating preference:', error);
        return { success: false, data: defaultSubscriptionData, error: error.message, status: error.status }; // Returning default data
    }
};

export const submitFeedback = async (data: FeedbackData): Promise<ApiResponse<any>> => {
    try {
        const response = await axios.post<FeedbackData>(`${SERVER_BASE_URL}/feedback`, data);
        return { success: true, data: response.data, status: response.status, error: '' };
    } catch (error: any) {
        console.error('Error submitting feedback:', error);
        return { success: false, data: null, error: error.message, status: error.status };
    }
};

export const getSubscription = async (token: string): Promise<ApiResponse<SubscriptionData>> => {
    try {
        const response = await axios.get<SubscriptionData>(`${SERVER_BASE_URL}/subscription`, { headers: { Authorization: token } });
        return { success: true, data: response.data, status: response.status, error: '' };
    } catch (error: any) {
        console.error('Error fetching subscription data:', error);
        return { success: false, data: defaultSubscriptionData, error: error.message, status: error.status }; // Returning default data
    }
};
