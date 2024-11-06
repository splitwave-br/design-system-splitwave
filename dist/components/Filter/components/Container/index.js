import { jsx as _jsx } from "react/jsx-runtime";
import { Dropdown } from "../../../../components/Dropdown";
import { FilterFieldsProvider } from "../../hooks/useFields";
export var Container = function (_a) {
    var children = _a.children;
    return (_jsx(FilterFieldsProvider, { children: _jsx(Dropdown.Container, { children: children }) }));
};
