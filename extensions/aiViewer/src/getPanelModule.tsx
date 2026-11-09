import React from 'react';
import i18n from 'i18next';
import PanelAI from './panels/PanelAI';

function getPanelModule({ commandsManager, extensionManager, servicesManager }) {
  return [
    {
      name: 'aiPanel',
      iconName: 'tab-patient-info',
      iconLabel: 'AI',
      label: i18n.t('SidePanel:AI Panel', 'AI Panel'),
      component: props => (
        <PanelAI
          {...props}
          commandsManager={commandsManager}
          extensionManager={extensionManager}
          servicesManager={servicesManager}
        />
      ),
    },
  ];
}

export default getPanelModule;
