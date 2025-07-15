import React from "react";
import {useFormik} from 'formik';
import * as Yup from 'yup';

const App1=()=>{
    const Formik=useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:'',
        },
        validationSchema:Yup.object({
            firstName:Yup.string().max(15,'Must be 15 characters or less').required('Required'),
            lastName:Yup.string().max(20,'Must be 20 characters or less').required('Required'),
            email:Yup.string().email('Invalid email address').required('Required'),
        }),
        OnSubmit:values=>{
            alert(JSON.stringify(values,null,2));
        },
    });
    return(
        <form onSubmit={Formik.handleSubmit}>
            <label htmlFor="firstName"></label>
            <input type="text"
            name="firstName"
            id="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName} />
            {formik.touched.firstName && formik.errors.firstName ? (
         <div>{formik.errors.firstName}</div>
       ) : null}

           <label htmlFor="lastName"></label>
            <input type="text"
            name="lastName"
            id="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName} />
            {formik.touched.lastName && formik.errors.lastName ? (
         <div>{formik.errors.lastName}</div>
       ) : null}

           <label htmlFor="email"></label>
            <input type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email} />
            {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}

       <button type="submit">Submit</button>

        </form>
    );

};