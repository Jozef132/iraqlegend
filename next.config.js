// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    // تكوين معالج لملفات الصوت
    config.module.rules.push({
      test: /\.(mp3)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "/_next/static/sounds",
            outputPath: "static/sounds",
          },
        },
      ],
    });

    return config;
  },
};
