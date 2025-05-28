"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, AlertCircle } from "lucide-react";
import FormInput from "@/components/ui/form-input";
import FormTextarea from "@/components/ui/form-textarea";
import FormSelect from "@/components/ui/form-select";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const interestOptions = [
    { value: "partnership", label: "Strategic Partnership" },
    { value: "information", label: "General Information" },
    { value: "services", label: "Services" },
    { value: "other", label: "Other" },
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // if (!response.ok) throw new Error('Failed to submit form')

      setFormStatus({
        type: "success",
        message: "Thank you for your message. We'll get back to you soon!",
      });
      reset();
    } catch (error) {
      console.log(error);

      setFormStatus({
        type: "error",
        message: "There was an error submitting your form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {formStatus.type && (
        <Alert
          className={`mb-6 ${formStatus.type === "success" ? "bg-green-50" : "bg-red-50"}`}
        >
          {formStatus.type === "success" ? (
            <CheckCircle className="h-4 w-4 text-green-600" />
          ) : (
            <AlertCircle className="h-4 w-4 text-red-600" />
          )}
          <AlertDescription
            className={
              formStatus.type === "success" ? "text-green-700" : "text-red-700"
            }
          >
            {formStatus.message}
          </AlertDescription>
        </Alert>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-6"
      >
        <FormInput
          label="First Name"
          {...register("firstName", { required: "First name is required" })}
          error={errors.firstName?.message}
        />

        <FormInput
          label="Last Name"
          {...register("lastName", { required: "Last name is required" })}
          error={errors.lastName?.message}
        />

        <FormInput
          label="Email Address"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          error={errors.email?.message}
        />

        <FormInput
          label="Contact Number"
          type="tel"
          {...register("phone", { required: "Phone number is required" })}
          error={errors.phone?.message}
        />

        <div className="md:col-span-2">
          <FormSelect
            label="Interested In"
            options={interestOptions}
            {...register("interest", {
              required: "Please select an interest",
            })}
            error={errors.interest?.message}
          />
        </div>

        <div className="md:col-span-2">
          <FormTextarea
            label="Leave us a message"
            {...register("message", { required: "Message is required" })}
            error={errors.message?.message}
          />
        </div>

        <div className="md:col-span-2 mt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-special hover:bg-special/80 text-white px-8 py-2 rounded-none"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
}
