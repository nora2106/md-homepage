import {homepage} from './homepage'
import {project} from './project'
import {event} from './event'
import {lessons} from './lessons';
import {settings} from './settings'
import {gallery} from "@/sanity/schemaTypes/gallery";
import textImageColumn from './textImageColumn';

export const schemaTypes = [homepage, project, event, lessons, settings, gallery, textImageColumn]
