/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptEnumerationDescription<T0 = void, T1 = void, T2 = void> extends NSScriptValueTypeDescription {
    enumeratorDescriptions<R = unknown>(): R;
    initWithName_appleEventCode_enumeratorDescriptions<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithName: P0, _appleEventCode: P1, _enumeratorDescriptions: P2): R;
    initWithName_appleEventCode_enumeratorDescriptions_isHidden<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = boolean>(_initWithName: P0, _appleEventCode: P1, _enumeratorDescriptions: P2, _isHidden: P3): R;
    appendEnumerationDeclarationToAETEData_includingParts<R = void, P0 = unknown, P1 = number>(_appendEnumerationDeclarationToAETEData: P0, _includingParts: P1): R;
    hasHiddenParts<R = boolean>(): R;
  }
  namespace NSScriptEnumerationDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptValueTypeDescription {
      alloc<R = NSScriptEnumerationDescription>(): R;
      new: <R = NSScriptEnumerationDescription>() => R;
      enumerationDescriptionFromName_implDeclaration_presoDeclaration<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_enumerationDescriptionFromName: P0, _implDeclaration: P1, _presoDeclaration: P2): R;
      _enumeratorDescriptionsFromImplDeclarations_presoDeclarations<R = unknown, P0 = unknown, P1 = unknown>(__enumeratorDescriptionsFromImplDeclarations: P0, _presoDeclarations: P1): R;
    }
  }
}

declare const NSScriptEnumerationDescription: cocoa.NSScriptEnumerationDescription.CLASS;
