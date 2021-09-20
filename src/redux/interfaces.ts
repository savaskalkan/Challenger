import { eFTellerIds, eFalStatuses, eExtrafalStatuses, eSettings, eOkundumu, eFeedbackst, eSoruStatuses } from "../config";

export interface iImglist {
  uri: string,
  imgResStatus: boolean
}
export interface iUserinfo {
  familyName: string,
  givenName: string,
  email: string,
  user: string,
  loginType: string,
  photo?: string,
}
/* enum eGender {
  "Erkek",
  "Kadın"
}
enum eRelationship {
  IYOK = "İlişkisi Yok",
  IVAR = "İlişkisi Var",
  NISANLI = "Nişanlı",
  EVLİ = "Evli",
  YEVLİ = "Yeni Evli",
  PLATONIK = "Platonik",
  AYRILMIS = "Ayrılmış",
  BOSANMIS = "Boşanmış"
}
enum eJob {
  EVHANIMI = "Ev Hanımı",
  CALISIYOR = "Çalışıyor",
  CALISMIYOR = "Çalışmıyor",
  OGRENCI = "Öğrenci",
  ISARIYOR = "İş Arıyor",
  ILGILENMIYOR = "İlgilenmiyor"
} */
export interface iLastFtUserInfo {
  fullname?: string | null,
  birthdate?: string,
  gender?: string | null,
  relationship?: string | null,
  job?: string | null,
}
export interface iSendingSoruInfo {
  falid: number,
  socialID: string,
  falciTuru: eFTellerIds,
  soru: string,
  cevap: string,
  EkFal: string,
  FalMetin: string,
  EkFalStatus: eExtrafalStatuses,
  soruid: number,
  pushId: string,
  vipStatus: boolean,
  os: string,
}
export interface iSoruInfo {
  id: number,
  soru: string,
  cevap: string,
  status: eSoruStatuses,
}

export type iUyeTip = "vip" | "normal"

export interface iFtlist {
  Falid: number,
  FalciTuru: eFTellerIds,
  FalName: string,
  FalDate: string | Date,
  FalStatus: eFalStatuses,
  imgControler: boolean,
  FalMetin: string,
  sorular: iSoruInfo[],
  okundumu: eOkundumu, // 0 -> okunmadı, 1-> okundu
  feedbackst: eFeedbackst, // feed back gönderilmiş mi? 1 gönderilmemiş, 0 gönderilmiş
  EkFal?:string,
  EkFalCumle?:string,
  EkFalciTuru?:eFTellerIds,
  EkFalStatus?:eExtrafalStatuses,
  
}
export interface iFtInfos {
  socialID: string,
  seciliFalci: eFTellerIds,
  falBilgi: object,
  pushId: string,
  vipStatus: boolean,
  allowSendPush: boolean

}

export interface iGeneralState {
  connectionStatus: boolean,
  imgList: iImglist[],
  uniqueID: string | number,
  token: number,
  ticket: number,
  dailyGift: number,
  pushID: string,
  userinfo: iUserinfo,
  loginStatus: boolean,
  showAds: boolean,
  lastFtUserInfo: iLastFtUserInfo | object | {},
  vipStatus: boolean,
  ftlist: iFtlist[],
  newFtStatus: boolean,
  settings: any | eSettings,
  appintroStatus: boolean,
  StartupScreenStatus: boolean,
}
