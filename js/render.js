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
  const cuisineOption = items.find((item) => item.type === "cuisine");
  const trayOptions = items.filter((item) => item.type === "tray");
  const importantNote = items.find((item) => item.type === "note");

  return `
    <div class="menu-card additional-options-card">
      <h3>Additional Catering Options</h3>

      ${
        cuisineOption
          ? `
            <div class="options-block">
              <p>
                <strong>${cuisineOption.name} –</strong>
                ${cuisineOption.description}
              </p>
            </div>
          `
          : ""
      }

      ${
        trayOptions.length
          ? `
            <div class="options-block">
              <h4>Tray Size Options</h4>
              <div class="tray-options">
                ${trayOptions
                  .map(
                    (item) => `
                      <div class="tray-card">
                        <h5>${item.name}</h5>
                        <p class="tray-serves">${item.serves}</p>
                        <p>${item.description}</p>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            </div>
          `
          : ""
      }

      ${
        importantNote
          ? `
            <div class="options-block">
              <p>
                <strong>${importantNote.name} –</strong>
                ${importantNote.description}
              </p>
            </div>
          `
          : ""
      }
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