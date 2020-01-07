import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import formatPrice from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ListItens,
  ContainerItem,
  ImageItem,
  TitleItem,
  PriceItem,
  ButtonItem,
  ButtonAmountItem,
  ButtonTextAmountItem,
  ButtonText,
} from './styles';

class Home extends React.Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');
    const products = response.data.map(p => ({
      ...p,
      priceFormatted: formatPrice(p.price),
    }));

    this.setState({ products });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  renderItem = ({ item }) => {
    const { amount } = this.props;

    return (
      <ContainerItem>
        <ImageItem source={{ uri: item.image }} />
        <TitleItem>{item.title}</TitleItem>
        <PriceItem>{item.priceFormatted}</PriceItem>
        <ButtonItem onPress={() => this.handleAddProduct(item.id)}>
          <ButtonAmountItem>
            <Icon name="shopping-basket" color="#fff" size={16} />
            <ButtonTextAmountItem>{amount[item.id] || 0}</ButtonTextAmountItem>
          </ButtonAmountItem>

          <ButtonText>Adicionar</ButtonText>
        </ButtonItem>
      </ContainerItem>
    );
  };

  keyExtractor = item => String(item.id);

  render() {
    const { products } = this.state;

    return (
      <Container>
        <ListItens
          data={products}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, p) => {
    amount[p.id] = p.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
