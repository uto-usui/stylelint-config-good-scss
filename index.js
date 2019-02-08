"use strict"

module.exports = {
  "extends": ["stylelint-config-recess-order", "stylelint-config-standard"],
  "plugins": ["stylelint-scss"],
  "rules": {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true
  },
}
