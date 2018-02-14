# AskLatinAmericaCss
CSS for reddit.com/r/AskLatinAmerica :)

Flag fonts designed by Freepik from Flaticon

Downloading less and cleancss minifier:
```
npm install -g less
npm install -g clean-css
```

Compiling the theme:
```
lessc less/asklatinamerica.less asklatinamerica.css
cleancss -o asklatinamerica.min.css asklatinamerica.css
```

## To-do:
- [ ] Test it in all browsers, especially legacy ones (aka IE)
- [ ] Test it in mobile (just to be safe)
- [ ] Mobile and desktop background image for header (like AskEurope), icon image (for mobile)
- [ ] Create country flair classes
- [ ] Enable lesscss browser-specific features plugin (eg: -moz-, -webkit- etc)

- [ ] Credit flag font author in subreddit