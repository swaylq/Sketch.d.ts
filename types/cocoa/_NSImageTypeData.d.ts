/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSImageTypeData<T = any> extends cocoa.NSObject {
    namedImageUnfilteredSuffixExpression<R = unknown>(): R;
    namedImageSuffixExpression<R = unknown>(): R;
    imageUnfilteredPasteboardTypes<R = unknown>(): R;
    imageUnfilteredFileTypes<R = unknown>(): R;
    imageUnfilteredTypes<R = unknown>(): R;
    imagePasteboardTypes<R = unknown>(): R;
    imageFileTypes<R = unknown>(): R;
    imageTypes<R = unknown>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSImageTypeData<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSImageTypeData>(): R;
      new: <R = _NSImageTypeData>() => R;
      initialize<R = void>(): R;
    }
  }
}
