/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHoverButton<T0 = void, T1 = void, T2 = void> extends NSButton {
    awakeFromNib<R = void>(): R;
    mouseIsHovering<R = boolean>(): R;
    setMouseIsHovering<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSHoverButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = MSHoverButton>(): R;
      new: <R = MSHoverButton>() => R;
    }
  }
}

declare const MSHoverButton: cocoa.MSHoverButton.CLASS;
