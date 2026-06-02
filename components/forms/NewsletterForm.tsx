"use client";

import Button from "@/components/ui/Button";

export default function NewsletterForm() {
  return (
    <form
      className="form-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
      }}
      style={{ display: "flex", gap: "var(--space-md)", maxWidth: "480px" }}
    >
      <input
        name="email"
        type="email"
        className="form-input"
        placeholder="Work email"
        required
        aria-label="Email address"
      />
      <Button type="submit" variant="primary">
        Subscribe
      </Button>
    </form>
  );
}
