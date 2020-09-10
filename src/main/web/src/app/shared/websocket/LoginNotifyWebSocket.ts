import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {ReplaySubject} from "rxjs";

const webSocketEndPoint: string = '/ws';
const topic: string = "/topic/sum-login";

export class LoginNotifyWebSocket {

  stompClient: any;
  response = new ReplaySubject<any>(1);

  constructor() {
  }

  _connect() {
    console.log("Initialize WebSocket Connection");
    let ws = new SockJS(webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({}, frame => {
        this.stompClient.subscribe(topic, sdkEvent => {
          this.onMessageReceived(sdkEvent);
        });
        this.stompClient.send("/app/init-sum-login", {});
      },
      this.errorCallBack);
  };

  _disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    console.log("Disconnected");
  }

  // on error, schedule a reconnection attempt
  errorCallBack(error) {
    console.log("errorCallBack -> " + error)
    setTimeout(() => {
      this._connect();
    }, 5000);
  }

  onMessageReceived(message) {
    this.response.next(message.body)
  }

}
