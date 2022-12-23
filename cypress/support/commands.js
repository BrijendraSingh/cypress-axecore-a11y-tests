Cypress.Commands.add(
    'checkAxeViolations',
    { prevSubject: 'optional' },
    (context, options, label) => {
      cy.wrap(context).checkA11y(
        {
          shouldFailFn: violations =>
            violations.filter(
              v =>
                v.id !== 'color-contrast' &&
                ['serious', 'critical'].includes(v.impact)
            ),
          ...options
        },
        label
      )
    }
  )