import React, { useState } from 'react';

export default function Notification() {
  // const [status, setStatus] = useState(Notification.permission);
  const status = "test";
  console.log(Notification);
  console.log(status);
  setTimeout(() => console.log(Notification.permission), 1000);
    // try {
    //     if (!Notification.permission != "denied") {
    //         Notification.requestPermission().then(result => {
    //           console.log(e);
    //           // setStatus(result);
    //         });
    //     }
    // }
    // catch (e) {
    //   console.log(e);
    //   //setStatus(e);
    // }

  return (
    <div>
      <h1>Notifications</h1>
      <div>The Notifications API allows the app to send notifications at the system level, even when it is in the background.</div>
      <div>This can also be run from the web worker, which is probably a lot more useful. This demo here requires the website to actually be running.</div>
      <div>Note that you need to request the desktop-notification permission in the manifest - otherwise the Notification properties and methods are just not available.</div>
      <h2>Notifications permission status</h2>
      <hr />
      <div>{status}</div>
      <hr />
          <div>The Push Notifications API allows a server to send notifications, even when the browser is not running.</div>
    </div>
  );
}
