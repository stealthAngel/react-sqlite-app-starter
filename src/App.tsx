import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { apps, flash, send } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import EncryptedTests from './pages/EncryptedTests';
import EncryptionTests from './pages/EncryptionTests';
import JsonTests from './pages/JsonTests';
import UpgradeVersionTest from './pages/UpgradeVersionTest';
import Issue49Tests from './pages/Issue49Tests';
import { DarkModeService } from './services/DarkModeService';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


class App extends React.Component {

  constructor(props:any) {
    super(props);

    const dMService: DarkModeService = new DarkModeService ();
    const prefersDark: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    dMService.enableDarkTheme(prefersDark.matches);
    prefersDark.addListener(mediaQuery => dMService.enableDarkTheme(mediaQuery.matches));
  }

  /**
   * Render
   */
  render() {   

    return (

      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/tab1" component={Tab1} exact={true} />
              <Route path="/tab2" component={Tab2} exact={true} />
              <Route path="/tab2/encrypted" component={EncryptedTests} />
              <Route path="/tab2/encryption" component={EncryptionTests} />
              <Route path="/tab2/jsontest" component={JsonTests} />
              <Route path="/tab2/upgradeversion" component={UpgradeVersionTest} />
              <Route path="/tab2/issue49" component={Issue49Tests} />
              <Route path="/tab3" component={Tab3} />
              <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/tab1">
                <IonIcon icon={flash} />
                <IonLabel>Tab One</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/tab2">
                <IonIcon icon={apps} />
                <IonLabel>Tab Two</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/tab3">
                <IonIcon icon={send} />
                <IonLabel>Tab Three</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    );
  };
};
export default App;
