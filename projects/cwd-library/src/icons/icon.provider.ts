import { ENVIRONMENT_INITIALIZER, Provider } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { registerUiKitIcons } from './icon';

export const provideUIKitIcons: Provider = {
  provide: ENVIRONMENT_INITIALIZER,
  multi: true,
  useFactory: (library: FaIconLibrary) => () => {
    registerUiKitIcons(library);
  },
  deps: [FaIconLibrary],
};
