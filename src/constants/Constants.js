import Strings, {ValidationMessages} from './Strings';
import Images from './Images';
import {Platform} from 'react-native';

const environment = {
  dev: {
    bucket: '',
    api_url: 'https://mbc-dev-backend-new.kiwi-internal.com/api/v1/',
    chat: 'dev',
  },
  qa: {
    bucket: '',
    api_url: 'https://mbc-qa-backend-new.kiwi-internal.com/api/v1',
    chat: 'qa',
  },
  stage: {
    bucket: '',
    api_url: 'https://mbc-stage-backend-new.kiwi-internal.com/api/v1',
    chat: 'stage',
  },
};

export const {bucket, api_url, chat} = environment.stage;

const WEB_BASE_URL = 'https://makingbabyconnection.com/';

export const HttpStatus = {
  UNAUTHORISED: 401,
  SUCCESS_REQUEST: 200,
  SUCCESS_CODE_202: 202,
  SUCCESS_CODE_201: 201,
  SUCCESS_CODE_204: 204,
  UNAUTHORISED_400: 400,
  SUCCESS_CODE_205: 205,
};

export const Fonts = {
  OpenSansBold: 'OpenSans-Bold',
  OpenSansBoldItalic: 'OpenSans-BoldItalic',
  OpenSansExtraBold: 'OpenSans-ExtraBold',
  OpenSansExtraBoldItalic: 'OpenSans-ExtraBoldItalic',
};

export const ConstantsCode = {
  Country_CODE: '+1',
};
// password error message
export const Routes = {
  HomeScreen: 'HomeScreen',
  AboutUsScreen: 'AboutUsScreen',
  SettingsScreen: 'SettingsScreen',
  OTP: 'OTP',
};
export const Static = {
  countries: [
    {
      id: 1,
      code: 'AL',
      name: 'Alabama',
    },
    {
      id: 2,
      code: 'AK',
      name: 'Alaska',
    },
    {
      id: 3,
      code: 'AZ',
      name: 'Arizona',
    },
  ],
};

const HeraDevMonthly = 'com.HeraDev.Monthly';
const HeraDevYearly = 'com.HeraDev.Yearly';
const HeraDevWeekly = 'com.HeraDev.Weekly';


