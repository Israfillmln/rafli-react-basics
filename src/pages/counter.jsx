import { Box, Button, Center, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import counter_types from "../redux/reducers/counter/types";

const CounterPage = () => {
  const countSelector = useSelector((state) => state.counter);

  const [ value, setValue ] = useState ("")

  const dispatch = useDispatch();

  const inputHandler = (event) => {
    const { value } = event.target;

    setValue(value);
  }

  const changeCountValue = (dir) => {
    if (dir === "increment") {
      dispatch({
        type: counter_types.INCREMENT_COUNTER,
      });
    } else if (dir === "decrement") {
      dispatch({
        type: counter_types.DECREMENT_COUNTER,
      });
    } else if (dir === "reset") {
      dispatch({
        type: "RESET_COUNTER",
      })
    } else if (dir === "set") {
      dispatch({
        type: "SET_COUNTER", payload: value
      })
    }
  };
  return (
    <Center>
    <Box alignItems="center" maxWidth="2xl" padding="16">
      <Flex alignItems="center" marginTop="10">
        <Button onClick={() => changeCountValue("decrement")} marginRight="4">
          -
        </Button>
        <Text fontSize="2xl">{countSelector.count}</Text>
        <Button onClick={() => changeCountValue("increment")} marginLeft="4">
          +
        </Button>
      </Flex>
      <Flex alignItems="center" marginTop="4">
        <Input onChange={inputHandler}/>
        <Button onClick={() => changeCountValue("set")} marginLeft="4">Set Counter</Button>
      </Flex>
      <Button onClick={() => changeCountValue("reset")} marginTop="4">Reset Counter</Button>
    </Box>
    </Center>
  );
};

export default CounterPage;
