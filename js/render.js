function createMenuItem(item) {
  return `
    <li>
      <div>
        <strong>${item.name}</strong>
        <p>${item.description}</p>
      </div>
      ${item.serving ? `<span>${item.serving}</span>` : ""}
    </li>
  `;
}

function createMenuCard(section) {
  return `
    <article class="menu-card">
      <h3>${section.title}</h3>
      <ul>
        ${section.items.map(createMenuItem).join("")}
      </ul>
    </article>
  `;
}

function createAboutCard(item) {
  return `
    <article class="info-card">
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `;
}

function createAdditionalOptions(items) {
  return `
    <div class="menu-card">
      <h3>Additional Catering Options</h3>
      <ul>
        ${items
          .map(
            (item) => `
              <li>
                <div>
                  <strong>${item.name}</strong>
                  <p>${item.description}</p>
                </div>
                <span>${item.label}</span>
              </li>
            `
          )
          .join("")}
      </ul>
    </div>
  `;
}

function createContactCards(business) {
  return `
    <article class="contact-card">
      <h3>Phone</h3>
      <p><a href="${business.phoneHref}">${business.phoneDisplay}</a></p>
    </article>

    <article class="contact-card">
      <h3>Email</h3>
      <p><a href="${business.emailHref}">${business.emailDisplay}</a></p>
    </article>

    <article class="contact-card">
      <h3>Hours</h3>
      <p>${business.hours}</p>
    </article>

    <article class="contact-card">
      <h3>Menu PDF</h3>
      <p>
        <a href="${business.menuPdf}" target="_blank" rel="noopener">Open Menu</a>
      </p>
    </article>
  `;
}

function createFooterContact(business) {
  return `
    <p><a href="${business.phoneHref}">${business.phoneDisplay}</a></p>
    <p><a href="${business.emailHref}">${business.emailDisplay}</a></p>
  `;
}

function renderSiteContent() {
  const aboutGrid = document.getElementById("aboutGrid");
  const menuGrid = document.getElementById("menuGrid");
  const additionalOptions = document.getElementById("additionalOptions");
  const contactGrid = document.getElementById("contactGrid");
  const footerContact = document.getElementById("footerContact");
  const heroPhoneLink = document.getElementById("heroPhoneLink");

  if (aboutGrid) {
    aboutGrid.innerHTML = siteData.about.map(createAboutCard).join("");
  }

  if (menuGrid) {
    menuGrid.innerHTML = siteData.menuSections.map(createMenuCard).join("");
  }

  if (additionalOptions) {
    additionalOptions.innerHTML = createAdditionalOptions(siteData.additionalOptions);
  }

  if (contactGrid) {
    contactGrid.innerHTML = createContactCards(siteData.business);
  }

  if (footerContact) {
    footerContact.innerHTML = createFooterContact(siteData.business);
  }

  if (heroPhoneLink) {
    heroPhoneLink.href = siteData.business.phoneHref;
  }
}