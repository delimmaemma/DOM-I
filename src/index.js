const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

//Construction of Links
  const navs = document.querySelectorAll('nav a')

  for(let i = 0; i < navs.length; i++) {
    navs[i].style.fontStyle = 'italic'
  }

  const link1 = document.querySelector('nav a:nth-of-type(1)')
  const link2 = document.querySelector('nav a:nth-of-type(2)')
  const link3 = document.querySelector('nav a:nth-of-type(3)')
  const link4 = document.querySelector('nav a:nth-of-type(4)')
  const link5 = document.querySelector('nav a:nth-of-type(5)')
  const link6 = document.querySelector('nav a:nth-of-type(6)')

  link1.textContent = siteContent['nav']['nav-item-1']
  link2.textContent = siteContent['nav']['nav-item-2']
  link3.textContent = siteContent['nav']['nav-item-3']
  link4.textContent = siteContent['nav']['nav-item-4']
  link5.textContent = siteContent['nav']['nav-item-5']
  link6.textContent = siteContent['nav']['nav-item-6']

//Implementing 'DOM Is Awesome' Line
  const h1 = document.querySelector('h1')
  const button1 = document.querySelector('.cta-text button')
  h1.textContent = siteContent['cta']['h1']
  button1.textContent = siteContent['cta']['button']

//Fetch 'Great Idea' Company Logo
  const logo = document.querySelector('.logo')
  logo.src = 'http://localhost:9000/img/logo.png'

//Implementing Top Image of Page
  const snipet = document.querySelector('#cta-img')
  snipet.src = 'http://localhost:9000/img/cta.png'

//Implementing Top Body of Page
  const features = document.querySelector('.top-content h4:nth-of-type(1)')
  const featuresContent = document.querySelector('.top-content p:nth-of-type(1)')
  const about = document.querySelector('.top-content .text-content:nth-of-type(2) h4')
  const aboutContent = document.querySelector('.top-content .text-content:nth-of-type(2) p')

  features.textContent = siteContent['main-content']['features-h4']
  featuresContent.textContent = siteContent['main-content']['features-content']
  about.textContent = siteContent['main-content']['about-h4']
  aboutContent.textContent = siteContent['main-content']['about-content']

//Implementing Bottom Image of Page
  const snipet2 = document.querySelector('#middle-img')
  snipet2.src = 'http://localhost:9000/img/accent.png'

//Implementing Bottom Body of Page
  const services = document.querySelector('.bottom-content h4:nth-of-type(1)')
  const servicesContent = document.querySelector('.bottom-content p:nth-of-type(1)')
  const product = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4')
  const productContent = document.querySelector('.bottom-content .text-content:nth-of-type(2) p')
  const vision = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4')
  const visionContent = document.querySelector('.bottom-content .text-content:nth-of-type(3) p')

  services.textContent = siteContent['main-content']['services-h4']
  servicesContent.textContent = siteContent['main-content']['services-content']
  product.textContent = siteContent['main-content']['product-h4']
  productContent.textContent = siteContent['main-content']['product-content']
  vision.textContent = siteContent['main-content']['vision-h4']
  visionContent.textContent = siteContent['main-content']['vision-content']

//Implementing Contact Info
  const contact = document.querySelector('.contact h4')
  const address = document.querySelector('.contact p:nth-of-type(1)')
  const phone = document.querySelector('.contact p:nth-of-type(2)')
  const email = document.querySelector('.contact p:nth-of-type(3)')

  contact.textContent = siteContent['contact']['contact-h4']
  address.textContent = siteContent['contact']['address']
  phone.textContent = siteContent['contact']['phone']
  email.textContent = siteContent['contact']['email']

//Implementing Footer
  const copyright = document.querySelector('footer a')
  copyright.textContent = siteContent['footer']['copyright']
  copyright.style.fontWeight = 'bold'

console.log('project wired!')
