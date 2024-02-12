import { TouchableOpacity, Image, Text } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension, hundlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={hundlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
