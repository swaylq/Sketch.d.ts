/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueProperty<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    matchesWithoutOperatorComponentsKeyPath<R = boolean, P0 = unknown>(_matchesWithoutOperatorComponentsKeyPath: P0): R;
    restOfKeyPathIfContainedByValueForKeyPath<R = unknown, P0 = unknown>(_restOfKeyPathIfContainedByValueForKeyPath: P0): R;
    dependentValueKeyOrKeysIsASet<R = unknown, P0 = string>(_dependentValueKeyOrKeysIsASet: P0): R;
    object_withObservance_didChangeValueForKeyOrKeys_recurse_forwardingValues<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean, P4 = unknown>(_object: P0, _withObservance: P1, _didChangeValueForKeyOrKeys: P2, _recurse: P3, _forwardingValues: P4): R;
    object_withObservance_willChangeValueForKeyOrKeys_recurse_forwardingValues<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean, P4 = unknown>(_object: P0, _withObservance: P1, _willChangeValueForKeyOrKeys: P2, _recurse: P3, _forwardingValues: P4): R;
    object_didRemoveObservance_recurse<R = void, P0 = unknown, P1 = unknown, P2 = boolean>(_object: P0, _didRemoveObservance: P1, _recurse: P2): R;
    object_didAddObservance_recurse<R = void, P0 = unknown, P1 = unknown, P2 = boolean>(_object: P0, _didAddObservance: P1, _recurse: P2): R;
    keyPathIfAffectedByValueForMemberOfKeys<R = unknown, P0 = unknown>(_keyPathIfAffectedByValueForMemberOfKeys: P0): R;
    keyPathIfAffectedByValueForKey_exactMatch<R = unknown, P0 = unknown, P1 = string>(_keyPathIfAffectedByValueForKey: P0, _exactMatch: P1): R;
    isaForAutonotifying<R = unknown>(): R;
    keyPath<R = unknown>(): R;
    dealloc<R = void>(): R;
    _initWithContainerClass_keyPath_propertiesBeingInitialized<R = unknown, P0 = unknown, P1 = unknown, P2 = __CFSet>(__initWithContainerClass: P0, _keyPath: P1, _propertiesBeingInitialized: P2): R;
  }
  namespace NSKeyValueProperty {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSKeyValueProperty>(): R;
      new: <R = NSKeyValueProperty>() => R;
    }
  }
}

declare const NSKeyValueProperty: cocoa.NSKeyValueProperty.CLASS;
