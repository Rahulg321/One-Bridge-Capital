"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, AlertCircle } from "lucide-react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FormInput from "@/components/ui/form-input";
import FormTextarea from "@/components/ui/form-textarea";
import FormSelect from "@/components/ui/form-select";
import { contactFormSchema } from "@/lib/schemas/contact-form-schema";

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const interestOptions = [
    { value: "partnership", label: "Strategic Partnership" },
    { value: "information", label: "General Information" },
    { value: "services", label: "Services" },
    { value: "other", label: "Other" },
  ];

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    setFormStatus({ type: null, message: "" });
    startTransition(async () => {
      try {
        const response = await axios.post("/api/send-email", data);
        if (response.status === 200) {
          setFormStatus({
            type: "success",
            message: "Thank you for your message. We'll get back to you soon!",
          });
          form.reset();
        } else {
          throw new Error("An error occured");
        }
      } catch (error) {
        console.log(error);
        setFormStatus({
          type: "error",
          message: "There was an error submitting your form. Please try again.",
        });
      }
    });
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
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FormInput
                    label="First Name"
                    {...field}
                    error={form.formState.errors.firstName?.message}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FormInput
                    label="Last Name"
                    {...field}
                    error={form.formState.errors.lastName?.message}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FormInput
                    label="Email Address"
                    type="email"
                    {...field}
                    error={form.formState.errors.email?.message}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FormInput
                    label="Contact Number"
                    type="tel"
                    {...field}
                    error={form.formState.errors.phone?.message}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="md:col-span-2">
            <FormField
              control={form.control}
              name="interest"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormSelect
                      label="Interested In"
                      options={interestOptions}
                      {...field}
                      error={form.formState.errors.interest?.message}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="md:col-span-2">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormTextarea
                      label="Leave us a message"
                      {...field}
                      error={form.formState.errors.message?.message}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="md:col-span-2 mt-4">
            <Button
              type="submit"
              disabled={isPending}
              className="bg-special cursor-pointer hover:bg-special/80 text-white px-8 py-2 rounded-none"
            >
              {isPending ? "Sending..." : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
