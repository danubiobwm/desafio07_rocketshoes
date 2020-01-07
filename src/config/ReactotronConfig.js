import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotonSaga from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({ host: '192.168.1.199' })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotonSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
