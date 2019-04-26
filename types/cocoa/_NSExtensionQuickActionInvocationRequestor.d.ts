/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSExtensionQuickActionInvocationRequestor<T0 = void, T1 = void, T2 = void> extends NSObject {
    allowsEditors<R = boolean>(): R;
  }
  namespace _NSExtensionQuickActionInvocationRequestor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSExtensionQuickActionInvocationRequestor>(): R;
      new: <R = _NSExtensionQuickActionInvocationRequestor>() => R;
    }
  }
}
