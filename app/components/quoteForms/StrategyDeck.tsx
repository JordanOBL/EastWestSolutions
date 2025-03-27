'use client'
import {useForm } from "react-hook-form";
import React from "react";

import {handleSubmitQuoteForm} from '../../utils/sendEmails/handleSubmit.ts'

const  StrategyDeck = () =>
{ 
   const {register, reset, handleSubmit, formState: {errors}, watch} = useForm({
      defaultValues: {
         fullName: '',
         email: '',
         phone: '',
         companyName: '',
         companyWebsite: '',
         industry: '',
         businessStage: '',
         businessKeyObjectives: '',
         strategyDeckGoals: [],
         strategyDeckFocus: [],
         existingData: '',
         packageInterest: '',
         additionalPackageDetails: '',
         deadline: '',
         deadlineDate: '',
         additionalDetails: '',

      }});
   const deadline = watch("deadline")
   const additionalPackageDetails = watch("additionalPackageDetails")

   return (
      <form  onSubmit={handleSubmit(async (data) => {
         const response = await handleSubmitQuoteForm(data, 'strategy_deck')
         if (response?.status === 200) {
            alert('Form submitted successfully!')
            reset()
         }else{
            alert('Form submission failed!')
         }

      })} className="p-6 m-6 md:p-10 w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
         <h2 className="text-3xl font-bold mb-6 text-primary">Strategy Deck</h2>

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
            <select {...register("businessStage", {required: 'Business Stage is required'})} className="input w-16"  >
               <option value="">Select</option>
               <option value="Pre-Launch">Pre-Launch</option>
               <option value="Early Growth">Early Growth</option>
               <option value="Scaling">Scaling</option>
               <option value="Established">Established</option>
            </select>
            {/* Business Goals */}
            <label className="text-lg font-semibold text-primary">Briefly describe your business and its key objectives:</label>
            <textarea {...register("businessKeyObjectives", {required: 'Business objectives are required', minLength: 10})} className="input"  />
            <p className="text-red-500">{errors.businessObjectives?.message}</p>

            <h3 className="text-lg font-semibold text-primary">What are the primary goals for your strategy deck?</h3>
            {[
               'Securing funding (loans, investors, grants)',
               'Strategic growth planning',
               'Internal business roadmap',
               'Market research and competitive analysis',
            ].map((goal) => (
                  <label key={goal} className="block">
                     <input type="checkbox" {...register("strategyDeckGoals", {required: true, minLength: 1})} value={goal}  /> {goal}
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
               <option value="basic">$600 - $1,000 (Basic)</option>
               <option value="plus">$1,200 - $1,800 (Plus)</option>
               <option value="premium">$2,000 - $2,800 (Premium)</option>
            </select>

            <label>Do you need additional customization?</label>
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


            <h3 className="text-lg font-semibold text-primary">What is the primary focus of your strategy deck? (Select all that apply)</h3>
            {[
               'Business Model Overview',
               'Market Positioning & Competitor Analysis',
               'Key Growth Opportunities & Expansion Strategy',
               'Operational Efficiencies & Team Structure',
               'Revenue Streams & Financial Strategy',
               'Risk Assessment & Mitigation Strategies'
            ].map((focus) => (
                  <label key={focus} className="block">
                     <input type="checkbox" {...register("strategyDeckFocus", {required: true, minLength: 1})} value={focus}  /> {focus}
                  </label>
               ))}
            <label>Do you have existing market research or financial data to include in the strategy
               deck?</label>
            <select {...register("existingData")} className="input">
               <option value="">Select</option>
               <option value="yes">Yes</option>
               <option value="no">No</option>
               <option value="unknown">Not sure, need assistance with research</option>
            </select>

         </div>


         {/* Preferred Start Date */}
         <div className="mb-8">
            <label>Is there a hard deadline for your strategy deck?</label>
            <select {...register("deadline")} className="input">
               <option value="">Select</option>
               <option value="yes">Yes</option>
               <option value="no">No</option>
            </select>
            { deadline === 'yes' && (

               <div>
                  <label>Please enter hard deadline: </label>
                  <input {...register("deadlineDate")} type="date" className="input"  />
               </div>)
            }

         </div>

         {/* Additional Information */}
         <div className="mb-8">
            <label>Any other relevant details or specific requirements for your Strategy Deck?</label>
            <textarea {...register("additionalDetails")} className="input"  />
         </div>

         <button type="submit" className="w-full bg-primary text-white py-4 px-4 rounded-lg hover:bg-secondary hover:text-primary hover:cursor-pointer transition">
            Request Quote
         </button>
      </form>
   );
};
export default StrategyDeck;
