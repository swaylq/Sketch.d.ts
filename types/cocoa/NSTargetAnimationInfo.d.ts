/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTargetAnimationInfo<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    description<R = unknown>(): R;
    startOrStopTargetAnimation<R = void>(): R;
    floatValue<R = number>(): R;
    initWithAnimation_progress_start<R = unknown, P0 = unknown, P1 = number, P2 = boolean>(_initWithAnimation: P0, _progress: P1, _start: P2): R;
  }
  namespace NSTargetAnimationInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSTargetAnimationInfo>(): R;
      new: <R = NSTargetAnimationInfo>() => R;
    }
  }
}

declare const NSTargetAnimationInfo: cocoa.NSTargetAnimationInfo.CLASS;
