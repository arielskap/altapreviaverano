import React from 'react';

class Title extends React.Component {
  render() {
    const { juego } = this.props;
    const { cant } = this.props;
    return (
      <div>
        <h1>
          {juego}
          {juego === 'Suave' && `... ${cant}`}
        </h1>
      </div>
    );
  }
}

export default Title;
