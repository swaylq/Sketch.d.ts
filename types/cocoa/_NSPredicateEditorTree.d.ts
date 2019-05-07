/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPredicateEditorTree<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    menuItemIndex<R = number>(): R;
    setMenuItemIndex<R = void, P0 = number>(_v: P0): R;
    indexIntoTemplate<R = number>(): R;
    setIndexIntoTemplate<R = void, P0 = number>(_v: P0): R;
    children<R = NSArray>(): R;
    setChildren<R = void, P0 = NSArray>(_v: P0): R;
    title<R = NSString>(): R;
    setTitle<R = void, P0 = NSString>(_v: P0): R;
    template<R = NSPredicateEditorRowTemplate>(): R;
    setTemplate<R = void, P0 = NSPredicateEditorRowTemplate>(_v: P0): R;
  }
  namespace _NSPredicateEditorTree {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSPredicateEditorTree>(): R;
      new: <R = _NSPredicateEditorTree>() => R;
    }
  }
}
