export type UnsignedFobPayLoad = {
  id: string;
  issued_at: number;
  expires_at?: number;
  user_id: string;
  device_name?: string;
  ver: number;
};
