import { Button } from '../../components/button/button';
import { Input } from '../../components/input';
import { Label } from '../../components/label/label';
import { Card } from './components/cards';
import { Steps } from './components/steps';
import { useHomeModel } from './home.model';
import * as S from './home.style';

type TypeHomeModel = ReturnType<typeof useHomeModel>;

export const Home = ({ ...props }: TypeHomeModel) => {
  const { goToStep, stepOne, stepThree, stepTwo } = props;

  return (
    <S.Page>
      <S.Main color="#00bcff" form>
        <S.TextTitle color="#fcfcfd">Cadastro do aluno</S.TextTitle>
        <Steps.container>
          <Steps.step ref={stepOne}>
            <S.Form action="" $media={{ sm: 200, md: 600 }}>
              <Input.root>
                <Label text="Nome completo" htmlFor="name" />
                <Input.text type="text" name="name" placeholder="ex: lucas do santos" />
              </Input.root>
              <Input.root>
                <Label text="E-mail" htmlFor="email" />
                <Input.text type="email" name="email" placeholder="ex: lucas@gmail.com" />
              </Input.root>
              <Input.root>
                <Label text="Data de nascimento" htmlFor="date" />
                <Input.text type="date" name="date" placeholder="ex: 25/02/2000" />
              </Input.root>
              <Button text="proximo" onClick={() => goToStep(2)} />
            </S.Form>
          </Steps.step>

          <Steps.step ref={stepTwo}>
            <S.Form action="" $media={{ sm: 200, md: 600 }}>
              <Input.root>
                <Label text="Instituição de ensino" htmlFor="institution" />
                <Input.text type="text" name="institution" placeholder="ex: cruzeiro do sul" />
              </Input.root>
              <Input.root>
                <Label text="Cursos" htmlFor="Course" />
                <Input.select name="Course" defaultValue={''} />
              </Input.root>
              <Input.root>
                <Label text="Cidade e Estado" htmlFor="city" />
                <Input.select name="city" defaultValue={''} />
              </Input.root>
              <Button text="proximo" onClick={() => goToStep(3)} />
            </S.Form>
          </Steps.step>

          <Steps.step ref={stepThree}>
            <S.Form action="" $media={{ sm: 200, md: 600 }}>
              <Input.root>
                <Label text="Foto" htmlFor="Photo" />
                <Input.text type="file" name="Photo" placeholder="ex: cruzeiro do sul" />
              </Input.root>
              <Input.root>
                <Label text="Redes sociais" htmlFor="link" />
                <Input.text type="text" name="link" placeholder="ex: lucas@gmail.com" />
                <Button text="adicionar link" />
              </Input.root>
              <Button text="proximo" onClick={() => goToStep(1)} />
            </S.Form>
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
            {Array.from({ length: 3 }).map(() => (
              <Card.container>
                <Card.photo
                  alt="photo"
                  src="https://gravatar.com/avatar/85e830f239a287dbf789376d52052dee?s=200&d=mp&r=x"
                />
                <Card.text
                  title="João Teste"
                  city="Diamantina - MG"
                  date="11/04/2000"
                  email="teste@gmail.com"
                  key={1}
                />
              </Card.container>
            ))}
          </S.Div>
        </S.ContainerDiv>
      </S.MainContainer>
    </S.Page>
  );
};
