/* ==========================================================
   First Step — main.js
   Routing satu halaman, render data, filter, timer, form
   ========================================================== */
(function () {
  "use strict";

  /* ---------- Data ---------- */
  const POPULAR = [
    { title: "Peregangan Leher & Punggung", desc: "Hilangkan kaku otot pundak dan leher akibat menatap layar laptop dan mencatat tugas berjam-jam.", tag: "10 Menit • Pemula", min: 10, icon: "self_improvement", foot: "4 Gerakan Sederhana", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDku3FCUNXAorflbvCc3IL1Qo8VxeJv5Yq4wWRG1-saqs13xVTjxLZ2O6VudvFd86BbHNg5O8IcfgMGAH4bp9LpExyLrotf1TbXh_-jMHEXJ0iKbFeOxTk-jZ0IXcMyQr9-scuVrIiqUbEoj-c6RwYM64ixbGRM4J5PnMDNJAEd_QOLXjh59NagBKvIUpwd4i3S9QevuJYmFHdtISx1qdwVeBu6hX17UktIz0LofG8" },
    { title: "Rutinitas Bangun Pagi 7 Menit", desc: "Aktifkan sirkulasi darah dan redakan kantuk seketika sebelum siap melangkah ke kelas pertama.", tag: "7 Menit • Semua Tingkat", min: 7, icon: "wb_sunny", foot: "Aman untuk Perut Kosong", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvLHPSWH4Vwlzf9yLiW6PSswLXoPa8C6rP6kDtiBbPe_Zcv3OyOHvGdtl1V3lgqA-xK_QjNw07-VcqzPp_xgzWEhiy7I55aUdNXqLPCGYr8QTva_r1kaGSwo1YPK-0TxnHihA_tXyVjxZjqq2nx-NZQUIDkBzv0Oul4y0JZLxWUoWiD-rg0LTm0gPhyzuBdiiR7DDMt_-hSLsTv63DT19FGUsWzdYeXFGUflkkvZw" },
    { title: "Postur Sehat Duduk Lama", desc: "Koreksi tulang belakang dan reaktivasi pinggul yang kaku akibat maraton nugas semalaman.", tag: "12 Menit • Pemula", min: 12, icon: "accessibility_new", foot: "Bisa Sambil Duduk", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCkfTQ3RzZlH4RYXJgdTtisU4gYhL7jNzohs5ZMxINEFNXp3QMm3Vq-F4uzK6TF4UneM-sFhMnfHIgIywTGDkgQmpnof0JeyrPUkV7GFN9kaooiMfe0qQU53-HFpFZy9RmlViVnjyCgs48XQTZcY1BLQGQLc6VNvwCXVLBlZi60bIT7ceTSPFfPhJlYedHVO25BB9b1I-mjXo03TgOEDpJd9419WOwZEEfCIZTPCU" }
  ];

  const WORKOUTS = [
    { cat: "kuliah pemanasan", min: 5, level: "Pemula", lv: "", icon: "desk", place: "Sela Jam Kuliah & Meja Belajar", title: "Peregangan Leher & Pundak", desc: "Mengurangi ketegangan otot trapezius akibat menunduk menatap laptop atau menulis catatan berjam-jam.", mIcon: "self_improvement", meta: "Tanpa Matras", img: "https://r2media.ciputrahospital.com/2026/02/11083631/peregangan-untuk-bahu-kaku-1024x683.jpg" },
    { cat: "kos pemanasan", min: 7, level: "Pemula", lv: "", icon: "bed", place: "Lantai Kamar Kos", title: "Relaksasi Punggung ", desc: "Peregangan lembut lower back dan pinggang langsung di samping kasur untuk mengendurkan saraf terjepit ringan.", mIcon: "floor", meta: "Area 1x1 Meter", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5rwN_smBBLmmM7nPeeX6rsHoMp8f_tldnXTaLJlout_n8hkXjb2UEKZfr0OFLd9vKogb3qDjyLgw-8qBUDz-CFs7YlFPaeCiK7HUWbUJsNH2TGUwha2kGoB2JYSEMFgzTyOvuPk43iOeoHLrP16tUnzqBu8Uj7J7-BDf_Ha1S6r08A0XDvlj55vF5C2Fs6nFdbIPO6Z97FJeI9DEHjnSZrWNp5DSsRA0e-XJCBJU" },
    { cat: "kuliah pemanasan", min: 8, level: "Semua Tingkat", lv: "t-all", icon: "accessibility_new", place: "Koreksi Postur Ergonomis", title: "Postur Sehat Anti Bungkuk", desc: "Aktivasi otot belikat (scapular retraction) dan pembuka dada agar bahu tidak tertarik ke depan secara permanen.", mIcon: "chair", meta: "Sambil Duduk Kursi", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwNPIxww-dFoVHcARyvGSxLDyNoZA3v-QWWFHcQenIwE9hSfZPw9DhkMTllUG6ysj77gPqZI5VzhBiIqq4v4hVa3FsntFNEFUps-StkTnjilDfPkpZmsIWpTZHuck03Xb_vpkD5vwEPH_DsydG_s4MTUDuaPojyMulAi0egeV0hPE8q_snkbTV00MCCj9rOR8D4mZQ2U4ON2Zxrws_XnPP6BGJJeeUCbkE7BEuFso" },
    { cat: "kardio kuliah", min: 10, level: "Sedang", lv: "t-mid", icon: "bolt", place: "Sirkulasi & Energi Otak", title: "Kardio Sela Kuliah", desc: "Gerakan low-impact penambah oksigen ke otak untuk mengusir kantuk tanpa berkeringat berlebihan.", mIcon: "favorite", meta: "Low Impact Cardio", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo8RDH7VNCVoB7H3ZOrcZtglkNjXMpYneuzC6FOgAuDMPvvh2eqHYS--L-t8ndVwWdnBDGnwTfG6xEZFbL4nEhFiuox_c3gBJHXkXB8S7Fx5-wLSukeeLob3ZT_5J1v8Cfi3po5f0gHdNv39niCfWNCNBam17_x_HYGX17VEFbD8WGDbPtdmgDj74aUVOFAIk0nx6KQ1kT3OmRk1DO9YOLFBu-P2fBI6Ja6bskXe0" },
    { cat: "kos pemanasan", min: 6, level: "Pemula", lv: "", icon: "directions_walk", place: "Pelepas Kaku Praktikum", title: "Peregangan Kaki & Pinggul", desc: "Melemaskan hamstring, otot betis, dan fleksor panggul yang kaku akibat berjalan jauh antar gedung fakultas.", mIcon: "fitness_center", meta: "Fleksibilitas", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtMo9b1RoDT1-FKOxTXwXFvpavNt3OhKTiBSfOk22O_tNyi_bK6UHe71qZAFeOPlvfb3hwf9JGcMrhun6a0ohDEvrQx5tn0kFnUtQ2LPkBv-IA2lFvDZO57daOLx5wIKVoBhjb8T-CUKUnB5EN_zkSYJe368qKnB9cbLoNqyusH3UJWri9HGz-K8WPyyxfX82Iw54PkpH_DomkUfG5gfBDE681oZc5_KTAHVietCI" },
    { cat: "kos", min: 12, level: "Pemula", lv: "", icon: "nightlight", place: "Pelepas Stres Tugas & Tidur Nyenyak", title: "Rutinitas Sebelum Tidur", desc: "Gerakan melambat dengan pernapasan teratur untuk menenangkan sistem saraf setelah revisi deadline tugas.", mIcon: "hotel", meta: "Di Atas Kasur", img: "images/rutinitas-sebelum-tidur.jpg" }
  ];

  // done: selesai, today: hari ini, lock: terkunci
  const DAYS = [
    { m: 5, n: "Leher Meja Belajar" }, { m: 7, n: "Relaksasi Punggung" }, { m: 8, n: "Postur Tegak Alami" },
    { m: 10, n: "Kardio Ringan Kampus" }, { m: 6, n: "Peregangan Paha" }, { m: 12, n: "Tidur Berkualitas" }, { m: 15, n: "Full Body Reset", last: true }
  ];
  let today = 4; // hari ke-4 aktif (3 hari selesai)

  const TEAM = [
    { ini: "AD", name: "Aditya", tag: "Desain & Rasa", role: "UI/UX Designer", desc: "Merancang alur wireframing, prototipe fungsional, dan visual sistem bertema Clean Minimalist Mint.", foot: "Figma • User Journey", icon: "palette", grad: "var(--secondary-fixed), var(--primary)", mini: "F" },
    { ini: "TN", name: "Tonishon", tag: "Kurasi & Narasi", role: "Konten & Dokumentasi", desc: "Menyusun kurasi instruksi gerakan berbasis kebiasaan mahasiswa, standarisasi teks penjelasan, serta dokumentasi teknis proyek.", foot: "Fitness Copy • Documentation", icon: "description", grad: "var(--primary-fixed-dim), var(--primary-container)" },
    { ini: "FH", name: "Fahmi", tag: "Manajemen Tim", role: "Koordinator & Contact", desc: "Memimpin koordinasi sprint mingguan, sinkronisasi antar modul, serta penanggung jawab halaman Hubungi Tim.", foot: "Project Lead • Contact", icon: "hub", grad: "var(--secondary-container), var(--secondary)" },
    { ini: "HL", name: "Hilmi", tag: "Logika & Interaksi", role: "Developer B", desc: "Mengembangkan modul Panduan Latihan (Workout Module), micro-interactions, timer, dan filter kategori gerakan.", foot: "Latihan • Interactivity", icon: "code", grad: "#9cf2e8, var(--tertiary)" },
    { ini: "VD", name: "Verdy", tag: "Arsitektur Web", role: "Developer A", desc: "Bertanggung jawab atas arsitektur Beranda (Home), global Shell Navigation (Navbar), dan komponen Footer.", foot: "Core Layout • Shell", icon: "web", grad: "#4fdbc8, var(--tertiary-container)", wide: true }
  ];
  const TEAM_MINI = [
    { i: "F", n: "Fahmi Hady Wibowo", r: "Koordinator Proyek", bg: "var(--primary-container)", c: "#f4fffc" },
    { i: "A", n: "Aditya Pratama", r: "UI/UX Designer", bg: "var(--secondary-container)", c: "var(--on-secondary-container)" },
    { i: "V", n: "Verdy Rizki Ramadhan", r: "Web Developer", bg: "var(--surface-high)", c: "var(--primary)" },
    { i: "H", n: "Hammad Raihan Hilmi", r: "Web Developer", bg: "var(--surface-high)", c: "var(--primary)" },
    { i: "T", n: "Tonihson Gultom", r: "Penyusun Konten & Riset Latihan", bg: "#9cf2e8", c: "#00201d", full: true }
  ];

  /* ---------- Helpers ---------- */
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  /* ---------- Toast ---------- */
  let toastTimer;
  function toast(msg) {
    $("#toastText").textContent = msg;
    const t = $("#toast");
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2800);
  }

  /* ---------- Routing (hash) ---------- */
  const ROUTES = ["home", "latihan", "about", "contact", "login", "register"];
  function route() {
    let name = location.hash.replace("#", "");
    if (!ROUTES.includes(name)) name = "home";
    $$(".page").forEach((p) => p.classList.toggle("active", p.dataset.page === name));
    $$("[data-route]").forEach((a) => {
      if (a.closest(".main-nav") || a.closest(".mobile-nav")) a.classList.toggle("active", a.dataset.route === name);
    });
    closeMenu();
    window.scrollTo({ top: 0, behavior: "auto" });
    document.title = "First Step — " + {
      home: "Fitness Mahasiswa",
      latihan: "Latihan",
      about: "Tentang Kami",
      contact: "Hubungi Kami",
      login: "Masuk ke Akun",
      register: "Daftar Member"
    }[name];
  }
  window.addEventListener("hashchange", route);

  /* ---------- Mobile menu ---------- */
  function closeMenu() {
    $("#mobileNav").classList.remove("open");
    $("#menuBtn").setAttribute("aria-expanded", "false");
    $("#menuBtn .material-symbols-outlined").textContent = "menu";
  }
  $("#menuBtn").addEventListener("click", () => {
    const open = $("#mobileNav").classList.toggle("open");
    $("#menuBtn").setAttribute("aria-expanded", String(open));
    $("#menuBtn .material-symbols-outlined").textContent = open ? "close" : "menu";
  });

  /* ---------- Render: Home ---------- */
  function renderPopular() {
    $("#popularGrid").innerHTML = POPULAR.map((w) => `
      <article class="card lift workout" style="border-radius:var(--r-xl)">
        <div class="thumb tall">
          <img src="${w.img}" alt="${esc(w.title)}" loading="lazy">
          <span class="tag-tl">${esc(w.tag)}</span>
          <span class="corner-ico"><span class="material-symbols-outlined">${w.icon}</span></span>
        </div>
        <div class="workout-body">
          <div><h3>${esc(w.title)}</h3><p class="desc">${esc(w.desc)}</p></div>
          <div class="workout-foot">
            <span class="small muted" style="font-weight:700;font-size:11px">${esc(w.foot)}</span>
            <button class="btn-soft" data-start="${esc(w.title)}|${w.min}|Program latihan ringan terpandu. Cocok dilakukan di kamar kos tanpa perlu peralatan.">Mulai Sesi</button>
          </div>
        </div>
      </article>`).join("");
  }

  function renderWeek() {
    const done = today - 1;
    $("#weekGrid").innerHTML = DAYS.map((d, i) => {
      const n = i + 1;
      let cls = "", icon = "check", state = "Selesai";
      if (n === today) { cls = "today"; icon = "done"; state = "Hari ini"; }
      else if (n > today) { cls = "locked"; icon = d.last ? "emoji_events" : "lock"; state = d.last ? "Lencana" : n === today + 1 ? "Besok" : "Nanti"; }
      return `<div class="week-day ${cls}"><span class="d">H${n}</span><div class="c"><span class="material-symbols-outlined">${icon}</span></div><span class="s">${state}</span></div>`;
    }).join("");
    $("#streakCounter").textContent = `Hari ${done} dari 7 Selesai`;
    $("#streakBar").style.width = Math.round((done / 7) * 100) + "%";
  }

  /* ---------- Render: Latihan ---------- */
  function renderWorkouts() {
    $("#workoutGrid").innerHTML = WORKOUTS.map((w) => `
      <article class="card lift workout" data-category="${w.cat}">
        <div class="thumb">
          <img src="${w.img}" alt="${esc(w.title)}" loading="lazy">
          <span class="tag-tl"><span class="material-symbols-outlined">schedule</span>${w.min} Menit</span>
          <span class="tag-tr ${w.lv}">${esc(w.level)}</span>
        </div>
        <div class="workout-body">
          <div>
            <div class="cat-line"><span class="material-symbols-outlined">${w.icon}</span><span class="txt">${esc(w.place)}</span></div>
            <h3>${esc(w.title)}</h3>
            <p class="desc" style="margin-top:.5rem">${esc(w.desc)}</p>
          </div>
          <div class="workout-foot">
            <span class="meta"><span class="material-symbols-outlined">${w.mIcon}</span>${esc(w.meta)}</span>
            <button class="btn btn-primary btn-sm" data-start="${esc(w.title)}|${w.min}|${esc(w.desc)}">Mulai Latihan <span class="material-symbols-outlined shift">arrow_forward</span></button>
          </div>
        </div>
      </article>`).join("");
  }

  $("#filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    $$(".chip", $("#filters")).forEach((c) => c.classList.toggle("active", c === btn));
    const f = btn.dataset.filter;
    let shown = 0;
    $$(".workout[data-category]").forEach((card) => {
      const ok = f === "all" || card.dataset.category.split(" ").includes(f);
      card.classList.toggle("hidden", !ok);
      if (ok) shown++;
    });
    $("#emptyMsg").classList.toggle("show", shown === 0);
  });

  function renderDays() {
    $("#daysGrid").innerHTML = DAYS.map((d, i) => {
      const n = i + 1;
      const st = n < today ? "done" : n === today ? "today" : "locked";
      const top = st === "done"
        ? `<span>HARI ${n}</span><span class="ok"><span class="material-symbols-outlined">check</span></span>`
        : st === "today" ? `<span>HARI ${n}</span><span class="ping"></span>`
        : `<span>HARI ${n}</span><span class="material-symbols-outlined" style="font-size:18px">lock</span>`;
      const state = st === "done" ? "<span>Selesai</span>"
        : st === "today" ? `<span class="now">Hari Ini</span><span class="material-symbols-outlined primary-text" style="font-size:18px">play_circle</span>`
        : `<span>${d.last ? "Badge Lulus" : "Terkunci"}</span>`;
      return `<button class="day-card ${st}${st === "today" ? " selected" : ""}" data-day="${n}" ${st === "locked" ? 'aria-disabled="true"' : ""}>
        <div class="day-top">${top}</div>
        <div class="day-mid"><b>${d.m}m</b><span>${esc(d.n)}</span></div>
        <div class="day-state">${state}</div></button>`;
    }).join("");
    const done = today - 1;
    $("#latDone").textContent = `${done} dari 7 Hari`;
    $("#latBar").style.width = (done / 7) * 100 + "%";
    $("#latPct").textContent = Math.round((done / 7) * 100) + "% Selesai";
    $("#latLeft").textContent = 7 - done + " Hari Tersisa";
  }

  $("#daysGrid").addEventListener("click", (e) => {
    const card = e.target.closest(".day-card");
    if (!card) return;
    const n = +card.dataset.day;
    if (n > today) { toast("Hari ini belum terbuka — selesaikan hari sebelumnya dulu."); return; }
    $$(".day-card", $("#daysGrid")).forEach((c) => c.classList.toggle("selected", c === card));
  });
  $("#todayBtn").addEventListener("click", () => {
    const d = DAYS[today - 1];
    openModal(`Hari ${today}: ${d.n}`, d.m, "Latihan harian tantangan 7 hari. Lakukan setelah mata kuliah sore berakhir.");
  });

  /* ---------- Render: About & Contact ---------- */
  function renderTeam() {
    $("#teamGrid").innerHTML = TEAM.map((m) => `
      <div class="card member${m.wide ? " wide" : ""}">
        <div>
          <div class="top">
            <div class="av" style="background:linear-gradient(135deg, ${m.grad})">${m.ini}</div>
            <div><span class="role-tag">${esc(m.tag)}</span><h3>${esc(m.name)}</h3></div>
          </div>
          <div class="about"><b>${esc(m.role)}</b><p>${esc(m.desc)}</p></div>
        </div>
        <div class="foot"><span>${esc(m.foot)}</span><span class="material-symbols-outlined">${m.icon}</span></div>
      </div>`).join("");
    $("#teamMini").innerHTML = TEAM_MINI.map((m) => `
      <div class="mini-member${m.full ? " full" : ""}">
        <div class="av" style="background:${m.bg};color:${m.c}">${m.i}</div>
        <div style="min-width:0"><b>${esc(m.n)}</b><span class="r">${esc(m.r)}</span></div>
      </div>`).join("");
  }

  /* ---------- Modal + timer ---------- */
  let timer = null, remaining = 0, total = 0, running = false;
  const fmt = (s) => String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");

  function resetTimer(minutes) {
    clearInterval(timer); running = false;
    total = remaining = minutes * 60;
    $("#timerText").textContent = fmt(remaining);
    $("#timerBar").style.width = "0";
    $("#timerBtn").textContent = "Mulai Sekarang";
  }
  function openModal(title, minutes, desc) {
    $("#modalTitle").textContent = title;
    $("#modalDesc").textContent = desc;
    resetTimer(minutes);
    $("#modal").classList.add("open");
    $("#timerBtn").focus();
  }
  function closeModal() { $("#modal").classList.remove("open"); clearInterval(timer); running = false; }

  $("#timerBtn").addEventListener("click", () => {
    if (remaining <= 0) { resetTimer(total / 60); }
    if (running) { clearInterval(timer); running = false; $("#timerBtn").textContent = "Lanjutkan"; return; }
    running = true;
    $("#timerBtn").textContent = "Jeda";
    timer = setInterval(() => {
      remaining--;
      $("#timerText").textContent = fmt(Math.max(remaining, 0));
      $("#timerBar").style.width = ((total - remaining) / total) * 100 + "%";
      if (remaining <= 0) {
        clearInterval(timer); running = false;
        $("#timerBtn").textContent = "Ulangi";
        toast("Sesi selesai — kerja bagus! 🎉");
      }
    }, 1000);
  });
  $("#modalClose").addEventListener("click", closeModal);
  $("#modal").addEventListener("click", (e) => { if (e.target.id === "modal") closeModal(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeLogoutModal();
    }
  });

  // Semua tombol dengan data-start="Judul|menit|deskripsi"
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-start]");
    if (!b) return;
    const [title, min, desc] = b.dataset.start.split("|");
    openModal(title, +min, desc);
  });

  /* ---------- Tantangan (Home) ---------- */
  $("#challengeBtn").addEventListener("click", function () {
    this.textContent = "Tantangan Aktif (Hari ke-" + today + ")";
    this.style.background = "var(--secondary-container)";
    this.style.color = "var(--on-secondary-container)";
    toast("Kamu bergabung di Tantangan 7 Hari!");
  });

  /* ---------- Kontak ---------- */
  const topicSel = $("#subjectTopic"), msg = $("#message");
  function setTopic(v) {
    topicSel.value = v;
    $$(".topic-chip").forEach((c) => c.classList.toggle("active", c.dataset.topic === v));
  }
  $$(".topic-chip").forEach((c) => c.addEventListener("click", () => setTopic(c.dataset.topic)));
  topicSel.addEventListener("change", () => setTopic(topicSel.value));
  msg.addEventListener("input", () => { $("#charCount").textContent = msg.value.length + " / 500 karakter"; });

  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const btn = $("#submitBtn");
    btn.disabled = true;
    btn.innerHTML = '<span class="material-symbols-outlined spin">progress_activity</span><span>Mengirimkan...</span>';
    setTimeout(() => {
      $("#success").classList.add("show");
      btn.disabled = false;
      btn.innerHTML = '<span>Kirim Pesan Sekarang</span><span class="material-symbols-outlined shift">send</span>';
    }, 700);
  });
  $("#resetBtn").addEventListener("click", () => {
    $("#contactForm").reset();
    setTopic("saran");
    $("#charCount").textContent = "0 / 500 karakter";
    $("#success").classList.remove("show");
  });

  /* ---------- Auth: Login & Register ---------- */
  function openLogoutModal() {
    const modal = $("#logoutModal");
    if (modal) modal.classList.add("open");
  }
  function closeLogoutModal() {
    const modal = $("#logoutModal");
    if (modal) modal.classList.remove("open");
  }

  const cancelLogoutBtn = $("#cancelLogoutBtn");
  if (cancelLogoutBtn) cancelLogoutBtn.addEventListener("click", closeLogoutModal);

  const confirmLogoutBtn = $("#confirmLogoutBtn");
  if (confirmLogoutBtn) {
    confirmLogoutBtn.addEventListener("click", () => {
      closeLogoutModal();
      localStorage.removeItem("fs-logged-user");
      updateUserSession();
      toast("Anda telah keluar dari akun.");
      location.hash = "#login";
    });
  }

  const logoutModal = $("#logoutModal");
  if (logoutModal) {
    logoutModal.addEventListener("click", (e) => {
      if (e.target.id === "logoutModal") closeLogoutModal();
    });
  }

  function updateUserSession() {
    const user = localStorage.getItem("fs-logged-user");
    const loginLink = $("#loginLink");
    const avatar = $("#headerAvatar");
    const mobileAuth = $("#mobileAuthLink");

    if (user) {
      if (loginLink) {
        loginLink.textContent = "Keluar";
        loginLink.title = "Keluar dari akun (" + user + ")";
        loginLink.onclick = (e) => {
          e.preventDefault();
          openLogoutModal();
        };
      }
      if (mobileAuth) {
        mobileAuth.innerHTML = `<span class="material-symbols-outlined" style="font-size:18px;margin-right:4px">logout</span> Keluar (${esc(user)})`;
        mobileAuth.onclick = (e) => {
          e.preventDefault();
          closeMenu();
          openLogoutModal();
        };
      }
      if (avatar) {
        avatar.title = "Akun: " + user;
        const initials = user.slice(0, 2).toUpperCase();
        avatar.innerHTML = `<span style="font-weight:700;font-size:12px;letter-spacing:0.02em">${esc(initials)}</span>`;
      }
    } else {
      if (loginLink) {
        loginLink.textContent = "Masuk";
        loginLink.title = "Masuk ke Akun";
        loginLink.onclick = null;
      }
      if (mobileAuth) {
        mobileAuth.innerHTML = `<span class="material-symbols-outlined" style="font-size:18px;margin-right:4px">login</span> Masuk / Daftar Member`;
        mobileAuth.onclick = null;
      }
      if (avatar) {
        avatar.title = "Akun Pengguna / Masuk";
        avatar.innerHTML = `<span class="material-symbols-outlined">person</span>`;
      }
    }
  }

  // Toggle Password Visibility
  $$("[data-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.toggle;
      const input = $("#" + targetId);
      if (!input) return;
      const isPass = input.type === "password";
      input.type = isPass ? "text" : "password";
      const ico = $(".material-symbols-outlined", btn);
      if (ico) ico.textContent = isPass ? "visibility_off" : "visibility";
    });
  });

  // Forgot Password
  const forgotLink = $("#forgotPassLink");
  if (forgotLink) {
    forgotLink.addEventListener("click", (e) => {
      e.preventDefault();
      const val = $("#loginIdentifier").value.trim();
      if (val) {
        toast("Instruksi reset sandi telah dikirim ke: " + val);
      } else {
        toast("Masukkan No. Telp atau Email terlebih dahulu.");
        $("#loginIdentifier").focus();
      }
    });
  }

  // Login Form
  const loginForm = $("#loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!loginForm.checkValidity()) {
        loginForm.reportValidity();
        return;
      }
      const btn = $("#loginSubmitBtn");
      const origHtml = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<span class="material-symbols-outlined spin">progress_activity</span><span>Memverifikasi...</span>';

      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = origHtml;
        const idVal = $("#loginIdentifier").value.trim();
        const userName = idVal.includes("@") ? idVal.split("@")[0] : "Member";
        localStorage.setItem("fs-logged-user", userName);
        updateUserSession();
        toast("Selamat datang kembali, " + userName + "! 🎉");
        loginForm.reset();
        location.hash = "#home";
      }, 700);
    });
  }

  // Register Form
  const registerForm = $("#registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!registerForm.checkValidity()) {
        registerForm.reportValidity();
        return;
      }
      const p1 = $("#regPassword").value;
      const p2 = $("#regConfirmPassword").value;
      if (p1 !== p2) {
        toast("Konfirmasi password tidak sesuai!");
        $("#regConfirmPassword").focus();
        return;
      }
      const btn = $("#registerSubmitBtn");
      const origHtml = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<span class="material-symbols-outlined spin">progress_activity</span><span>Mendaftarkan Member...</span>';

      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = origHtml;
        const fullName = $("#regFullName").value.trim();
        localStorage.setItem("fs-logged-user", fullName);
        updateUserSession();
        toast("Pendaftaran berhasil! Selamat datang di First Step, " + fullName + " 🚀");
        registerForm.reset();
        location.hash = "#latihan";
      }, 800);
    });
  }

  /* ---------- Dark Mode ---------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = $('#themeToggle .material-symbols-outlined');
    if (icon) icon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
    localStorage.setItem('fs-theme', theme);
  }
  function initTheme() {
    const saved = localStorage.getItem('fs-theme');
    if (saved) { applyTheme(saved); return; }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      applyTheme('dark');
    }
  }
  initTheme();
  $('#themeToggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('fs-theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  /* ---------- Init ---------- */
  renderPopular(); renderWeek(); renderWorkouts(); renderDays(); renderTeam();
  updateUserSession();
  route();
})();
