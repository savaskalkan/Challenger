import {
    SET_CONNECTION_STATUS,
    SET_IMG_LIST,
    SET_UNIQUEID,
    SET_TOKEN,
    SET_REDUCE_TOKEN,
    ADD_TOKEN,
    SET_PUSHID,
    SET_USER_INFO,
    SET_LOGIN_STATUS,
    SET_TICKET,
    SET_SHOW_ADS,
    SET_LAST_FT_USER_INFO,
    SET_FT_LIST,
    SET_VIP_STATUS,
    SET_SETTINGS,
    SET_APPINTRO_STATUS,
    ADD_TICKET,
    SET_GIFT,
    ADD_GIFT,
    SET_REDUCE_GIFT,
} from './types';

import { iFtlist, iImglist, iLastFtUserInfo, iUserinfo } from "../interfaces";

export const SetConnectionStatus = (status:boolean) => {
    return {
        type: SET_CONNECTION_STATUS,
        payload: status
    };
};
export const SetImgList = (type:iImglist[]) => {
    return {
        type: SET_IMG_LIST,
        payload: type
    };
};

export const SetUniqueId = (id:string | number) => {
    return {
        type: SET_UNIQUEID,
        payload: id
    };
};
// fal hakkı 
export const SetToken = (amount: number) => {
    return {
        type: SET_TOKEN,
        payload: amount
    };
};

// fal hakkı düşür
export const ReduceToken = (amount: number) => {
    return {
        type: SET_REDUCE_TOKEN,
        payload: amount
    };
};
// fal hakı ekle
export const AddToken = (amount:number) => {
    return {
        type: ADD_TOKEN,
        payload: amount
    };
};

export const SetPushID = (id:string) => {
    return {
        type: SET_PUSHID,
        payload: id
    };
};

export const SetUserInfo = (userinfo:iUserinfo | {}) => {
    return {
        type: SET_USER_INFO,
        payload: userinfo
    };
};

export const SetLoginStatus = (status: boolean) => {
    return {
        type: SET_LOGIN_STATUS,
        payload: status
    };
};
// dilek falı için ticket set
export const SetTicket = (ticket: number) => {
    return {
        type: SET_TICKET,
        payload: ticket
    };
};
// dilek falı için ticket add
export const AddTicket = (ticket: number) => {
    return {
        type: ADD_TICKET,
        payload: ticket
    };
};
// Reklam gösterme status
export const SetShowAds = (status: boolean) => {
    return {
        type: SET_SHOW_ADS,
        payload: status
    };
};

export const SetLastFTUserInfo = (userinfo: iLastFtUserInfo | null | {}) => {
    return {
        type: SET_LAST_FT_USER_INFO,
        payload: userinfo
    };
};

// fallarım
export const SetFtList = (ftlist: iFtlist[]) => {
    return {
        type: SET_FT_LIST,
        payload: ftlist
    };
};

// vip status güncelleme
export const SetVIPStatus = (status: boolean) => {
    return {
        type: SET_VIP_STATUS,
        payload: status
    };
};
// set settings info
export const SetSettings = (settings: object) => {
    return {
        type: SET_SETTINGS,
        payload: settings
    };
};

// set appintro
export const SetAppintroStatus = (status: boolean) => {
    return {
        type: SET_APPINTRO_STATUS,
        payload: status
    };
};
// dilek falı için ticket set
export const SetGift = (amount: number) => {
    return {
        type: SET_GIFT,
        payload: amount
    };
};
// dilek falı için ticket add
export const AddGift = (amount: number) => {
    return {
        type: ADD_GIFT,
        payload: amount
    };
};
// fal hakkı düşür
export const ReduceGift = (amount: number) => {
    return {
        type: SET_REDUCE_GIFT,
        payload: amount
    };
};