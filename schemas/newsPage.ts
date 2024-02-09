import {defineField, defineType} from 'sanity'

export default defineType({
    name: "NewsPage",
    title: "News Page",
    type: "document",
    fields: [
        defineField({
        name: "title",
        title: "Page Title",
        type: "string"
        }),
        defineField({
            name: "description",
            title: "Page Description",
            type: "text"
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "category" }]
        }),
        defineField({
            name: "featuredStories",
            title: "Featured Stories",
            type: "array",
            of: [{ type: "newsArticle" }],
            options: { layout: "grid" }
        }),
        defineField({
            name: "modules",
            title: "Modules",
            type: "array",
            of: [
              { type: "textModule" },
              { type: "imageModule" },
              { type: "videoModule" },
              { type: "customModule" }
            ],
            options: { sortable: true },
        }),
        defineField({
            name: "configOptions",
            title: "Configuration Options",
            type: "object",
            fields: [
                {
                    name: "automated",
                    title: "Automated",
                    type: "boolean",
                    description: "Check this box if the page content is generated automatically."
                },
                {
                    name: "lastUpdatedDate",
                    title: "Last Updated Date",
                    type: "date",
                    description: "Manually increment this date when the page is updated."
                },
                {
                    name: "breakingNewsBanner",
                    title: "Breaking News Banner",
                    type: "object",
                    description: "Update the breaking news banner.",
                    fields: [
                        {
                            name: "text",
                            title: "Banner Text",
                            type: "text",
                            description: "Enter the breaking news text or message."
                        },
                        {
                            name: "article",
                            title: "Linked Article",
                            type: "reference",
                            to: [{ type: "NewsArticle" }],
                            description: "Select an article to link to from the breaking news banner (optional)."
                        },
                        {
                            name: "ctaCopy",
                            title: "CTA Copy",
                            type: "string",
                            description: "Choose the Call to Action (CTA) copy for the breaking news banner.",
                            options: { list: ["Breaking", "Right Now", "Coming Up", "Just In", "News Alert"] }
                        }
                    ]
                }
            ]
        })
    ]
})
        
// todo: figure out how to declare module types inline
//    {
//        name: "newsArticle",
//        title: "News Article",
//        type: "reference",
//        to: [{ "type": "NewsArticle" }]
//    },
//    {
//        name: "textModule",
//        title: "Text Module",
//        type: "object",
//        fields: [
//            defineField({
//                name: "content",
//               title: "Content",
//                type: "text"
//            })
//        ]
//    },
//    {
//        name: "imageModule",
//        title: "Image Module",
//        type: "object",
//        fields: [
//          {
//            name: "image",
//            title: "Image",
//            type: "image"
//          },
//          {
//            name: "caption",
//            title: "Caption",
//            type: "text"
//          }
//        ]
//    },
//    {
//        name: "videoModule",
//        title: "Video Module",
//        type: "object",
//        fields: [
//          {
//            name: "videoUrl",
//            title: "Video URL",
//            type: "url"
//          },
//          {
//            name: "description",
//            title: "Description",
//            type: "text"
//          }
//        ]
//    },
//    {
//        name: "customModule",
//        title: "Custom Module",
//        type: "object",
//        fields: [
//          {
//            name: "title",
//            title: "Title",
//            type: "string"
//          },
//          {
//            name: "content",
//            title: "Content",
//            type: "text"
//          }
//        ]
//    }