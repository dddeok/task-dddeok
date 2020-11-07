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
