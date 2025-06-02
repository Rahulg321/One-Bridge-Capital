import { EmailTemplate } from "@/components/emails/contact-email";
import { contactFormSchema } from "@/lib/schemas/contact-form-schema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validatedData = contactFormSchema.safeParse(body);

    if (!validatedData.success) {
      return Response.json({ error: "Invalid data" }, { status: 400 });
    }

    const { firstName, lastName, email, phone, interest, message } =
      validatedData.data;

    const { data, error } = await resend.emails.send({
      from: "OneBridge Knowledge Partners <pragya@onebridgeknowledgepartners.com>",
      to: ["pragya@onebridgeknowledgepartners.com"],
      subject: "New Contact Form Submission",
      //@ts-ignore
      react: EmailTemplate({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        interest: interest,
        message: message,
      }),
    });

    if (error) {
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }

    console.log(data);

    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
