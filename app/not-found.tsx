import Container from "@/components/Container";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section>
      <Container className="py-24 md:py-32">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            404
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary">
            Page not found.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            The page you were looking for doesn&rsquo;t exist or may have moved.
          </p>
          <div className="mt-8">
            <Button href="/">Back to home</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
