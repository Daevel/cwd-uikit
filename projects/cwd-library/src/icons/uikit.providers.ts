import { importProvidersFrom, makeEnvironmentProviders } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideUIKitIcons } from './icon.provider';

export function provideUIKit() {
  return makeEnvironmentProviders([
    importProvidersFrom(FontAwesomeModule),
    provideUIKitIcons
  ]);
}