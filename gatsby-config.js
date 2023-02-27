module.exports = {
  siteMetadata: {
    title: `El Manantial`,
    description: `Hermosa casa de descanso para un fin de semana con la familoia y amigos`,
    // this doesn't work: keywords: `professional, photography, real estate, marketing, prescott, prescott valley, arizona, az`,
    author: "real state",
    image: "../assets/cabana_el_manantial.jpg",
    name: `cabaña`,
    tagline: ``,
    menuLinks: [
      {
        name: "Galería",
        url: `/`,
        type: "internal"
      },
      /* {
         name: "Pricing",
         url: "/prices/",
         type: "internal" // internal or anchor
       }, */
      {
        name: "Servicios",
        url: "/home-prep/",
        type: "internal"
      },
      {
        name: "Términos del Servicio",
        url: "/terms",
        type: "internal"
      },
     /*  {
        name: "About",
        url: "/about",
        type: "internal"
      }, */
      {
        name: "Contacto",
        url: "/contact-me/",
        type: "internal"
      },
      {
        name: "Ubicación",
        url: "/ubicacion/",
        type: "internal"
      },
    ],

  },
  plugins: [
    //{resolve: `gatsby-plugin-react-helmet`},
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Serena`,
        short_name: `Serena`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        icon: `content/assets/icon.png`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-theme-serena`,
      options: {
        disableContact: true,
        margin: `3`,
        },
    },
    
  ],
  //pathPrefix: "/mhphoto-themed",
}
