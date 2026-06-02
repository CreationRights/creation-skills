import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="thank-you">
      <div className="thank-you__content">
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist or has been moved.</p>
        <Button href="/">Return Home</Button>
      </div>
    </div>
  );
}
