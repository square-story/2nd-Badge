import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef((props, ref) => {
    return (
        <input className='text-black' ref={ref} {...props} />
    );
});

export default CustomInput;
