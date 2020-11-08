export interface Tourist {
  id: number;
  firstName: { value: string; isValid: string };
  lastName: { value: string; isValid: string };
  korName: { value: string; isValid: string };
  gender: { value: string; isValid: string };
  birthday: { value: string; isValid: string };
}

export interface TouristEntity {
  [id: number]: Tourist;
}

export interface Applicant {
  userName: { value: string; isValid: string };
  countryNumber: { value: string; isValid: string };
  phoneNumber: { value: string; isValid: string };
  reservation: { value: string; isValid: string };
}
