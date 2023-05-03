"use client"
import React, { useState } from "react";
import Image from 'next/image'
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    ErrorMessage,
    FieldProps,
  } from 'formik'
import * as Yup from "yup";
import loadingsvg from '/loading.svg'
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";


  interface MyFormValues {
    name: string;
    email: string;
    subject: string;
    message: string
  }

const Page = () => {
    
    const [sending, setSending] = useState<boolean>(false);
    
    const initialValues: MyFormValues = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }

    const FormSchema = Yup.object().shape({
        name: Yup.string()
          .min(1, 'Too Short!')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email')
          .required('Required'),
        subject: Yup.string()
        .min(1, 'Too Short!')
        .required('Required'),
        message: Yup.string()
        .min(1, 'Too Short!')
        .required('Required'),
      });

  return (
    <div className="w-full">
      <div className="flex flex-col  md:flex-row items-center justify-center content-center primary-bg w-full ">
        <div className="px-10 py-10 md:py-24 lg:px-20  w-full ">
          <h1 className=" text-[36px] md:text-[54px] font-extrabold text-white text-center h-1/2 ">
            Contact Us
          </h1>
          <p className="  text-[14px] md:text-[24px] text-white text-center pb-6 font-bold">
            For Any Query Feel Free To Contact Us
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center  w-full px-2 py-8 md:py-20 md:px-8">
        <div className="w-full lg:w-1/3 ">
          <h2 className="text-[36px]  text-[#130f25] text-left  font-bold relative top-0">
              Contact Information
          </h2>
          <div className="flex flex-row items-center justify-start w-full space-x-2 lg:pt-4">
            <div>
            <FaPhoneAlt size={30} color="#d8102f" />
            </div>
            <div>
              <p className="  text-[14px] md:text-[24px] text-[#130f25] text-center  font-bold">
              <Link href="tel:+92-308-2220203">+92-308-2220203</Link> 
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start w-full space-x-2 pt-4">
            <div>
            <RiWhatsappFill size={30} color="#d8102f" />
            </div>
            <div>
              <p className="  text-[14px] md:text-[24px] text-[#130f25] text-center  font-bold">
              <Link href="https://wa.me/923082220203">+92-308-2220203</Link>
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start w-full space-x-2 pt-4">
            <div>
            <MdEmail size={30} color="#d8102f" />
            </div>
            <div>
              <p className="  text-[14px] md:text-[24px] text-[#130f25] text-center  font-bold">
              <Link href="mailto:info@panaverse.co">info@panaverse.co</Link>
              </p>
            </div>
          </div>

        </div>
        <div className="w-full lg:w-2/3  flex-grow shadow-2xl bg-white p-8 rounded-xl mt-8 lg:mt-0">
            <h2 className="w-full text-[36px]  text-[#130f25] text-left pb-2 font-bold">
                Contact Form
            </h2>
            <Formik
            enableReinitialize
         initialValues={initialValues}
         validationSchema={FormSchema}
         onSubmit={(values, actions) => {
            setSending(true);
           console.log({ values, actions });
           setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);            
           }, 1000);

           setSending(false);
         }}
       >
        {({errors, touched, isSubmitting}) => (
         <Form>
           <div className="flex flex-col md:flex-row justify-center items-center w-full">
           <div className="w-full md:1/2 mx-2">
           <p>Name<span className="text-[#d8102f]">*</span></p>
           <Field id="name" name="name" placeholder="Name" className=" p-2 w-full  ring-2 ring-gray-200  bg-[#F4F7FA] rounded-sm" />
           {errors.name && touched.name ? (
             <div className="text-[#d8102f]">{errors.name}</div>
           ) : null}

           </div>
           <div className="w-full md:1/2 mx-2">
           <p >Email<span className="text-[#d8102f]">*</span></p>
           <Field id="email" name="email" placeholder="Email" className=" p-2 w-full  ring-2 ring-gray-200  bg-[#F4F7FA] rounded-sm" />
           {errors.email && touched.email ? (
             <div className="text-[#d8102f]">{errors.email}</div>
           ) : null}

           </div>                       
           </div>
           <div className="flex flex-col md:flex-row justify-center items-center w-full">
           <div className="w-full m-2">
           <p >Subject<span className="text-[#d8102f]">*</span></p>
           <Field id="subject" name="subject" placeholder="Subject" className=" p-2 w-full  ring-2 ring-gray-200  bg-[#F4F7FA] rounded-sm" />
           {errors.subject && touched.subject ? (
             <div className="text-[#d8102f]">{errors.subject}</div>
           ) : null}

           </div>                       
           </div>
           <div className="flex flex-col md:flex-row justify-center items-center w-full">
           <div className="w-full m-2">
           <p >Message<span className="text-[#d8102f]">*</span></p>
           <Field id="message" name="message" as="textarea" placeholder="Message" className=" p-2 w-full  ring-2 ring-gray-200  bg-[#F4F7FA] rounded-sm h-40" />
           {errors.message && touched.message ? (
             <div className="text-[#d8102f]">{errors.message}</div>
           ) : null}
           </div>
                       
           </div>
            {isSubmitting ? (<button type="submit"  disabled className={`bg-gradient-to-br from-[#ab192b] to-[#d8102f] flex flex- px-3 lg:px-10 py-3 text-white text-[15px] font-extrabold  mt-2 mx-2 `}>Sending... 
           </button>) : (<button type="submit"  className={`bg-gradient-to-br from-[#ab192b] to-[#d8102f] flex flex- px-3 lg:px-10 py-3 text-white text-[15px] font-extrabold  mt-2 mx-2`}>Submit 
           </button>)}


         </Form>
        )}
       </Formik>
        </div>
      </div>
    </div>
  );
};

export default Page;
