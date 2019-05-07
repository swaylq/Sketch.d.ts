/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISIconImageRep<T0 = void, T1 = void, T2 = void> extends NSImageRep {
    _wantsToBeCached<R = boolean>(): R;
    initWithIcon_size_scale_appearanceName<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown>(_initWithIcon: P0, _size: P1, _scale: P2, _appearanceName: P3): R;
  }
  namespace NSISIconImageRep {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageRep {
      alloc<R = NSISIconImageRep>(): R;
      new: <R = NSISIconImageRep>() => R;
    }
  }
}

declare const NSISIconImageRep: cocoa.NSISIconImageRep.CLASS;
