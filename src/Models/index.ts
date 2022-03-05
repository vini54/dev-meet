import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
  Greeting: undefined;
  Available: {
    tipoId: number;
  };
  Event: {
    id: string;
  };
  Chose: undefined;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
