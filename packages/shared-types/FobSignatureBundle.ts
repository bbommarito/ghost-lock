import { UnsignedFobPayLoad } from './UnsignedFobPayLoad';
import { Buffer } from 'node:buffer';

export type FobSignatureBundle = {
  payload: UnsignedFobPayLoad;
  sig: Buffer;
  alg?: string;
  key_id?: string;
};
