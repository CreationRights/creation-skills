"use client";

import { reviewFormFields } from "@/content/forms";
import ConfidentialityNotice from "@/components/ui/ConfidentialityNotice";
import Button from "@/components/ui/Button";

export default function BookReviewForm() {
  return (
    <form
      className="form-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {reviewFormFields.fields.map((field) => (
        <div key={field.name} className="form-group">
          <label htmlFor={field.name} className="form-label">
            {field.label}
            {field.required && " *"}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              className="form-textarea"
              required={field.required}
            />
          ) : field.type === "select" ? (
            <select
              id={field.name}
              name={field.name}
              className="form-select"
              required={field.required}
              defaultValue=""
            >
              <option value="" disabled>
                Select...
              </option>
              {field.options?.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              className="form-input"
              required={field.required}
            />
          )}
        </div>
      ))}

      <ConfidentialityNotice />

      <Button type="submit" variant="primary">
        Submit Review Request
      </Button>
    </form>
  );
}
