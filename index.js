const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// array object to hold projects data
const data = [
  {
    id: 'project-1',
    name: 'Tonic',
    job: {
      client: 'Canopy',
      role: 'Back End Dev',
      year: '2015',
    },
    description: {
      summary: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      portfolio:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    },
    image: {
      mobile: 'assets/images/mobileviewimages/SnapshootPortfolio.svg',
      desktop: 'assets/images/desktopviewimages/PortoflioCard/SnapshootPortfolio.svg',
    },
    technologies: {
      html: 'html',
      css: 'css',
      javascript: 'javascript',
    },
    section: 'section-img-left',
  },
  {
    id: 'project-2',
    name: 'Multi Stories Post',
    job: {
      client: 'Facebook',
      role: 'Fullstack',
      year: '2015',
    },
    description: {
      summary: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
      portfolio:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    },
    image: {
      mobile: 'assets/images/mobileviewimages/Snapshootm2.svg',
      desktop: 'assets/images/desktopviewimages/PortoflioCard/Snapshoot2.svg',
    },
    technologies: {
      html: 'html',
      ror: 'ruby on rails',
      css: 'css',
      javascript: 'javascript',
    },
    section: 'section-img-right',
  },
  {
    id: 'project-3',
    name: 'Facebook 360',
    job: {
      client: 'Facebook',
      role: 'Full Stack',
      year: '2015',
    },
    description: {
      summary: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
      portfolio:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    },
    image: {
      mobile: 'assets/images/mobileviewimages/Snapshoot3.svg',
      desktop: 'assets/images/desktopviewimages/PortoflioCard/Snapshoot3.svg',
    },
    technologies: {
      html: 'html',
      ror: 'ruby on rails',
      css: 'css',
      javascript: 'javascript',
    },
    section: 'section-img-left',
  },
  {
    id: 'project-4',
    name: 'Uber Navigation',
    job: {
      client: 'Uber',
      role: 'Lead Developer',
      year: '2008',
    },
    description: {
      summary: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
      portfolio:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    },
    image: {
      mobile: 'assets/images/mobileviewimages/Snapshoot4.svg',
      desktop: 'assets/images/desktopviewimages/PortoflioCard/Snapshoot4.svg',
    },
    technologies: {
      html: 'html',
      ror: 'ruby on rails',
      css: 'css',
      javascript: 'javascript',
    },
    section: 'section-img-right',
  },
];