const LocationSecurityChecklist = [
  {
    subject: 'Disable Mobile Advertising Identifiers (MAIDs):',
    content: [
      'On Android: Delete or reset your ad ID via Settings → Security & Privacy → Privacy → Ads.',
      'On iOS: Deny tracking permission, disable “Allow Apps to Request to Track,” and turn off personalized Apple ads.',
    ],
  },
  {
    subject: 'Audit App Permissions & Trackers:',
    content: [
      'Fewer apps = less exposure.',
      'Review and restrict app permissions (location, contacts, photos, etc.).',
      'Use tools like Exodus Privacy (Android) or iOS App Privacy Reports to see which trackers apps communicate with.',
    ],
  },
  {
    subject: 'Use Airplane Mode at Sensitive Locations:',
    content: [
      'Prevents real-time data sharing.',
      'Use offline maps (Google Maps, Apple Maps, Organic Maps) to navigate without connectivity.',
    ],
  },
  {
    subject: 'Use a Separate Device for Sensitive Travel:',
    content: [
      'A clean phone with minimal apps and identifiers reduces tracking.',
      'Reset to factory settings after use for maximum privacy.',
    ],
  },
];

export default LocationSecurityChecklist;
