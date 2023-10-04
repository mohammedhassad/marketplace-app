import PropTypes from 'prop-types';
import { HiMagnifyingGlass } from 'react-icons/hi2';

function InputSearch({ field, ...rest }) {
  return (
    <div className="w-full flex flex-grow">
      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
        <HiMagnifyingGlass size={20} className="text-dark-light" />
      </div>

      <input
        className="w-full -ml-10 pl-10 pr-3 py-2.5 rounded-md shadow-sm bg-white text-base placeholder:text-dark-light text-dark font-medium"
        type="search"
        {...field}
        {...rest}
      />
    </div>
  );
}

InputSearch.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object,
};

export default InputSearch;
