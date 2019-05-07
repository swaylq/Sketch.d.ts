/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptRecordFieldDescription<T0 = void, T1 = void, T2 = void> extends NSObject {
    matchesAppleEventCode<R = boolean, P0 = number>(_matchesAppleEventCode: P0): R;
    synonymDescriptions<R = unknown>(): R;
    presentableName<R = unknown>(): R;
    presentableDescription<R = unknown>(): R;
    isHidden<R = boolean>(): R;
    appleEventCode<R = number>(): R;
    typeDescription<R = unknown>(): R;
    key<R = unknown>(): R;
    reconcileToSuiteRegistry_suiteName_recordTypeName<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_reconcileToSuiteRegistry: P0, _suiteName: P1, _recordTypeName: P2): R;
    dealloc<R = void>(): R;
    initWithKey_typeDescription_appleEventCode_presentableDescription_name<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown, P4 = unknown>(_initWithKey: P0, _typeDescription: P1, _appleEventCode: P2, _presentableDescription: P3, _name: P4): R;
    initWithKey_type_appleEventCode_isHidden_presentableDescription_name_synonymDescriptions<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = boolean, P4 = unknown, P5 = unknown, P6 = unknown>(_initWithKey: P0, _type: P1, _appleEventCode: P2, _isHidden: P3, _presentableDescription: P4, _name: P5, _synonymDescriptions: P6): R;
    appendPropertyDeclarationToAETEData<R = void, P0 = unknown>(_appendPropertyDeclarationToAETEData: P0): R;
  }
  namespace NSScriptRecordFieldDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSScriptRecordFieldDescription>(): R;
      new: <R = NSScriptRecordFieldDescription>() => R;
    }
  }
}

declare const NSScriptRecordFieldDescription: cocoa.NSScriptRecordFieldDescription.CLASS;
