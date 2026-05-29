const STORAGE_KEY = "kites-state";
const OLD_STORAGE_KEY = "discretion-mail-state";

const labelOptions = ["private", "work", "finance", "travel"];
const folderIds = ["inbox", "sent", "drafts", "archive", "spam", "trash"];

const starterMessages = [
  {
    id: createId(),
    account: "personal",
    folder: "inbox",
    from: "Maya Chen <maya@example.com>",
    to: "me@kites.test",
    cc: "",
    bcc: "",
    subject: "Dinner plans and travel notes",
    preview: "I added the train details and a quiet table request.",
    body:
      "I added the train details and a quiet table request. Reply when you know your arrival time and I will adjust the reservation.",
    time: "9:18 AM",
    unread: true,
    starred: true,
    confidential: true,
    priority: "Normal",
    labels: ["private", "travel"],
    attachments: [{ name: "train-details.pdf", size: "84 KB" }],
    thread: [
      {
        from: "Maya Chen <maya@example.com>",
        to: "me@kites.test",
        body:
          "I added the train details and a quiet table request. Reply when you know your arrival time and I will adjust the reservation.",
        time: "9:18 AM",
        attachments: [{ name: "train-details.pdf", size: "84 KB" }],
      },
    ],
  },
  {
    id: createId(),
    account: "personal",
    folder: "drafts",
    from: "me@kites.test",
    to: "sam@example.com",
    cc: "",
    bcc: "",
    subject: "Weekend idea",
    preview: "Draft saved in Kites.",
    body: "I was thinking we could make it low-key and keep the details private.",
    time: "Draft",
    unread: false,
    starred: false,
    confidential: true,
    priority: "Low",
    labels: ["private"],
    attachments: [],
    thread: [
      {
        from: "You",
        to: "sam@example.com",
        body: "I was thinking we could make it low-key and keep the details private.",
        time: "Draft",
        attachments: [],
      },
    ],
  },
  {
    id: createId(),
    account: "business",
    folder: "inbox",
    from: "Northstar Studio <hello@northstar.example>",
    to: "business@kites.test",
    cc: "ops@northstar.example",
    bcc: "",
    subject: "Proposal discussion",
    preview: "The client approved the revised timeline and wants a kickoff.",
    body:
      "The client approved the revised timeline and wants a kickoff. Please review the final scope before we send the calendar invitation.",
    time: "8:42 AM",
    unread: true,
    starred: false,
    confidential: false,
    priority: "High",
    labels: ["work"],
    attachments: [{ name: "scope-v3.pdf", size: "420 KB" }],
    thread: [
      {
        from: "Northstar Studio <hello@northstar.example>",
        to: "business@kites.test",
        body:
          "The client approved the revised timeline and wants a kickoff. Please review the final scope before we send the calendar invitation.",
        time: "8:42 AM",
        attachments: [{ name: "scope-v3.pdf", size: "420 KB" }],
      },
      {
        from: "You",
        to: "hello@northstar.example",
        body:
          "I will check the scope and send one consolidated response so the discussion stays easy to follow.",
        time: "8:55 AM",
        attachments: [],
      },
    ],
  },
  {
    id: createId(),
    account: "business",
    folder: "archive",
    from: "Finance Desk <finance@example.com>",
    to: "business@kites.test",
    cc: "",
    bcc: "",
    subject: "Quarterly invoice archive",
    preview: "All paid invoices were moved into the private archive.",
    body:
      "All paid invoices were moved into the private archive. The summary is ready whenever you want to export records.",
    time: "Mon",
    unread: false,
    starred: true,
    confidential: true,
    priority: "Normal",
    labels: ["finance", "work"],
    attachments: [{ name: "paid-invoices.zip", size: "2.1 MB" }],
    thread: [
      {
        from: "Finance Desk <finance@example.com>",
        to: "business@kites.test",
        body:
          "All paid invoices were moved into the private archive. The summary is ready whenever you want to export records.",
        time: "Mon",
        attachments: [{ name: "paid-invoices.zip", size: "2.1 MB" }],
      },
    ],
  },
];

