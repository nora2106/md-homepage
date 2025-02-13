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
      location,
      link_name
    }`
    );
}

export async function getProjects() {
    return client.fetch(
        groq`*[_type == "project"]{
      name,
      description,
      slug,
      media,
      body
    }`
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
      footer_link
    }`
    );
}

export async function getLessonsPage() {
    return client.fetch(
        groq`*[_type == "lesson"]{
      headline,
      media,
      text,
    }`
    );
}