import React from 'react';
import PropTypes from 'prop-types';

//スクロールバー
import { Scrollbars } from 'react-custom-scrollbars';


// Route関連
import { Link } from 'react-router-dom'

/*============================================================ */

// スタイル
// const styles = theme => ({
// )};
/*単純に、life cycle methodを使う必要がある場合やstateを使う場合はclass構文でコンポーネントを作る必要が出てくるので、これらが必要ならclass、そうでないなら、functionという考え方で基本的にOKかと思います。 */

const WrapMainContent = () => {
  
}

class WrapMainContent extends Component {
  render() {
    return (
      <Scrollbars>

      </Scrollbars>
    );
  }
}

export default WrapMainContent;
