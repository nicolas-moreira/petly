import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonImg,
  IonRow,
} from "@ionic/react";
import {
  heartOutline,
  chatbubbleOutline,
  heartDislikeOutline,
} from "ionicons/icons";
import React from "react";

const Messages: React.FC = () => {
  return (
    <IonGrid>
      <IonRow className="ion-padding-top">
        <IonCol>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle className="ion-text-left">Message</IonCardTitle>
              <IonCardSubtitle>14h25 </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent className="ion-text-right">
                <IonButton color="success" >GO</IonButton>
            </IonCardContent>
          </IonCard>
        </IonCol>
        <IonCol>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle className="ion-text-left">Message</IonCardTitle>
              <IonCardSubtitle>14h25 </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent className="ion-text-right">
                <IonButton color="success" >GO</IonButton>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
      <IonRow className="ion-padding-top">
        <IonCol>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle className="ion-text-left">Message</IonCardTitle>
              <IonCardSubtitle>14h25 </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent className="ion-text-right">
                <IonButton color="success" >GO</IonButton>
            </IonCardContent>
          </IonCard>
        </IonCol>
        <IonCol>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle className="ion-text-left">Message</IonCardTitle>
              <IonCardSubtitle>14h25 </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent className="ion-text-right">
                <IonButton color="success" >GO</IonButton>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow> <IonRow className="ion-padding-top">
        <IonCol>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle className="ion-text-left">Message</IonCardTitle>
              <IonCardSubtitle>14h25 </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent className="ion-text-right">
                <IonButton color="success" >GO</IonButton>
            </IonCardContent>
          </IonCard>
        </IonCol>
        <IonCol>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle className="ion-text-left">Message</IonCardTitle>
              <IonCardSubtitle>14h25 </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent className="ion-text-right">
                <IonButton color="success" >GO</IonButton>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Messages;