const starterDrive = [
  {
    id: createId(),
    account: "personal",
    name: "Private notes.kite",
    kind: "Note",
    size: "12 KB",
    updated: "Today",
  },
  {
    id: createId(),
    account: "business",
    name: "Client scope.pdf",
    kind: "PDF",
    size: "420 KB",
    updated: "Yesterday",
  },
];

const starterImages = [
  {
    id: createId(),
    account: "personal",
    name: "Kites gradient",
    updated: "Today",
    src:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%2340e0ff'/%3E%3Cstop offset='.55' stop-color='%23a77bff'/%3E%3Cstop offset='1' stop-color='%23ff5f9e'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='%23070a12'/%3E%3Cpath d='M120 420 420 120l260 360-250-82-130 88z' fill='url(%23g)' opacity='.92'/%3E%3Ccircle cx='650' cy='150' r='70' fill='%234cffb5' opacity='.72'/%3E%3C/svg%3E",
  },
];

const starterContacts = [
  { id: createId(), account: "personal", name: "Maya Chen", email: "maya@example.com", notes: "Personal contact" },
  {
    id: createId(),
    account: "business",
    name: "Northstar Studio",
    email: "hello@northstar.example",
    notes: "Project client",
  },
  { id: createId(), account: "business", name: "Finance Desk", email: "finance@example.com", notes: "Billing" },
];

const demoIncoming = [
  {
    from: "Alex Rivera <alex@example.com>",
    subject: "Quick private check-in",
    body: "Just checking in. I kept the details short and private like you prefer.",
    labels: ["private"],
  },
  {
    from: "Project Desk <desk@example.com>",
    subject: "Status request",
    body: "Can you review the latest status and send the next step when you have a minute?",
    labels: ["work"],
  },
  {
    from: "Travel Bot <travel@example.com>",
    subject: "Reservation hold",
    body: "Your reservation hold is ready. The confirmation is attached for your records.",
    labels: ["travel"],
    attachments: [{ name: "reservation.ics", size: "9 KB" }],
  },
];

const state = loadState();
let activeAccount = state.activeAccount || "personal";
let activeFolder = state.activeFolder || "inbox";
let activeView = state.activeView || "mail";
let activeLabel = state.activeLabel || "all";
let selectedId = state.selectedId || null;
let unreadOnly = Boolean(state.unreadOnly);
let composeContext = { mode: "new", draftId: null, sourceId: null };
let composeAttachmentsMeta = [];

const accountButtons = document.querySelectorAll("[data-account]");
const folderButtons = document.querySelectorAll("[data-folder]");
const labelButtons = document.querySelectorAll("[data-label]");
const tabButtons = document.querySelectorAll("[data-view]");
const views = document.querySelectorAll(".view");
const messageList = document.querySelector("#messageList");
const reader = document.querySelector("#reader");
const searchInput = document.querySelector("#searchInput");
const composeDialog = document.querySelector("#composeDialog");
const composeForm = document.querySelector("#composeForm");
const composeTitle = document.querySelector("#composeTitle");
const composeButton = document.querySelector("#composeButton");
const closeCompose = document.querySelector("#closeCompose");
const saveDraftButton = document.querySelector("#saveDraftButton");
const composeAttachments = document.querySelector("#composeAttachments");
const attachmentPreview = document.querySelector("#attachmentPreview");
const driveGrid = document.querySelector("#driveGrid");
const imageGrid = document.querySelector("#imageGrid");
const contactGrid = document.querySelector("#contactGrid");
const driveUpload = document.querySelector("#driveUpload");
const imageUpload = document.querySelector("#imageUpload");
const workspaceName = document.querySelector("#workspaceName");
const unreadOnlyInput = document.querySelector("#unreadOnly");
const checkMailButton = document.querySelector("#checkMailButton");
const settingsForm = document.querySelector("#settingsForm");
const defaultConfidential = document.querySelector("#defaultConfidential");
const vacationEnabled = document.querySelector("#vacationEnabled");
const signatureText = document.querySelector("#signatureText");
const vacationText = document.querySelector("#vacationText");
const privacyInputs = {
  privateMode: document.querySelector("#privateMode"),
  receiptBlock: document.querySelector("#receiptBlock"),
  signatureLock: document.querySelector("#signatureLock"),
};

accountButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeAccount = button.dataset.account;
    activeFolder = "inbox";
    activeLabel = "all";
    selectedId = null;
    saveAndRender();
  });
});

folderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeView = "mail";
    activeFolder = button.dataset.folder;
    selectedId = null;
    saveAndRender();
  });
});

labelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeView = "mail";
    activeLabel = button.dataset.label;
    selectedId = null;
    saveAndRender();
  });
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeView = button.dataset.view;
    saveAndRender();
  });
});

Object.entries(privacyInputs).forEach(([key, input]) => {
  input.checked = Boolean(state.privacy[key]);
  input.addEventListener("change", () => {
    state.privacy[key] = input.checked;
    saveState();
  });
});

unreadOnlyInput.checked = unreadOnly;
unreadOnlyInput.addEventListener("change", () => {
  unreadOnly = unreadOnlyInput.checked;
  saveAndRender();
});

searchInput.addEventListener("input", renderCurrentView);
composeButton.addEventListener("click", openNewCompose);
closeCompose.addEventListener("click", () => composeDialog.close());
saveDraftButton.addEventListener("click", saveDraftFromCompose);
checkMailButton.addEventListener("click", receiveDemoMail);

composeAttachments.addEventListener("change", () => {
  composeAttachmentsMeta = Array.from(composeAttachments.files || []).map((file) => ({
    name: file.name,
    size: formatBytes(file.size),
  }));
  renderAttachmentPreview();
});

driveUpload.addEventListener("change", () => {
  const files = Array.from(driveUpload.files || []);
  files.forEach((file) => {
    state.drive.unshift({
      id: createId(),
      account: activeAccount,
      name: file.name,
      kind: fileKind(file.name),
      size: formatBytes(file.size),
      updated: "Just now",
    });
  });
  driveUpload.value = "";
  saveAndRender();
});

imageUpload.addEventListener("change", () => {
  const files = Array.from(imageUpload.files || []);
  files.forEach((file) => {
    if (!file.type.startsWith("image/")) return;
    const imageReader = new FileReader();
    imageReader.addEventListener("load", () => {
      state.images.unshift({
        id: createId(),
        account: activeAccount,
        name: file.name,
        updated: "Just now",
        src: imageReader.result,
      });
      saveAndRender();
    });
    imageReader.readAsDataURL(file);
  });
  imageUpload.value = "";
});

composeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  sendCompose();
});

settingsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.settings.defaultConfidential = defaultConfidential.checked;
  state.settings.vacationEnabled = vacationEnabled.checked;
  state.settings.signature = signatureText.value.trim();
  state.settings.vacationMessage = vacationText.value.trim();
  saveAndRender();
});

function loadState() {
  const stored = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(OLD_STORAGE_KEY);
  const parsed = stored ? JSON.parse(stored) : {};
  return {
    messages: Array.isArray(parsed.messages) ? parsed.messages.map(normalizeMessage) : starterMessages,
    drive: Array.isArray(parsed.drive) ? parsed.drive : starterDrive,
    images: Array.isArray(parsed.images) ? parsed.images : starterImages,
    contacts: Array.isArray(parsed.contacts) ? parsed.contacts : starterContacts,
    settings: {
      defaultConfidential: true,
      signature: "Sent privately from Kites",
      vacationEnabled: false,
      vacationMessage: "Thanks for your message. I will reply soon.",
      ...(parsed.settings || {}),
    },
    privacy: {
      privateMode: true,
      receiptBlock: true,
      signatureLock: false,
      ...(parsed.privacy || {}),
    },
    activeAccount: parsed.activeAccount,
    activeFolder: parsed.activeFolder,
    activeView: parsed.activeView,
    activeLabel: parsed.activeLabel,
    selectedId: parsed.selectedId,
    unreadOnly: parsed.unreadOnly,
  };
}

