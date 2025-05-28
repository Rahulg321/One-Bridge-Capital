import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ContactForm from "@/components/contact-form";

/**
 * Props for `ContactHero`.
 */
export type ContactHeroProps = SliceComponentProps<Content.ContactHeroSlice>;

/**
 * Component for "ContactHero" Slices.
 */
const ContactHero: FC<ContactHeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <div className="flex flex-col gap-8 md:gap-12 lg:flex-row items-start lg:gap-20">
          <div className="lg:w-1/2 lg:mb-0">
            <h3 className="text-gray-800">
              We&apos;re here to support your{" "}
              <span className="text-special italic">next project</span>
            </h3>
            <p className="mt-4 text-gray-600">{slice.primary.tagline}</p>

            <div className="mt-10 text-gray-700 space-y-2">
              <span className="block">{slice.primary.email}</span>
              <span className="block">{slice.primary.phone_number}</span>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
