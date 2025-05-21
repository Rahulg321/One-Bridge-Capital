"use client";

import { useState } from "react";
import { X, Phone } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  companyName: z.string().min(10, {
    message: "Please enter a valid company name.",
  }),
  date: z.date({
    required_error: "Please select a date for the callback.",
  }),
});

export function RequestCallback() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this data to your backend
    console.log(values);

    // Show success message
    setIsSubmitted(true);
    toast.success("Request submitted successfully!");

    // Reset form and close after 2 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      form.reset();
    }, 2000);
  }

  const toggleForm = () => {
    setIsOpen(!isOpen);
    if (isSubmitted) setIsSubmitted(false);
  };

  return (
    <div className="">
      <Button
        onClick={toggleForm}
        className={cn(
          "cursor-pointer rotate-270 z-100 bg-special hover:bg-special/80 text-[10px] font-semibold fixed bottom-1/2 right-[-5rem] uppercase py-2 px-3",
          isOpen ? "hidden" : "flex"
        )}
        size={"xs"}
      >
        <Phone className="mr-2 h-3 w-3" />
        Request a Callback
      </Button>

      {/* Form Panel */}
      <div
        className={cn(
          "fixed bottom-4 right-4 w-80 z-50 transform bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out",
          isOpen ? "translate-y-0" : "translate-y-full opacity-0"
        )}
      >
        <div className="mb-4 flex items-center justify-between">
          <h4 className="font-semibold">Request a Callback</h4>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleForm}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center space-y-4 py-8 text-center">
            <div className="rounded-full bg-green-100 p-3">
              <Phone className="h-6 w-6 text-green-600" />
            </div>
            <h4 className="text-xl font-medium">Request Submitted!</h4>
            <p className="text-muted-foreground">
              We&apos;ll call you at your preferred time.
            </p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" type="email" {...field} />
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
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Company name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Preferred Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Submit Request
              </Button>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
}
