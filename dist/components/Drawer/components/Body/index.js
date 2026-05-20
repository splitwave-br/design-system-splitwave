import { jsx as _jsx } from "react/jsx-runtime";
import styles from './styles.module.scss';
import classnames from 'classnames';
var Body = function (_a) {
    var children = _a.children, className = _a.className;
    return (_jsx("div", { className: classnames(styles.body, className), children: children }));
};
export default Body;
