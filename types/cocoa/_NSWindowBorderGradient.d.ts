/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWindowBorderGradient<T0 = void, T1 = void, T2 = void> extends NSGradient {
    initFromGrayValue_toGrayValue_colorSpace<R = unknown, P0 = number, P1 = number, P2 = unknown>(_initFromGrayValue: P0, _toGrayValue: P1, _colorSpace: P2): R;
  }
  namespace _NSWindowBorderGradient {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSGradient {
      alloc<R = _NSWindowBorderGradient>(): R;
      new: <R = _NSWindowBorderGradient>() => R;
    }
  }
}
