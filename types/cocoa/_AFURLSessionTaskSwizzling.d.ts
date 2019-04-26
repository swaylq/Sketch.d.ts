/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _AFURLSessionTaskSwizzling<T0 = void, T1 = void, T2 = void> extends NSObject {
    af_suspend<R = void>(): R;
    af_resume<R = void>(): R;
    state<R = number>(): R;
  }
  namespace _AFURLSessionTaskSwizzling {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _AFURLSessionTaskSwizzling>(): R;
      new: <R = _AFURLSessionTaskSwizzling>() => R;
      swizzleResumeAndSuspendMethodForClass<R = void, P0 = unknown>(_swizzleResumeAndSuspendMethodForClass: P0): R;
      load<R = void>(): R;
    }
  }
}
