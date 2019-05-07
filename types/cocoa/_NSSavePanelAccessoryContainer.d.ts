/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSavePanelAccessoryContainer<T0 = void, T1 = void, T2 = void> extends NSView {
    _commonInit<R = void>(): R;
    accessoryPreferredSize<R = CGSize>(): R;
    setAccessoryPreferredSize<R = void, P0 = CGSize>(_v: P0): R;
  }
  namespace _NSSavePanelAccessoryContainer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSSavePanelAccessoryContainer>(): R;
      new: <R = _NSSavePanelAccessoryContainer>() => R;
    }
  }
}
