/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptRecordTypeDescription<T0 = void, T1 = void, T2 = void> extends NSScriptTypeDescription {
    fieldDescriptionForKey<R = unknown, P0 = unknown>(_fieldDescriptionForKey: P0): R;
    fieldDescriptionForAppleEventCode<R = unknown, P0 = number>(_fieldDescriptionForAppleEventCode: P0): R;
  }
  namespace NSScriptRecordTypeDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptTypeDescription {
      alloc<R = NSScriptRecordTypeDescription>(): R;
      new: <R = NSScriptRecordTypeDescription>() => R;
    }
  }
}

declare const NSScriptRecordTypeDescription: cocoa.NSScriptRecordTypeDescription.CLASS;
