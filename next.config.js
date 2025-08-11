/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@usewaypoint/block-avatar',
    '@usewaypoint/block-button',
    '@usewaypoint/block-columns-container',
    '@usewaypoint/block-container',
    '@usewaypoint/block-divider',
    '@usewaypoint/block-heading',
    '@usewaypoint/block-html',
    '@usewaypoint/block-image',
    '@usewaypoint/block-spacer',
    '@usewaypoint/block-text',
    '@usewaypoint/document-core',
    '@usewaypoint/email-builder',
  ],
}

module.exports = nextConfig
