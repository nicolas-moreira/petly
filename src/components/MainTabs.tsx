import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { personCircleOutline, documentTextOutline } from "ionicons/icons";
import { Redirect, Route } from "react-router";

const MainTabs: React.FC = () => {
    return (
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/profile" />
          {/* <Route path="/profile" render={() => <Tab3 />} exact={true} /> */}
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="profile" href="/profile">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
          <IonTabButton tab="history" href="/history">
            <IonIcon icon={documentTextOutline} />
            <IonLabel>History</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    );
  };
  
  export default MainTabs;