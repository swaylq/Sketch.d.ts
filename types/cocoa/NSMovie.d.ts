/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMovie<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    QTMovie<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithMovie<R = unknown, P0 = unknown>(_initWithMovie: P0): R;
  }
  namespace NSMovie {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSMovie>(): R;
      new: <R = NSMovie>() => R;
      _QTMovieClass<R = unknown>(): R;
      _loadQTKit<R = void>(): R;
    }
  }
}

declare const NSMovie: cocoa.NSMovie.CLASS;
