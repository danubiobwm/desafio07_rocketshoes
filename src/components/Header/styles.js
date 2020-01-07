import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #191920;
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 180px;
  height: 24px;
`;

export const ItemsCartTotal = styled.Text`
  background: #7159c1;
  color: #fff;
  position: absolute;
  text-align: center;
  top: -7px;
  right: -7px;
  min-width: 20px;
  min-height: 20px;
  font-size: 12px;
  padding: 2px;
  border-radius: 10px;
  overflow: hidden;
`;

export const MenuCartIconButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
