/*
  基于CryptoJS的加密工具函数
*/
import CryptoJS from 'crypto-js';

const DEFAULT_AES_IV = '3468546098617269';

export function decodeAES(ciphertextStr, keyStr, ivStr = DEFAULT_AES_IV) {
  const key = CryptoJS.enc.Utf8.parse(keyStr);
  const iv = CryptoJS.enc.Utf8.parse(ivStr);
  const ciphertext = CryptoJS.enc.Utf8.parse(ciphertextStr);
  const encrypted = CryptoJS.AES.decrypt(ciphertext, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString(CryptoJS.enc.Utf8);
}

// aes加密
export function encodeAES(passwordStr, keyStr, ivStr = DEFAULT_AES_IV) {
  const key = CryptoJS.enc.Utf8.parse(keyStr);
  const iv = CryptoJS.enc.Utf8.parse(ivStr);
  const password = CryptoJS.enc.Utf8.parse(passwordStr);
  const encrypted = CryptoJS.AES.encrypt(password, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}
