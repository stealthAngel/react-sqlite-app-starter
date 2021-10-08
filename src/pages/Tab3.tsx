import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { SQLiteDBConnection } from '@capacitor-community/sqlite';
import { sqlite, isJsonListeners } from '../App';
import { useSQLite } from 'react-sqlite-hook/dist';

const Tab3: React.FC = () => {
  const [tests, setTests] = useState<any>([]);

  useEffect(() => {
    const initialize = async (): Promise<Boolean> => {
      try {
        let db: SQLiteDBConnection = await sqlite.createConnection("db_issue9");
        await db.open();
        let randomText = (Math.random() + 1).toString(36).substring(7);
        await db.run("INSERT INTO test (name) VALUES (?)", [randomText]);
        let res: any = await db.query("SELECT * FROM test");
        setTests(res.values);
        console.log(`query ${res}`);
        await db.close();
        return true;
      }
      catch (err) {
        console.log(`Error: ${err}`);
        return false;
      }
    }
    initialize();
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 3 page" /> */}
        <div className="container">
          {tests.map((x: any, index: any) =>
            <div key={index}><IonText>
              {index} {x.name}
            </IonText>
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;