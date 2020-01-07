import React, { Component } from 'react';
import { Alert } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';

import formatPrice from '../../util/format';

import {
  Container,
  CartListContainer,
  CartList,
  CartTotal,
  CartTotalText,
  CartPriceText,
  CartButton,
  CartButtonText,
  ContainerItem,
  DetailsItem,
  ImageItem,
  TitlePriceViewItem,
  TitleTextItem,
  PriceTextItem,
  ButtonDeleteItem,
  AmountPriceItem,
  AmountItem,
  ButtonAmount,
  AmountInputItem,
  TotalItemText,
} from './styles';

class Cart extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    total: PropTypes.string.isRequired,
  };

  handleRemoveItemById = id => {
    const { removeFromCart } = this.props;

    removeFromCart(id);
  };

  handleIncrementAmount = product => {
    const { updateAmountRequest } = this.props;

    updateAmountRequest(product.id, product.amount + 1);
  };

  handleDecrementAmount = product => {
    const { updateAmountRequest } = this.props;

    updateAmountRequest(product.id, product.amount - 1);
  };

  keyExtractor = item => String(item.id);

  renderItem = ({ item }) => (
    <ContainerItem>
      <DetailsItem>
        <ImageItem source={{ uri: item.image }} resizeMode="cover" />
        <TitlePriceViewItem>
          <TitleTextItem>{item.title}</TitleTextItem>
          <PriceTextItem>{item.priceFormatted}</PriceTextItem>
        </TitlePriceViewItem>
        <ButtonDeleteItem onPress={() => this.handleRemoveItemById(item.id)}>
          <Icon name="delete-forever" color="#7159c1" size={22} />
        </ButtonDeleteItem>
      </DetailsItem>

      <AmountPriceItem>
        <AmountItem>
          <ButtonAmount onPress={() => this.handleDecrementAmount(item)}>
            <Icon name="remove-circle-outline" color="#7159c1" size={20} />
          </ButtonAmount>
          <AmountInputItem>{item.amount}</AmountInputItem>
          <ButtonAmount onPress={() => this.handleIncrementAmount(item)}>
            <Icon name="add-circle-outline" color="#7159c1" size={20} />
          </ButtonAmount>
        </AmountItem>
        <TotalItemText>{item.subtotal}</TotalItemText>
      </AmountPriceItem>
    </ContainerItem>
  );

  render() {
    const { products, total } = this.props;

    return (
      <Container>
        {products.length ? (
          <CartListContainer>
            <CartList
              data={products}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
            />

            <CartTotal>
              <CartTotalText>Total</CartTotalText>
              <CartPriceText>{total}</CartPriceText>
            </CartTotal>

            <CartButton>
              <CartButtonText>Finalizar Pedido</CartButtonText>
            </CartButton>
          </CartListContainer>
        ) : (
          <CartListContainer>
            <Icon name="remove-shopping-cart" color="#999" size={60} />
            <CartPriceText>Seu Carrinho está vazio</CartPriceText>
          </CartListContainer>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.cart.map(p => ({
    ...p,
    subtotal: formatPrice(p.amount * p.price),
  })),
  total: formatPrice(
    state.cart.reduce((total, p) => total + p.price * p.amount, 0),
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
