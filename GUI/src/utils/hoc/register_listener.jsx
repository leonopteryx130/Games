/**
 * register listeners
 */
import React from 'react';
import { useDispatch } from 'react-redux';

import { resize } from '../../store/reducers/windowsReducer';

const RegListenerHOC = (WrappedComponent) => {

    const RegListener = (props) => {
        var flag
        const dispatch = useDispatch()

        // 部分浏览器，比如chrome，ie8在点击最大化按钮时候会触发两次，这里加个延迟
        window.addEventListener('resize', () => {
            // 监听resize事件
            if(flag) clearTimeout(flag)
            flag = setTimeout(() => {
                dispatch(resize())
            }, 50)
        })

        return <WrappedComponent {...props} />
    }

    return RegListener;
}

export default RegListenerHOC;