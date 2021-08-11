# Instructions

Repository was setup with following commands.

```shell
# assuming ionic was installed globally - npm i -g @ionic/cli
ionic start test-app blank --cordova
cd test-app

# following the setup steps from the cordova sdk
ionic cordova plugin add https://github.com/antwerpes/dc_app_login_sdk_cordova.git

ionic cordova platform add ios
ionic cordova prepare ios
```

## Changes to the template

Added the code snippet from the setup to `home.page.ts` and a button calling the function to `home.page.html`.
