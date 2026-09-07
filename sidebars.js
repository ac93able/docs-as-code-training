// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      label: 'Home',
      id: 'verve-documentation',
    },
    {
      type: 'doc',
      label: 'Release Notes',
      id: 'release-notes/verve-release-notes',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started-guide/getting-started-guide', 'getting-started-guide/getting-started-overview', 'getting-started-guide/getting-started-prerequisites', 'getting-started-guide/getting-started-setup', 'getting-started-guide/getting-started-faqs'],
    },
    {
      type: 'category',
      label: 'Installation',
      items: ['installation-guide/installation-overview', 'installation-guide/install-verve', 'installation-guide/installation-prerequisites', 'installation-guide/verify-installation', 'installation-guide/installation-faqs'],
    },
    {
      type: 'category',
      label: 'User Guide',
      items: ['user-guide/user-guide', 'user-guide/sign-in-to-verve', 'user-guide/project-management', 'user-guide/collaboration-in-verve'],
    },
    {
      type: 'category',
      label: 'Administration',
      items: ['administration-guide/administration-guide', 'administration-guide/manage-users', 'administration-guide/manage-roles', 'administration-guide/manage-system-settings'],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: ['troubleshooting-guide/troubleshooting-guide', 'troubleshooting-guide/troubleshoot-installation', 'troubleshooting-guide/troubleshoot-startup', 'troubleshooting-guide/troubleshoot-sign-in', 'troubleshooting-guide/troubleshoot-project-access'],
    },
  ],
};

export default sidebars;