function normalizeMessage(message) {
  const from = replaceOldDomain(message.from || "");
  const to = replaceOldDomain(message.to || "");
  const cc = replaceOldDomain(message.cc || "");
  const bcc = replaceOldDomain(message.bcc || "");
  const labels = Array.isArray(message.labels) ? message.labels.filter((label) => labelOptions.includes(label)) : [];
  const attachments = Array.isArray(message.attachments) ? message.attachments : [];
  const body = message.body || message.preview || "";
  const thread = Array.isArray(message.thread)
    ? message.thread.map((entry) => ({
        from: replaceOldDomain(entry.from || ""),
        to: replaceOldDomain(entry.to || to),
        body: entry.body || "",
        time: entry.time || message.time || "Now",
        attachments: Array.isArray(entry.attachments) ? entry.attachments : [],
      }))
    : [{ from, to, body, time: message.time || "Now", attachments }];

  return {
    ...message,
    account: message.account || "personal",
    folder: message.folder === "draft" ? "drafts" : message.folder || "inbox",
    from,
    to,
    cc,
    bcc,
    subject: message.subject || "(no subject)",
    preview: message.preview || body.slice(0, 130),
    body,
    time: message.time || "Now",
    unread: Boolean(message.unread),
    starred: Boolean(message.starred),
    confidential: Boolean(message.confidential),
    priority: message.priority || "Normal",
    labels,
    attachments,
    thread,
  };
}

function replaceOldDomain(value) {
  return String(value).replaceAll("discretion.local", "kites.test").replaceAll("discretion.test", "kites.test");
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      ...state,
      activeAccount,
      activeFolder,
      activeView,
      activeLabel,
      selectedId,
      unreadOnly,
    }),
  );
}

function saveAndRender() {
  saveState();
  render();
}

function render() {
  renderNav();
  renderCurrentView();
}

function renderCurrentView() {
  if (activeView === "mail") {
    renderMessages();
    renderReader();
  }
  if (activeView === "contacts") renderContacts();
  if (activeView === "drive") renderDrive();
  if (activeView === "images") renderImages();
  if (activeView === "settings") renderSettings();
}

function renderNav() {
  workspaceName.textContent = activeAccount === "business" ? "Business" : "Personal";
  accountButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.account === activeAccount);
  });
  folderButtons.forEach((button) => {
    button.classList.toggle("active", activeView === "mail" && button.dataset.folder === activeFolder);
  });
  labelButtons.forEach((button) => {
    button.classList.toggle("active", activeLabel === button.dataset.label);
  });
  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === activeView);
  });
  views.forEach((view) => {
    view.classList.toggle("active", view.id === `${activeView}View`);
  });
  composeButton.hidden = activeView !== "mail" && activeView !== "contacts";

  const accountMessages = state.messages.filter((message) => message.account === activeAccount);
  folderIds.forEach((folder) => {
    const count = document.querySelector(`#${folder === "drafts" ? "draft" : folder}Count`);
    if (count) count.textContent = countFolder(accountMessages, folder);
  });
  document.querySelector("#starCount").textContent = accountMessages.filter((message) => message.starred).length;
}

function countFolder(messages, folder) {
  return messages.filter((message) => message.folder === folder).length;
}

