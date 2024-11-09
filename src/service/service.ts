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
    name: string;
}

export interface FeedbackData {
    content: string;
}

interface ApiResponse<T> {
    success: boolean;
    data: T | null;
    status: number | null;
    error: string;
}

const handleError = <T>(error: unknown): ApiResponse<T> => {
    let errorMessage = 'An unexpected error occurred';
    let errorStatus: number | null = null;

    if (axios.isAxiosError(error) && error.response) {
        errorMessage = error.response.data.message || error.message;
        errorStatus = error.response.status;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    }

    console.error(errorMessage);

    return { success: false, data: null, error: errorMessage, status: errorStatus };
};


export const cancelSubscription = async (token: string): Promise<ApiResponse<null>> => {
    try {
        const response = await axios.post<null>(`${SERVER_BASE_URL}/cancel`, { confirmed: false }, { headers: { Authorization: token } });
        return { success: true, data: response.data, status: response.status, error: '' };
    } catch (error: unknown) {
        return handleError(error);
    }
};

export const createUser = async (data: CreateUserPayload): Promise<ApiResponse<CreateUserPayload>> => {
    try {
        const response = await axios.post<CreateUserPayload>(`${SERVER_BASE_URL}/user`, data);
        return { success: true, data: response.data, status: response.status, error: '' };
    } catch (error: unknown) {
        return handleError(error);
    }
};

export const getSites = async (token: string): Promise<ApiResponse<Site[]>> => {
    try {
        const response = await axios.get<Site[]>(`${SERVER_BASE_URL}/sites`, { headers: { Authorization: token } });
        return { success: true, data: response.data, error: '', status: response.status };
    } catch (error: unknown) {
        return handleError(error);
    }
};

export const getTopSites = async (): Promise<ApiResponse<Site[]>> => {
    try {
        const response = await axios.get<Site[]>(`${SERVER_BASE_URL}/sites/top`);
        return { success: true, data: response.data, error: '', status: response.status };
    } catch (error: unknown) {
        return handleError(error);
    }
};

export const updatePreference = async (data: SubscriptionData, token: string): Promise<ApiResponse<SubscriptionData>> => {
    try {
        const response = await axios.post<SubscriptionData>(`${SERVER_BASE_URL}/subscribe`, data, { headers: { Authorization: token } });
        return { success: true, data: response.data, status: response.status, error: '' };
    } catch (error: unknown) {
        return handleError(error);
    }
};

export const submitFeedback = async (data: FeedbackData): Promise<ApiResponse<FeedbackData>> => {
    try {
        const response = await axios.post<FeedbackData>(`${SERVER_BASE_URL}/feedback`, data);
        return { success: true, data: response.data, status: response.status, error: '' };
    } catch (error: unknown) {
        return handleError(error);
    }
};

export const getSubscription = async (token: string): Promise<ApiResponse<SubscriptionData>> => {
    try {
        const response = await axios.get<SubscriptionData>(`${SERVER_BASE_URL}/subscription`, { headers: { Authorization: token } });
        return { success: true, data: response.data, status: response.status, error: '' };
    } catch (error: unknown) {
        return handleError(error);
    }
};
