import { Provider } from 'react-redux';
import Routers from './routers/Routers';
import { ConfigProvider, message } from 'antd';
import store from './redux/store';
import './App.css';


console.log(process.env.REACT_APP_APP_ID)

message.config({
  top:30,
  duration:2,
  maxCount:3,
  rtl:true,
  prefixCls:'my-message',
})

function App() {
  return (
  <>
    <ConfigProvider
      theme={{
        token:{},
        components:{},
      }}>
        <Provider store={store}>
          <Routers/>
        </Provider>
    </ConfigProvider>
  </>
  );
}
export default App;



//1:09:00 Part3

