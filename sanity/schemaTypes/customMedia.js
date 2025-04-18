export default {
    name: 'media',
    title: 'Bild/Video',
    type: 'array',
    of: [
        {
            type: 'object',
            title: 'Bild',
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
            ]
        },
        {
            type: "file",
            title: "Video",
            options: { accept: "video/*" },
        },
    ],
}
