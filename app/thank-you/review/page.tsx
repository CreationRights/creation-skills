import { thankYouPages } from "@/content/utilityPages";
import Button from "@/components/ui/Button";

const page = thankYouPages.review;

export const metadata = { title: page.title + " | Creation Skills" };

export default function ThankYouReviewPage() {
  return (
    <div className="thank-you">
      <div className="thank-you__content">
        <h1>{page.headline}</h1>
        <p>{page.body}</p>
        <Button href={page.cta.href}>{page.cta.label}</Button>
      </div>
    </div>
  );
}
