/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptDeclaredRecordTypeDescription<T0 = void, T1 = void, T2 = void> extends NSScriptRecordTypeDescription {
    presentableDescription<R = unknown>(): R;
    isHidden<R = boolean>(): R;
    fieldDescriptions<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithName_appleEventCode_fieldDescriptions_isHidden_presentableDescription<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = boolean, P4 = unknown>(_initWithName: P0, _appleEventCode: P1, _fieldDescriptions: P2, _isHidden: P3, _presentableDescription: P4): R;
    appendObjectClassDeclarationToAETEData_includingParts<R = void, P0 = unknown, P1 = number>(_appendObjectClassDeclarationToAETEData: P0, _includingParts: P1): R;
    hasHiddenParts<R = boolean>(): R;
    _descriptionWithTabCount<R = unknown, P0 = number>(__descriptionWithTabCount: P0): R;
  }
  namespace NSScriptDeclaredRecordTypeDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptRecordTypeDescription {
      alloc<R = NSScriptDeclaredRecordTypeDescription>(): R;
      new: <R = NSScriptDeclaredRecordTypeDescription>() => R;
    }
  }
}

declare const NSScriptDeclaredRecordTypeDescription: cocoa.NSScriptDeclaredRecordTypeDescription.CLASS;
