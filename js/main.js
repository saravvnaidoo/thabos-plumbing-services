const pricingLookup = {
  'Pipe Repairs': 'Call-out fee R450, repairs from R800',
  'Underground Pipework Installation': 'From R3,500',
  'Drain Clearing': 'From R650',
  'Bathroom Plumbing': 'From R1,200',
  'Kitchen Plumbing': 'From R950',
  'General Maintenance': 'Call-out fee R450, hourly rate R380'
};

function showFieldError(inputElement, messageText) {
  if (!inputElement || !inputElement.parentElement) {
    return;
  }

  inputElement.style.borderColor = '#d9534f';

  const errorMsg = document.createElement('small');
  errorMsg.className = 'error-text';
  errorMsg.textContent = messageText;
  inputElement.parentElement.appendChild(errorMsg);
}

function clearErrors(formElement) {
  if (!formElement) {
    return;
  }

  const errorElements = formElement.querySelectorAll('.error-text');
  errorElements.forEach(function (element) {
    element.remove();
  });

  const inputs = formElement.querySelectorAll('input, select, textarea');
  inputs.forEach(function (input) {
    input.style.borderColor = '';
    input.setAttribute('aria-invalid', 'false');
  });

  const existingSuccess = formElement.querySelector('.success-banner');
  if (existingSuccess) {
    existingSuccess.remove();
  }
}

function showSuccessAlert(formElement, messageText) {
  if (!formElement) {
    return;
  }

  const successBanner = document.createElement('div');
  successBanner.className = 'success-banner';
  successBanner.textContent = messageText;
  formElement.prepend(successBanner);
}

