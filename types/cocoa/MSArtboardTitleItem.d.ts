/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardTitleItem<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    isEqualToItem<R = boolean, P0 = unknown>(_isEqualToItem: P0): R;
    dealloc<R = void>(): R;
    isSymbolMaster<R = boolean>(): R;
    setIsSymbolMaster<R = void, P0 = boolean>(_v: P0): R;
    titleCompression<R = number>(): R;
    setTitleCompression<R = void, P0 = number>(_v: P0): R;
    isFlowHome<R = boolean>(): R;
    setIsFlowHome<R = void, P0 = boolean>(_v: P0): R;
    attributedTitle<R = NSAttributedString>(): R;
    setAttributedTitle<R = void, P0 = NSAttributedString>(_v: P0): R;
    color<R = CGColor>(): R;
    setColor<R = void, P0 = CGColor>(_v: P0): R;
    bounds<R = unknown>(): R;
    setBounds<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace MSArtboardTitleItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSArtboardTitleItem>(): R;
      new: <R = MSArtboardTitleItem>() => R;
    }
  }
}

declare const MSArtboardTitleItem: cocoa.MSArtboardTitleItem.CLASS;
