"use client";

import ConfidentialityNotice from "@/components/ui/ConfidentialityNotice";
import Button from "@/components/ui/Button";

export default function BriefingForm() {
  return (
    <form
      className="form-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="form-group">
        <label htmlFor="briefing-name" className="form-label">Full Name *</label>
        <input id="briefing-name" name="name" type="text" className="form-input" required />
      </div>
      <div className="form-group">
        <label htmlFor="briefing-email" className="form-label">Work Email *</label>
        <input id="briefing-email" name="email" type="email" className="form-input" required />
      </div>
      <div className="form-group">
        <label htmlFor="briefing-company" className="form-label">Company</label>
        <input id="briefing-company" name="company" type="text" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="briefing-topic" className="form-label">Briefing Topic</label>
        <textarea id="briefing-topic" name="topic" className="form-textarea" />
      </div>

      <ConfidentialityNotice />

      <Button type="submit" variant="primary">
        Request Briefing
      </Button>
    </form>
  );
}
