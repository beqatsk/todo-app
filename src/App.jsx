import { useState } from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  const [light, setLight] = useState(false);
  const [edit, setEdit] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: "1",
      title: "Jog around the park 3x",
      isDone: true,
    },
    {
      id: "2",
      title: "10 minutes medition",
      isDone: false,
    },
    {
      id: "3",
      title: "Read for 1 hour",
      isDone: false,
    },
  ]);
  const titles = ["All", "Active", "Completed"];
  const handleClick = () => {
    setLight(!light);
  };

  const handleDelete = () => {
    const deleteIndex = posts.findIndex((item) => item.id == posts.id);
    posts.splice(deleteIndex, 1);
    setPosts([...posts]);
  };
  const changeBackground = () => {
    setEdit(!edit);
  };

  return (
    <>
      <Container>
        <Headerimage light={light}>
          <HeaderTitle>
            <H1>TODO</H1>
            <Image
              src={light ? "/images/light-dark.png" : "/images/dark-light.png"}
              alt="darklight-icone"
              onClick={handleClick}
            />
          </HeaderTitle>
          <InputWrapper>
            <Input
              placeholder="Create a new todo…"
              light={light}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  setPosts([
                    ...posts,
                    { title: e.target.value, isDone: false, id: Math.random() },
                  ]);
                }
              }}
            ></Input>
            <Oval></Oval>
          </InputWrapper>
        </Headerimage>
        <MainContainer light={light}>
          {posts.map((element, index) => {
            return (
              <WrapperTodo light={light} key={index}>
                <H4
                  edit={edit}
                  onClick={() => changeBackground(element.id)}
                ></H4>

                <H6 edit={edit}>{element.title}</H6>
                <H5 light={light} onClick={handleDelete}>
                  x
                </H5>
              </WrapperTodo>
            );
          })}

          <OptionTodo light={light} posts={posts}>
            {titles.map((item) => {
              return <H3 key={item}>{item}</H3>;
            })}
          </OptionTodo>
          <H2>Drag and drop to reorder list</H2>
        </MainContainer>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  max-width: 375px;

  @media (min-width: 768px) {
    max-width: 768px;
  }
`;
const Headerimage = styled.div`
  background-image: ${(props) =>
    props.light
      ? `url("/images/header-image.png")`
      : `url("/images/header-image-light.png")`};
  width: 375px;
  height: 200px;
  background-position: center;
  background-size: cover;
  padding: 48px 24px 44px;

  @media (min-width: 768px) {
    width: 768px;
    height: 300px;
  }
`;
const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const H1 = styled.h1`
  font-size: 20px;
  letter-spacing: 6px;
  font-weight: bold;
  color: white;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;
const Image = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 48px;
  margin: 40px 0 0;
  padding: 14px 15px 14px 50px;
  border-radius: 5px;
  box-shadow: 0 35px 50px -15px rgba(0, 0, 0, 0.5);
  background-color: ${(props) => (props.light ? "white" : "#25273d")};
  color: ${(props) => (props.light ? "#25273d" : "white")};
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  &::placeholder {
    font-size: 12px;
    font-weight: 400;
    color: #767992;
    margin: 4px 0 4px 12px;
    letter-spacing: -0.17px;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
`;
const Oval = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 54px;
  left: 20px;
  border-radius: 50px;
  border: solid 2px #393a4b;
`;
const InputWrapper = styled.div`
  position: relative;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px 24px 44px;
  background-color: ${(props) => (props.light ? "#e6e6e6" : "#171823;")};
`;
const OptionTodo = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 5px;
  background-color: ${(props) => (props.light ? "white" : "#25273d")};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;
const WrapperTodo = styled(OptionTodo)`
  border-bottom: 1px solid #393a4b;
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
  color: ${(props) => (props.light ? "#494c6b" : "#c8cbe7")};
`;
const H2 = styled.h2`
  font-size: 14px;
  font-weight: normal;
  color: #5b5e7e;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
const H3 = styled.h3`
  font-size: 14px;
  font-weight: normal;
  color: #5b5e7e;
  cursor: pointer;

  &&:hover {
    color: #8e8fa1;
  }
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
const H4 = styled.h4`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: ${(props) => (props.edit ? "1px solid white" : "1px solid black")};
  background-color: ${(props) => (props.edit ? "green" : "white")};
  cursor: pointer;
  &&:hover {
    background-color: green;
  }
`;
const H5 = styled.h5`
  font-size: 20px;
  font-weight: normal;
  color: ${(props) => (props.light ? "#25273d" : "white")};
  cursor: pointer;
  &&:hover {
    color: #e15151;
  }
`;
const H6 = styled.h6`
  text-decoration: ${(props) => (props.edit ? "line-through" : "")};
`;
