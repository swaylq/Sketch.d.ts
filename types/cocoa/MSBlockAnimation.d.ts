/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBlockAnimation<T0 = void, T1 = void, T2 = void> extends CABasicAnimation, CAAnimationDelegateProtocol {
    cxx_destruct<R = void>(): R;
    initWithBlock<R = unknown, P0 = CDUnknownBlockType>(_initWithBlock: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSBlockAnimation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CABasicAnimation, CAAnimationDelegateProtocol {}
  }
}

declare const MSBlockAnimation: cocoa.MSBlockAnimation.CLASS;
