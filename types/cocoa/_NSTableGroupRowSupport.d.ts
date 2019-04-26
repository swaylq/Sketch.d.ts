/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTableGroupRowSupport<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    groupViewBackgrounds<R = NSMutableDictionary>(): R;
    setGroupViewBackgrounds<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    floatingGroupRowView<R = NSTableRowView>(): R;
    setFloatingGroupRowView<R = void, P0 = NSTableRowView>(_v: P0): R;
    floatingGroupRow<R = number>(): R;
    setFloatingGroupRow<R = void, P0 = number>(_v: P0): R;
    groupRowIndexes<R = NSMutableIndexSet>(): R;
    setGroupRowIndexes<R = void, P0 = NSMutableIndexSet>(_v: P0): R;
  }
  namespace _NSTableGroupRowSupport {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSTableGroupRowSupport>(): R;
      new: <R = _NSTableGroupRowSupport>() => R;
    }
  }
}
