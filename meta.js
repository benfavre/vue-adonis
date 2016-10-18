module.exports = {
  helpers: {
    harmony_proxies: () => {
      return (Number(process.version.slice(1, 4)) < 6.5 ? ' --harmony_proxies' : '')
    },
    raw: function(options) {
      return options.fn(this)
    }
  },
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': 'Project description',
      'default': 'An Adonis and Vue.js project'
    },
    author: {
      'type': 'string',
      'message': 'Author'
    },
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  mv .env.example .env\n  npm install # Or yarn install\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  mv .env.example .env\n  npm install # Or yarn install\n  npm run dev{{/inPlace}}'
};
