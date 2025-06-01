// icons.ts
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faCheck,
  faTimes,
  faEdit,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

export function registerUiKitIcons(library: FaIconLibrary): void {
  library.addIcons(faCheck, faTimes, faEdit, faTrash);
}
