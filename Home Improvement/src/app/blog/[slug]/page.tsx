import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { POST_DETAIL_QUERY, ALL_SLUGS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { MOCK_POSTS, getMockPostBySlug } from "@/sanity/lib/mockData";

export const revalidate = 60; // Revalidate cache every 60 seconds

// Generate static params for Next.js build caching
export async function generateStaticParams() {
  try {
    const slugs = await client.fetch(ALL_SLUGS_QUERY);
    const sanitySlugs = (slugs || []).map((slug: string) => ({ slug }));
    const mockSlugs = MOCK_POSTS.map((post) => ({ slug: post.slug.current }));
    return [...sanitySlugs, ...mockSlugs];
  } catch (err) {
    return MOCK_POSTS.map((post) => ({ slug: post.slug.current }));
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post: any = null;
  let isMock = false;

  try {
    const sanityPost = await client.fetch(POST_DETAIL_QUERY, { slug });
    if (sanityPost) {
      post = sanityPost;
    } else {
      post = getMockPostBySlug(slug);
      isMock = true;
    }
  } catch (err) {
    console.warn(`Query failed for slug: ${slug}, using mock data fallback`, err);
    post = getMockPostBySlug(slug);
    isMock = true;
  }

  if (!post) {
    notFound();
  }

  // Custom Portable Text Renderers to match design aesthetics
  const portableTextComponents = {
    types: {
      image: ({ value }: any) => {
        if (!value?.asset) return null;
        return (
          <div className="relative my-10 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 shadow-sm max-w-4xl mx-auto">
            <img
              src={urlFor(value).width(1200).url()}
              alt={value.alt || post.title}
              className="w-full h-auto object-cover max-h-[600px]"
            />
            {value.alt && (
              <p className="mt-3 text-center text-xs text-zinc-400 dark:text-zinc-500 font-body">
                {value.alt}
              </p>
            )}
          </div>
        );
      },
    },
    block: {
      h2: ({ children }: any) => (
        <h2 className="text-3xl lg:text-4xl font-headline font-bold text-on-surface mt-12 mb-6 tracking-tight">
          {children}
        </h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-2xl lg:text-3xl font-headline font-bold text-on-surface mt-10 mb-4 tracking-tight">
          {children}
        </h3>
      ),
      normal: ({ children }: any) => (
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-350 mb-6 font-body">
          {children}
        </p>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-primary pl-6 my-8 font-headline text-xl lg:text-2xl font-bold italic text-primary dark:text-primary-container max-w-2xl mx-auto py-2">
          "{children}"
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="list-disc pl-8 mb-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-350 space-y-2 font-body">
          {children}
        </ul>
      ),
      number: ({ children }: any) => (
        <ol className="list-decimal pl-8 mb-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-350 space-y-2 font-body">
          {children}
        </ol>
      ),
    },
    marks: {
      link: ({ children, value }: any) => {
        const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
        return (
          <a
            href={value.href}
            rel={rel}
            target={rel ? "_blank" : undefined}
            className="text-primary dark:text-primary-container hover:underline font-bold"
          >
            {children}
          </a>
        );
      },
    },
  };

  return (
    <>
      <article className="w-full pt-16 pb-24">
        {/* Header Section */}
        <header className="max-w-4xl mx-auto px-6 lg:px-8 text-center mt-12 mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            {post.categories?.map((cat: any) => (
              <span
                key={cat._id}
                className="bg-primary-container text-on-primary-container text-xs font-headline font-bold uppercase px-3 py-1 rounded-full tracking-wider"
              >
                {cat.title}
              </span>
            ))}
            <span className="text-zinc-400 dark:text-zinc-500 text-sm">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-extrabold text-on-surface leading-tight tracking-tight mb-8">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-lg font-headline">
              {post.author?.name?.charAt(0)}
            </div>
            <div className="text-left">
              <p className="font-headline font-bold text-on-surface">
                {post.author?.name}
              </p>
              <p className="text-xs text-zinc-450 dark:text-zinc-550">
                Author & Professional Builder
              </p>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
          <div className="relative h-[300px] md:h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-md">
            <img
              src={isMock ? post.mainImage : urlFor(post.mainImage).width(1600).height(900).url()}
              alt={isMock ? post.title : (post.mainImage?.alt || post.title)}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose dark:prose-invert max-w-none">
            <PortableText value={post.body} components={portableTextComponents} />
          </div>

          {/* Author Bio Card */}
          {post.author?.bio && (
            <div className="mt-16 p-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-2xl font-headline shrink-0">
                {post.author?.name?.charAt(0)}
              </div>
              <div>
                <h4 className="font-headline font-bold text-on-surface text-lg mb-2">
                  About the Author: {post.author?.name}
                </h4>
                <p className="text-secondary text-sm leading-relaxed">
                  {post.author.bio}
                </p>
              </div>
            </div>
          )}

          {/* Navigation Back */}
          <div className="mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary dark:text-primary-container font-headline font-bold hover:underline"
            >
              <span className="material-symbols-outlined text-[1.2rem]">arrow_back</span>
              Back to blog list
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
