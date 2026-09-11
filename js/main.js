(() => {
  const SUPPORTED = ["lv", "ru", "en"];
  const STORAGE_KEY = "language";

  /* ——— Mobile nav ——— */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");

  const setNavOpen = (open) => {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
  };

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      setNavOpen(open);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setNavOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setNavOpen(false);
    });

    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 901px)").matches) {
        setNavOpen(false);
      }
    });
  }

  /* ——— i18n ——— */
  const t = (lang, key) =>
    translations[lang]?.[key] ?? translations.lv[key] ?? "";

  const applyLanguage = (lang) => {
    const code = SUPPORTED.includes(lang) ? lang : "lv";
    const dict = translations[code];

    document.documentElement.lang = code;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && dict[key] != null) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (key && dict[key] != null) el.setAttribute("aria-label", dict[key]);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (key && dict[key] != null) el.setAttribute("alt", dict[key]);
    });

    const title = dict.meta_title;
    if (title) document.title = title;

    const meta = document.querySelector('meta[name="description"]');
    if (meta && dict.meta_description) {
      meta.setAttribute("content", dict.meta_description);
    }

    document.querySelectorAll(".lang-switcher__btn").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === code;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    renderServices(code);
    renderMasters(code);
    renderAbout(code);
    renderWhy(code);
    renderGallery(code);
    renderContacts(code);
    localStorage.setItem(STORAGE_KEY, code);
  };

  const pick = (field, lang) => field?.[lang] ?? field?.lv ?? "";

  const renderServices = (lang) => {
    const list = document.querySelector("#services-list");
    if (!list || typeof services === "undefined") return;

    list.replaceChildren(
      ...services.map((item) => {
        const li = document.createElement("li");
        li.className = "service-card";

        const title = document.createElement("h3");
        title.textContent = pick(item.title, lang);

        const text = document.createElement("p");
        text.textContent = pick(item.text, lang);

        li.append(title, text);
        return li;
      })
    );
  };

  const renderMasters = (lang) => {
    const list = document.querySelector("#masters-list");
    if (!list || typeof masters === "undefined") return;

    list.replaceChildren(
      ...masters.map((item) => {
        const li = document.createElement("li");
        li.className = "master-card";

        const photo = document.createElement("div");
        photo.className = "master-card__photo";

        const img = document.createElement("img");
        img.src = item.photo;
        img.alt = item.name;
        img.width = 600;
        img.height = 800;
        img.loading = "lazy";
        photo.append(img);

        const body = document.createElement("div");
        body.className = "master-card__body";

        const name = document.createElement("h3");
        name.textContent = item.name;

        const role = document.createElement("p");
        role.className = "master-card__role";
        role.textContent = pick(item.role, lang);

        const specs = document.createElement("p");
        specs.className = "master-card__specs";
        specs.textContent = pick(item.specializations, lang);

        const langs = document.createElement("p");
        langs.className = "master-card__langs";
        langs.textContent = (item.languages || []).join(" · ");

        body.append(name, role, specs, langs);
        li.append(photo, body);
        return li;
      })
    );
  };

  const renderAbout = (lang) => {
    const wrap = document.querySelector("#about-text");
    if (wrap && typeof about !== "undefined") {
      const paras = about.paragraphs?.[lang] ?? about.paragraphs?.lv ?? [];
      wrap.replaceChildren(
        ...paras.map((text) => {
          const p = document.createElement("p");
          p.textContent = text;
          return p;
        })
      );
    }

    const img = document.querySelector("#about-photo");
    if (img && typeof about !== "undefined") {
      img.src = about.photo;
      img.alt = t(lang, "about_photo_alt");
    }

    if (typeof contacts === "undefined") return;

    const addr = document.querySelector("#about-address");
    if (addr) addr.textContent = contacts.address;

    const phone = document.querySelector("#about-phone");
    if (phone) {
      phone.href = contacts.phoneHref;
      phone.textContent = `tel.: ${contacts.phone}`;
    }
  };

  const renderWhy = (lang) => {
    const list = document.querySelector("#why-list");
    if (!list || typeof why === "undefined") return;

    list.replaceChildren(
      ...why.map((item) => {
        const li = document.createElement("li");
        li.className = "why-item";

        const title = document.createElement("h3");
        title.textContent = pick(item.title, lang);

        const text = document.createElement("p");
        text.textContent = pick(item.text, lang);

        li.append(title, text);
        return li;
      })
    );
  };

  const renderGallery = (lang) => {
    const list = document.querySelector("#gallery-list");
    if (!list || typeof gallery === "undefined") return;

    const alt = t(lang, "gallery_photo_alt");
    list.replaceChildren(
      ...gallery.map((src, index) => {
        const li = document.createElement("li");
        li.className = "gallery-item";

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "gallery-item__btn";
        btn.dataset.index = String(index);
        btn.setAttribute("aria-label", alt);

        const img = document.createElement("img");
        img.src = src;
        img.alt = alt;
        img.loading = "lazy";
        img.decoding = "async";
        btn.append(img);

        li.append(btn);
        return li;
      })
    );
  };

  const renderContacts = (lang) => {
    if (typeof contacts === "undefined") return;

    const addr = document.querySelector("#contacts-address");
    if (addr) addr.textContent = contacts.address;

    const phone = document.querySelector("#contacts-phone");
    if (phone) {
      phone.href = contacts.phoneHref;
      phone.textContent = contacts.phone;
    }

    const call = document.querySelector("#contacts-call");
    if (call) call.href = contacts.phoneHref;

    const route = document.querySelector("#contacts-route");
    if (route) route.href = contacts.routeHref;

    const hours = document.querySelector("#contacts-hours");
    if (hours) hours.textContent = pick(contacts.hours, lang);

    const emailRow = document.querySelector("#contacts-email-row");
    const email = document.querySelector("#contacts-email");
    if (emailRow && email) {
      if (contacts.email) {
        emailRow.hidden = false;
        email.href = `mailto:${contacts.email}`;
        email.textContent = contacts.email;
      } else {
        emailRow.hidden = true;
      }
    }

    const mapLink = document.querySelector("#contacts-map-link");
    if (mapLink) mapLink.href = contacts.mapHref;

    const iframe = document.querySelector("#contacts-map iframe");
    if (iframe) iframe.title = t(lang, "contacts_map");
  };

  /* ——— Lazy map ——— */
  const initLazyMap = () => {
    const host = document.querySelector("#contacts-map");
    if (!host || typeof contacts === "undefined") return;

    const loadMap = () => {
      if (host.querySelector("iframe")) return;

      const iframe = document.createElement("iframe");
      iframe.src = contacts.mapEmbed;
      iframe.title = t(document.documentElement.lang, "contacts_map");
      iframe.setAttribute("loading", "lazy");
      iframe.setAttribute("referrerpolicy", "no-referrer");
      iframe.allowFullscreen = true;
      host.replaceChildren(iframe);
    };

    if (!("IntersectionObserver" in window)) {
      host.addEventListener("click", loadMap, { once: true });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadMap();
          io.disconnect();
        }
      },
      { rootMargin: "160px 0px" }
    );

    io.observe(host);
  };

  /* ——— Lightbox ——— */
  const lightbox = document.querySelector("#lightbox");
  const lightboxImg = document.querySelector("#lightbox-img");
  let lightboxIndex = 0;
  let lightboxTrigger = null;

  const isLightboxOpen = () => Boolean(lightbox && !lightbox.hasAttribute("hidden"));

  const showLightboxPhoto = () => {
    if (!lightboxImg || typeof gallery === "undefined") return;
    const lang = document.documentElement.lang;
    lightboxImg.src = gallery[lightboxIndex];
    lightboxImg.alt = t(lang, "gallery_photo_alt");
  };

  const openLightbox = (index, trigger) => {
    if (!lightbox || typeof gallery === "undefined") return;
    lightboxIndex = index;
    lightboxTrigger = trigger || null;
    showLightboxPhoto();
    lightbox.removeAttribute("hidden");
    document.body.classList.add("lightbox-open");
    lightbox.querySelector("[data-lightbox='close']")?.focus();
  };

  const closeLightbox = () => {
    if (!isLightboxOpen()) return;
    lightbox.setAttribute("hidden", "");
    document.body.classList.remove("lightbox-open");
    if (lightboxImg) lightboxImg.removeAttribute("src");
    lightboxTrigger?.focus();
    lightboxTrigger = null;
  };

  const stepLightbox = (dir) => {
    if (!isLightboxOpen() || typeof gallery === "undefined") return;
    lightboxIndex = (lightboxIndex + dir + gallery.length) % gallery.length;
    showLightboxPhoto();
  };

  document.querySelector("#gallery-list")?.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-index]");
    if (!btn) return;
    openLightbox(Number(btn.dataset.index), btn);
  });

  lightbox?.addEventListener("click", (event) => {
    const action = event.target.closest("[data-lightbox]")?.getAttribute("data-lightbox");
    if (action === "close" || event.target === lightbox) closeLightbox();
    if (action === "prev") stepLightbox(-1);
    if (action === "next") stepLightbox(1);
  });

  document.addEventListener("keydown", (event) => {
    if (!isLightboxOpen()) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") stepLightbox(-1);
    if (event.key === "ArrowRight") stepLightbox(1);
  });

  const saved = localStorage.getItem(STORAGE_KEY);
  applyLanguage(SUPPORTED.includes(saved) ? saved : "lv");
  initLazyMap();

  document.querySelectorAll(".lang-switcher__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.getAttribute("data-lang"));
      setNavOpen(false);
    });
  });
})();
