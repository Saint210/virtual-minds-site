import { type SchemaTypeDefinition } from 'sanity'
import post from './post'
import author from './author'
import service from './service'
import location from './location'
import calculatorSubmission from './calculatorSubmission' // Import
import page, {
    heroSection,
    statsSection,
    splitContentSection,
    testimonialSection,
    ctaSection,
    logoCloudSection,
    servicesGridSection, // Adding missing import
    recoveryMatrixSection // Adding missing import
} from './page'

export const schemaTypes: SchemaTypeDefinition[] = [
    post,
    author,
    service,
    location,
    calculatorSubmission, // Register
    page,
    heroSection,
    statsSection,
    splitContentSection,
    testimonialSection,
    ctaSection,
    logoCloudSection,
    servicesGridSection, // Adding missing section
    recoveryMatrixSection // Adding missing section
]
