/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptAttributeDescription<T0 = void, T1 = void, T2 = void> extends NSScriptPropertyDescription {
    firstPresentableName<R = unknown>(): R;
    presentableNames<R = unknown>(): R;
    presentableDescription<R = unknown>(): R;
    initWithKey_type_isReadOnly_appleEventCode_presentableDescription_nameOrNames<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean, P3 = number, P4 = unknown, P5 = unknown>(_initWithKey: P0, _type: P1, _isReadOnly: P2, _appleEventCode: P3, _presentableDescription: P4, _nameOrNames: P5): R;
    initWithKey_type_access_appleEventCode_isHidden_presentableDescription_name_synonymDescriptions_accessGroupDescriptions<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = number, P4 = boolean, P5 = unknown, P6 = unknown, P7 = unknown, P8 = unknown>(_initWithKey: P0, _type: P1, _access: P2, _appleEventCode: P3, _isHidden: P4, _presentableDescription: P5, _name: P6, _synonymDescriptions: P7, _accessGroupDescriptions: P8): R;
    appendPropertyDeclarationsToAETEData<R = number, P0 = unknown>(_appendPropertyDeclarationsToAETEData: P0): R;
    _descriptionWithTabCount<R = unknown, P0 = number>(__descriptionWithTabCount: P0): R;
    _termedDescriptionWithTabCount_propertyKindName<R = unknown, P0 = number, P1 = unknown>(__termedDescriptionWithTabCount: P0, _propertyKindName: P1): R;
  }
  namespace NSScriptAttributeDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptPropertyDescription {
      alloc<R = NSScriptAttributeDescription>(): R;
      new: <R = NSScriptAttributeDescription>() => R;
    }
  }
}

declare const NSScriptAttributeDescription: cocoa.NSScriptAttributeDescription.CLASS;
