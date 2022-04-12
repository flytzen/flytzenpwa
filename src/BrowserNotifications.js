import React, { useState } from 'react';


export default function BrowserNotifications() {
  const [permissionStatus, setStatus] = useState(Notification.permission);
    try {
        if (!Notification.permission !== "denied") {
            Notification.requestPermission().then(result => {
              console.log(result);
              setStatus(result);
            });
        }
    }
    catch (e) {
      console.log(e);
      setStatus(e);
    }
  
  const ensurePermissionsNotDenied = (currentPermission) => {
    if (currentPermission === "denied") {
      alert("Notifications have been denied");
      throw new Error("Notifications have been denied");
    }
  }
  
  const ensurePermissionNotifications = () => {
    ensurePermissionsNotDenied(Notification.permission);
    return Notification.requestPermission().then(result => {
      ensurePermissionsNotDenied(result);
      if (result === "default") {
        alert("Notifications permission has not been granted");
        throw new Error("Notifications permission has not been granted");
      }
    });
  }
  
  const notifyNow = () => {
    ensurePermissionNotifications().then(() => {
      const notification = new Notification("Hi there", {

      });
      
    })

  }

  return (
    <div>
      <h1>Notifications</h1>
      <div>The Notifications API allows the app to send notifications at the system level, even when it is in the background.</div>
      <div>This can also be run from the web worker, which is probably a lot more useful. This demo here requires the website to actually be running.</div>
      <h2>Notifications permission status</h2>
      <hr />
      <div>{permissionStatus}</div>
      <hr />
      <button onClick={ notifyNow }>Notify now</button>
    </div>
  );
}
