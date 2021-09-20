import {
  SET_CONNECTION_STATUS,
  SET_IMG_LIST,
  SET_UNIQUEID,
  SET_TOKEN,
  ADD_TOKEN,
  SET_PUSHID,
  SET_USER_INFO,
  SET_LOGIN_STATUS,
  SET_TICKET,
  SET_SHOW_ADS,
  SET_LAST_FT_USER_INFO,
  SET_FT_LIST,
  SET_REDUCE_TOKEN,
  SET_VIP_STATUS,
  SET_SETTINGS,
  SET_APPINTRO_STATUS,
  ADD_TICKET,
  SET_GIFT,
  ADD_GIFT,
  SET_REDUCE_GIFT,
} from '../actions/types';
import { iGeneralState } from "../interfaces";

const INITIAL_STATE: iGeneralState = {
  connectionStatus: false, // Internet connectivity status
  imgList: [], // fal gönderirken eklediğimiz 3 resim
  uniqueID: "", // cihaza ait uniqueid
  token: 0, // kredi miktarı
  ticket: 0, // dilek falı için ticket miktarı
  dailyGift: 0, // günlük hedi fal
  pushID: "", // push id (token)
  userinfo: {
    familyName: "",
    givenName: "",
    email: "",
    user: "", // ios'da user-> spesifik bi id // android'de id
    loginType: "", // gmail ile mi apple login ile mi giriş yaptı
    photo: "", // gmail ile gelen profil fotosu
  }, // kullanıcıya ait login bilgileri
  loginStatus: true, // login durumu
  showAds: true, // reklam gösterme durumu
  lastFtUserInfo: {},
  vipStatus: false, // vip üyelik kontrolü
  ftlist: [], // fallarim listesi
  newFtStatus: false, // yeni fal 
  settings: {}, // settings bilgileri
  // true-> app intro geçildi
  // false -> app intro henüz geçilmedi o yüzden görülsün
  // default true çünkü kontrol edene kadar kullanıcı app intro görmesin 
  appintroStatus: true,
  StartupScreenStatus: true, // login status atanana kadarki ki bekleme ekranı statusu
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CONNECTION_STATUS:
      return { ...state, connectionStatus: action.payload };

    case SET_IMG_LIST:
      return { ...state, imgList: action.payload };

    case SET_UNIQUEID:
      return { ...state, uniqueID: action.payload };

    case SET_TOKEN:
      return { ...state, token: action.payload };

    case SET_REDUCE_TOKEN:
      return { ...state, token: state.token - action.payload };

    case ADD_TOKEN:
      return { ...state, token: state.token + action.payload };

    case SET_PUSHID:
      return { ...state, pushID: action.payload };

    case SET_USER_INFO:
      return { ...state, userinfo: action.payload };

    case SET_LOGIN_STATUS:
      return { ...state, loginStatus: action.payload, StartupScreenStatus: false };

    case SET_TICKET:
      return { ...state, ticket: action.payload };

    case ADD_TICKET:
      return { ...state, ticket: state.ticket + action.payload };

    case SET_SHOW_ADS:
      return { ...state, showAds: action.payload };

    case SET_LAST_FT_USER_INFO:
      return { ...state, lastFtUserInfo: action.payload };

    case SET_FT_LIST:
      return { ...state, ftlist: action.payload };

    case SET_VIP_STATUS:
      return { ...state, vipStatus: action.payload };

    case SET_SETTINGS:
      return { ...state, settings: action.payload };

    case SET_APPINTRO_STATUS:
      return { ...state, appintroStatus: action.payload };

    case SET_GIFT:
      return { ...state, dailyGift: action.payload };

    case ADD_GIFT:
      return { ...state, dailyGift: state.dailyGift + action.payload };

    case SET_REDUCE_GIFT:
      return { ...state, dailyGift: state.dailyGift - action.payload };


    default:
      return state;

  }
};