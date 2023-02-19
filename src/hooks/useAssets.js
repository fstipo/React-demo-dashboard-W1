import axios from "axios";
import Moment from 'moment';
import { useQuery, useMutation } from "react-query";

// *URL
const url = "https://es-demo.azurewebsites.net/v1"
const apiPeople = axios.create({ baseURL: url });
const sourceAssets = "/Assets"
const history = "/history?from=1.1.1990";
const inMoment = "/Assets/history?inMoment="

// *PEOPLE
// *GET People 
export const useAssetsData = (onError) => {
    const getPeople = async () => {
        const response = await apiPeople.get(sourceAssets);
        return response.data;
    }
    return useQuery("assets", getPeople, {
        select: assets => assets.map(el => {
            return {
                ...el, changedAt: Moment(el.changedAt).format("lll"),
            }
        }),
        onError: onError
    });
}

// *GET PeopleHistoryInMoment
export const useAssetsHistoryInMoment = (onError, dateInMoment) => {
    const getPeople = async () => {
        const response = await apiPeople.get(`${inMoment}${dateInMoment}`);
        return response.data;
    }
    return useQuery("assetsInMoment", getPeople, {
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
        const response = await apiPeople.get(`${source}/${id}`);
        return response.data;
    }
    return useQuery(["user-details", userId], getUser)
}

// *POST people
export const useAddUser = () => {
    const addUser = async (newUser) => {
        const response = await apiPeople.post(source, newUser);
        return response.data;
    }

    return useMutation(addUser)
}

// *Delete People by ID
export const useRemoveUser = (id) => {
    const removeUser = async () => {
        const response = await apiPeople.delete(`${source}/${id}`);
        return response.data;
    }
    return useMutation(removeUser)
}

// *Put people
export const useUpdateUser = (id) => {
    const updateUser = async (editData) => {
        const response = await apiPeople.put(`${source}/${id}`, editData);
        return response.data;
    }
    return useMutation(updateUser)
}

// * HISTORY

// *GET History User Details by ID
export const useHistoryUserDetails = (userId) => {
    const getHistory = async ({ queryKey }) => {
        const id = queryKey[1];
        const response = await apiPeople.get(`${source}/${id}${history}`);
        return response.data;
    }
    return useQuery(["history-details", userId], getHistory,
        {
            select: people => people.map(el => {
                return {
                    ...el, changedAt: Moment(el.changedAt).format("lll"),
                }
            }),
        }
    )
}




