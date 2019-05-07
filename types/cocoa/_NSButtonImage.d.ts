/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSButtonImage<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    dealloc<R = void>(): R;
  }
  namespace _NSButtonImage {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = _NSButtonImage>(): R;
      new: <R = _NSButtonImage>() => R;
      image_focus<R = unknown, P0 = unknown, P1 = unknown>(_image: P0, _focus: P1): R;
      initialize<R = void>(): R;
    }
  }
}
