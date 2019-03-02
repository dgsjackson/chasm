import EventEmitter from 'wolfy87-eventemitter';

class Events extends EventEmitter {

  get AssetSelected() { return 'assetSelected'; }
  get RequestsSent() { return 'requestsSent'; }
  get ResponsesReceived() { return 'responsesReceived'; }

}

export default new Events();