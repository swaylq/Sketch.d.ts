/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueComputedProperty<T0 = void, T1 = void, T2 = void> extends NSKeyValueProperty {
    _keyPathIfAffectedByValueForMemberOfKeys<R = unknown, P0 = unknown>(__keyPathIfAffectedByValueForMemberOfKeys: P0): R;
    _keyPathIfAffectedByValueForKey_exactMatch<R = unknown, P0 = unknown, P1 = string>(__keyPathIfAffectedByValueForKey: P0, _exactMatch: P1): R;
    _isaForAutonotifying<R = unknown>(): R;
    _addDependentValueKey<R = void, P0 = unknown>(__addDependentValueKey: P0): R;
    _givenPropertiesBeingInitialized_getAffectingProperties<R = void, P0 = __CFSet, P1 = unknown>(__givenPropertiesBeingInitialized: P0, _getAffectingProperties: P1): R;
    description<R = unknown>(): R;
  }
  namespace NSKeyValueComputedProperty {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueProperty {
      alloc<R = NSKeyValueComputedProperty>(): R;
      new: <R = NSKeyValueComputedProperty>() => R;
    }
  }
}

declare const NSKeyValueComputedProperty: cocoa.NSKeyValueComputedProperty.CLASS;
