import { Buffer } from 'node:buffer';

export type FobSignatureBundle = {
  payload: UnsignedFobPayLoad;
  sig: Buffer;
  alg?: string;
  key_id?: string;
};

export type SignedFobRecord = {
  payload: UnsignedFobPayLoad;
  sig: Buffer;
  alg?: string;
  key_id?: string;
  ver: number;
};

export type UnsignedFobPayLoad = {
  id: string;
  issued_at: number;
  expires_at?: number;
  user_id: string;
  device_name?: string;
  ver: number;
};
