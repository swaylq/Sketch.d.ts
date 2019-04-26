/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewControllerPresentationAnimatorObject<T0 = void, T1 = void, T2 = void> extends NSObject, NSViewControllerPresentationAnimatorProtocol {
    dealloc<R = void>(): R;
    completionHandler<R = CDUnknownBlockType>(): R;
    setCompletionHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    toViewController<R = NSViewController>(): R;
    setToViewController<R = void, P0 = NSViewController>(_v: P0): R;
    fromViewController<R = NSViewController>(): R;
    setFromViewController<R = void, P0 = NSViewController>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSViewControllerPresentationAnimatorObject {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSViewControllerPresentationAnimatorProtocol {
      alloc<R = NSViewControllerPresentationAnimatorObject>(): R;
      new: <R = NSViewControllerPresentationAnimatorObject>() => R;
    }
  }
}

declare const NSViewControllerPresentationAnimatorObject: cocoa.NSViewControllerPresentationAnimatorObject.CLASS;
