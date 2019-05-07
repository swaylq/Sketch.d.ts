/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTintedHoverButtonCell<T0 = void, T1 = void, T2 = void> extends MSHoverButtonCell {
    hoverTint<R = NSColor>(): R;
    normalTint<R = NSColor>(): R;
  }
  namespace MSTintedHoverButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSHoverButtonCell {
      alloc<R = MSTintedHoverButtonCell>(): R;
      new: <R = MSTintedHoverButtonCell>() => R;
    }
  }
}

declare const MSTintedHoverButtonCell: cocoa.MSTintedHoverButtonCell.CLASS;
