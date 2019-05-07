/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorListPickerScrubberLayoutAttributes<T0 = void, T1 = void, T2 = void> extends NSScrubberLayoutAttributes {
    isRightmostItem<R = boolean>(): R;
    setIsRightmostItem<R = void, P0 = boolean>(_v: P0): R;
    isLeftmostItem<R = boolean>(): R;
    setIsLeftmostItem<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSTouchBarColorListPickerScrubberLayoutAttributes {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrubberLayoutAttributes {
      alloc<R = NSTouchBarColorListPickerScrubberLayoutAttributes>(): R;
      new: <R = NSTouchBarColorListPickerScrubberLayoutAttributes>() => R;
    }
  }
}

declare const NSTouchBarColorListPickerScrubberLayoutAttributes: cocoa.NSTouchBarColorListPickerScrubberLayoutAttributes.CLASS;
