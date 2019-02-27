import EventEmitter from 'wolfy87-eventemitter';

class Events extends EventEmitter {

  get AssetSelected() { return 'assetSelected'; }

}

export default new Events();