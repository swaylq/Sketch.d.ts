/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueUnnestedProperty<T = any> extends cocoa.NSKeyValueProperty {
    _keyPathIfAffectedByValueForMemberOfKeys<R = unknown, P0 = unknown>(__keyPathIfAffectedByValueForMemberOfKeys: P0): R;
    _keyPathIfAffectedByValueForKey_exactMatch<R = unknown, P0 = unknown, P1 = string>(__keyPathIfAffectedByValueForKey: P0, _exactMatch: P1): R;
    _isaForAutonotifying<R = unknown>(): R;
    _addDependentValueKey<R = void, P0 = unknown>(__addDependentValueKey: P0): R;
    _givenPropertiesBeingInitialized_getAffectingProperties<R = void, P0 = cocoa.__CFSet, P1 = unknown>(__givenPropertiesBeingInitialized: P0, _getAffectingProperties: P1): R;
    description<R = unknown>(): R;
    _initWithContainerClass_key_propertiesBeingInitialized<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.__CFSet>(__initWithContainerClass: P0, _key: P1, _propertiesBeingInitialized: P2): R;
  }
  namespace classes {
    export interface NSKeyValueUnnestedProperty<T = any> extends cocoa.classes.NSKeyValueProperty {
      alloc<R = NSKeyValueUnnestedProperty>(): R;
      new: <R = NSKeyValueUnnestedProperty>() => R;
    }
  }
}

declare const NSKeyValueUnnestedProperty: cocoa.classes.NSKeyValueUnnestedProperty;
