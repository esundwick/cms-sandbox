import {defineField, defineArrayMember, defineType} from 'sanity'

export default defineType({
    name: "NewsArticle",
    title: "News Article",
    type: "document",
    fields: [
        defineField({
        name: "title",
        title: "Headline",
        type: "string"
      }),
      defineField({
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          "source": "title",
          "maxLength": 200
        }
      }),
      defineField({
        name: "byline",
        title: "Byline(s)",
        type: "array",
        of: [{"type":"reference", to: [{ "type": "author" }] }],
        description: "Select one or more authors for this article."
      }),
      defineField({
        name: "publishedDate",
        title: "Published Date",
        type: "date"
      }),
      defineField({
        name: "content",
        title: "Content",
        type: "array",
        of: [
            defineArrayMember({
                type: "block",
                name: "block",
                styles: [],
                marks: {
                  decorators: [
                    { title: "Strong", value: "strong" },
                    { title: "Emphasis", value: "em" }
                  ],
                  annotations: [
                    { title: "Quotable text", type: "boolean"},
                    { title: "Print only", type: "boolean"}
                  ] 
                }
            }),
            defineArrayMember({
                type: "videoEmbed",
                name: "videoEmbed",
                title: "Video Embed"
            }),
            defineArrayMember({
                type:"instaEmbed",
                name: "instaEmbed",
                title: "Instagram Embed"
            }),
            defineArrayMember({
                type:"twitterEmbed",
                name: "twitterEmbed",
                title: "Twitter Embed"
            }),
            defineArrayMember({
                type: "externalLink",
                name: "externalLink",
                title: "External Link",
//                  todo: figure out how to add complex objects in a PTE array                
//                fields: [
//                  {
//                    "name": "url",
//                    "title": "URL",
//                    "type": "url",
//                    "validation": (Rule) => Rule.required()
//                  },
//                  {
//                    "name": "description",
//                    "title": "Description",
//                    "type": "text"
//                  }
//                ]
            })
        ]
      }),
      defineField({
        name: "image",
        title: "Image",
        type: "image"
      }),
      defineField({
        name: "category",
        title: "Category",
        type: "reference",
        to: [{ "type": "category" }]
      }),
      defineField({
        name: "monetizationStatus",
        title: "Monetization Status",
        type: "string",
        options: {
            "list": ["metered", "free", "sponsored", "premium"],
            "layout": "dropdown",
        }
        // to do: figure out how to set a default value
      }),
      defineField({
        name: "tags",
        title: "Tags",
        type: "array",
        of: [{ "type": "reference", "to": [{ "type": "tag" }] }],
//        "of": [{ "type": "string" }],
//          comment this out because we're creating tags as a document so they can be global
        options: {
          "layout": "tags"
        }
      })
    ]
  })