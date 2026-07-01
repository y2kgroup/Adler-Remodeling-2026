import { defineType, defineField } from "sanity";
import { EditorGuide } from "../components/EditorGuide";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          validation: (Rule) => Rule.required().error("Alternative text is required for accessibility (SEO)."),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "A short summary of the post used for search engine results and listing cards.",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      initialValue: [
        {
          _type: "block",
          style: "h2",
          children: [{ _type: "span", text: "Project Overview" }],
        },
        {
          _type: "block",
          style: "normal",
          children: [{ _type: "span", text: "Describe the home remodeling project, the client's objective, and the location here..." }],
        },
        {
          _type: "block",
          style: "h2",
          children: [{ _type: "span", text: "Design & Material Selection" }],
        },
        {
          _type: "block",
          style: "normal",
          children: [{ _type: "span", text: "Explain why specific materials (e.g. particular frames, glass, shingles) were selected and how they improve aesthetics and performance..." }],
        },
        {
          _type: "block",
          style: "blockquote",
          children: [{ _type: "span", text: "Insert a quote from the client or lead designer here about the transformation." }],
        },
        {
          _type: "block",
          style: "h2",
          children: [{ _type: "span", text: "The Resulting Transformation" }],
        },
        {
          _type: "block",
          style: "normal",
          children: [{ _type: "span", text: "Summarize the final details of the installation and the value it adds to the home..." }],
        },
      ],
    }),
    defineField({
      name: "editorGuide",
      title: "Authoring Guide",
      type: "string",
      components: {
        field: EditorGuide,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return {
        ...selection,
        subtitle: author ? `by ${author}` : "",
      };
    },
  },
});
