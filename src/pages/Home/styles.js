import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';

export const Container = styled.View`
  background: #191920;
  flex: 1;
  padding: 10px 30px;
`;

export const ListItens = styled.FlatList.attrs({
  horizontal: true,
})``;

export const ContainerItem = styled.View`
  background: #fff;
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 358px;
  padding: 15px;
  border-radius: 4px;
  margin-right: 15px;
`;

export const ImageItem = styled.Image`
  width: 200px;
  height: 200px;
`;

export const TitleItem = styled.Text.attrs({
  numberOfLines: 2,
})`
  flex: 1;
  color: #666;
  margin-bottom: 10px;
`;

export const PriceItem = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const ButtonItem = styled(RectButton)`
  background: #7159c1;
  margin-top: 15px;
  flex-direction: row;
  height: 36px;
  border-radius: 4px;
  align-items: center;
`;

export const ButtonAmountItem = styled.View`
  background: ${darken(0.03, '#7159c1')};
  flex-direction: row;
  height: 100%;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

export const ButtonTextAmountItem = styled.Text`
  color: #fff;
  padding-left: 5px;
`;

export const ButtonText = styled.Text`
  flex: 1;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
`;
