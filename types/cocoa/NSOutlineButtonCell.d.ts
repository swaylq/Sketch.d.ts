/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOutlineButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
    _updateTitle<R = void>(): R;
    _addSourceListAttributes_emphasizedBackground<R = void, P0 = unknown, P1 = boolean>(__addSourceListAttributes: P0, _emphasizedBackground: P1): R;
    _addLegacySourceListAttributes_emphasizedBackground<R = void, P0 = unknown, P1 = boolean>(__addLegacySourceListAttributes: P0, _emphasizedBackground: P1): R;
    outlineView<R = NSOutlineView>(): R;
    setOutlineView<R = void, P0 = NSOutlineView>(_v: P0): R;
    isGroupRow<R = boolean>(): R;
    setIsGroupRow<R = void, P0 = boolean>(_v: P0): R;
    isSourceList<R = boolean>(): R;
    setIsSourceList<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSOutlineButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = NSOutlineButtonCell>(): R;
      new: <R = NSOutlineButtonCell>() => R;
    }
  }
}

declare const NSOutlineButtonCell: cocoa.NSOutlineButtonCell.CLASS;
