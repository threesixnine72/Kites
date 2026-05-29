# Kites

Kites is a private local prototype for personal and business mail, discussion threads, contacts, Drive space, image storage, and mailbox settings.

The visible brand mark uses `assets/KitsLogo3.0.png`, the final uploaded Kites envelope artwork. Earlier logo versions are preserved in the `assets` folder.

## Private Domain Choice

Use `kites.test` for private sample addresses:

- Personal: `me@kites.test`
- Business: `business@kites.test`

The `.test` name is reserved for testing and should not be registered as a public internet domain. That makes it a good private-only name while Kites stays on your own computers.

## Run Kites

```powershell
node server.js
```

Then open:

```text
http://localhost:8788
```

## Email Features

- Personal and business workspaces
- Inbox, Sent, Drafts, Archive, Spam, Trash, and Starred folders
- Labels for Private, Work, Finance, and Travel
- Compose with To, Cc, Bcc, priority, labels, confidential mode, and attachment metadata
- Save drafts, edit drafts, send drafts, reply, reply all, forward, archive, spam, trash, restore, and delete forever
- Read/unread state, unread-only filter, message search, and simulated "Check mail"
- Contacts tab that saves people you email
- Settings for default confidential mode, signature, and vacation responder copy

## Open From Another Computer

For a computer on the same Wi-Fi, run `node server.js` on this PC and open:

```text
http://YOUR-PC-IP:8788
```

For private access away from home, use a private tunnel such as Tailscale Serve. Keep Kites bound to the local server, then expose it only to your own Tailscale devices.

## Real Email Later

This prototype does not send or receive real internet email yet. Real email delivery needs a public domain with DNS records such as MX, SPF, DKIM, and DMARC.
