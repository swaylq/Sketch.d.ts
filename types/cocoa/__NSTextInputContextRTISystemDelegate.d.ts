/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSTextInputContextRTISystemDelegate<T0 = void, T1 = void, T2 = void> extends NSObject, RTIInputSystemDelegateProtocol {
    initWithSystemService<R = unknown, P0 = unknown>(_initWithSystemService: P0): R;
    rtiInputSystemService<R = RTIInputSystemService>(): R;
    setRtiInputSystemService<R = void, P0 = RTIInputSystemService>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace __NSTextInputContextRTISystemDelegate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, RTIInputSystemDelegateProtocol {
      alloc<R = __NSTextInputContextRTISystemDelegate>(): R;
      new: <R = __NSTextInputContextRTISystemDelegate>() => R;
    }
  }
}
