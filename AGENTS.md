# Repository Guidelines & Rules (aprovero.org)

## Semantic Versioning Policy (`MAJOR.MINOR.PATCH`)

The site displays a semantic version in the footer (`v{MAJOR}.{MINOR}.{PATCH}`) defined in:
- `src/config/site.ts` (`siteConfig.version`)
- `package.json` (`version`)

### When to Update Versioning
Whenever making changes to this repository, evaluate and apply the appropriate version increment before committing:

1. **PATCH (3rd / rightmost number)**:
   - Increment for minor changes: copy edits, small styling tweaks, typography adjustments, bug fixes, metadata updates.
   - Example: `1.0.0` → `1.0.1`

2. **MINOR (2nd / middle number)**:
   - Increment for major content and feature additions: new case studies, new pages, new interactive components, new sections, or substantial rewriting.
   - Reset PATCH to 0.
   - Example: `1.0.1` → `1.1.0`

3. **MAJOR (1st / leftmost number)**:
   - Increment for really big changes: complete visual redesigns, major structural re-architecture, framework migrations, or fundamental site model shifts.
   - Reset MINOR and PATCH to 0.
   - Example: `1.1.0` → `2.0.0`

### Consistency Checklist
- Always ensure `src/config/site.ts` and `package.json` stay in sync.
- Run `npm run build` to verify the build compiles cleanly with 0 errors before committing and pushing.