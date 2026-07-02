# TEMPUS_NET

Static devsite prototype for the Tempus armory archive.

## Purpose

TEMPUS_NET is the public-facing home for Tempus development logs, showcases,
framework notes, screenshots, and eventual release mirrors. It is not an asset
dump and should not contain extracted vanilla game assets.

## Structure

```text
index.html
assets/
  styles.css
  site.js
  media/
    feeds/
docs/
```

## Local Preview

Open `index.html` directly in a browser.

## GitHub Pages

This version does not need a build step. To publish later:

1. Create a GitHub repository.
2. Upload this folder.
3. Enable GitHub Pages from the repository settings.
4. Set the Pages source to the main branch root.

## Content Rules

- Public: devlogs, screenshots, original notes, release pages.
- Private: unstable framework code, internal research notes, working paths.
- Never public: extracted vanilla `.anims`, `.mesh`, `.ent`, `.app`, `.rig`,
  `.archive`, or other game-derived files.
