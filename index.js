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
      summary:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',

      portfolio:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    },
    image: {
      mobile: 'assets/images/mobileviewimages/SnapshootPortfolio.svg',
      desktop:
        'assets/images/desktopviewimages/PortoflioCard/SnapshootPortfolio.svg',
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
      summary:
        'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
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
      summary:
        'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
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
      summary:
        'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
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

// pop up

const workPortfolio = document.querySelector('#work-portfolio');
const portfolioModal = document.querySelector('#portfolio-modal');

workPortfolio.classList.add('projects');

Array.from(workPortfolio.children).forEach((child, index) => {
  child.innerHTML = `
    <section class="${data[index].section}">
      <ul>
        <li><img src="${data[index].image.mobile}" alt="icon" class="img-1-1" /></li>
        <li><img src="${data[index].image.desktop}" alt="icon" class="img-1-2" /></li>
      </ul>
      <div class="block-1">
        <div class="text-group">
          <h2 class="lg-text-2">${data[index].name}</h2>
          <div class="client-info">
            <h3 class="client">${data[index].job.client}</h3>
            <a href="#"><img src="assets/Icons/Counter.svg" alt="counter" /></a>
            <h3 class="role">${data[index].job.role}</h3>
            <a href="#"><img src="assets/Icons/Counter.svg" alt="counter" /></a>
            <h3 class="year-label">${data[index].job.year}</h3>
          </div>
        </div>
        <h3 class="sm-text-2">${data[index].description.summary}</h3>
        <ul class="tags">
          <li>${data[index].technologies.html}</li>
          <li>${data[index].technologies.css}</li>
          <li>${data[index].technologies.javascript}</li>
        </ul>
  
        <div class="actions" id="${data[index].id}">
          <button class="btn" id="btn" type="button">See Project</button>
        </div>
      </div>
    </section>`;
});

Array.from(workPortfolio.children).forEach((item, index) => {
  item.firstElementChild.lastElementChild.lastElementChild.firstElementChild.addEventListener(
    'click',
    () => {
      portfolioModal.innerHTML = `
      <!-- Modal content -->
      <section class="modal-content">
        <div class="popup-text-group">
          <div class="text-group">
            <h2 class="popup-text-lg">${data[index].name}</h2>
            <div class="client-info">
              <h3 class="client">${data[index].job.client}</h3>
              <a href="#"><img src="assets/Icons/Counter.svg" alt="counter" /></a>
              <h3 class="role">${data[index].job.role}</h3>
              <a href="#"><img src="assets/Icons/Counter.svg" alt="counter" /></a>
              <h3 class="year-label">${data[index].job.year}</h3>
            </div>
          </div>
          <span class="close">&times;</span>
        </div>
        <ul>
          <li><img src="${data[index].image.mobile}" alt="icon" class="img-1-1" /></li>
          <li><img src="${data[index].image.desktop}" alt="icon" class="img-1-2 popup-img" /></li>
        </ul>
        <div class="popup-bottom">
          <p class="popup-text-sm">${data[index].description.portfolio}</p>
          <div class="popup-block">
            <ul class="tags ${data[index].id}">
            </ul>
            <div class="popup-actions">
              <button class="btn btnImg" id="btn" type="button">See Live
                <img src="assets/Icons/Icon@2x.svg" alt="icon" id="imgIcon" />
              </button>
              <button class="btn btnImg" id="btn" type="button">See Source
                <img src="assets/Icons/Icon-GitHub.svg" alt="icon" id="imgIcon" />
              </button>
            </div>
          </div>
        </div>
      </section>
      `;

      const ulList = document.querySelector('.popup-block .tags');

      Object.keys(data[index].technologies).forEach((e) => {
        ulList.innerHTML += `<li>${data[index].technologies[e]}</li>`;
      });

      portfolioModal.style.display = 'block';
      const span = document.getElementsByClassName('close')[0];
      span.addEventListener('click', () => {
        portfolioModal.style.display = 'none';
      });
      window.addEventListener('click', (e) => {
        if (e.target === portfolioModal) {
          portfolioModal.style.display = 'none';
        }
      });
    },
  );
});

// Form Validation
const email = document.getElementById('email');
const form = document.getElementById('contactFormId');
const errorMsg = document.getElementById('form-error');

form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    errorMsg.style.visibility = 'visible';
    setTimeout(() => {
      errorMsg.style.visibility = 'hidden';
    }, 5000);
  } else {
    errorMsg.style.visibility = 'hidden';
  }
});

// local storage
const contactForm = document.querySelector('#contactFormId');
const fullName = document.querySelector('#name');
const emailAddress = document.querySelector('#email');
const message = document.querySelector('#message');

function dataStorage() {
  const user = {
    userFullName: fullName.value,
    userEmail: emailAddress.value,
    userMessage: message.value,
  };
  localStorage.setItem('userData', JSON.stringify(user));
}

contactForm.addEventListener('focusout', dataStorage);
const userDataObject = JSON.parse(localStorage.getItem('userData'));
fullName.value = userDataObject.userFullName;
emailAddress.value = userDataObject.userEmail;
message.value = userDataObject.userMessage;