import axios, { AxiosResponse } from 'axios';
import { Flashcard } from './flashcard';

axios.defaults.baseURL = "http://localhost:5000/api";
axios.defaults.maxBodyLength = 5000;

const responseData = <T> (response: AxiosResponse<T>) => response.data;

const requestsList = {
    get: <T> (url: string) => axios.get<T>(url).then(responseData),
    post: <T> (url: string, data: {}) => axios.post<T>(url, data).then(responseData),
    put: <T> (url: string, data: {}) => axios.put<T>(url, data).then(responseData),
    delete: <T> (url: string) => axios.delete<T>(url).then(responseData)
}

const Flashcards = {
    list: () => requestsList.get<Flashcard[]>("/flashcards"),
    oneElement: (id: string) => requestsList.get<Flashcard>(`/flashcards/${ id }`), 
    post: (flashcard: Flashcard) => requestsList.post("/flashcards", flashcard),
    put: (flashcard: Flashcard) => requestsList.put(`/flashcards/${flashcard.id}`, flashcard),
    delete: (id: string) => requestsList.delete(`/flashcards/${ id }`)
}

const handler = {
    Flashcards
}

export default handler;
