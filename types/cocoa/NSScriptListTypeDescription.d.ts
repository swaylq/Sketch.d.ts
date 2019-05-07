/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptListTypeDescription<T0 = void, T1 = void, T2 = void> extends NSScriptTypeDescription {
    elementTypeDescription<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithElementTypeDescription<R = unknown, P0 = unknown>(_initWithElementTypeDescription: P0): R;
    _descriptionWithTabCount<R = unknown, P0 = number>(__descriptionWithTabCount: P0): R;
  }
  namespace NSScriptListTypeDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptTypeDescription {
      alloc<R = NSScriptListTypeDescription>(): R;
      new: <R = NSScriptListTypeDescription>() => R;
    }
  }
}

declare const NSScriptListTypeDescription: cocoa.NSScriptListTypeDescription.CLASS;
