/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCollectionViewColorFillView<T0 = void, T1 = void, T2 = void> extends NSView {
    wantsUpdateLayer<R = boolean>(): R;
    fillColor<R = NSColor>(): R;
    setFillColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace _NSCollectionViewColorFillView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSCollectionViewColorFillView>(): R;
      new: <R = _NSCollectionViewColorFillView>() => R;
    }
  }
}
