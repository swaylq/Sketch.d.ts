/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptSynonymDescription<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    initWithName_appleEventCode_isHidden_appleEventClassCode<R = unknown, P0 = unknown, P1 = number, P2 = boolean, P3 = number>(_initWithName: P0, _appleEventCode: P1, _isHidden: P2, _appleEventClassCode: P3): R;
  }
  namespace NSScriptSynonymDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSScriptSynonymDescription>(): R;
      new: <R = NSScriptSynonymDescription>() => R;
    }
  }
}

declare const NSScriptSynonymDescription: cocoa.NSScriptSynonymDescription.CLASS;
