/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrubberViewClassSelectionStyle<T0 = void, T1 = void, T2 = void> extends NSScrubberSelectionStyle {
    initWithViewClass<R = unknown, P0 = unknown>(_initWithViewClass: P0): R;
  }
  namespace _NSScrubberViewClassSelectionStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrubberSelectionStyle {
      alloc<R = _NSScrubberViewClassSelectionStyle>(): R;
      new: <R = _NSScrubberViewClassSelectionStyle>() => R;
    }
  }
}
