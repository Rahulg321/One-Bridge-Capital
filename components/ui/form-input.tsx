import type React from "react";
import { forwardRef } from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="w-full mb-6">
        <input
          ref={ref}
          className="w-full pb-2 text-gray-800 border-b border-gray-300 focus:border-gray-800 outline-none transition-colors"
          placeholder={label}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;
