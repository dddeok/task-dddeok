import React, { useState } from 'react';
import styled from 'styled-components';

import Tourist from '../container/tourist/Tourist';
import useTourist from '../function/hook/useTourist.hook';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding: 30px 0px;
`;

const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 668px;
  min-width: 320px;
  padding: 30px;

  border: 1px solid #e5e5e7;

  .register-form-title {
    font-size: 20px;
    color: #212121;
  }
`;

const Register = () => {
  const { ids, entities, setIds, setEntities } = useTourist();

  function onFirstNameChange(id: number, firstName: string) {
    setEntities({
      ...entities,
      [id]: {
        ...entities[id],
        firstName: {
          ...entities[id].firstName,
          value: firstName,
        },
      },
    });
  }
  function onLastNameChange(id: number, lastName: string) {
    setEntities({
      ...entities,
      [id]: {
        ...entities[id],
        lastName: { ...entities[id].lastName, value: lastName },
      },
    });
  }
  function onKorNameChange(id: number, korName: string) {
    setEntities({
      ...entities,
      [id]: {
        ...entities[id],
        korName: { ...entities[id].korName, value: korName },
      },
    });
  }
  function onGenderChange(id: number, gender: string) {
    setEntities({
      ...entities,
      [id]: {
        ...entities[id],
        gender: { ...entities[id].gender, value: gender },
      },
    });
  }
  function onBirthdayChange(id: number, birthday: string) {
    setEntities({
      ...entities,
      [id]: {
        ...entities[id],
        birthday: { ...entities[id].birthday, value: birthday },
      },
    });
  }

  return (
    <Container>
      <RegisterForm>
        {ids.map((id, index) => {
          const { firstName, lastName, korName, gender, birthday } = entities[id];
          return (
            <Tourist
              key={index}
              firstName={firstName.value}
              lastName={lastName.value}
              korName={korName.value}
              gender={gender.value}
              birthday={birthday.value}
              onFirstNameChange={(firstName: string) => onFirstNameChange(id, firstName)}
              onLastNameChange={(lastName: string) => onLastNameChange(id, lastName)}
              onKorNameChange={(korName: string) => onKorNameChange(id, korName)}
              onGenderChange={(gender: string) => onGenderChange(id, gender)}
              onBirthdayChange={(birthday: string) => onBirthdayChange(id, birthday)}
            />
          );
        })}
      </RegisterForm>
    </Container>
  );
};

export default Register;
