/**
 * register listeners
 */
import React from 'react';

const RegListenerHOC = (WrappedComponent) => {
    const RegListener = (props) => {
        var flag
        // 部分浏览器，比如chrome，ie8在点击最大化按钮时候会触发两次，这里加个延迟
        window.addEventListener('resize', () => {
            if(flag) clearTimeout(flag)
            flag = setTimeout(() => {
                console.log('resize')
            }, 50)
        })

        return <WrappedComponent {...props} />
    }

    return RegListener;
}

export default RegListenerHOC;