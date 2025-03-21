// Imported from React Hook Form
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomFormField from "@/components/ui/CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/router"

export enum FormFieldType {
  INPUT='input'
  TEXTAREA='textarea'
  PHONE_INPUT='phoneinput'
  CHECKBOX='checkbox'
  DATE_PICKER='datePicker'
  SELECT='select'
  SKELETON='skeleton'

}
const PatientForm = () => {
  const router = useRouter
  const[isLoading,setIsLoading] = useState(false);


  // Defining the form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })

  //Defining a submit handler.
  async function onSubmit({ name , email , phone}: z.infer<typeof UserFormValidation>) {
   setIsLoading(true);

   try {
    const userData = { name , email , phone};

    const user = await createUser(userData);

    if (user) router.push(`/patients/${user.$id}/register`)
   } catch (error) {
     console.log(error);
   }
    console.log(values)
  }
    return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <section className="mb-12 space-y-4">
        <h1 className="header">Welcome!👋</h1>
         <p className="text-dark-700"> Proceed to schedule your appointment.</p>
        </section>

        <CustomFormField
          fieldType=(FormFieldType.INPUT)
          control=(form.control)
          name="name"
          label="Full Name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          fieldType=(FormFieldType.INPUT)
          control=(form.control)
          name="email"
          label="Email"
          placeholder="johndoe@outlook.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <CustomFormField
          fieldType=(FormFieldType.PHONE_INPUT)
          control=(form.control)
          name="phone"
          label="Phone Number"
          placeholder="0712345678"
        />

        <SubmitButton isLoading={isLoading}>
          Get Started
        </SubmitButton>
      </form>
    </Form>

export default PatientForm

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
