import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { coinDetail, fetchCoin } from '../redux/coin/home';

const Coin = () => {
  const coinState = useSelector((state) => state.cryptoCoin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoin());
  }, [dispatch]);

  return (
    <div>
      <h1 className="logo">
        coinX
      </h1>
      <table>
        <div className="crypto-coins">
          {coinState.map((coin) => (

            <tr key={uuidv4()} className={coin.baseId}>
              <td>
                <Link to={`/detail/${coin.baseSymbol}`}>
                  <p>
                    {' '}
                    <i
                      aria-hidden="true"
                      className="arrow"
                      role="button"
                      label="next"
                      tabIndex={0}
                      onClick={() => dispatch(coinDetail(coin.baseSymbol))}
                    />
                  </p>
                </Link>
              </td>
              <td>
                {coin.baseSymbol}
              </td>
              <td className="value">
                {coin.priceUsd}
              </td>
            </tr>
          ))}
        </div>
      </table>
    </div>
  );
};

export default Coin;
