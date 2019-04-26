/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _TtC17SketchControllers22MSFrequentImageScanner<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace _TtC17SketchControllers22MSFrequentImageScanner {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _TtC17SketchControllers22MSFrequentImageScanner>(): R;
      new: <R = _TtC17SketchControllers22MSFrequentImageScanner>() => R;
      findFrequentImagesInDocument_maxCount_excludeForeignSymbols_callback<R = void, P0 = unknown, P1 = number, P2 = boolean, P3 = CDUnknownBlockType>(_findFrequentImagesInDocument: P0, _maxCount: P1, _excludeForeignSymbols: P2, _callback: P3): R;
    }
  }
}
