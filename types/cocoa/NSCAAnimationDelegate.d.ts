/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCAAnimationDelegate<T = any> extends NSObject, CAAnimationDelegateProtocol {
    cxx_destruct<R = void>(): R;
    initWithDidEndHandler<R = unknown, P0 = CDUnknownBlockType>(_initWithDidEndHandler: P0): R;
    initWithDidStartHandler<R = unknown, P0 = CDUnknownBlockType>(_initWithDidStartHandler: P0): R;
    initWithDidStartHandler_didEndHandler<R = unknown, P0 = CDUnknownBlockType, P1 = CDUnknownBlockType>(_initWithDidStartHandler: P0, _didEndHandler: P1): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSCAAnimationDelegate<T = any> extends NSObject, CAAnimationDelegateProtocol {
      alloc<R = NSCAAnimationDelegate>(): R;
      new: <R = NSCAAnimationDelegate>() => R;
    }
  }
}

declare const NSCAAnimationDelegate: cocoa.classes.NSCAAnimationDelegate;
