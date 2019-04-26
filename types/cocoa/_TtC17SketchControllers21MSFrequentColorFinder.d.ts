/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _TtC17SketchControllers21MSFrequentColorFinder<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace _TtC17SketchControllers21MSFrequentColorFinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _TtC17SketchControllers21MSFrequentColorFinder>(): R;
      new: <R = _TtC17SketchControllers21MSFrequentColorFinder>() => R;
      findFrequentColorsInDocument_maxCount_ignoreAlpha_excludeForeignSymbols_callback<R = void, P0 = unknown, P1 = number, P2 = boolean, P3 = boolean, P4 = CDUnknownBlockType>(_findFrequentColorsInDocument: P0, _maxCount: P1, _ignoreAlpha: P2, _excludeForeignSymbols: P3, _callback: P4): R;
    }
  }
}
