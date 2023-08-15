export interface AuthValidation {
  firstName?: string;
  lastName?: string;
  email: string;
  phone: string;
  otp?: string;
  otpChannel?: string;
  gender?: string;
  dob?: string;
  refferalCode?: string;
  platform?: string;
}

export interface SocialAuthData {
  displayName: string;
  email: string;
  pictureUrl: string;
  provider: string;
  platform: 'WEB';
}

export interface OTPValidationData {
  otp?: string;
  phoneNumber: string;
  userId: string;
}

export enum AuthPlatform {
  'WEB' = 'WEB',
  'MOBILE' = 'MOBILE',
}

export enum AuthProvider {
  'GOOGLE' = 'GOOGLE',
}
