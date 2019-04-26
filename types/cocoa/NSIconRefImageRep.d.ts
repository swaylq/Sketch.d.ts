/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSIconRefImageRep<T0 = void, T1 = void, T2 = void> extends NSImageRep {
    forwardingTargetForSelector<R = unknown, P0 = string>(_forwardingTargetForSelector: P0): R;
    methodSignatureForSelector<R = unknown, P0 = string>(_methodSignatureForSelector: P0): R;
    _fallbackBitmap<R = unknown>(): R;
    hasAlpha<R = boolean>(): R;
    pixelsHigh<R = number>(): R;
    pixelsWide<R = number>(): R;
    _copyCGImage<R = CGImage>(): R;
    scaleIdentifier<R = number>(): R;
    sizeIdentifier<R = number>(): R;
    iconRef<R = OpaqueIconRef>(): R;
    initWithIconRef_sizeIdentifier_scaleIdentifier<R = unknown, P0 = OpaqueIconRef, P1 = number, P2 = number>(_initWithIconRef: P0, _sizeIdentifier: P1, _scaleIdentifier: P2): R;
  }
  namespace NSIconRefImageRep {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageRep {
      alloc<R = NSIconRefImageRep>(): R;
      new: <R = NSIconRefImageRep>() => R;
    }
  }
}

declare const NSIconRefImageRep: cocoa.NSIconRefImageRep.CLASS;
