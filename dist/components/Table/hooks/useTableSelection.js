import { useMemo, useState } from "react";
var defaultKeyExtractor = function (item) { return item.id; };
export var useTableSelection = function (_a) {
    var items = _a.items, _b = _a.keyExtractor, keyExtractor = _b === void 0 ? defaultKeyExtractor : _b;
    var _c = useState(new Set()), selected = _c[0], setSelected = _c[1];
    var isSelected = function (id) { return selected.has(id); };
    var toggleItem = function (id) {
        setSelected(function (prev) {
            var next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            }
            else {
                next.add(id);
            }
            return next;
        });
    };
    var clearSelection = function () { return setSelected(new Set()); };
    var isAllSelected = useMemo(function () { return items.length > 0 && items.every(function (item) { return selected.has(keyExtractor(item)); }); }, [items, selected, keyExtractor]);
    var toggleAll = function () {
        if (isAllSelected) {
            clearSelection();
        }
        else {
            setSelected(new Set(items.map(keyExtractor)));
        }
    };
    var selectedItems = useMemo(function () { return items.filter(function (item) { return selected.has(keyExtractor(item)); }); }, [items, selected, keyExtractor]);
    return {
        selectedItems: selectedItems,
        isSelected: isSelected,
        toggleItem: toggleItem,
        toggleAll: toggleAll,
        isAllSelected: isAllSelected,
        clearSelection: clearSelection,
    };
};
