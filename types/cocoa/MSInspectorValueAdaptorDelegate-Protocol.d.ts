/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorValueAdaptorDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    inspectorValueAdaptor_didEncounterError<R = void, P0 = MSInspectorValueAdaptor, P1 = NSError>(_inspectorValueAdaptor: P0, _didEncounterError: P1): R;
    inspectorValueAdaptorDidChangeValue<R = void, P0 = MSInspectorValueAdaptor>(_inspectorValueAdaptorDidChangeValue: P0): R;
    inspectorValueAdaptor_validateValue_forModel_context<R = boolean, P0 = MSInspectorValueAdaptor, P1 = unknown, P2 = unknown, P3 = unknown>(_inspectorValueAdaptor: P0, _validateValue: P1, _forModel: P2, _context: P3): R;
  }
  namespace MSInspectorValueAdaptorDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
