/**
 * register listeners
 */
import React from 'react';
import { useDispatch } from 'react-redux';

import { resize } from '../../store/reducers/windowsReducer';

const RegListenerHOC = (WrappedComponent) => {

    const RegListener = (props) => {
        const dispatch = useDispatch()

        const handleWindowResize = () => {
            dispatch(resize())
        }

        // 部分浏览器，比如chrome，ie8在点击最大化按钮时候会触发两次，这里加个延迟
        window.addEventListener('resize', handleWindowResize)

        return <WrappedComponent {...props} />
    }

    return RegListener;
}

export default RegListenerHOC;