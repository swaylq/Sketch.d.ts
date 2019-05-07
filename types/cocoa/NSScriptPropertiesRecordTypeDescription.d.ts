/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptPropertiesRecordTypeDescription<T0 = void, T1 = void, T2 = void> extends NSScriptRecordTypeDescription {
    dealloc<R = void>(): R;
    initWithContainerClassDescription<R = unknown, P0 = unknown>(_initWithContainerClassDescription: P0): R;
    _descriptionWithTabCount<R = unknown, P0 = number>(__descriptionWithTabCount: P0): R;
  }
  namespace NSScriptPropertiesRecordTypeDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptRecordTypeDescription {
      alloc<R = NSScriptPropertiesRecordTypeDescription>(): R;
      new: <R = NSScriptPropertiesRecordTypeDescription>() => R;
    }
  }
}

declare const NSScriptPropertiesRecordTypeDescription: cocoa.NSScriptPropertiesRecordTypeDescription.CLASS;
