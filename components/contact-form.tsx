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

    console.log(data);

    try {
      // In a real application, you would send this data to your API
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // })

      // Simulating API call with timeout
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
    <div className="max-w-7xl mx-auto ">
      <div className="flex flex-col lg:flex-row items-center lg:gap-12">
        {/* Left column - Company information */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <div className="inline-block bg-[#8B1D1D] text-white px-4 py-1 mb-4">
            <h2 className="text-sm font-medium">CONTACT US</h2>
          </div>
          <h3 className="text-2xl font-medium text-gray-800">
            An opportunity for a strategic partnership awaits you.{" "}
            <span className="italic text-[#8B1D1D]">
              Let&apos;s get in touch.
            </span>
          </h3>
          <p className="mt-4 text-gray-600">
            For more information regarding Redwood North or to discuss a
            potential partnership please get in touch via the below or complete
            our quick contact form.
          </p>

          <div className="mt-12 text-gray-700">
            <p className="font-medium">Suite 9.02, Level 9,</p>
            <p>46 Market Street,</p>
            <p>Sydney NSW 2000</p>
            <p className="mt-4">info@redwoodnorth.com.au</p>
            <p>(02) 8310 9187</p>
          </div>
        </div>

        {/* Right column - Form */}
        <div className="lg:w-1/2">
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
                  formStatus.type === "success"
                    ? "text-green-700"
                    : "text-red-700"
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
              label="FIRST NAME"
              {...register("firstName", { required: "First name is required" })}
              error={errors.firstName?.message}
            />

            <FormInput
              label="LAST NAME"
              {...register("lastName", { required: "Last name is required" })}
              error={errors.lastName?.message}
            />

            <FormInput
              label="EMAIL ADDRESS"
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
              label="CONTACT NUMBER"
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
              error={errors.phone?.message}
            />

            <div className="md:col-span-2">
              <FormSelect
                label="INTERESTED IN"
                options={interestOptions}
                {...register("interest", {
                  required: "Please select an interest",
                })}
                error={errors.interest?.message}
              />
            </div>

            <div className="md:col-span-2">
              <FormTextarea
                label="LEAVE US A MESSAGE"
                {...register("message", { required: "Message is required" })}
                error={errors.message?.message}
              />
            </div>

            <div className="md:col-span-2 mt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#8B1D1D] hover:bg-[#6B1515] text-white px-8 py-2 rounded-none"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
