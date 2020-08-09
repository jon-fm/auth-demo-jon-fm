## Netlify Auth Demo

[![Netlify Status](https://api.netlify.com/api/v1/badges/f3fa60e9-01b3-4dac-99a6-ff533fb100ba/deploy-status)](https://app.netlify.com/sites/auth-jon-fm/deploys)

This project is a micro-demo that gives a tangible, working example of Netlify Auth for use wth gating content to special users. Publicly available and open for folks to sign up on and try themselves.

**This demo is for 'pure static' sites - where each page a user loads warrants a full window reload and request to a file on the server. For an example using a PWA framework that XHR's new pages and shims in content, the process is different. See [my other repo](https://github.com/jon-fm/gatsby-auth-demo-jon-fm) for an example.**

Features:

- Multiple user tiers with split access control
  - Admin
    - Set manually on Netlify Dashboard (not programmatically assigned)
    - Allows access to the admin page(s) _and_ members page(s)
  - Member
    - Automatically assigned to new users on sign-up
    - Allows access to members page(s) _only_

This sample is a good example of Netlify Functions as well - albeit a simple function without any dependencies or packages, it shows off Netlify's _automatic_ Function hooks. Note the function is _very specifically_ named `identity-signup` / `identity-signup.js` so that it binds to Netlify's automatic hooks. This is different from just spinning up a generic Function and calling it from somewhere on the web.

*FYI if you sign up on the public site, you may need to log out/back in once you sign up before the auth'd routes work*

__*Some of these features require a Netlify account beyond the free tier*__
