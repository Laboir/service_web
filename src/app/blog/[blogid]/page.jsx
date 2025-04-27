import Image from "next/image";
import { blogPosts } from "@/app/data/blogdata";

export default function BlogPage({ params }) {
  const { blogid } = params; // Correct way to get dynamic route params

  const post = blogPosts.find((post) => post.id === blogid);

  if (!post) {
    return (
      <div className="mx-auto">
        <h2 className="text-2xl text-center p-5">Blog Not Found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-xl font-bold mb-4">{post.title}</h1>

      {/* Blog Sections */}
      <section id="what-is-moringa" className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">What is Moringa?</h2>
        <p className="text-lg">
          According to Ayurveda, moringa is an effective medicinal plant.
          Moringa can help to balance all three doshas...
        </p>
      </section>

      <section id="moringa-for-diabetes" className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">
          How is Moringa helpful for Diabetes?
        </h2>
        <div className="mb-4">
          <Image
            src="/blood-sugar-check.jpg"
            alt="Blood Sugar Check"
            width={800}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <p className="text-lg">
          Moringa helps in regulating blood sugar levels by enhancing insulin
          sensitivity...
        </p>
      </section>
    </div>
  );
}
