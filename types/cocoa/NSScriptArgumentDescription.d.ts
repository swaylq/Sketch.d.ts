/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptArgumentDescription<T0 = void, T1 = void, T2 = void> extends NSObject {
    parameterDescriptorFromEvent<R = unknown, P0 = unknown>(_parameterDescriptorFromEvent: P0): R;
    firstPresentableName<R = unknown>(): R;
    presentableNames<R = unknown>(): R;
    presentableDescription<R = unknown>(): R;
    actualValueIsWritable<R = boolean>(): R;
    requiresAccess<R = number>(): R;
    isHidden<R = boolean>(): R;
    isOptional<R = boolean>(): R;
    typeDescription<R = unknown>(): R;
    appleEventCode<R = number>(): R;
    key<R = unknown>(): R;
    reconcileToSuiteRegistry_suiteName_commandName<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_reconcileToSuiteRegistry: P0, _suiteName: P1, _commandName: P2): R;
    dealloc<R = void>(): R;
    initWithKey_appleEventCode_type_isOptional_presentableDescription_nameOrNames<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = boolean, P4 = unknown, P5 = unknown>(_initWithKey: P0, _appleEventCode: P1, _type: P2, _isOptional: P3, _presentableDescription: P4, _nameOrNames: P5): R;
    initWithKey_appleEventCode_type_isOptional_isHidden_requiresAccess_presentableDescription_name_synonymDescriptions<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = boolean, P4 = boolean, P5 = number, P6 = unknown, P7 = unknown, P8 = unknown>(_initWithKey: P0, _appleEventCode: P1, _type: P2, _isOptional: P3, _isHidden: P4, _requiresAccess: P5, _presentableDescription: P6, _name: P7, _synonymDescriptions: P8): R;
    appendParameterDeclarationsToAETEData<R = number, P0 = unknown>(_appendParameterDeclarationsToAETEData: P0): R;
    description<R = unknown>(): R;
    _descriptionWithTabCount<R = unknown, P0 = number>(__descriptionWithTabCount: P0): R;
  }
  namespace NSScriptArgumentDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSScriptArgumentDescription>(): R;
      new: <R = NSScriptArgumentDescription>() => R;
      argumentDescriptionFromName_implDeclaration_presoDeclaration_suiteName_commandName<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(_argumentDescriptionFromName: P0, _implDeclaration: P1, _presoDeclaration: P2, _suiteName: P3, _commandName: P4): R;
    }
  }
}

declare const NSScriptArgumentDescription: cocoa.NSScriptArgumentDescription.CLASS;
