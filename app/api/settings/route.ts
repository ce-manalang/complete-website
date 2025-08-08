import { NextResponse } from 'next/server';
import { datocmsClient } from '@/lib/datocms';
import type { SiteSettings } from '@/lib/content-types';

export async function GET() {
  try {
    // Fetch site settings from DatoCMS
    // Note: Replace 'site_settings' with your actual model API identifier
    const settings = await datocmsClient.items.list({
      filter: {
        type: 'site_settings', // Change this to match your DatoCMS model
      },
      fields: [
        'site_name',
        'site_description',
        'logo',
        'favicon',
        'social_links',
        'contact_info',
      ],
    });

    if (settings.length === 0) {
      return NextResponse.json(
        { error: 'No site settings found' },
        { status: 404 }
      );
    }

    const siteSettings = settings[0]; // Assuming there's only one settings record

    // Transform the data to match our SiteSettings interface
    const transformedSettings: SiteSettings = {
      siteName: siteSettings.site_name,
      siteDescription: siteSettings.site_description,
      logo: siteSettings.logo ? {
        url: siteSettings.logo.url,
        alt: siteSettings.logo.alt,
      } : undefined,
      favicon: siteSettings.favicon ? {
        url: siteSettings.favicon.url,
      } : undefined,
      socialLinks: siteSettings.social_links ? {
        facebook: siteSettings.social_links.facebook,
        twitter: siteSettings.social_links.twitter,
        instagram: siteSettings.social_links.instagram,
        linkedin: siteSettings.social_links.linkedin,
      } : undefined,
      contactInfo: siteSettings.contact_info ? {
        email: siteSettings.contact_info.email,
        phone: siteSettings.contact_info.phone,
        address: siteSettings.contact_info.address,
      } : undefined,
    };

    return NextResponse.json(transformedSettings);
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch site settings' },
      { status: 500 }
    );
  }
}
