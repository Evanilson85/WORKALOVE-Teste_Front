import { Field, FieldArray, Formik, FormikProps } from 'formik';
import { ChangeEvent } from 'react';
import { Button } from '../../components/button/button';
import { InputFileValidation } from '../../components/form/file.validation';
import { InputValidation } from '../../components/form/input.validation';
import { SelectValidation } from '../../components/form/select.validation';
import { Card } from './components/cards';
import { Steps } from './components/steps';
import { useHomeModel } from './home.model';
import * as S from './home.style';
import { TypeUser, TypeUserThree, TypeUserTwo } from './schema';

type TypeHomeModel = ReturnType<typeof useHomeModel>;

export const Home = ({ ...props }: TypeHomeModel) => {
  const {
    goToStep,
    setData,
    setStep,
    saveDataLocal,
    reset,
    allDataStudent,
    course,
    stepOne,
    stepThree,
    stepTwo,
    formOne,
    formTwo,
    formThree,

    states,
    city,
    link,
    requestCity,
  } = props;

  return (
    <S.Page>
      <S.Main color="#00bcff" $form>
        <S.TextTitle color="#fcfcfd">Cadastro do estudante</S.TextTitle>
        <Steps.container>
          <Steps.step ref={stepOne}>
            <Formik
              enableReinitialize
              initialValues={formOne.initialValuesStepOne}
              validationSchema={formOne.userSchema}
              onSubmit={(values) => {
                const numb = 2;
                setData(values);
                goToStep(numb);
                setStep(numb);
              }}
            >
              {(props: FormikProps<TypeUser>) => (
                <S.Form onSubmit={props.handleSubmit} $media={{ sm: 200, md: 600 }}>
                  <Field
                    type="text"
                    name="fullName"
                    placeholder="ex: lucas do santos"
                    label="Nome Completo"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.fullName}
                    component={InputValidation}
                  />

                  <Field
                    type="email"
                    name="email"
                    placeholder="ex: lucas@gmail.com"
                    label="E-mail"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.email}
                    component={InputValidation}
                  />

                  <Field
                    type="date"
                    name="date"
                    placeholder="ex: 25/02/2000"
                    label="Data de nascimento"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.date}
                    component={InputValidation}
                  />
                  <Button text="Proximo" type="submit" />
                </S.Form>
              )}
            </Formik>
          </Steps.step>

          <Steps.step ref={stepTwo}>
            <Formik
              enableReinitialize
              initialValues={formTwo.initialValuesStepTwo}
              validationSchema={formTwo.userSchemaTwo}
              onSubmit={(values) => {
                const numb = 3;
                setStep(numb);
                goToStep(numb);
                setData(values);
              }}
            >
              {(props: FormikProps<TypeUserTwo>) => (
                <S.Form onSubmit={props.handleSubmit} $media={{ sm: 200, md: 600 }}>
                  <Field
                    name="institution"
                    placeholder="ex: cruzeiro do sul"
                    label="Instituição de ensino"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.institution}
                    component={InputValidation}
                  />

                  <Field
                    type="text"
                    name="course"
                    placeholder="ex: developer"
                    label="Cursos"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.course}
                    data={course}
                    component={SelectValidation}
                  />

                  <S.ContainerDivSeparator>
                    <Field
                      type="text"
                      name="state"
                      placeholder="ex: MG"
                      label="Estado"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const newValue = e.target.value;
                        requestCity(newValue);
                        props.handleChange(e);
                      }}
                      onBlur={props.handleBlur}
                      data={states}
                      value={props.values.state}
                      component={SelectValidation}
                    />
                    <Field
                      type="text"
                      name="city"
                      disabled={city.length > 0 ? false : true}
                      placeholder="ex: Diamantina - MG"
                      label="Cidade"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      data={city}
                      value={props.values.city}
                      component={SelectValidation}
                    />
                  </S.ContainerDivSeparator>

                  <Button text="Proximo" type="submit" />
                </S.Form>
              )}
            </Formik>
          </Steps.step>

          <Steps.step ref={stepThree}>
            <Formik
              enableReinitialize
              initialValues={formThree.initialValuesStepThree}
              validationSchema={formThree.userSchemaThree}
              onSubmit={(values, { resetForm }) => {
                setData(values);
                saveDataLocal();
                reset();
                goToStep(1);
                setStep(1);

                setTimeout(() => {
                  resetForm();
                }, 100);
              }}
            >
              {(props: FormikProps<TypeUserThree>) => (
                <S.Form onSubmit={props.handleSubmit} $media={{ sm: 200, md: 600 }}>
                  <Field type="file" name="photo" label="Foto" component={InputFileValidation} />

                  <FieldArray name="link">
                    {({ push }) => (
                      <S.Div>
                        {props.values.link.map((links, index) => (
                          <S.DivForm key={index}>
                            <Field
                              type="text"
                              name={`link[${index}].type`}
                              placeholder="ex: Facebook"
                              label="Selecione uma Rede social"
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              value={props.values.link[index].type}
                              data={link}
                              component={SelectValidation}
                            />
                            {props.values.link[index].type && (
                              <Field
                                type="text"
                                name={`link[${index}].url`}
                                placeholder="ex: linkedin/user"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.link[index].url}
                                component={InputValidation}
                              />
                            )}
                          </S.DivForm>
                        ))}

                        {props.values.link.length < 2 && props.values.link[0]?.url && (
                          <Button
                            fullSpace
                            text="Novo link"
                            type="button"
                            onClick={() => push({ type: '', url: '' })}
                          />
                        )}
                      </S.Div>
                    )}
                  </FieldArray>

                  <Button text="Salvar" type="submit" />
                </S.Form>
              )}
            </Formik>
          </Steps.step>
        </Steps.container>
      </S.Main>
      <S.MainContainer>
        <S.ContainerDiv>
          <S.Div>
            <S.TextTitle color="#444141">Meus cadastros</S.TextTitle>
          </S.Div>
          <S.row></S.row>
          <S.Div>
            {allDataStudent.length > 0 ? (
              allDataStudent.map((item, index) => (
                <Card.container key={index}>
                  <Card.photo alt="photo" src={item.photo} />
                  <Card.text
                    title={item.fullName}
                    city={`${item.city} - ${item.state}`}
                    date={item.date}
                    email={item.email}
                    key={index}
                  />
                </Card.container>
              ))
            ) : (
              <S.Div center>
                <S.TextNotFound>Nenhum estudante encontrado</S.TextNotFound>
              </S.Div>
            )}
          </S.Div>
        </S.ContainerDiv>
      </S.MainContainer>
    </S.Page>
  );
};
