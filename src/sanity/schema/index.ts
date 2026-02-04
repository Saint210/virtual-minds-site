import { type SchemaTypeDefinition } from 'sanity'
import post from './post'
import service from './service'
import location from './location'
import page, {
    heroSection,
    statsSection,
    splitContentSection,
    testimonialSection,
    ctaSection,
    logoCloudSection
} from './page'

export const schemaTypes: SchemaTypeDefinition[] = [
    post,
    service,
    location,
    page,
    heroSection,
    statsSection,
    splitContentSection,
    testimonialSection,
    ctaSection,
    logoCloudSection
]
