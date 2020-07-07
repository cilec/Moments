import { create } from 'dva-core';
import createLogger from 'dva-logger'
import immer from 'dva-immer';

let app;
let store = {};
let dispatch;

function createApp(opt) {
  opt.onError = (e, dispatch) => {
    console.log(e.message);
  };
  app = create(opt);
  app.use(createLogger(opt))
  app.use(immer());
  if (!global.registered) {
    opt.models.forEach((model) => app.model(model));
  }
  global.registered = true;
  app.start();

  store = app._store;
  app.getStore = () => store;
  dispatch = store.dispatch;
  app.dispatch = dispatch;
  if (window) {
    window.g_app = app;
  }
  return app;
}
export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  },
  dispatch: store.dispatch,
};
