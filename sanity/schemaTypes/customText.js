export default {
    title: 'Text Block',
    name: 'customText',
    type: 'array',
    of: [
        {
            type: 'block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'Heading 2', value: 'h2' },
                { title: 'Heading 3', value: 'h3' },
                { title: 'Heading 4', value: 'h4' }
            ],
            lists: [{ title: 'List', value: 'bullet' }],
            marks: {
                decorators: [
                    { title: 'Bold', value: 'strong' },
                    { title: 'Italic', value: 'em' },
                    { title: 'Underline', value: 'underline' }
                ],
            }
        }
    ]
};