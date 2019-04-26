/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSImageViewAsynchronousPreparationResult<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    imageSize<R = CGSize>(): R;
    setImageSize<R = void, P0 = CGSize>(_v: P0): R;
    alignmentRectSize<R = CGSize>(): R;
    setAlignmentRectSize<R = void, P0 = CGSize>(_v: P0): R;
    contentsScaling<R = NSString>(): R;
    setContentsScaling<R = void, P0 = NSString>(_v: P0): R;
    contentsCenter<R = CGRect>(): R;
    setContentsCenter<R = void, P0 = CGRect>(_v: P0): R;
    CGImage<R = CGImage>(): R;
    setCGImage<R = void, P0 = CGImage>(_v: P0): R;
  }
  namespace _NSImageViewAsynchronousPreparationResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSImageViewAsynchronousPreparationResult>(): R;
      new: <R = _NSImageViewAsynchronousPreparationResult>() => R;
    }
  }
}
