import React from 'react'
import { cartListAtom } from '../recoil/atoms/CartStateAtom';
import { useRecoilValue } from 'recoil';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

export const Cart = () => {
  const cartList = useRecoilValue(cartListAtom);
  console.log(cartList);
  return (
    <StyledWrapper>
      <div className="cart-icon">
          <span className="cart-count">{cartList.length}</span>
          <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </StyledWrapper>
);
}


const StyledWrapper = styled.div`

.cart-icon {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #007bff;
    position: relative;
}

.cart-count {
    position: absolute;
    top: -5px;
    right: -12px;
    background: #ff6b6b;
    color: white;
    width: 20px;
    height: 20px;
    font-size: 0.75rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

`;