import * as Yup from "yup";

export const mobileSchema = Yup.object({
    mobile: Yup.number().min(10).max(10).required("Please enter a valid mobile number"),
})