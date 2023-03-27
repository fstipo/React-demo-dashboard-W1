import axios from "axios";
import Moment from 'moment';
import { useQuery, useMutation } from "react-query";

// *URL
const url = "https://es-demo.azurewebsites.net/v1"
const apiPeople = axios.create({ baseURL: url });
const sourcePeople = "/People";
const history = "/history?from=1.1.1990";
const inMoment = "/People/history?inMoment="


// *PEOPLE
// *GET People 
export const usePeopleData = (onError) => {
    const getPeople = async () => {
        const response = await apiPeople.get(sourcePeople);
        return response.data;
    }
    return useQuery("people", getPeople, {
        select: people => people.map(el => {
            return {
                ...el, changedAt: Moment(el.changedAt).format("lll"),
            }
        }),
        onError: onError,
        removeAfterUnmount: true

    });
}

// *GET PeopleHistoryInMoment
export const usePeopleHistoryInMoment = (onError, dateInMoment) => {
    const getPeople = async () => {
        const response = await apiPeople.get(`${inMoment}${dateInMoment}`);
        return response.data;
    }
    return useQuery("peopleInMoment", getPeople, {
        select: people => people.map(el => {
            return {
                ...el, changedAt: Moment(el.changedAt).format("lll"),
            }
        }),
        enabled: false,
        onError: onError
    });
}

// *GET People by ID
export const useUserDetails = (userId) => {
    const getUser = async ({ queryKey }) => {
        const id = queryKey[1];
        const response = await apiPeople.get(`${sourcePeople}/${id}`);
        return response.data;
    }
    return useQuery(["people", userId], getUser)
}

// *POST people
export const useAddUser = () => {
    const addUser = async (newUser) => {
        const response = await apiPeople.post(sourcePeople, newUser);
        return response.data;
    }

    return useMutation(addUser)
}

// *Delete People by ID
export const useRemoveUser = (id, onSuccess) => {
    const removeUser = async () => {
        const response = await apiPeople.delete(`${sourcePeople}/${id}`);
        return response.data;
    }
    return useMutation(removeUser, {
        onSuccess,
    })
}

// *Put people
// 
export const useUpdateUser = (id, onSuccess) => {

    const updateUser = async (editData) => {
        const response = await apiPeople.put(`${sourcePeople}/${id}`, editData);
        return response.data;
    }
    return useMutation(updateUser, {
        onSuccess,

    })
}

// * HISTORY

// *GET History User Details by ID
export const useHistoryUserDetails = (userId) => {
    const getHistory = async ({ queryKey }) => {
        const id = queryKey[1];
        const response = await apiPeople.get(`${sourcePeople}/${id}${history}`);
        return response.data;
    }
    return useQuery(["history-details", userId], getHistory, {
        //     // refetchInterval: 1000
    }
    )
}






