import { groq } from "next-sanity";
import client from "./sanity-client";

export async function getHomepage() {
    return client.fetch(
        groq`*[_type == "homepage"]{
      _id,
      title,
      body
    }`
    );
}