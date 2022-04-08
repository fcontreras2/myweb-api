// path: ./admin/src/app.js
import AuthLogo from "./extensions/my-logo.png";
import MenuLogo from "./extensions/menu-logo.png";
import Favicon from "./extensions/favicon.ico";

module.exports = {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
    menu: {
      logo: MenuLogo,
    },
    // Replace the favicon
    head: {
      favicon: Favicon,
    },
    // Override or extend the theme
  },

  bootstrap() {},
};
