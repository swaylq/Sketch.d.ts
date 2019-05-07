/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrubberOutlineSelectionStyle<T0 = void, T1 = void, T2 = void> extends NSScrubberSelectionStyle {
    showsHighlight<R = boolean>(): R;
    setShowsHighlight<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _NSScrubberOutlineSelectionStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrubberSelectionStyle {
      alloc<R = _NSScrubberOutlineSelectionStyle>(): R;
      new: <R = _NSScrubberOutlineSelectionStyle>() => R;
    }
  }
}
