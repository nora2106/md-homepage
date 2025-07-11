export default {
    name: 'media',
    title: 'Bild/Video',
    type: 'array',
    of: [
        {
            type: 'object',
            title: 'Bild',
            name: 'imageObject',
            fields: [
                {
                    name: 'image',
                    type: 'image',
                    title: 'Bild',
                    options: { hotspot: true },
                },
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alt-Text (für Barrierefreiheit und SEO)',
                },
                {
                    name: 'copyright',
                    type: 'string',
                    title: 'Name für Copyright',
                },
            ]
        },
        {
            type: "file",
            title: "Video",
            options: { accept: "video/*" },
        },
        {
            type: 'object',
            title: 'Youtube-Link',
            name: 'linkObject',
            fields: [
                {
                    name: 'url',
                    type: 'url',
                    title: 'YouTube URL',
                    validation: Rule => Rule.uri({
                        scheme: ['http', 'https'],
                        allowRelative: false
                    })
                }
            ]
        },
    ],
}
