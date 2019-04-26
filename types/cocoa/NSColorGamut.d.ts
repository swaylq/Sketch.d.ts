/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorGamut<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    intersectionWithGamut<R = unknown, P0 = unknown>(_intersectionWithGamut: P0): R;
    unionWithGamut<R = unknown, P0 = unknown>(_unionWithGamut: P0): R;
    intersectsGamut<R = boolean, P0 = unknown>(_intersectsGamut: P0): R;
    containsGamut<R = boolean, P0 = unknown>(_containsGamut: P0): R;
    isEqualToGamut<R = boolean, P0 = unknown>(_isEqualToGamut: P0): R;
    hash<R = number>(): R;
    containsCGColor<R = boolean, P0 = CGColor>(_containsCGColor: P0): R;
    volume<R = number>(): R;
    infinite<R = boolean>(): R;
    empty<R = boolean>(): R;
  }
  namespace NSColorGamut {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSColorGamut>(): R;
      new: <R = NSColorGamut>() => R;
      gamutWithCGColorSpace<R = unknown, P0 = CGColorSpace>(_gamutWithCGColorSpace: P0): R;
      emptyGamut<R = unknown>(): R;
      infiniteGamut<R = unknown>(): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSColorGamut: cocoa.NSColorGamut.CLASS;
