import * as Yup from "yup";

export const mobileSchema = Yup.object({
    mobile: Yup.string().max(10, 'Mobile number cannot exceed 10 digits').matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits')
    .required('Mobile number is required')
})