/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBindingInfo<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    description<R = unknown>(): R;
    observingBinder<R = unknown>(): R;
    setObservingBinder<R = void, P0 = unknown>(_setObservingBinder: P0): R;
    partialObjectKey<R = unknown>(): R;
    partialControllerKey<R = unknown>(): R;
    requiresDirectKeyValueCodingCall<R = boolean>(): R;
    setRequiresDirectKeyValueCodingCall_partialControllerKey_partialObjectKey<R = void, P0 = boolean, P1 = unknown, P2 = unknown>(_setRequiresDirectKeyValueCodingCall: P0, _partialControllerKey: P1, _partialObjectKey: P2): R;
    setParameter_forOption<R = boolean, P0 = unknown, P1 = unknown>(_setParameter: P0, _forOption: P1): R;
    isPlaceholderForMarkerExplicitlySet<R = boolean, P0 = unknown>(_isPlaceholderForMarkerExplicitlySet: P0): R;
    placeholderForMarker<R = unknown, P0 = unknown>(_placeholderForMarker: P0): R;
    setPlaceholder_forMarker_isDefault<R = void, P0 = unknown, P1 = unknown, P2 = boolean>(_setPlaceholder: P0, _forMarker: P1, _isDefault: P2): R;
    binderSpecificFlagAtIndex<R = boolean, P0 = number>(_binderSpecificFlagAtIndex: P0): R;
    setBinderSpecificFlag_atIndex<R = void, P0 = boolean, P1 = number>(_setBinderSpecificFlag: P0, _atIndex: P1): R;
    isWeakBinding<R = boolean>(): R;
    setWeakBinding<R = void, P0 = boolean>(_setWeakBinding: P0): R;
    alwaysPresentsApplicationModalAlerts<R = boolean>(): R;
    setAlwaysPresentsApplicationModalAlerts<R = void, P0 = boolean>(_setAlwaysPresentsApplicationModalAlerts: P0): R;
    validatesImmediately<R = boolean>(): R;
    setValidatesImmediately<R = void, P0 = boolean>(_setValidatesImmediately: P0): R;
    raisesForNotApplicableKeys<R = boolean>(): R;
    setRaisesForNotApplicableKeys<R = void, P0 = boolean>(_setRaisesForNotApplicableKeys: P0): R;
    valueTransformerName<R = unknown>(): R;
    setValueTransformerName<R = void, P0 = unknown>(_setValueTransformerName: P0): R;
    controller<R = unknown>(): R;
    setController_retainController<R = void, P0 = unknown, P1 = boolean>(_setController: P0, _retainController: P1): R;
    valueTransformer<R = unknown>(): R;
    setValueTransformer<R = void, P0 = unknown>(_setValueTransformer: P0): R;
    key<R = unknown>(): R;
    binding<R = unknown>(): R;
    dealloc<R = void>(): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    initWithController_retainController_key_valueTransformerName_binding<R = unknown, P0 = unknown, P1 = boolean, P2 = unknown, P3 = unknown, P4 = unknown>(_initWithController: P0, _retainController: P1, _key: P2, _valueTransformerName: P3, _binding: P4): R;
    initWithController_retainController_key_valueTransformer_binding<R = unknown, P0 = unknown, P1 = boolean, P2 = unknown, P3 = unknown, P4 = unknown>(_initWithController: P0, _retainController: P1, _key: P2, _valueTransformer: P3, _binding: P4): R;
  }
  namespace _NSBindingInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = _NSBindingInfo>(): R;
      new: <R = _NSBindingInfo>() => R;
    }
  }
}
