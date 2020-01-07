import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import logo from '../../assets/images/logo.png';

import { Container, Logo, ItemsCartTotal, MenuCartIconButton } from './styles';

class Header extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    cartSize: PropTypes.number.isRequired,
  };

  handleNavigate = (page = 'Home') => {
    const { navigation } = this.props;

    navigation.navigate(page);
  };

  render() {
    const { cartSize } = this.props;

    return (
      <Container>
        <MenuCartIconButton onPress={() => this.handleNavigate('Home')}>
          <Logo source={logo} resizeMode="cover" />
        </MenuCartIconButton>

        <MenuCartIconButton onPress={() => this.handleNavigate('Cart')}>
          <Icon name="cart" size={30} color="#fff" />
          <ItemsCartTotal>{cartSize}</ItemsCartTotal>
        </MenuCartIconButton>
      </Container>
    );
  }
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
