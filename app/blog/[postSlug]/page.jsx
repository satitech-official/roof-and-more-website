import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "../../components/LocalImage";
import { blogPosts, contact } from "../../data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ postSlug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { postSlug } = await params;
  const post = blogPosts.find((item) => item.slug === postSlug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogArticle({ params }) {
  const { postSlug } = await params;
  const post = blogPosts.find((item) => item.slug === postSlug);
  if (!post) notFound();

  return (
    <main>
      <article className="article-shell">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <span>{post.title}</span>
        </nav>
        <p className="eyebrow">{post.category} | {post.readTime}</p>
        <h1>{post.title}</h1>
        <p className="article-deck">{post.excerpt}</p>
        <div className="article-image">
          <Image src={post.image} alt={post.title} fill priority sizes="100vw" />
        </div>
        <div className="article-body">
          <h2>Planning context</h2>
          <p>
            Roof & More projects benefit from a joined-up briefing process:
            project goals, site realities, budget expectations, technical
            drawings and execution constraints should be clarified before
            design decisions become expensive to change.
          </p>
          <h2>What to prepare</h2>
          <p>
            Share dimensions, photographs, floor plans, service requirements,
            preferred materials, rough timeline and any operational constraints.
            For roofing or PEB work, existing structure condition and drainage
            requirements should also be reviewed.
          </p>
          <h2>Next step</h2>
          <p>
            Use the quotation or site-visit flow to start a practical discussion
            with the studio. Technical claims, pricing and warranty language
            should always be confirmed by Roof & More before publication.
          </p>
          <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="primary-link">
            Discuss This Topic
          </a>
        </div>
      </article>
    </main>
  );
}
