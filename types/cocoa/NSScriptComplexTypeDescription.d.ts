/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptComplexTypeDescription<T0 = void, T1 = void, T2 = void> extends NSScriptTypeDescription {
    alternativeTypeDescriptions<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithAppleEventCode_alernativeTypeDescriptions<R = unknown, P0 = number, P1 = unknown>(_initWithAppleEventCode: P0, _alernativeTypeDescriptions: P1): R;
    appendObjectClassDeclarationToAETEData<R = void, P0 = unknown>(_appendObjectClassDeclarationToAETEData: P0): R;
    _descriptionWithTabCount<R = unknown, P0 = number>(__descriptionWithTabCount: P0): R;
  }
  namespace NSScriptComplexTypeDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptTypeDescription {
      alloc<R = NSScriptComplexTypeDescription>(): R;
      new: <R = NSScriptComplexTypeDescription>() => R;
    }
  }
}

declare const NSScriptComplexTypeDescription: cocoa.NSScriptComplexTypeDescription.CLASS;
