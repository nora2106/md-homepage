import { createClient } from "@sanity/client";

let config = {
    projectId: "ga8lllhf",
    dataset: "production",
    apiVersion: "2023-07-16",
    useCdn: false,
};

const client = createClient(config);

export default client;