function visibleMessages() {
  const query = searchInput.value.trim().toLowerCase();
  return state.messages
    .filter((message) => message.account === activeAccount)
    .filter((message) => {
      if (activeFolder === "starred") return message.starred && message.folder !== "trash";
      return message.folder === activeFolder;
    })
    .filter((message) => activeLabel === "all" || message.labels.includes(activeLabel))
    .filter((message) => !unreadOnly || message.unread)
    .filter((message) => {
      const haystack = [
        message.from,
        message.to,
        message.cc,
        message.bcc,
        message.subject,
        message.preview,
        message.body,
        message.priority,
        message.labels.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
}

function renderMessages() {
  const messages = visibleMessages();

  if (!messages.length) {
    messageList.innerHTML = `<div class="empty-reader"><h2>No messages</h2><p>Try another folder, label, or search.</p></div>`;
    return;
  }

  messageList.innerHTML = messages
    .map(
      (message) => `
      <button class="message-row ${message.unread ? "unread" : ""} ${message.id === selectedId ? "active" : ""}" data-id="${message.id}">
        <div class="row-top">
          <span class="sender">${escapeHtml(message.from)}</span>
          <span class="meta">${escapeHtml(message.time)}</span>
        </div>
        <span class="subject">${message.starred ? "★ " : ""}${escapeHtml(message.subject)}</span>
        <span class="preview">${escapeHtml(message.preview)}</span>
        <span class="label-strip">
          ${message.folder === "drafts" ? `<span class="badge">Draft</span>` : ""}
          ${message.priority === "High" ? `<span class="badge alert">High</span>` : ""}
          ${message.attachments.length ? `<span class="badge">${message.attachments.length} file</span>` : ""}
          ${message.labels.map((label) => `<span class="badge ${message.account}">${escapeHtml(label)}</span>`).join("")}
          ${message.confidential ? `<span class="badge alert">Confidential</span>` : ""}
        </span>
      </button>
    `,
    )
    .join("");

  messageList.querySelectorAll(".message-row").forEach((row) => {
    row.addEventListener("click", () => {
      selectedId = row.dataset.id;
      const message = state.messages.find((item) => item.id === selectedId);
      if (message && message.folder !== "drafts") message.unread = false;
      saveAndRender();
    });
  });
}

function renderReader() {
  const message = state.messages.find((item) => item.id === selectedId);
  if (!message) {
    reader.innerHTML = `
      <div class="empty-reader">
        <h2>Select a conversation</h2>
        <p>Your private discussions open here.</p>
      </div>
    `;
    return;
  }

  reader.innerHTML = `
    <header class="reader-header">
      <div class="thread-meta">
        <span>${escapeHtml(message.from)} to ${escapeHtml(message.to)}</span>
        <span>${escapeHtml(message.time)}</span>
      </div>
      <h2>${escapeHtml(message.subject)}</h2>
      <div class="label-strip">
        <span class="badge ${message.confidential ? "alert" : ""}">${message.confidential ? "Confidential" : message.account}</span>
        <span class="badge">${escapeHtml(message.priority)} priority</span>
        ${message.labels.map((label) => `<span class="badge ${message.account}">${escapeHtml(label)}</span>`).join("")}
      </div>
      <div class="thread-meta">
        <span>${message.cc ? `Cc ${escapeHtml(message.cc)}` : "No cc"}</span>
        <span>${message.bcc ? `Bcc ${escapeHtml(message.bcc)}` : ""}</span>
      </div>
      ${renderAttachments(message.attachments)}
      <div class="reader-actions">
        <div>${message.unread ? `<span class="badge">Unread</span>` : `<span class="badge">Read</span>`}</div>
        <div>${readerActions(message)}</div>
      </div>
    </header>
    <section class="thread">
      ${message.thread
        .map(
          (entry) => `
          <div class="thread-message ${message.confidential ? "private" : ""}">
            <div class="thread-meta">
              <strong>${escapeHtml(entry.from)}</strong>
              <span>${escapeHtml(entry.time)}</span>
            </div>
            <p>${escapeHtml(entry.body)}</p>
            ${renderAttachments(entry.attachments || [])}
          </div>
        `,
        )
        .join("")}
    </section>
  `;

  reader.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => handleReaderAction(button.dataset.action, message));
  });
}

function readerActions(message) {
  if (message.folder === "drafts") {
    return `
      <button data-action="edit-draft">Edit draft</button>
      <button data-action="star">${message.starred ? "Unstar" : "Star"}</button>
      <button data-action="trash">Trash</button>
    `;
  }

  if (message.folder === "trash") {
    return `
      <button data-action="restore">Restore</button>
      <button data-action="delete">Delete forever</button>
    `;
  }

  return `
    <button data-action="reply">Reply</button>
    <button data-action="reply-all">Reply all</button>
    <button data-action="forward">Forward</button>
    <button data-action="star">${message.starred ? "Unstar" : "Star"}</button>
    <button data-action="read">${message.unread ? "Mark read" : "Mark unread"}</button>
    <button data-action="archive">${message.folder === "archive" ? "Inbox" : "Archive"}</button>
    <button data-action="spam">${message.folder === "spam" ? "Not spam" : "Spam"}</button>
    <button data-action="trash">Trash</button>
  `;
}

