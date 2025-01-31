import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

let config = {
    projectId: "mh231zz3",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
};
const client = createClient(config);
const builder = imageUrlBuilder(client);

export default client;
export function urlForImage(img) {
    return builder.image(img);
}