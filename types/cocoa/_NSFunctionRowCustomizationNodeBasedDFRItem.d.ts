/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFunctionRowCustomizationNodeBasedDFRItem<T0 = void, T1 = void, T2 = void> extends _NSFunctionRowCustomizationDFRItem {
    representedItem<R = unknown>(): R;
    treeNode<R = NSTouchBarItemTreeItemNode>(): R;
    setTreeNode<R = void, P0 = NSTouchBarItemTreeItemNode>(_v: P0): R;
  }
  namespace _NSFunctionRowCustomizationNodeBasedDFRItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSFunctionRowCustomizationDFRItem {
      alloc<R = _NSFunctionRowCustomizationNodeBasedDFRItem>(): R;
      new: <R = _NSFunctionRowCustomizationNodeBasedDFRItem>() => R;
    }
  }
}
