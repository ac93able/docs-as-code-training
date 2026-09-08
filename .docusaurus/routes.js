import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs-as-code-training/blog',
    component: ComponentCreator('/docs-as-code-training/blog', '9e4'),
    exact: true
  },
  {
    path: '/docs-as-code-training/markdown-page',
    component: ComponentCreator('/docs-as-code-training/markdown-page', 'e13'),
    exact: true
  },
  {
    path: '/docs-as-code-training/docs',
    component: ComponentCreator('/docs-as-code-training/docs', '137'),
    routes: [
      {
        path: '/docs-as-code-training/docs',
        component: ComponentCreator('/docs-as-code-training/docs', '7fd'),
        routes: [
          {
            path: '/docs-as-code-training/docs',
            component: ComponentCreator('/docs-as-code-training/docs', 'd0b'),
            routes: [
              {
                path: '/docs-as-code-training/docs/administration-guide/',
                component: ComponentCreator('/docs-as-code-training/docs/administration-guide/', 'b83'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs-as-code-training/docs/administration-guide/manage-roles',
                component: ComponentCreator('/docs-as-code-training/docs/administration-guide/manage-roles', '8a9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs-as-code-training/docs/administration-guide/manage-system-settings',
                component: ComponentCreator('/docs-as-code-training/docs/administration-guide/manage-system-settings', 'f6a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs-as-code-training/docs/administration-guide/manage-users',
                component: ComponentCreator('/docs-as-code-training/docs/administration-guide/manage-users', 'c4f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs-as-code-training/docs/getting-started-guide/',
                component: ComponentCreator('/docs-as-code-training/docs/getting-started-guide/', '252'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs-as-code-training/docs/getting-started-guide/getting-started-faqs',
                component: ComponentCreator('/docs-as-code-training/docs/getting-started-guide/getting-started-faqs', '5a3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs-as-code-training/docs/getting-started-guide/getting-started-overview',
                component: ComponentCreator('/docs-as-code-training/docs/getting-started-guide/getting-started-overview', '4a9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs-as-code-training/docs/getting-started-guide/getting-started-prerequisites',
                component: ComponentCreator('/docs-as-code-training/docs/getting-started-guide/getting-started-prerequisites', '449'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs-as-code-training/docs/getting-started-guide/getting-started-setup',
                component: ComponentCreator('/docs-as-code-training/docs/getting-started-guide/getting-started-setup', 'd7c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs-as-code-training/docs/installation-guide/install-verve',
                component: ComponentCreator('/docs-as-code-training/docs/installation-guide/install-verve', 'df2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs-as-code-training/docs/installation-guide/installation-faqs',
                component: ComponentCreator('/docs-as-code-training/docs/installation-guide/installation-faqs', 'cbe'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs-as-code-training/docs/installation-guide/installation-overview',
                component: ComponentCreator('/docs-as-code-training/docs/installation-guide/installation-overview', '9c5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs-as-code-training/docs/installation-guide/installation-prerequisites',
                component: ComponentCreator('/docs-as-code-training/docs/installation-guide/installation-prerequisites', '750'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs-as-code-training/docs/installation-guide/verify-installation',
                component: ComponentCreator('/docs-as-code-training/docs/installation-guide/verify-installation', '06c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs-as-code-training/docs/intro',
                component: ComponentCreator('/docs-as-code-training/docs/intro', 'a85'),
                exact: true
              },
              {
                path: '/docs-as-code-training/docs/release-notes/verve-release-notes',
                component: ComponentCreator('/docs-as-code-training/docs/release-notes/verve-release-notes', '63b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs-as-code-training/docs/troubleshooting-guide/',
                component: ComponentCreator('/docs-as-code-training/docs/troubleshooting-guide/', '54f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs-as-code-training/docs/troubleshooting-guide/troubleshoot-installation',
                component: ComponentCreator('/docs-as-code-training/docs/troubleshooting-guide/troubleshoot-installation', 'c27'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs-as-code-training/docs/troubleshooting-guide/troubleshoot-project-access',
                component: ComponentCreator('/docs-as-code-training/docs/troubleshooting-guide/troubleshoot-project-access', '92e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs-as-code-training/docs/troubleshooting-guide/troubleshoot-sign-in',
                component: ComponentCreator('/docs-as-code-training/docs/troubleshooting-guide/troubleshoot-sign-in', '41a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs-as-code-training/docs/troubleshooting-guide/troubleshoot-startup',
                component: ComponentCreator('/docs-as-code-training/docs/troubleshooting-guide/troubleshoot-startup', 'b0c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs-as-code-training/docs/user-guide/',
                component: ComponentCreator('/docs-as-code-training/docs/user-guide/', 'eaf'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs-as-code-training/docs/user-guide/collaboration-in-verve',
                component: ComponentCreator('/docs-as-code-training/docs/user-guide/collaboration-in-verve', '250'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs-as-code-training/docs/user-guide/project-management',
                component: ComponentCreator('/docs-as-code-training/docs/user-guide/project-management', '89c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs-as-code-training/docs/user-guide/sign-in-to-verve',
                component: ComponentCreator('/docs-as-code-training/docs/user-guide/sign-in-to-verve', 'd38'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs-as-code-training/docs/verve-documentation',
                component: ComponentCreator('/docs-as-code-training/docs/verve-documentation', 'ffa'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs-as-code-training/',
    component: ComponentCreator('/docs-as-code-training/', '274'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
