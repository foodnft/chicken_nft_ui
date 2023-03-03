import * as Yup from "yup";

// addMethod('ChangeBtnCss', function format(formats, parseStrict) {
//     return this.transform((value, originalValue, ctx) => {
//       if (ctx.isType(value)) return value;
  
//       value = Moment(originalValue, formats, parseStrict);
  
//       return value.isValid() ? value.toDate() : new Date('');
//     });
//   });
// .string().max(10, 'Mobile number cannot exceed 10 digits').matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits')
export const mobileSchema = Yup.object({
    mobile: Yup.string().max(12, 'Mobile number cannot exceed 12 digits').matches(/^(\+\d{1,3}[]?)?\d{10}/, 'Please enter valid Mobile number')
    .required('Mobile number is required')
})