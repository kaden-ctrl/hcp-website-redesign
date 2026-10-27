// Normalizes site.config.ts so the specs can rely on every field existing.
//
// site.config.ts is owned by the project and is deliberately never overwritten by
// the installer, because it holds project-specific settings. That means it will
// always lag behind the specs whenever a new field is introduced. Without this
// layer, a spec reading a field added after the project was set up throws
// "Cannot read properties of undefined" at collection time, which takes down the
// whole run instead of skipping one test.
//
// Defaults here are deliberately permissive: a field the project has not opted
// into should not fail the build.
import raw from './site.config'

const r: any = raw

export default {
  baseURL: r.baseURL || 'http://localhost:3000',
  pages: r.pages ?? ['/'],
  skipSeoChecks: r.skipSeoChecks ?? [],
  rootFiles: r.rootFiles ?? [],
  privatePaths: r.privatePaths ?? [],
  skipLinkHosts: r.skipLinkHosts ?? [],
  analyticsId: r.analyticsId ?? '',

  form: {
    page: r.form?.page ?? '/contact',
    selector: r.form?.selector ?? 'form',
    endpoint: r.form?.endpoint ?? '',
    submitText: r.form?.submitText ?? /send|request|book|submit/i,
    honeypotField: r.form?.honeypotField ?? 'company_url',
    fields: {
      name: r.form?.fields?.name ?? 'name',
      email: r.form?.fields?.email ?? 'email',
      message: r.form?.fields?.message ?? 'message',
      consent: r.form?.fields?.consent ?? 'consent',
    },
  },

  design: {
    maxBorderRadiusPx: r.design?.maxBorderRadiusPx ?? 8,
    minTapTargetPx: r.design?.minTapTargetPx ?? 44,
    minInputFontPx: r.design?.minInputFontPx ?? 16,
    maxFontFamilies: r.design?.maxFontFamilies ?? 2,
  },

  // Off unless the project opts in, so a site predating the credit standard
  // does not start failing when its specs are refreshed.
  credit: {
    required: r.credit?.required ?? false,
    text: r.credit?.text ?? /website by/i,
    href: r.credit?.href ?? 'https://duogroup.com',
    name: r.credit?.name ?? 'Duo Group',
  },
}
