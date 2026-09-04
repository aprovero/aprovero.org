import { defineCollection, z } from 'astro:content';

const workCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    clientOrOwner: z.string(),
    location: z.string(),
    capacity: z.string(),
    systemType: z.enum(['Solar PV', 'BESS', 'Hybrid', 'Substation', 'Embedded Systems', 'Field Engineering ToolHub']),
    year: z.string(),
    role: z.string(),
    summary: z.string(),
    keyMetrics: z.array(z.string()).optional(),
    confidentialityNotice: z.string().default(
      'Certain system details, parameter values, internal investigations, and proprietary procedures are intentionally omitted to respect customer and manufacturer confidentiality.'
    ),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const labCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['Infrastructure', 'Electronics', 'AI & Software', 'Automation']),
    status: z.enum(['Operational', 'Active Development', 'Prototype', 'Documented']),
    summary: z.string(),
    technologies: z.array(z.string()),
    highlights: z.array(z.string()).optional(),
    order: z.number().default(99),
  }),
});

const notesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean().default(true),
    readTime: z.string(),
  }),
});

export const collections = {
  work: workCollection,
  lab: labCollection,
  notes: notesCollection,
};
