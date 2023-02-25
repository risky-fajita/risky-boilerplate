const { configureAxe } = require('jest-axe')

const axe = configureAxe({
  impactLevels: ['critical', 'serious', 'moderate', 'minor'],
})

module.exports = axe
