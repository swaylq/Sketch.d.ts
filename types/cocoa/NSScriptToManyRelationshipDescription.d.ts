/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptToManyRelationshipDescription<T0 = void, T1 = void, T2 = void> extends NSScriptPropertyDescription {
    shouldByDefaultInsertAtBeginning<R = boolean>(): R;
    isLocationRequiredToCreate<R = boolean>(): R;
    initWithKey_type_isReadOnly_appleEventCode_isLocationRequiredToCreate<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean, P3 = number, P4 = boolean>(_initWithKey: P0, _type: P1, _isReadOnly: P2, _appleEventCode: P3, _isLocationRequiredToCreate: P4): R;
    initWithKey_type_access_isHidden_shouldByDefaultInsertAtBeginning_accessGroupDescriptions<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = boolean, P4 = boolean, P5 = unknown>(_initWithKey: P0, _type: P1, _access: P2, _isHidden: P3, _shouldByDefaultInsertAtBeginning: P4, _accessGroupDescriptions: P5): R;
    _descriptionWithTabCount<R = unknown, P0 = number>(__descriptionWithTabCount: P0): R;
  }
  namespace NSScriptToManyRelationshipDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptPropertyDescription {
      alloc<R = NSScriptToManyRelationshipDescription>(): R;
      new: <R = NSScriptToManyRelationshipDescription>() => R;
      defaultKeyMarker<R = unknown>(): R;
    }
  }
}

declare const NSScriptToManyRelationshipDescription: cocoa.NSScriptToManyRelationshipDescription.CLASS;
