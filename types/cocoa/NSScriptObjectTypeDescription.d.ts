/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptObjectTypeDescription<T0 = void, T1 = void, T2 = void> extends NSScriptTypeDescription {
    dealloc<R = void>(): R;
    initWithClassDescription<R = unknown, P0 = unknown>(_initWithClassDescription: P0): R;
    _descriptionWithTabCount<R = unknown, P0 = number>(__descriptionWithTabCount: P0): R;
  }
  namespace NSScriptObjectTypeDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptTypeDescription {
      alloc<R = NSScriptObjectTypeDescription>(): R;
      new: <R = NSScriptObjectTypeDescription>() => R;
    }
  }
}

declare const NSScriptObjectTypeDescription: cocoa.NSScriptObjectTypeDescription.CLASS;
