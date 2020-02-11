(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global['@woden/svelte-click-outside'] = factory());
}(this, (function () { 'use strict';

    var index = (node, event) => {
        const handleClick = e => {
            if (!(e.target === node || node.contains(e.target)))
                event();
        };

        document.body.addEventListener('click', handleClick);

        return {
            destroy() {
                document.body.removeEventListener('click', handleClick);
            }
        }
    };

    return index;

})));
