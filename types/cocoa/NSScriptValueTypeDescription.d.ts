/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptValueTypeDescription<T0 = void, T1 = void, T2 = void> extends NSScriptTypeDescription {
    objcDescriptorCreationMethodSelector2ForClass<R = string, P0 = unknown>(_objcDescriptorCreationMethodSelector2ForClass: P0): R;
    objcCreationMethodSelector2<R = string>(): R;
    _oldStyleOneWordName<R = unknown>(): R;
    _oneWordName<R = unknown>(): R;
    isHidden<R = boolean>(): R;
    dealloc<R = void>(): R;
    initWithName_appleEventCode_objcClassName<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithName: P0, _appleEventCode: P1, _objcClassName: P2): R;
    initWithName_appleEventCode_objcClassName_isHidden<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = boolean>(_initWithName: P0, _appleEventCode: P1, _objcClassName: P2, _isHidden: P3): R;
    appendObjectClassDeclarationToAETEData<R = void, P0 = unknown>(_appendObjectClassDeclarationToAETEData: P0): R;
    _descriptionWithTabCount<R = unknown, P0 = number>(__descriptionWithTabCount: P0): R;
  }
  namespace NSScriptValueTypeDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptTypeDescription {
      alloc<R = NSScriptValueTypeDescription>(): R;
      new: <R = NSScriptValueTypeDescription>() => R;
      valueTypeDescriptionFromName_declaration<R = unknown, P0 = unknown, P1 = unknown>(_valueTypeDescriptionFromName: P0, _declaration: P1): R;
    }
  }
}

declare const NSScriptValueTypeDescription: cocoa.NSScriptValueTypeDescription.CLASS;
