import { groq } from "next-sanity";
import client from "./sanity-client";

export async function getHomepage() {
    return client.fetch(
        groq`*[_type == "homepage"]{
      page_headline,
      about_me_headline,
      about_me_media,
      about_me_text,
      events_headline,
      events_image
    }`
    );
}

export async function getEvents() {
    return client.fetch(
        groq`*[_type == "event"]{
      name,
      date,
      description,
      link,
      location
    }`
    );
}