function handleReaderAction(action, message) {
  if (action === "reply") openReplyCompose(message, false);
  if (action === "reply-all") openReplyCompose(message, true);
  if (action === "forward") openForwardCompose(message);
  if (action === "edit-draft") openDraftCompose(message);
  if (action === "star") message.starred = !message.starred;
  if (action === "read") message.unread = !message.unread;
  if (action === "archive") {
    message.folder = message.folder === "archive" ? "inbox" : "archive";
    activeFolder = message.folder;
  }
  if (action === "spam") {
    message.folder = message.folder === "spam" ? "inbox" : "spam";
    activeFolder = message.folder;
  }
  if (action === "trash") {
    message.previousFolder = message.folder;
    message.folder = "trash";
    activeFolder = "trash";
  }
  if (action === "restore") {
    message.folder = message.previousFolder && message.previousFolder !== "trash" ? message.previousFolder : "inbox";
    activeFolder = message.folder;
  }
  if (action === "delete" && window.confirm("Delete this message forever?")) {
    state.messages = state.messages.filter((item) => item.id !== message.id);
    selectedId = null;
  }
  saveAndRender();
}

function renderAttachments(attachments) {
  if (!attachments.length) return "";
  return `
    <div class="attachment-list">
      ${attachments.map((file) => `<span class="attachment-pill">${escapeHtml(file.name)} · ${escapeHtml(file.size)}</span>`).join("")}
    </div>
  `;
}

function openNewCompose() {
  openCompose({
    mode: "new",
    title: "New message",
    to: "",
    cc: "",
    bcc: "",
    subject: "",
    body: signatureBlock(),
    priority: "Normal",
    label: "",
    confidential: Boolean(state.settings.defaultConfidential),
    attachments: [],
  });
}

function openReplyCompose(message, all) {
  const recipients = all ? uniqueEmails([message.from, message.cc].join(", ")) : extractEmail(message.from);
  openCompose({
    mode: "reply",
    sourceId: message.id,
    title: all ? "Reply all" : "Reply",
    to: recipients,
    cc: all ? message.to : "",
    bcc: "",
    subject: prefixSubject(message.subject, "Re:"),
    body: `${signatureBlock()}\n\nOn ${message.time}, ${message.from} wrote:\n> ${message.body.replaceAll("\n", "\n> ")}`,
    priority: message.priority,
    label: message.labels[0] || "",
    confidential: message.confidential,
    attachments: [],
  });
}

function openForwardCompose(message) {
  openCompose({
    mode: "forward",
    sourceId: message.id,
    title: "Forward",
    to: "",
    cc: "",
    bcc: "",
    subject: prefixSubject(message.subject, "Fwd:"),
    body: `${signatureBlock()}\n\nForwarded message\nFrom: ${message.from}\nTo: ${message.to}\nSubject: ${message.subject}\n\n${message.body}`,
    priority: "Normal",
    label: message.labels[0] || "",
    confidential: message.confidential,
    attachments: message.attachments,
  });
}

function openDraftCompose(message) {
  openCompose({
    mode: "draft",
    draftId: message.id,
    title: "Edit draft",
    to: message.to,
    cc: message.cc,
    bcc: message.bcc,
    subject: message.subject,
    body: message.body,
    priority: message.priority,
    label: message.labels[0] || "",
    confidential: message.confidential,
    attachments: message.attachments,
  });
}

function openCompose(options) {
  composeContext = {
    mode: options.mode || "new",
    draftId: options.draftId || null,
    sourceId: options.sourceId || null,
  };
  composeForm.reset();
  composeTitle.textContent = options.title || "New message";
  composeForm.elements.to.value = options.to || "";
  composeForm.elements.cc.value = options.cc || "";
  composeForm.elements.bcc.value = options.bcc || "";
  composeForm.elements.subject.value = options.subject || "";
  composeForm.elements.priority.value = options.priority || "Normal";
  composeForm.elements.label.value = options.label || "";
  composeForm.elements.body.value = options.body || "";
  composeForm.elements.confidential.checked = Boolean(options.confidential);
  composeAttachmentsMeta = [...(options.attachments || [])];
  composeAttachments.value = "";
  renderAttachmentPreview();
  composeDialog.showModal();
}

function renderAttachmentPreview() {
  attachmentPreview.innerHTML = composeAttachmentsMeta.length
    ? composeAttachmentsMeta.map((file) => `<span class="attachment-pill">${escapeHtml(file.name)} · ${escapeHtml(file.size)}</span>`).join("")
    : "";
}

