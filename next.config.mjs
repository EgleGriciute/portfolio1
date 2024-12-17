/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: {
          not: [...(fileLoaderRule.resourceQuery?.not || []), /url/],
        },
        use: {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
          },
        },
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  // Explicitly disable static route indicators
  devIndicators: {
    buildActivity: false, // Hides build activity indicator
    isrStatus: false, // Hides ISR (Incremental Static Regeneration) status indicator
  },

  // Set the basePath and assetPrefix for GitHub Pages
  basePath: "/portfolio", // Adjust based on your deployment path
  assetPrefix: "/portfolio", // Ensures assets are served correctly
};

export default nextConfig;
