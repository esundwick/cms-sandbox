import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    }),
    defineField({
      name: 'lastName',
      title: 'Last name',
      type: 'string'
    }),
 //   defineField({
 //     name: 'slug',
 //     title: 'Slug',
 //     type: 'slug',
 //     options: {
 //       source: 'name',
 //       maxLength: 96,
 //     },
 //   }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'email',
      title: 'Email address',
      type: 'string'
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'expertiseAreas',
      title: 'Areas of expertise',
      type: 'array',
      of: [{ 'type': 'reference', "to": [{ "type": "tag"}] }]
    })
  ],
  preview: {
    select: {
      title: ('lastName'+' , '+'firstName'),
      media: 'image',
    },
  },
})
