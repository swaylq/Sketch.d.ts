/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOutlineViewStaticItemData<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    dealloc<R = void>(): R;
    loadedFromEncoder<R = boolean>(): R;
    setLoadedFromEncoder<R = void, P0 = boolean>(_v: P0): R;
    expanded<R = boolean>(): R;
    setExpanded<R = void, P0 = boolean>(_v: P0): R;
    expandable<R = boolean>(): R;
    setExpandable<R = void, P0 = boolean>(_v: P0): R;
    rowView<R = NSTableRowView>(): R;
    setRowView<R = void, P0 = NSTableRowView>(_v: P0): R;
    children<R = NSMutableArray>(): R;
    setChildren<R = void, P0 = NSMutableArray>(_v: P0): R;
  }
  namespace NSOutlineViewStaticItemData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSOutlineViewStaticItemData>(): R;
      new: <R = NSOutlineViewStaticItemData>() => R;
    }
  }
}

declare const NSOutlineViewStaticItemData: cocoa.NSOutlineViewStaticItemData.CLASS;
