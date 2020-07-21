import { decodeAES } from './encodeUtil';
import { keyAES } from './index';

export default class ApiCryptoUtil {
  static decrypt(data: any, keys: string[]) {
    if (!data) return data;
    keys.forEach((key) => {
      const subKeys = key.split('.');
      let tmp = data;
      for (let i = 0; i < subKeys.length; i += 1) {
        try {
          if (i === subKeys.length - 1) {
            tmp[subKeys[i]] = decodeAES(tmp[subKeys[i]], keyAES);
          } else {
            tmp = tmp[subKeys[i]];
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    });
    return data;
  }

  static decryptUserData(userData: any) {
    return ApiCryptoUtil.decrypt(userData, ['adminUser.userName', 'adminUser.phoneNo', 'adminUser.orgName']);
  }

  static decryptUserDetail(data: any) {
    return ApiCryptoUtil.decrypt(data, ['user.userName', 'user.phoneNo', 'user.orgName']);
  }

  static decryptPartnerAddress(data: any[]) {
    if (!Array.isArray(data)) return data;
    data.forEach((el) => {
      ApiCryptoUtil.decrypt(el, ['consigeeName', 'consigeeMobile', 'addr', 'province', 'country', 'town']);
    });
    return data;
  }
}
