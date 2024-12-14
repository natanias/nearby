import { ActivityIndicator } from "react-native";
import { s } from "./styles";
import { colors } from "@/styles/theme";

export default function Loading() {
  return (
    <ActivityIndicator
      style={s.container}
      size="large"
      color={colors.green.base}
    />
  );
}
