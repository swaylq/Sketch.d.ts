/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPatternImageCell<T0 = void, T1 = void, T2 = void> extends NSImageCell {
    borderPathForCellFrame<R = unknown, P0 = CGRect>(_borderPathForCellFrame: P0): R;
    tiled<R = boolean>(): R;
    setTiled<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSPatternImageCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageCell {
      alloc<R = MSPatternImageCell>(): R;
      new: <R = MSPatternImageCell>() => R;
    }
  }
}

declare const MSPatternImageCell: cocoa.MSPatternImageCell.CLASS;
