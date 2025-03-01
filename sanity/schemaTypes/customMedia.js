export default {
    name: 'media',
    title: 'Bild/Video',
    type: 'array',
    of: [
        {
            type: "image",
            title: "Bild",
            options: { hotspot: true },
        },
        {
            type: "file",
            title: "Video",
            options: { accept: "video/*" },
        },
    ],
}