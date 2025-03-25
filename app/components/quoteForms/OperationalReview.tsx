'use client'
import {useForm } from "react-hook-form";
import React from "react";

import {handleSubmitQuoteForm} from '../../utils/sendEmails/handleSubmit.ts'

const  OperationalReview = () =>
{ 
   const {register, handleSubmit, formState: {errors}, watch} = useForm({
      defaultValues: {
         fullName: '',
         email: '',
         phone: '',
         companyName: '',
         companyWebsite: '',
         industry: '',
         businessStage: '',
         operationalChallenges : [],
         primaryObjectives: [],
         kpiMetrics: [],
         packageInterest: '',
         additionalPackageDetails: '',
         additionalPackageDetailsMessage: '',
         deadline: '',
         additionalDetails: '',

      }});
   const deadline = watch("deadline")
   const additionalPackageDetails = watch("additionalPackageDetails")

   return (
      <form  onSubmit={handleSubmit(data => {
         handleSubmitQuoteForm(data, 'operational_review')
      })} className="p-6 m-6 md:p-10 w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
         <h2 className="text-3xl font-bold mb-6 text-primary">Operational Consultation</h2>

         {/* Basic Information */}
         <div className="mb-8">
            <h3 className="text-lg font-semibold text-primary">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div>
                  <label>Full Name</label>
                  <input {...register("fullName", {required: 'Name is required'})} type="text" className="input" aria-invalid={errors.fullName ? "true" : "false"}  />
                  <p role="alert" className="text-red-500">{errors.fullName?.message}</p>
               </div>
               <div>
                  <label>Email Address</label>
                  <input {...register("email", {required: 'Email is required', minLength: 6} )} type="email"  className="input" aria-invalid={errors.email ? "true" : "false"}/>
                  <p role="alert" className="text-red-500">{errors.email?.message}</p>
               </div>
               <div>
                  <label>Phone Number</label>
                  <input {...register("phone", {required: 'Phone number is required', minLength: 10})} type="tel"  className="input" aria-invalid={errors.phone ? "true" : "false"}  />
                  <p role="alert" className="text-red-500">{errors.phone?.message}</p>
               </div>
               <div>
                  <label>Company Name</label>
                  <input {...register("companyName")} type="text" className="input"  />
               </div>
               <div>
                  <label>Company Website (if applicable)</label>
                  <input {...register("companyWebsite")} type="text" className="input"  />
               </div>
            </div>
         </div>

         {/* Business Overview */} 
         <h3 className="text-lg font-semibold text-primary">Business Overview</h3>
         <div className="mb-8 flex flex-col grid grid-cols-1 gap-2 ">

            <label>Industry</label>
            <input {...register("industry", {required: 'Industry is required'})} type="text" className="input"  />
            <p className="text-red-500">{errors.industry?.message}</p>
            <label>Business Stage</label>
            <select {...register("businessStage", {required: 'Business Stage is required'})} type="number" className="input w-16"  >
               <option value="">Select</option>
               <option value="Pre-Launch">Pre-Launch</option>
               <option value="Early Growth">Early Growth</option>
               <option value="Scaling">Scaling</option>
               <option value="Established">Established</option>
            </select>
            {/* Business Goals */}
            <div className="mb-8">
               <h3 className="text-lg font-semibold text-primary">What are the key operational challenges your business is facing? (Select all that
                  apply)</h3>
               {[
                  'Workflow inefficiencies',
                  'Bottlenecks in processes',
                  'Lack of standard procedures',
                  'High operational costs',
                  'Technology or automation gaps',
               ].map((challenge) => (
                     <label key={challenge} className="block">
                        <input type="checkbox" {...register("operationalChallenges", {required: true, minLength: 1})} value={challenge}  /> {challenge}
                     </label>
                  ))}
            </div>

            {/* Package Selection */}
            <div className="mb-8 flex flex-col">
               <h3 className="text-lg font-semibold text-primary">Package Selection</h3>
               <label>Select the package you are interested in:</label>
               <p className="text-red-500">{errors.packageInterest?.message}</p>
               <select {...register("packageInterest", {required: 'Package is required'})} className="input" >
                  <option value="">Select</option>
                  <option value="basic">$800 - $1,200 (Basic)</option>
                  <option value="plus">$1,500 - $2,000 (Plus)</option>
                  <option value="premium">$2,500 - $3,500 (Premium)</option>
               </select>

               <label>Do you need additional customization or services beyond the selected package?</label>
               <select {...register("additionalPackageDetails")} className="input" >   
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
               </select>
               {errors.additionalPackageDetails?.message}
               { additionalPackageDetails === 'yes' &&
                  <textarea {...register("additionalPackageDetailsMessage")} className="input" />
               }

            </div>

            {/* Leadership Challenges */}
            <div className="mb-8">
               <h3 className="text-lg font-semibold text-primary">What are your primary objectives for this operational review? (Select all that
                  apply)</h3>
               {[
                  'Identifying inefficiencies in processes and workflows',
                  'Improving productivity and reducing costs',
                  'Streamlining operations for scalability',
                  'Implementing key performance indicators (KPIs)',
                  'Redesigning processes for greater efficiency',
                  'Risk mitigation and contingency planning',
               ].map((objective) => (
                     <label key={objective} className="block">
                        <input type="checkbox" {...register("primaryObjectives", {required: true, minLength: 1})} value={objective}  /> {objective}
                     </label>
                  ))}
            </div>

            {/* Leadership Development Program */}
            <label>Do you currently track operational performance metrics or KPIs?</label>
            <select {...register("kpiMetrics", {required: true})} className="input" >
               <option value="">Select</option>
               <option value="yes">Yes</option>
               <option value="no">No</option>
            </select>

         </div>


         {/* Preferred Start Date */}
         <div className="mb-8">
            <label>Is there a hard deadline for your Business Plan plan?</label>
            <select {...register("deadline")} type="date" className="input">
               <option value="">Select</option>
               <option value="yes">Yes</option>
               <option value="no">No</option>
            </select>
            { deadline === 'yes' && (

               <div>
                  <label>What is the preferred start date?</label>
                  <input {...register("preferredStartDate")} type="date" className="input"  />
               </div>)
            }

         </div>

         {/* Additional Information */}
         <div className="mb-8">
            <label>Any other relevant details or specific requirements for your Business Plan
               plan?</label>
            <textarea {...register("additionalDetails")} className="input"  />
         </div>

         <button type="submit" className="w-full bg-primary text-white py-4 px-4 rounded-lg hover:bg-secondary hover:text-primary hover:cursor-pointer transition">
            Request Quote
         </button>
      </form>
   );
};
export default OperationalReview;
