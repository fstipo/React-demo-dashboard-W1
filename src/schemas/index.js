import * as yup from 'yup';

export const basicSchema = yup.object().shape({
    id: yup.number().positive().integer().required("Id is required"),
    name: yup.string().required("Name is required"),
    sector: yup.string().required("Sector is required"),
});