function formMessageData() {
  const form = new FormData(composeForm);
  const label = form.get("label");
  const body = form.get("body").trim();
  return {
    account: activeAccount,
    from: accountAddress(activeAccount),
    to: form.get("to").trim(),
    cc: form.get("cc").trim(),
    bcc: form.get("bcc").trim(),
    subject: form.get("subject").trim() || "(no subject)",
    body,
    preview: body.slice(0, 130) || "No message body.",
    priority: form.get("priority"),
    labels: label ? [label] : [],
    confidential: form.get("confidential") === "on",
    attachments: [...composeAttachmentsMeta],
  };
}

function sendCompose() {
  const data = formMessageData();
  const message = {
    ...data,
    id: createId(),
    folder: "sent",
    time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
    unread: false,
    starred: false,
    thread: [{ from: "You", to: data.to, body: data.body, time: "Just now", attachments: data.attachments }],
  };

  if (composeContext.sourceId) {
    const source = state.messages.find((item) => item.id === composeContext.sourceId);
    if (source && composeContext.mode !== "forward") {
      source.thread.push({ from: "You", to: data.to, body: data.body, time: "Just now", attachments: data.attachments });
      source.preview = data.body.slice(0, 130);
      source.unread = false;
    }
  }

  if (composeContext.draftId) {
    state.messages = state.messages.filter((item) => item.id !== composeContext.draftId);
  }

  state.messages.unshift(message);
  addContactsFromRecipients(data.to, data.cc, data.bcc);
  activeView = "mail";
  activeFolder = "sent";
  activeLabel = "all";
  selectedId = message.id;
  composeForm.reset();
  composeDialog.close();
  saveAndRender();
}

function saveDraftFromCompose() {
  const data = formMessageData();
  if (!data.to && !data.cc && !data.bcc && !data.subject && !data.body && !data.attachments.length) {
    composeDialog.close();
    return;
  }

  const draft = {
    ...data,
    id: composeContext.draftId || createId(),
    folder: "drafts",
    time: "Draft",
    unread: false,
    starred: false,
    thread: [{ from: "You", to: data.to, body: data.body, time: "Draft", attachments: data.attachments }],
  };

  if (composeContext.draftId) {
    state.messages = state.messages.map((message) => (message.id === composeContext.draftId ? draft : message));
  } else {
    state.messages.unshift(draft);
  }

  activeView = "mail";
  activeFolder = "drafts";
  selectedId = draft.id;
  composeDialog.close();
  saveAndRender();
}

function receiveDemoMail() {
  const template = demoIncoming[Math.floor(Math.random() * demoIncoming.length)];
  const message = {
    id: createId(),
    account: activeAccount,
    folder: "inbox",
    from: template.from,
    to: accountAddress(activeAccount),
    cc: "",
    bcc: "",
    subject: template.subject,
    preview: template.body.slice(0, 130),
    body: template.body,
    time: "Just now",
    unread: true,
    starred: false,
    confidential: template.labels.includes("private"),
    priority: "Normal",
    labels: template.labels,
    attachments: template.attachments || [],
    thread: [
      {
        from: template.from,
        to: accountAddress(activeAccount),
        body: template.body,
        time: "Just now",
        attachments: template.attachments || [],
      },
    ],
  };
  state.messages.unshift(message);
  upsertContact(extractEmail(template.from), template.from.split("<")[0].trim());
  activeView = "mail";
  activeFolder = "inbox";
  selectedId = message.id;
  saveAndRender();
}

function renderContacts() {
  const query = searchInput.value.trim().toLowerCase();
  const contacts = state.contacts
    .filter((contact) => contact.account === activeAccount)
    .filter((contact) => `${contact.name} ${contact.email} ${contact.notes}`.toLowerCase().includes(query));

  if (!contacts.length) {
    contactGrid.innerHTML = `<div class="empty-reader"><h2>No contacts</h2><p>Send mail and Kites will build your address book.</p></div>`;
    return;
  }

  contactGrid.innerHTML = contacts
    .map(
      (contact) => `
        <article class="contact-card">
          <div class="contact-avatar">${escapeHtml(initials(contact.name || contact.email))}</div>
          <div>
            <h3>${escapeHtml(contact.name || contact.email)}</h3>
            <p>${escapeHtml(contact.email)}</p>
          </div>
          <span class="contact-chip">${escapeHtml(contact.notes || "Contact")}</span>
          <button class="toolbar-button" data-compose-contact="${escapeHtml(contact.email)}" type="button">Email</button>
        </article>
      `,
    )
    .join("");

  contactGrid.querySelectorAll("[data-compose-contact]").forEach((button) => {
    button.addEventListener("click", () => {
      openCompose({
        mode: "new",
        title: "New message",
        to: button.dataset.composeContact,
        cc: "",
        bcc: "",
        subject: "",
        body: signatureBlock(),
        priority: "Normal",
        label: "",
        confidential: Boolean(state.settings.defaultConfidential),
        attachments: [],
      });
    });
  });
}

