/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBinderPluginProtocol<T = any> extends cocoa.NSObjectProtocol {
    shouldUseInvalidationForObject<R = boolean, P0 = unknown>(_shouldUseInvalidationForObject: P0): R;
    acceptsMarker_binding_overrideWithPlaceholderIfDefined<R = boolean, P0 = unknown, P1 = cocoa.NSString, P2 = string>(_acceptsMarker: P0, _binding: P1, _overrideWithPlaceholderIfDefined: P2): R;
    defaultPlaceholderLookupClassForBinding_object<R = unknown, P0 = cocoa.NSString, P1 = unknown>(_defaultPlaceholderLookupClassForBinding: P0, _object: P1): R;
    connectionWasBroken<R = void, P0 = unknown>(_connectionWasBroken: P0): R;
    connectionWasEstablished<R = void, P0 = unknown>(_connectionWasEstablished: P0): R;
    observeKeyPathForBindingInfo_registerOrUnregister_object<R = boolean, P0 = cocoa._NSBindingInfo, P1 = boolean, P2 = unknown>(_observeKeyPathForBindingInfo: P0, _registerOrUnregister: P1, _object: P2): R;
    handleObservingRefresh<R = boolean, P0 = unknown>(_handleObservingRefresh: P0): R;
    initWithBinder_object<R = unknown, P0 = unknown, P1 = unknown>(_initWithBinder: P0, _object: P1): R;
  }
  namespace classes {
    export interface _NSBinderPluginProtocol<T = any> extends cocoa.classes.NSObjectProtocol {
      _deprecatedBindings<R = cocoa.NSArray>(): R;
      objectMechanismsRequiredForObject<R = cocoa.NSArray, P0 = unknown>(_objectMechanismsRequiredForObject: P0): R;
      isUsableWithObject<R = boolean, P0 = unknown>(_isUsableWithObject: P0): R;
    }
  }
}
