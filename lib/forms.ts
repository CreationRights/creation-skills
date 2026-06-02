export type FormStatus = "idle" | "submitting" | "success" | "error";

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "textarea" | "select";
  required: boolean;
  options?: readonly string[];
}
