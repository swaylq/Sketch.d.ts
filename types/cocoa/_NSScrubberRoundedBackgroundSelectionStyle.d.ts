/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrubberRoundedBackgroundSelectionStyle<T0 = void, T1 = void, T2 = void> extends NSScrubberSelectionStyle {
    dealloc<R = void>(): R;
    tintColor<R = NSColor>(): R;
    setTintColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace _NSScrubberRoundedBackgroundSelectionStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrubberSelectionStyle {
      alloc<R = _NSScrubberRoundedBackgroundSelectionStyle>(): R;
      new: <R = _NSScrubberRoundedBackgroundSelectionStyle>() => R;
    }
  }
}