function renderSettings() {
  defaultConfidential.checked = Boolean(state.settings.defaultConfidential);
  vacationEnabled.checked = Boolean(state.settings.vacationEnabled);
  signatureText.value = state.settings.signature || "";
  vacationText.value = state.settings.vacationMessage || "";
}

function renderDrive() {
  const query = searchInput.value.trim().toLowerCase();
  const files = state.drive
    .filter((file) => file.account === activeAccount)
    .filter((file) => `${file.name} ${file.kind}`.toLowerCase().includes(query));

  if (!files.length) {
    driveGrid.innerHTML = `<div class="empty-reader"><h2>No drive files</h2><p>Add a file to reserve it in Kites Drive.</p></div>`;
    return;
  }

  driveGrid.innerHTML = files
    .map(
      (file) => `
        <article class="file-card">
          <div class="file-icon">${escapeHtml(file.kind.slice(0, 3).toUpperCase())}</div>
          <div>
            <h3>${escapeHtml(file.name)}</h3>
            <p>${escapeHtml(file.size)} · ${escapeHtml(file.updated)}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderImages() {
  const query = searchInput.value.trim().toLowerCase();
  const images = state.images
    .filter((image) => image.account === activeAccount)
    .filter((image) => image.name.toLowerCase().includes(query));

  if (!images.length) {
    imageGrid.innerHTML = `<div class="empty-reader"><h2>No images</h2><p>Add images to keep them with this Kites workspace.</p></div>`;
    return;
  }

  imageGrid.innerHTML = images
    .map(
      (image) => `
        <article class="image-card">
          <img src="${image.src}" alt="${escapeHtml(image.name)}" />
          <div>
            <h3>${escapeHtml(image.name)}</h3>
            <p>${escapeHtml(image.updated)}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function addContactsFromRecipients(...groups) {
  groups.flatMap(parseRecipients).forEach((email) => upsertContact(email));
}

function upsertContact(email, name = "") {
  if (!email || email === accountAddress(activeAccount)) return;
  const normalized = email.toLowerCase();
  const existing = state.contacts.find(
    (contact) => contact.account === activeAccount && contact.email.toLowerCase() === normalized,
  );
  if (existing) return;
  state.contacts.push({
    id: createId(),
    account: activeAccount,
    name: name || email.split("@")[0],
    email,
    notes: "Saved from mail",
  });
}

function parseRecipients(value) {
  return String(value)
    .split(/[;,]/)
    .map((item) => extractEmail(item.trim()))
    .filter(Boolean);
}

function uniqueEmails(value) {
  return [...new Set(parseRecipients(value))].join(", ");
}

function extractEmail(value) {
  const match = String(value).match(/<([^>]+)>/);
  return (match ? match[1] : String(value)).trim();
}

function accountAddress(account) {
  return account === "business" ? "business@kites.test" : "me@kites.test";
}

function signatureBlock() {
  return state.settings.signature ? `\n\n-- \n${state.settings.signature}` : "";
}

function prefixSubject(subject, prefix) {
  return subject.startsWith(prefix) ? subject : `${prefix} ${subject}`;
}

function initials(value) {
  return String(value)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function createId() {
  if (crypto.randomUUID) return crypto.randomUUID();
  return `kite-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function fileKind(name) {
  const extension = name.includes(".") ? name.split(".").pop() : "file";
  return extension.slice(0, 5) || "file";
}

function formatBytes(bytes) {
  if (!bytes) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / 1024 ** index).toFixed(index ? 1 : 0)} ${units[index]}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

render();
