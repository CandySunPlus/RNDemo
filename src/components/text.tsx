import { Platform, TextProps, Text as RText } from 'react-native';

export default function Text(props: TextProps) {
  const defaultFontFamily = {
    ...Platform.select({
      android: { fontFamily: 'default' },
    }),
  };
  return <RText {...props} style={[defaultFontFamily, props.style]} />;
}
