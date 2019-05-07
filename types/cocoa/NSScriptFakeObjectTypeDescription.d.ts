/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptFakeObjectTypeDescription<T0 = void, T1 = void, T2 = void> extends NSScriptObjectTypeDescription {
    initWithAppleEventCode<R = unknown, P0 = number>(_initWithAppleEventCode: P0): R;
  }
  namespace NSScriptFakeObjectTypeDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptObjectTypeDescription {
      alloc<R = NSScriptFakeObjectTypeDescription>(): R;
      new: <R = NSScriptFakeObjectTypeDescription>() => R;
    }
  }
}

declare const NSScriptFakeObjectTypeDescription: cocoa.NSScriptFakeObjectTypeDescription.CLASS;
