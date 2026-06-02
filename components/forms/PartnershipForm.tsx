"use client";

import ConfidentialityNotice from "@/components/ui/ConfidentialityNotice";
import Button from "@/components/ui/Button";

export default function PartnershipForm() {
  return (
    <form
      className="form-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="form-group">
        <label htmlFor="partner-name" className="form-label">Full Name *</label>
        <input id="partner-name" name="name" type="text" className="form-input" required />
      </div>
      <div className="form-group">
        <label htmlFor="partner-email" className="form-label">Work Email *</label>
        <input id="partner-email" name="email" type="email" className="form-input" required />
      </div>
      <div className="form-group">
        <label htmlFor="partner-company" className="form-label">Company *</label>
        <input id="partner-company" name="company" type="text" className="form-input" required />
      </div>
      <div className="form-group">
        <label htmlFor="partner-message" className="form-label">Partnership Interest</label>
        <textarea id="partner-message" name="message" className="form-textarea" />
      </div>

      <ConfidentialityNotice />

      <Button type="submit" variant="primary">
        Submit Partnership Enquiry
      </Button>
    </form>
  );
}
