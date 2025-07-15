import { UnsignedFobPayLoad } from './UnsignedFobPayLoad';
import { Buffer } from 'node:buffer';

export type SignedFobRecord = {
  payload: UnsignedFobPayLoad;
  sig: Buffer;
  alg?: string;
  key_id?: string;
  ver: number;
};
