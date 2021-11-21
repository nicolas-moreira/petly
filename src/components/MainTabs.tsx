import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { personCircleOutline, documentTextOutline, chatbox, chatboxOutline, swapHorizontalOutline } from "ionicons/icons";
import { Redirect, Route } from "react-router";
import Messages from "../pages/Messages";
import Swipe from "../pages/Swipe";

const MainTabs: React.FC = () => {
    return (
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/swipe" />
          <Route path="/swipe" render={() => <Swipe />} exact={true} />
          <Route path="/messages" render={() => <Messages />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="swipe" href="/swipe">
            <IonIcon icon={swapHorizontalOutline} />
            <IonLabel>Swipe</IonLabel>
          </IonTabButton>
          <IonTabButton tab="messages" href="/messages">
            <IonIcon icon={chatboxOutline} />
            <IonLabel>Messages</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profile" href="/profile">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    );
  };
  
  export default MainTabs;