import type React from "react";
import { forwardRef } from "react";

interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="w-full mb-6">
        <textarea
          ref={ref}
          className="w-full pb-2 text-gray-800 border-b border-gray-300 focus:border-gray-800 outline-none transition-colors resize-none"
          placeholder={label}
          rows={5}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

FormTextarea.displayName = "FormTextarea";

export default FormTextarea;
