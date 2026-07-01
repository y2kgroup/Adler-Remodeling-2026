import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { ALL_POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { MOCK_POSTS } from "@/sanity/lib/mockData";

export const revalidate = 60; // Revalidate cache every 60 seconds

export default async function BlogPage() {
  let posts: any[] = [];
  let isMock = false;

  try {
    const sanityPosts = await client.fetch(ALL_POSTS_QUERY);
    if (sanityPosts && sanityPosts.length > 0) {
      posts = sanityPosts;
    } else {
      posts = MOCK_POSTS;
      isMock = true;
    }
  } catch (err) {
    console.warn("Using mock posts fallback due to Sanity connection or data status.", err);
    posts = MOCK_POSTS;
    isMock = true;
  }

  return (
    <>
      {/* Hero Section */}
      <header className="w-full max-w-[90rem] mx-auto px-8 mb-16 pt-24 lg:pt-32">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start max-w-5xl mx-auto">
          <div className="pt-4 shrink-0">
            <span className="inline-block text-primary font-label text-sm font-bold uppercase tracking-widest text-[#fcb900]">
              Ideas & Advice
            </span>
          </div>
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-tight mb-6">
              The Adler Journal <br />Home Remodeling Blog
            </h1>
            <p className="text-xl text-secondary leading-relaxed font-body">
              Expert advice, design inspiration, and detailed guides to help you make informed decisions about windows, doors, roofing, and home efficiency.
            </p>
          </div>
        </div>
      </header>

      {/* Featured Post Card (only if we have posts) */}
      {posts.length > 0 && (
        <section className="max-w-7xl mx-auto px-8 mb-16">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-zinc-100 dark:border-zinc-800">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative min-h-[300px] lg:min-h-[450px]">
                <img
                  src={isMock ? posts[0].mainImage : urlFor(posts[0].mainImage).width(800).height(600).url()}
                  alt={isMock ? posts[0].title : (posts[0].mainImage?.alt || posts[0].title)}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {isMock && (
                  <span className="absolute top-4 left-4 bg-primary/90 text-white font-headline text-xs font-bold uppercase px-3 py-1.5 rounded-full tracking-wider shadow-sm">
                    Featured Guide
                  </span>
                )}
              </div>
              <div className="p-8 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  {posts[0].categories?.map((cat: any) => (
                    <span
                      key={cat._id}
                      className="bg-primary-container text-on-primary-container text-xs font-headline font-bold uppercase px-3 py-1 rounded-full tracking-wider"
                    >
                      {cat.title}
                    </span>
                  ))}
                  <span className="text-zinc-400 dark:text-zinc-500 text-sm">
                    {new Date(posts[0].publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-headline font-extrabold text-on-surface mb-6 hover:text-primary transition-colors">
                  <Link href={`/blog/${posts[0].slug.current}`}>{posts[0].title}</Link>
                </h2>
                <p className="text-secondary text-lg leading-relaxed mb-8">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-bold text-primary font-headline">
                      {posts[0].author?.name?.charAt(0)}
                    </div>
                    <div>
                      <p className="font-headline font-bold text-on-surface text-sm">
                        {posts[0].author?.name}
                      </p>
                      <p className="text-xs text-zinc-400">Contributor</p>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${posts[0].slug.current}`}
                    className="inline-flex items-center gap-2 text-primary dark:text-primary-container font-headline font-bold hover:underline"
                  >
                    Read Article
                    <span className="material-symbols-outlined text-[1.2rem]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Grid of Remaining Posts */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <h2 className="text-3xl font-headline font-bold text-on-surface mb-8 border-b border-outline-variant/10 pb-4">
          Latest Publications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post: any) => (
            <article
              key={post._id}
              className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-zinc-100 dark:border-zinc-800 flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={isMock ? post.mainImage : urlFor(post.mainImage).width(600).height(400).url()}
                  alt={isMock ? post.title : (post.mainImage?.alt || post.title)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {isMock && (
                  <span className="absolute top-4 left-4 bg-primary/95 text-white font-headline text-[10px] font-bold uppercase px-2.5 py-1 rounded-full tracking-wider">
                    Idea Showcase
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  {post.categories?.map((cat: any) => (
                    <span
                      key={cat._id}
                      className="bg-secondary-container text-on-secondary-container text-[10px] font-headline font-bold uppercase px-2.5 py-0.5 rounded-full"
                    >
                      {cat.title}
                    </span>
                  ))}
                  <span className="text-zinc-400 dark:text-zinc-500 text-xs">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-50 dark:border-zinc-800">
                  <span className="font-headline font-bold text-xs text-on-surface">
                    By {post.author?.name}
                  </span>
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="text-primary dark:text-primary-container text-xs font-headline font-bold inline-flex items-center gap-1 hover:underline"
                  >
                    Read More
                    <span className="material-symbols-outlined text-[1rem]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
