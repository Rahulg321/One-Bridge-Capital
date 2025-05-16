import type React from "react";
import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";

interface FormSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
}

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, options, error, ...props }, ref) => {
    return (
      <div className="w-full mb-6 relative">
        <select
          ref={ref}
          className="w-full pb-2 text-gray-800 border-b border-gray-300 focus:border-gray-800 outline-none transition-colors appearance-none bg-transparent"
          defaultValue=""
          {...props}
        >
          <option value="" disabled>
            {label}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-2 bottom-3 w-4 h-4 text-gray-500 pointer-events-none" />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

FormSelect.displayName = "FormSelect";

export default FormSelect;