document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const preSelected = urlParams.get('service');
  if (preSelected) {
    const serviceSelect = document.getElementById('service');
    if (serviceSelect) serviceSelect.value = preSelected;
  }

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-list a');

  navLinks.forEach(function (link) {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });

  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('main-menu');
  if (header && toggle && menu) {
    header.classList.add('nav-js');
    toggle.addEventListener('click', function () {
      const open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  let overlay = document.getElementById('lightbox-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Image viewer');

    const lightboxImage = document.createElement('img');
    lightboxImage.id = 'lightbox-img';
    lightboxImage.alt = '';

    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'lightbox-close';
    closeButton.setAttribute('aria-label', 'Close image');
    closeButton.textContent = '×';

    overlay.appendChild(lightboxImage);
    overlay.appendChild(closeButton);
    document.body.appendChild(overlay);
  }

  const lightboxImage = overlay.querySelector('#lightbox-img');
  const closeButton = overlay.querySelector('.lightbox-close');

  const closeLightbox = function () {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    if (lightboxImage) {
      lightboxImage.src = '';
    }
  };

  closeButton.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', function (event) {
    if (event.target === overlay) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  });

  const triggers = document.querySelectorAll('.lightbox-trigger');
  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function (event) {
      event.preventDefault();
      if (lightboxImage) {
        lightboxImage.src = trigger.getAttribute('href');
        lightboxImage.alt = trigger.querySelector('img')?.getAttribute('alt') || '';
      }
      overlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
  });

  const accordionButtons = document.querySelectorAll('.accordion-btn');
  accordionButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const accordion = button.closest('.accordion');
      const panel = document.getElementById(button.getAttribute('aria-controls'));
      const isOpen = button.getAttribute('aria-expanded') === 'true';

      if (accordion) {
        accordion.querySelectorAll('.accordion-btn').forEach(function (item) {
          item.setAttribute('aria-expanded', 'false');
          const currentPanel = document.getElementById(item.getAttribute('aria-controls'));
          if (currentPanel) {
            currentPanel.setAttribute('hidden', 'hidden');
          }
        });
      }

      if (isOpen) {
        button.setAttribute('aria-expanded', 'false');
        if (panel) {
          panel.setAttribute('hidden', 'hidden');
        }
      } else {
        button.setAttribute('aria-expanded', 'true');
        if (panel) {
          panel.removeAttribute('hidden');
        }
      }
    });
  });

  const servicesGrid = document.getElementById('servicesGrid');
  const serviceSearch = document.getElementById('serviceSearch');

  function renderServices(serviceList, query) {
    if (!servicesGrid) {
      return;
    }

    servicesGrid.innerHTML = '';
    const keyword = query.trim().toLowerCase();
    const filteredServices = serviceList.filter(function (service) {
      if (!keyword) {
        return true;
      }

      return service.name.toLowerCase().includes(keyword) || service.description.toLowerCase().includes(keyword);
    });

    if (!filteredServices.length) {
      servicesGrid.innerHTML = '<p class="no-results">No services found. Try a different search term.</p>';
      return;
    }

    filteredServices.forEach(function (service) {
      const article = document.createElement('article');
      article.className = 'info-card';

      const picture = document.createElement('picture');
      const source = document.createElement('source');
      source.type = 'image/webp';
      source.srcset = service.srcset.replace(/\.jpg/gi, '.webp');
      const image = document.createElement('img');
      image.src = service.image;
      image.srcset = service.srcset;
      image.sizes = service.sizes;
      image.width = service.width;
      image.height = service.height;
      image.alt = service.alt;
      image.loading = 'lazy';

      picture.appendChild(source);
      picture.appendChild(image);

      const heading = document.createElement('h3');
      heading.textContent = service.name;

      const description = document.createElement('p');
      description.textContent = service.description;

      const price = document.createElement('p');
      price.className = 'service-price';
      price.textContent = service.price;

      const link = document.createElement('a');
      link.className = 'button';
      link.href = 'enquiry.html?service=' + encodeURIComponent(service.enquiryValue);
      link.textContent = 'Book This Service';

      article.appendChild(picture);
      article.appendChild(heading);
      article.appendChild(description);
      article.appendChild(price);
      article.appendChild(link);
      servicesGrid.appendChild(article);
    });
  }

  if (servicesGrid) {
    fetch('js/services.json')
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Request failed');
        }
        return response.json();
      })
      .then(function (services) {
        renderServices(services, serviceSearch ? serviceSearch.value : '');
      })
      .catch(function () {
        servicesGrid.innerHTML = '<p class="no-results">Could not load services. Please refresh the page.</p>';
      });
  }

  if (serviceSearch && servicesGrid) {
    serviceSearch.addEventListener('keyup', function () {
      fetch('js/services.json')
        .then(function (response) {
          if (!response.ok) {
            throw new Error('Request failed');
          }
          return response.json();
        })
        .then(function (services) {
          renderServices(services, serviceSearch.value);
        })
        .catch(function () {
          servicesGrid.innerHTML = '<p class="no-results">Could not load services. Please refresh the page.</p>';
        });
    });
  }

  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const phone = document.getElementById('phone');
      const service = document.getElementById('service');
      const message = document.getElementById('message');

      let isValid = true;
      clearErrors(enquiryForm);

      if (!name || !name.value.trim()) {
        showFieldError(name, 'Please enter your full name.');
        isValid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !email.value.trim()) {
        showFieldError(email, 'Please enter your email address.');
        isValid = false;
      } else if (!emailPattern.test(email.value.trim())) {
        showFieldError(email, 'Please enter a valid email address.');
        isValid = false;
      }

      const phoneDigits = phone ? phone.value.replace(/\D/g, '') : '';
      if (!phone || !phone.value.trim()) {
        showFieldError(phone, 'Please enter your phone number.');
        isValid = false;
      } else if (phoneDigits.length < 10) {
        showFieldError(phone, 'Please enter a valid phone number with at least 10 digits.');
        isValid = false;
      }

      if (!service || !service.value.trim()) {
        showFieldError(service, 'Please select a plumbing service.');
        isValid = false;
      }

      if (!message || !message.value.trim()) {
        showFieldError(message, 'Please provide details about your issue.');
        isValid = false;
      } else if (message.value.trim().length < 10) {
        showFieldError(message, 'Please add a little more detail to your message (at least 10 characters).');
        isValid = false;
      }

      if (!isValid) {
        return;
      }

      const selectedService = service.value;
      const customerName = name.value.trim();
      const selectedPrice = pricingLookup[selectedService] || 'Price on request';
      emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_ENQUIRY_TEMPLATE_ID", enquiryForm)
        .then(function () {
          showSuccessAlert(
            enquiryForm,
            'Thank you, ' + customerName + '! Your enquiry for ' + selectedService + ' has been received. Estimated pricing: ' + selectedPrice + '. We will contact you within 24 hours to confirm your booking. For urgent jobs call 031 456 7890.'
          );
          enquiryForm.reset();
        })
        .catch(function (error) {
          console.error('EmailJS enquiry form submission failed:', error);
          showFieldError(name, 'Your enquiry could not be sent. Please try again later.');
        });
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const contactTextarea = document.getElementById('contact-message');
    const charCount = document.getElementById('charCount');

    function updateCharCount() {
      if (!contactTextarea || !charCount) {
        return;
      }

      const count = contactTextarea.value.length;
      charCount.textContent = '(' + count + ' / 20 minimum)';
      charCount.classList.toggle('is-valid', count >= 20);
    }

    if (contactTextarea && charCount) {
      contactTextarea.addEventListener('input', updateCharCount);
      updateCharCount();
    }

    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      clearErrors(contactForm);

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const phoneInput = document.getElementById('contact-phone');
      const messageTypeInput = document.getElementById('contact-type');
      const messageInput = document.getElementById('contact-message');

      let isValid = true;

      if (!nameInput || !nameInput.value.trim()) {
        showFieldError(nameInput, 'Please enter your full name.');
        isValid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput || !emailInput.value.trim()) {
        showFieldError(emailInput, 'Please enter your email address.');
        isValid = false;
      } else if (!emailPattern.test(emailInput.value.trim())) {
        showFieldError(emailInput, 'Please enter a valid email address.');
        isValid = false;
      }

      if (phoneInput && phoneInput.value.trim() && !/^0[0-9]{9}$/.test(phoneInput.value.trim())) {
        showFieldError(phoneInput, 'Please enter a valid phone number in the format 0XXXXXXXXX.');
        isValid = false;
      }

      if (!messageTypeInput || !messageTypeInput.value) {
        showFieldError(messageTypeInput, 'Please select a message type.');
        isValid = false;
      }

      if (!messageInput || !messageInput.value.trim()) {
        showFieldError(messageInput, 'Please enter a message with at least 20 characters.');
        isValid = false;
      } else if (messageInput.value.trim().length < 20) {
        showFieldError(messageInput, 'Please write at least 20 characters.');
        isValid = false;
      }

      if (!isValid) {
        return;
      }

      emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", contactForm)
        .then(function () {
          showSuccessAlert(contactForm, 'Your message has been sent. We will get back to you as soon as possible.');
          contactForm.reset();
          if (charCount && contactTextarea) {
            updateCharCount();
          }
        })
        .catch(function (error) {
          console.error('EmailJS contact form submission failed:', error);
          showFieldError(nameInput, 'Your message could not be sent. Please try again later.');
        });
    });
  }
});