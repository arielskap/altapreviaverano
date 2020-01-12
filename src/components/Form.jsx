import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 280,
    };
  }

  handleKeyUp = () => {
    const textarea = document.querySelector('.form-textarea');
    const p = document.querySelector('.form-count');
    const lenght = textarea.value.length;
    const resto = 280 - lenght;
    if (resto <= 15) {
      if (p.classList.contains('bg-red-500')) {
        p.classList.replace('bg-red-500', 'bg-red-700');
      }
      this.setState({
        count: `Alta biblia te hiciste ${resto}`,
      });
    } else {
      if (p.classList.contains('bg-red-700')) {
        p.classList.replace('bg-red-700', 'bg-red-500');
      }
      this.setState({
        count: resto,
      });
    }
  }

  render() {
    const { className } = this.props;
    const { handleSubmit } = this.props;
    const { options } = this.props;
    const { count } = this.state;
    const optionList = options.map((option, index) => {
      const id = index;
      return <option value={option} key={id}>{option}</option>;
    });
    return (
      <form className={`form my-2 w-full border-2 border-teal-700 p-2 rounded-lg ${className}`} onSubmit={handleSubmit}>
        <div className='flex justify-start'>
          <div className='inline-block relative'>
            <select className='form-select block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline' required>
              {optionList}
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg className='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' /></svg>
            </div>
          </div>
        </div>
        <div className='mt-2'>
          <div className='flex justify-end mb-1'>
            <p className='form-count bg-red-500 rounded-full py-1 px-2'>{count}</p>
          </div>
          <div className='flex justify-center'>
            <textarea onKeyUp={this.handleKeyUp} className='form-textarea p-1 rounded w-full' maxLength='280' rows='4' placeholder='Dale envia algo, daaaale daaaaale #toxico' required />
          </div>
        </div>
        <div>
          <p className='form-info p-1 rounded mt-1 text-center' />
        </div>
        <div className='flex justify-end mt-2'>
          <button className='bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 border border-green-700 rounded' type='submit'>¡Enviar!</button>
        </div>
      </form>
    );
  }
};

export default Form;
