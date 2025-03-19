module.exports = function (plop) {
  // Generator for creating a React Native component
  plop.setGenerator('component', {
    description: 'Create a React Native component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nom du composant:',
      },
      {
        type: 'list',
        name: 'folder',
        message: 'Dans quel dossier voulez vous stocker ce composant ?',
        choices: ['atoms', 'molecules', 'organisms', 'templates'],
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'app/components/{{folder}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component.js.hbs',
      },
    ],
  });

  plop.setGenerator('page', {
    description: 'Create a React Native page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nom de la page:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'app/pages/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/page.js.hbs',
      },
    ],
  });

  plop.setGenerator('store', {
    description: 'Create a React Native zustand store',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nom du store:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'app/stores/{{camelCase name}}.ts',
        templateFile: 'plop-templates/store.js.hbs',
      },
    ],
  });
};
