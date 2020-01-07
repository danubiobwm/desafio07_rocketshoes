import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView.attrs({
  nestedScrollEnabled: true,
})`
  background: #191920;
  flex: 1;
  padding: 10px 30px;
`;

export const CartListContainer = styled.View`
  background: #fff;
  padding: 15px;
  align-items: center;
  border-radius: 4px;
`;

export const CartList = styled.FlatList``;

export const CartTotal = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const CartTotalText = styled.Text`
  color: #666;
  text-transform: uppercase;
  font-size: 16px;
`;

export const CartPriceText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const CartButtonText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
`;

export const CartButton = styled(RectButton)`
  background: #7159c1;
  margin-top: 15px;
  flex-direction: row;
  height: 36px;
  border-radius: 4px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`;

export const ContainerItem = styled.View`
  margin-bottom: 10px;
`;

export const DetailsItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ImageItem = styled.Image`
  width: 80px;
  height: 80px;
`;

export const TitlePriceViewItem = styled.View`
  width: 190px;
  margin-left: 10px;
`;

export const TitleTextItem = styled.Text.attrs({ numberOfLines: 2 })`
  color: #666;
`;

export const PriceTextItem = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ButtonDeleteItem = styled(RectButton)`
  width: 42px;
  height: 42px;
  justify-content: center;
  align-items: center;
`;

export const AmountPriceItem = styled.View`
  flex-direction: row;
  background: #eee;
  border-radius: 4px;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
`;

export const AmountItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonAmount = styled(RectButton)``;

export const AmountInputItem = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 2px 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`;

export const TotalItemText = styled.Text`
  font-weight: bold;
`;
