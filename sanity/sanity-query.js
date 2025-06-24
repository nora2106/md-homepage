import { groq } from "next-sanity";
import client from "./sanity-client";

export async function getHomepage() {
    return client.fetch(
        groq`*[_type == "homepage2"]{
      page_headline,
      about_me_headline,
      about_me_media,
      about_me_text,
      events_headline,
      events_image,
      my_projects_headline,
      banner_text,
      banner_button_text,
      media_centered,
      title,
      meta_description
    }`, {},
        {
            next: {revalidate: 60}
        }
    );
}

export async function getEvents() {
    return client.fetch(
        groq`*[_type == "event"]{
      name,
      date,
      description,
      link,
      location,
      link_name
    }`, {},
        {
            next: {revalidate: 60}
        }
    );
}

export async function getProjects() {
    return client.fetch(
        groq`*[_type == "project"]{
      name,
      previewImage,
      slug,
      media,
      body,
      sort
    }`, {},
        {
            next: {revalidate: 60}
        }
    );
}

export async function getSettings() {
    return client.fetch(
        groq`*[_type == "settings"]{
      name,
      email,
      address,
      imprint_text,
      footer_credit,
      footer_link,
      image_credit,
      projects_title,
      projects_meta_description,
      gallery_title,
      gallery_meta_description
    }`, {},
        {
            next: {revalidate: 60}
        }
    );
}

export async function getLessonsPage() {
    return client.fetch(
        groq`*[_type == "lessons"]{
      headline,
      media,
      text,
      title,
      meta_description
    }`, {},
        {
            next: {revalidate: 60}
        }
    );
}

export async function getGalleryImages() {
    return client.fetch(
        groq`*[_type == "gallery"]{
        images[]{
        alt,
        image {
                ...,
                asset->{
                    _id,
                    url
                }
            }
        },
    }`, {},
        {
            next: {revalidate: 60}
        }
    );
}
