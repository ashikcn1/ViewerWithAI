import { id } from './id.js';
import getPanelModule from './getPanelModule';

const aiViewerExtension = {
  /**
   * Only required property. Should be a unique value across all extensions.
   */
  id,
  getPanelModule,
};

export default aiViewerExtension;
