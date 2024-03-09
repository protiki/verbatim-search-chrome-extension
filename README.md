# Activate Google verbatim search—a local extension

This local extension lets you activate google's "verbatim search" feature with a click or an extension shortcut. By using this feature, you're more likely to get search results that contain the exact terms you're searching for. You can use terms with quotation marks to further restrict results.

If you find this helpful, please consider making a one-time donation to UNRWA (https://donate.unrwa.org/one-time/~my-donation) or any other charity of your choice 🙏

## Installation and setting a keyboard shortcut

1. Download the repository as a zip file (green "code" dropdown menu in upper right corner)
2. Open the chrome extensions page (three dots menu --> extensions).
3. Activate "developer mode" (toggle in top right corner).
4. Click "load unpacked" (top left).
5. Navigate to the unzipped extension folder and select it.
6. Click the hamburger menu (three stacked lines, top left).
7. Click "keyboard shortcuts".
8. Find your new extension, click the pen symbol.
9. Press the keys for your desired keyboard shortcut.
10. Click "update" (also click "update" if you can't find the extension after loading).
11. Done!

The code activates "verbatim" search (found under "tools" on the search results page)
by appending "&tbs=li:1" to the search URL string.

This version overrides the tbs parameter but that seems to be the case when you select verbatim search anyway.

## Using this as a bookmarklet

1. Bookmark any site
2. click "more"
3. paste the javascript code below in the URL field:

```javascript
javascript:(function(){ let url = window.location.href; if (url.indexOf('google.com/search') !== -1 && url.indexOf('&tbs=li:1') === -1) { window.location.href = url + '&tbs=li:1'; } })();
```

4. Name the bookmark and save it in your bookmarks bar.
5. Click to activate.

# Micmro's incredibly useful extension boilerplate: https://github.com/micmro/bookmarklet-to-chrome-extension-boilerplate
